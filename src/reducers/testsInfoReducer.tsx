import {testInfoType} from '../data/allTestsInfo';

const initialState = {
	tests: [
	{
	'name': '',
	'slug': '',
	'complexity': 0,
	'description': '',
	'id': 0,
	'quantity': 0,
	'technique': '',
},
	],
	isLoading: true,
}

const testsInfoReducer = (state = initialState, action: {type: string, payload: {data: testInfoType[]}}) => {
	switch(action.type) {
		case 'FETCH_ALL_TESTS' : {
			return {
				...state,
				tests: action.payload.data,
				isLoading: false,
			}
		}
		default : 
			return {
				...state,
			}
	}
}

export default testsInfoReducer;