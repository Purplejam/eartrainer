const InitialState = {
	answers: [
		{
			isCorrect: false,
			correct: '',
			audio: '',
			usersAnswer: ''
		}
	],
	succeededTests: 0,
	slug: ''
}


const finishedTestReducer = (state = InitialState, action: any) => {
	switch(action.type) {
		case 'LOADING_ANSWERS' : {
			return {
				...state,
				isLoading: true
			}
		}

		case 'FETCH_ANSWERS' : {
			return {
				answers: action.payload.answers,
				succeededTests: action.payload.succeededTests,
				slug: action.payload.slug,
				isLoading: false
			}
		}
		default : {
			return {
				...state
			}
		}
	}
}

export default finishedTestReducer;