const initState = {
	projects: [
		{
			id: 1,
			title: 'help me find...',
			content: 'blah blah blah blah blah'
		},
		{
			id: 2,
			title: 'collect all the...',
			content: 'blah blah blah blah blah'
		},
		{
			id: 3,
			title: 'egg hunt with...',
			content: 'blah blah blah blah blah'
		}
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT_SUCCESS':
			console.log('created project success', action.project)
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project err', action.err);
			return state;
		case 'DELETE_PROJECT_SUCCESS':
			console.log('delete project success', action.projectId);
			return state;
		case 'DELETE_PROJECT_ERROR':
			console.log('delete project err', action.err);
			return state;
		default: 
			return state;
	}
}

export default projectReducer