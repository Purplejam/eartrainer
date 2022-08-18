import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {AppStateType} from '../reducers/index';
import {answerTypeRecords} from '../components/CurrentTest';
import melodicIntervals01Answers from '../data/melodicIntervals01Answers';
import melodicIntervals02Answers from '../data/melodicIntervals02Answers';
import rhythm01Answers from '../data/rhythm01Answers';
import sync01Answers from '../data/sync01Answers';


export interface answersDataTypeRecords {
 [key: number]: {
		correct: string,
		audio: string,
		question: string
	}
}

type testsResultType = {
	isCorrect: boolean,
	correct: string,
	audio: string,
	usersAnswer: string,
	question: string
}[]

function getCurrentTestAnswers(slug: string) {
	switch (slug) {
		case 'melodic-intervals-1' :
			return melodicIntervals01Answers;
		case 'melodic-intervals-2' :
			return melodicIntervals02Answers;
		case 'rhythm-1' :
			return rhythm01Answers;
		case 'sync-1' :
			return sync01Answers;
		default :
			return melodicIntervals01Answers;
	}
}

function validateTests(answerList: answerTypeRecords, answers: answersDataTypeRecords) {
	let result: testsResultType = [];
	let succeeded = 0;
	for (let obj in answerList) {
		let index = answerList[obj].id;
		let singleAnswer = {isCorrect: false, correct: '', audio: '', usersAnswer: '', question: ''};

		if (answers.hasOwnProperty(index)) {
			singleAnswer.correct = answers[index].correct;
			singleAnswer.usersAnswer = answerList[obj].answer;
			singleAnswer.audio = answers[index].audio;
			singleAnswer.question = answers[index].question;

			if (answerList[obj].answer === answers[index].correct) {
				singleAnswer.isCorrect = true;
				succeeded++;
			} else {
				singleAnswer.isCorrect = false;
			}
		}
		result.push(singleAnswer);
	}
	return [result, succeeded];
}


//finished test thunk
const finishedTestAction = (slug: string, answerList: answerTypeRecords) => async (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	//loading 
	dispatch({
		type: 'LOADING_ANSWERS'
	})
	
	//result array and answer request
	const answers = getCurrentTestAnswers(slug);

	//find all correct answers
	const [result, succeeded] = validateTests(answerList, answers);
	
	dispatch({
		type: 'FETCH_ANSWERS',
		payload: {
			answers: result,
			succeededTests: succeeded,
			slug: slug
		}
	})
}

export const finishedTestReset = () => (dispatch: ThunkDispatch<AppStateType, void, Action>) => {
	dispatch({
		type: 'RESET_FINISHED_ANDWERS'
	})
}

export default finishedTestAction;




