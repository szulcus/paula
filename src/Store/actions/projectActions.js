// export const createProject = project => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		// make async call to database
// 		const firestore = getFirestore();
// 		const profile = getState().firebase.profile;
// 		const authorId = getState().firebase.auth.uid;
// 		firestore.collection('projects').add({
// 			...project,
// 			authorFirstName: profile.firstName,
// 			authorLastName: profile.lastName,
// 			authorId: authorId,
// 			createdAt: new Date()
// 		}).then(() => {
// 			dispatch({ type: 'CREATE_PROJECT_SUCCESS', project});
// 		}).catch(err => {
// 			dispatch({ type: 'CREATE_PROJECT_ERROR', err})
// 		});
// 	}
// };

export const createProject = (elements) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		// const profile = getState().firebase.profile;
		// const authorId = getState().firebase.auth.uid;
		// console.log(content);
		firestore.collection('projects').add({
			...elements,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT_SUCCESS', elements});
		}).catch(err => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err})
		});
	}
};

export const deleteProject = projectId => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		firestore.collection('projects').doc(projectId).delete()
		.then(() => {
			dispatch({ type: 'DELETE_PROJECT_SUCCESS', projectId});
		}).catch(err => {
			dispatch({ type: 'DELETE_PROJECT_ERROR', err})
		});
	}
}