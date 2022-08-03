import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {AppStateType} from '../reducers/index';
import allTestInfo from '../data/allTestsInfo';


export const allTestsAction = () => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	const data = allTestInfo;

	dispatch({
		type: 'FETCH_ALL_TESTS',
		payload: {
			data
		}
	})
}