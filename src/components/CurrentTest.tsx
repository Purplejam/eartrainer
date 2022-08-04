import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {AppStateType} from '../reducers/index';
import {Action} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {testType} from '../data/melodicIntervals01';
import CurrentTestNav from './CurrentTestNav';

type currentTestSate = {
	isLoading: boolean,
	tests: testType[]
}

type answerTypeList = {
	id: number,
	answer: string
}[]

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
	input, label {
		cursor: pointer;
		line-height:1.4rem;
	}
	label {
		padding-left: 0.5rem;
	}
	padding: 0.5rem 0rem;
	button {
		margin-top: 1rem;
	}
`


//main component
function CurrentTest() {

	//collect all tests from store in shuffled order
	const {tests, isLoading}: currentTestSate = useSelector((state: AppStateType) => state.currentTest);
	//set all user`s answers
	const [answerList, setAnswerList] = useState<answerTypeRecords>({});
	//answer on current test
	const [answer, setAnswer] = useState('');
	//single current test
	const [singleTest, setSingleTest] = useState<testType>(tests[0]);
	//index of current test
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	//change test on click
	function changeSingleTest(n: number) {
		setSingleTest(tests[n]);
		setCurrentIndex(n);
		setAnswer('');
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

 return (
   <TestBox>
   	<CurrentTestNav 
   	answerList={answerList} 
   	navigate={changeSingleTest} 
   	index={currentIndex} 
   	length={tests.length}/>

   	<MainTest>
   		<h3>{singleTest?.question}</h3>
   		<div>Послушать аудио {'>>>'}</div>
   		{//TODO 2. Add player component from another project
   		}
   		<p>{singleTest?.audio}</p>
   		<h4>Выберите правильный вариант:</h4>
   		<AnswersStyle>
   			{singleTest?.answers.map((item: {id: number, answer: string}) => {
   				return (
   					<div key={item.id}>
  							<input 
  							checked={item.answer === answer ? true : false}
  							name="answersInput" 
  							value={item.answer} 
  							type='radio' id={`check-${item.id}`} 
  							onChange={checkBoxHandler}/>
									<label htmlFor={`check-${item.id}`}>{item.answer}</label>
   					</div>
   					)
   			})}
   			{Object.keys(answerList).length === (tests.length - 1) && !answerList.hasOwnProperty(currentIndex)
   				? <button
   						className={`simple-button ${answer === '' ? "inactive" : ""}`}>Завершить тест!</button>
   						//TODO 1. Add button skip
   				: <button onClick={() => newAnswerHandler()}
   						className={`simple-button ${answer === '' ? "inactive" : ""}`}>Ответить</button>
   			}

   		</AnswersStyle>
   	</MainTest>
   </TestBox>
 );
}

export default CurrentTest;