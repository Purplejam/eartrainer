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
import {currentTestAction} from '../actions/currentTestAction';
import {ThunkDispatch} from 'redux-thunk';
import TestPlayer from './TestPlayer';


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
`

const MainTest = styled.div`
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	border-radius: 0.2rem;
	padding: 1rem 3rem 3rem 3rem;
	h3 {
		text-align: center;
	}
	h4 {
		padding: 1rem 0rem;
	}
`
const AnswersStyle = styled.div`
padding: 0.5rem 0rem;
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
`


//main component
function CurrentTest() {
	//collect all tests from store in shuffled order
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
	}, [currentIndex])

	useEffect(() => {
		if (Object.keys(answerList).length === (tests.length)) {
			dispatch(finishedTestAction(slug, answerList));
			navigate('/finished-test');
		}
	}, [answerList])

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
	function checkBoxHandler(e: any) {
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
 	isLoading ? <h3>Loading...</h3>
 	: <TestBox>
    	<CurrentTestNav 
    	answerList={answerList} 
    	navigate={changeSingleTest} 
    	index={currentIndex} 
    	length={tests.length}/>
 
    	<MainTest>
    		<h3>{singleTest?.question}</h3>
    		<TestPlayer currentAudio={singleTest?.audio}/>
    		{
    			//TODO 2. Add player component from another project
    		}
    		<h4>{isAnswered 
 						? "Ваш указанный вариант:" 
 						: "Укажите правильный вариант:"}
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
    			{Object.keys(answerList).length === (tests.length - 1) && !isAnswered
    				//renders when one last test left
    				? <button
    						className={`main-button ${answer === '' ? "inactive" : ""}`}
    						onClick={(e: any) => answer !== '' 
										? finishTestHandler() : e.target.classList.toggle('tooltip-active')}>Завершить тест!</button>
    				//renders when 1+ test left 
    				: <>
    							<MainTestButton answer={answer} isAnswered={isAnswered} newAnswerHandler={newAnswerHandler}/>
    							<NextTestButton changeSingleTest={changeSingleTest} currentIndex={currentIndex} isAnswered={isAnswered}/>
    						</>
    			}
    		</AnswersStyle>
    	</MainTest>
    </TestBox>
 );
}

export default CurrentTest;