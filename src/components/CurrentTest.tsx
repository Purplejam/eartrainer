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
		p {
			padding: 0.5rem 0.5rem 0.2rem 0.5rem;
			display: inline-block;
			color: #333;
			font-size: 1rem;
			line-height: 100%;
			font-weight: 500;
		}
	}
	button {
		margin-top: 1rem;
	}
	button.simple-button {
		margin-left: 2rem;
	}
	button.main-button {
		position: relative;
		&.tooltip-active::before, &.tooltip-active::after {
			--scale: 0;
			position: absolute;
			top: -200%;
			left: 50%;
			transform: translateX(-50%) translateY(120%) scale(var(--scale));
			transition: transform 80ms ease-in;
			transform-origin: top center;
		}
		&.tooltip-active::before {
			content: attr(data-tooltip);
			background-color: #B0B0B0;
			width: max-content;
			padding: 0.4rem 2px;
			font-size: 0.7rem;
			max-width: 100%;
			width: 100%;
			border-radius: .2rem;
		}
		&.tooltip-active:focus::after, &.tooltip-active:focus::before {
			--scale: 1;
		}
		&.tooltip-active::after {
			content: '';
			border: 6px solid transparent;
			border-bottom-color: #B0B0B0;
			transform: translateX(-50%) translateY(160%) scale(var(--scale));
			transform-origin: bottom center;
		}
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
	//set single current test
	const [singleTest, setSingleTest] = useState<testType>(tests[0]);
	//set index of current test
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	//is test answered already
	const [isAnswered, setAnswered] = useState<boolean>(() => answerList.hasOwnProperty(currentIndex));

	useEffect(() => {
		setAnswered(() => answerList.hasOwnProperty(currentIndex));
	}, [currentIndex])

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
	function newAnswerHandler(e: any) {
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
   		{
   			//TODO 3. Add player component from another project
   		}
   		<p>{singleTest?.audio}</p>
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
									{
										//TODO 2. Custom style inputs!!
									}
		 							<input 
		 							checked={answer === item.answer
		 								? true
		 								: false}
		 							name="answersInput" 
		 							value={item.answer} 
		 							type='radio' id={`check-${item.id}`} 
		 							onChange={checkBoxHandler}/>

										<p>{item.answer}</p>
									</label>
   					</div>
   					)
   			})}
					</div>
   			{Object.keys(answerList).length === (tests.length - 1) && !isAnswered
   				//shows up when one last test left
   				? <button
   						className={`main-button ${answer === '' ? "inactive" : ""}`}>Завершить тест!</button>
   				//show up when 1+ test left 		
   				: <>
	   						<button
	   						data-tooltip="Укажите ответ" 
	   						onClick={(e: any) => answer !== '' 
	   						? newAnswerHandler(e) : e.target.classList.add('tooltip-active')}
	   						className={`main-button ${answer === '' ? "inactive" : ""}`}>{isAnswered 
	   							? "Изменить ответ" 
	   							: "Ответить"}</button>
	   						<button 
	   						className="simple-button" 
	   						onClick={() => changeSingleTest(currentIndex + 1)}>{isAnswered 
	   							? "Далее"
	   							: "Пропустить"}</button>
   						</>
   			}
   		</AnswersStyle>
   	</MainTest>
   </TestBox>
 );
}

export default CurrentTest;