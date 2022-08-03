import styled from 'styled-components';
import {useState, useEffect} from 'react';

const TestBox = styled.div`
	padding-top: 2.5rem;
`

const ThumbNail = styled.div`
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 0.2rem;
	height: 10vh;
	margin-bottom: 1vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0rem 6rem;
`

const MainTest = styled.div`
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	border-radius: 0.2rem;
	h3 {
		text-align: center;
	}
`
const AnswersStyle = styled.div`
	input, label {
		cursor: pointer;
	}
`
const ThumbNailItem = styled.div`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	background-color: #B0B0B0;
	border-radius: 50%;
	color: #fff;
	text-align: center;
	line-height: 2rem;
	cursor: pointer;
`

const testAnswers = [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
		]

function setThumbNails() {
	let divs = [];
	for(let i = 1; i <= 20; i++) {
		divs.push(<ThumbNailItem key={i}>{i}</ThumbNailItem>);
	}
	return divs;
}

function CurrentTest() {
	const [answer, setAnswer] = useState<string>();

	function checkBoxHandler(e: any) {
		setAnswer(e.target.value);
	}

	useEffect(() => {
		console.log(answer)
	}, [answer])

  return (
    <TestBox>
    	<ThumbNail>
    		{setThumbNails()}
    	</ThumbNail>

    	<MainTest>
    		<h3>Вторая нота выше или ниже относительно первой?</h3>
    		<div>Послушать аудио {'>>>'}</div>
    		<h4>Выберите правильный вариант:</h4>
    		<AnswersStyle>
    			{testAnswers.map((item: any) => {
    				return (
    					<div key={item.id}>
   							<input name="answersInput" value={item.answer} type='radio' id={`check-${item.id}`} onChange={checkBoxHandler}/>
										<label htmlFor={`check-${item.id}`}>{item.answer}</label>
    					</div>
    					)
    			})}
    			<button className="simple-button">Ответить</button>
    		</AnswersStyle>
    	</MainTest>
    </TestBox>
  );
}

export default CurrentTest;