import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../reducers/index';
import {currentTestAction} from '../actions/currentTestAction';
import {ThunkDispatch} from 'redux-thunk';
import styled from 'styled-components';

type SingleAnswerType = {
		isCorrect: boolean,
		correct: string,
		audio: string,
		usersAnswer: string,
		question: string
}

const FinishedTestStyles = styled.div`
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	h3.main-header {
		text-align: center;
	}
	.main-info {
		h4 {
			text-align: center;
		}
		&-success {
			text-align: center;
			font-size: 10rem;
			opacity: 0.8;
		}
	}
	p {
		padding: .1rem 0rem;
		line-height: 100%;
	}
`
const AnswersBox = styled.div`
	padding: .5rem 0 4rem 0;
	
`
const AnswerItem = styled.div`
	padding: 0 2rem;
	margin-bottom: 2rem;
	.incorrect {
		color: red;
		font-weight: 700;
		text-decoration: line-through;
	}
	.correct {
		color: green;
		font-weight: 700;	
	}
	.item-body {
		background-color: #f1f3f4;
		padding: 2rem 1rem;
		border: 2px solid #f1f3f4;
		border-radius: 5px;	
	}
	h4 {
		padding-bottom: 1rem;
	}
`

function setFontColor(SuccessRate: number) {
	if(SuccessRate <= 30) return 'red';
	if(SuccessRate <= 70) return 'orange';
	if(SuccessRate <= 100) return 'green';
}


function FinishedTest() {
	const {answers, succeededTests, isLoading, slug} = useSelector((state: AppStateType) => state.finishedTest);
	const SuccessRate = Math.floor(succeededTests / answers.length * 100);

	return(
		<FinishedTestStyles>
			<h3 className="main-header">Тестирование завершено</h3>
			{isLoading
				? <h3>Loading...</h3>
				: <>
				<div className="main-info">
					<h4>Правильных ответов:</h4>
					<div className="main-info-success"
					style={{'color': setFontColor(SuccessRate)}}>{succeededTests}</div>
				</div>
				<AnswersBox>
				
					{answers.map((answer: SingleAnswerType) => {
						return<AnswerItem key={answers.indexOf(answer)}>
						<div className="item-body">
							<h4>{answer.question}</h4>
							{!answer.isCorrect 
								? <>
										<p className="incorrect">{answer.usersAnswer.toLowerCase()}</p>
										<p className="correct">Правильный ответ: {answer.correct.toLowerCase()}</p>								
										</>
								: <p className="correct">Правильный ответ: {answer.usersAnswer.toLowerCase()}</p>}
							</div>
						</AnswerItem>
					})}
				</AnswersBox>
				</>
			}
		</FinishedTestStyles>
		)
}

export default FinishedTest;