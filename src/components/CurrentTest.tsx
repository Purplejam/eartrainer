import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {AppStateType} from '../reducers/index';
import {Action} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {testType} from '../data/melodicIntervals01';
import CurrentTestNav from './CurrentTestNav';
import MainTestButton, {NextTestButton} from './MainTestButton';
import { useNavigate } from "react-router-dom";
import finishedTestAction from '../actions/finishedTestAction';
import {ThunkDispatch} from 'redux-thunk';
import TestPlayer from './TestPlayer';
import LoadingGif from './LoadingGif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import {TestFinishButton} from './MainTestButton';
//@ts-ignore
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';


type currentTestSate = {
	isLoading: boolean,
	tests: testType[],
	slug: string
}

export interface answerTypeRecords {
 [key: string]: {
		id: number,
		answer: string
	}
}

//styles
const TestBox = styled.div`
	padding-top: 2.5rem;

	@media (max-width: 768px) {
		padding-top: 1.5rem;
	}
	@media (max-width: 415px) {
		padding-top: 1rem;
	}
	@media (max-width: 375px) {
		padding-top: .5rem;
	}
`

const MainTest = styled.div`
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
	border-radius: 1rem;
	border-radius: 0.2rem;
	padding: 1rem 3rem 3rem 3rem;
	h3 {
		text-align: center;
	}
	h4 {
		padding: 1rem 0rem;
	}

	@media (max-width: 768px) {

	}

	@media (max-width: 415px) {
		padding: 1rem 1.2rem;
	}

	@media (max-width: 375px) {
		padding: 0 1rem 1rem 1rem;

	h4 {
		padding: 0 0 .5rem 0;
	}
	}
`
const AnswersStyle = styled.div`
.answer-box {
	padding-bottom: 1.5rem;
}
	input, label {
		cursor: pointer;
	}
	label {
		display: inline-block;
		padding: 0.5rem 0.5rem 0.2rem 0rem;
		p {
			padding-left: 0.5rem;
			display: inline-block;
			color: #333;
			font-size: 1rem;
			line-height: 1rem;
			font-weight: 500;
		}
	}
	button {
		margin-top: 1rem;
	}

	.custom-checkbox {
		--checkbox-color: #6B7AA1;
		display: inline-grid;
  place-content: center;
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: var(--checkbox-color);
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--checkbox-color);
  border-radius: 4em;
  transform: translateY(0);
  &::before {
  	border-radius: 4em;
	  content: "";
	  width: 0.65em;
	  height: 0.65em;
	  transform: scale(0);
	  transition: 10ms transform ease-in-out;
	  box-shadow: inset 1em 1em var(--checkbox-color);
  }
  &:checked::before {
  	transform: scale(1);
  }
	}

	@media (max-width: 768px) {
		padding-bottom: 1rem;
		label {
			p {
			font-size: 0.8rem;
			line-height: 0.8rem;				
			}
		}
	}

		@media (max-width: 446px) {
			button {
				margin-top: .5rem;
			}
			button.main-button, button.simple-button {
				width: 100%;
			}
		.answer-box {
			padding-bottom: 2.5rem;
		}
	}
`

const PrepareTestStyle = styled.div`
padding: 3rem 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
cursor: pointer;
color: #6B7AA1;
text-align: center;
span {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	background-color: #f1f3f4;
	width: 12rem;
	height: 12rem;
	text-align: center;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
	transition: all 100ms ease-in;
	&:hover {
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);	
	}
}
	svg {
		margin-right: -.5rem;
		font-size: 7rem;
		color: #6B7AA1;
		cursor: pointer;
		transition: color 150ms;
		&:hover {
			color: #6B7AA1;
		}
	}

	@media (max-width: 768px) {
		padding: 1rem 0;

		.play-wrapper {
			span {
				width: 8rem;
				height: 8rem;	
			}
			svg {
				font-size: 4rem;
			}
		}
	}
`
const playIcon = <FontAwesomeIcon className="play" icon={faPlay} />

//main component
function CurrentTest() {
	const [prepareState, setPrepareState] = useState(true);
	const {tests, slug, isLoading}: currentTestSate = useSelector((state: AppStateType) => state.currentTest);
	//set all user`s answers
	const [answerList, setAnswerList] = useState<answerTypeRecords>({});
	//answer on current test
	const [answer, setAnswer] = useState('');
	//set single current test
	const [singleTest, setSingleTest] = useState<testType>(tests[0]);
	//set index of current test
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	//is test answered already
	const [isAnswered, setAnswered] = useState<boolean>(() => answerList.hasOwnProperty(currentIndex));
	//for navigation
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();

	useEffect(() => {
			setAnswered(() => answerList.hasOwnProperty(currentIndex));
	}, [currentIndex, answerList])

	useEffect(() => {
		if (Object.keys(answerList).length === (tests.length)) {
			nprogress.start();
			dispatch(finishedTestAction(slug, answerList));
			nprogress.done();
			navigate('/finished-test');
		}
	}, [answerList, navigate, slug, dispatch, tests.length])

	//change test on click
	function changeSingleTest(n: number) {
		if (n === tests.length) {
			for (let i = 0; i < tests.length; i++) {
				if (answerList.hasOwnProperty(i)) {
					continue;
				} else {
					setSingleTest(tests[i]);
					setCurrentIndex(i);
					setAnswer('');
					break;					
				}
			}
		} else {
			setSingleTest(tests[n]);
			setCurrentIndex(n);
			setAnswer('');			
		}
	}

	//set current answer
	function checkBoxHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setAnswer(e.target.value);
	}

	//add new answer
	function newAnswerHandler() {
		setAnswerList({
			...answerList,
			[currentIndex]: {
				id: singleTest.id,
				answer: answer
			}
		});
		setAnswer('');
		changeSingleTest(currentIndex + 1);		
	}

	//finished test 
	function finishTestHandler() {
		setAnswerList({
			...answerList,
			[currentIndex]: {
				id: singleTest.id,
				answer: answer
			}
		});
		setAnswer('');
	}

 return (
 	isLoading ? <LoadingGif/>
 	: <TestBox>
    	<CurrentTestNav 
    	answerList={answerList} 
    	navigate={changeSingleTest} 
    	index={currentIndex} 
    	length={tests.length}/>
    	<MainTest>
    		{prepareState 
    		? <PrepareTestStyle onClick={() => setPrepareState(false)}>
							 	<h3>???????????? ????????????????????????</h3>
							 	<div className="play-wrapper">
								 	<span>
								 		{playIcon}
								 	</span>	 							 		
							 	</div>
					 		</PrepareTestStyle>
					 : <>	
    		<h3>{singleTest?.question}</h3>
    		<TestPlayer currentAudio={singleTest?.audio}/>
    		<h4>{isAnswered 
 						? "?????? ?????????????????? ??????????????:" 
 						: "?????????????? ???????????????????? ??????????????:"}
 	   	</h4>
    		<AnswersStyle>
 					<div className="answer-box">   			
 						{singleTest?.answers.map((item: {id: number, answer: string}) => {
    				 return (
    					<div key={item.id}>
 	   					<label
 									className={`${isAnswered !== false 
 										&& item?.answer === answerList[currentIndex]?.answer
 										? 'bold-test'
 										: ''}`} 
 									htmlFor={`check-${item.id}`}>
 		 							<input
 		 							className="custom-checkbox" 
 		 							checked={answer === item.answer
 		 								? true
 		 								: false}
 		 							name="answersInput" 
 		 							value={item.answer} 
 		 							type='radio' id={`check-${item.id}`} 
 		 							onChange={checkBoxHandler}/>
 
 										<p className="custom-checkbox-text">{item.answer}</p>
 									</label>
    					</div>
    					)
    			})}
 					</div>
    			{Object.keys(answerList).length === (tests.length - 1) 
    				//renders only when one last test left
    				? <TestFinishButton answer={answer} finishTestHandler={finishTestHandler}/>
    				//renders when 1+ test left 
    				: <>
    							<MainTestButton answer={answer} isAnswered={isAnswered} newAnswerHandler={newAnswerHandler}/>
    							<NextTestButton changeSingleTest={changeSingleTest} currentIndex={currentIndex} isAnswered={isAnswered}/>
    						</>
    			}
    		</AnswersStyle>
    	</>}
    	</MainTest>
    </TestBox>
 );
}

export default CurrentTest;