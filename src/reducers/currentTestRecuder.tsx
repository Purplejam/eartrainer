import {tasksType} from '../data/melodicIntervals01';

const initialState = {
	slug: '',
	tasks: [
		{
			id: 0,
			audio: '',
			question: '',
			answers: [
			{
				id: 0,
				answer: ''
			}
			]
		}
	]
}

const currentTestReducer = (state = initialState, action: {type: string, payload: {slug: string, tests: tasksType}}) => {
	switch(action.type) {
		case 'IS_LOADING' : {
			return {
				...state,
				isLoading: true
			}
		}
		case 'FETCH_CURRENT_TEST' : {
			return {
				...action.payload,
				isLoading: false,
			}
		}
		default : 
			return {
				...state,
			}
	}
}

export default currentTestReducer;