import CurrentTest from './CurrentTest';
import {AppStateType} from '../reducers/index';
import {Action} from 'redux';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import LoadingGif from './LoadingGif';
import {currentTestAction} from '../actions/currentTestAction';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';


function CurrentTestWrapper() {
	const params = useParams();
	const slug = params.slug;
	
	const [isLoading, setLoading] = useState(true);
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();
	
	useEffect(() =>  {
		window.scrollTo(0, 0);
		if (typeof slug !== 'undefined') {
			dispatch(currentTestAction(slug));
			setLoading(false);
		}
	}, [slug, dispatch])
	
	return(
		<div className="container">
		{isLoading 
			? <LoadingGif/>
			: <CurrentTest />}
		</div>
		)
}
export default CurrentTestWrapper;