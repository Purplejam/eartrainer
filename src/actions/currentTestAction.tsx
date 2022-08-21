import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {AppStateType} from '../reducers/index';
import melodicIntervals01 from '../data/melodicIntervals01';
import melodicIntervals02 from '../data/melodicIntervals02';
import rhythm01 from '../data/rhythm01';
import sync01 from '../data/sync01';
import rhythmBeginner from '../data/rhythmBeginner';
import {shuffleArray} from '../lib/shuffle';

function getCurrentTestData(slug: string) {
	switch (slug) {
		case 'melodic-intervals-1' :
			return melodicIntervals01;
		case 'melodic-intervals-2' :
			return melodicIntervals02;
		case 'rhythm-1' :
			return rhythm01;
		case 'sync-1' :
			return sync01;
			case 'rhythm-0' : 
			return rhythmBeginner;
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