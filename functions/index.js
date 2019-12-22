const admin = require('firebase-admin');

const functions = require('firebase-functions');
const os = require("os");
const path = require("path");
const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");

admin.initializeApp(functions.config().firebase)

// exports.addAdminRole = functions.https.onCall((data) => {
exports.addAdminRole = functions.https.onCall((data, context) => {
	if (context.auth.token.admin !== true) {
		return {
			error: 'Only admins can add other admins, sucker'
		}
	}
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			admin: true
		});
	}).then(() => {
		return {
			message: `Success! ${data.email} has been made an admin`
		}
	}).catch(err => {
		return err;
	})
})

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, ninjas!");
});

const createNotification = (notification => {
	return admin.firestore().collection('notifications')
		.add(notification)
		.then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
	.document('projects/{projectId}')
	.onCreate(
		doc => {
			const project = doc.data();
			const notification = {
				content: 'Added a new project',
				user: `${project.authorFirstName} ${project.authorLastName}`,
				time: admin.firestore.FieldValue.serverTimestamp()
			}
			return createNotification(notification);
		}
	)
	
exports.projectDeleted = functions.firestore
	.document('projects/{projectId}')
	.onDelete(
		doc => {
			const project = doc.data();
			const notification = {
				content: `Deleted a "${project.title}" project`,
				user: `${project.authorFirstName} ${project.authorLastName}`,
				time: admin.firestore.FieldValue.serverTimestamp()
			}
			return createNotification(notification);
		}
	)

exports.userJoined = functions.auth.user()
	.onCreate(
		user => {
			return admin.firestore().collection('users')
			.doc(user.uid).get().then(doc => {
				const newUser = doc.data()
				const notification = {
					content: 'Join the party',
					user: `${newUser.firstName} ${newUser.lastName}`,
					time: admin.firestore.FieldValue.serverTimestamp()
				}
				return createNotification(notification);
			})
		}
	)

	const gcconfig = {
		projectId: "fb-cloud-functions-demo",
		keyFilename: "fb-cloud-functions-demo-firebase-adminsdk-km39q-405896eddb.json"
	  };
	  const gcs = require("@google-cloud/storage")(gcconfig);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.onFileChange = functions.storage.object().onChange(event => {
	const object = event.data;
	const bucket = object.bucket;
	const contentType = object.contentType;
	const filePath = object.name;
	console.log("File change detected, function execution started");
  
	if (object.resourceState === "not_exists") {
	  console.log("We deleted a file, exit...");
	  return;
	}
  
	if (path.basename(filePath).startsWith("resized-")) {
	  console.log("We already renamed that file!");
	  return;
	}
  
	const destBucket = gcs.bucket(bucket);
	const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
	const metadata = { contentType: contentType };
	return destBucket
	  .file(filePath)
	  .download({
		destination: tmpFilePath
	  })
	  .then(() => {
		return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
	  })
	  .then(() => {
		return destBucket.upload(tmpFilePath, {
		  destination: "resized-" + path.basename(filePath),
		  metadata: metadata
		});
	  });
  });
  
  exports.uploadFile = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
	  if (req.method !== "POST") {
		return res.status(500).json({
		  message: "Not allowed"
		});
	  }
	  const busboy = new Busboy({ headers: req.headers });
	  let uploadData = null;
  
	  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
		const filepath = path.join(os.tmpdir(), filename);
		uploadData = { file: filepath, type: mimetype };
		file.pipe(fs.createWriteStream(filepath));
	  });
  
	  busboy.on("finish", () => {
		const bucket = gcs.bucket("fb-cloud-functions-demo.appspot.com");
		bucket
		  .upload(uploadData.file, {
			uploadType: "media",
			metadata: {
			  metadata: {
				contentType: uploadData.type
			  }
			}
		  })
		  .then(() => {
			res.status(200).json({
			  message: "It worked!"
			});
		  })
		  .catch(err => {
			res.status(500).json({
			  error: err
			});
		  });
	  });
	  busboy.end(req.rawBody);
	});
  });