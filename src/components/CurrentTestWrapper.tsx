import CurrentTest from './CurrentTest';
import {AppStateType} from '../reducers/index';
import {Action} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {testType} from '../data/melodicIntervals01';
import LoadingGif from './LoadingGif';
import {currentTestAction} from '../actions/currentTestAction';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

type currentTestSate = {
	isLoading: boolean,
	tests: testType[],
}

function CurrentTestWrapper() {
	const params = useParams();
	const slug = params.slug;
	
	const [isLoading, setLoading] = useState(true);
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();
	
	useEffect(() =>  {
		dispatch(currentTestAction(slug));
		setLoading(false);
	}, [slug])
	
	return(
		<div>
		{isLoading 
			? <LoadingGif/>
			: <CurrentTest />}
		</div>
		)
}
export default CurrentTestWrapper;