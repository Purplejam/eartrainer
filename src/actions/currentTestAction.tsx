import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {AppStateType} from '../reducers/index';
import melodicIntervals01 from '../data/melodicIntervals01';
import {shuffleArray} from '../lib/shuffle';

function getCurrentTestData(slug: string) {
	switch (slug) {
		case 'melodic-intervals-1' :
			return melodicIntervals01;
		default :
			return melodicIntervals01;
	}
}


export const currentTestAction = (slug: string) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({
		type: 'IS_LOADING'
	})
	
	const data = getCurrentTestData(slug);
	
	dispatch({
		type: 'FETCH_CURRENT_TEST',
		payload: {
				'slug': data.slug,
				'tests': shuffleArray(data.tests)
		}
	})
}