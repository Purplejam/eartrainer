import {useDispatch, useSelector} from 'react-redux';
import {useRef, useState} from 'react';
import {AppStateType} from '../reducers/index';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import styled from 'styled-components';
import SampleTestPlayer from './SampleTestPlayer';
import {useNavigate} from "react-router-dom";
import {finishedTestReset} from "../actions/finishedTestAction";


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
	.button-box {
		padding-top: 1rem;
		display: flex;
		justify-content: flex-start;
		width: 100%;
		.main-button {
			margin-right: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		.button-box {
			flex-direction: column;
			button {
				width: 100%;
			}
			.main-button {
				margin-right: 0;
				margin-bottom: .5rem;
			}
		}
	}
	
`
const AnswerItem = styled.div`
	margin-bottom: 1rem;
	.incorrect {
		color: red;
		font-weight: 700;
		text-decoration: line-through;
	}
	.correct {
		color: green;
		font-weight: 700;
		text-decoration: underline dotted;	
	}
	.item-body {
		background-color: #f1f3f4;
		padding: 2rem 2rem 0 2rem;
		border: 2px solid #f1f3f4;
		border-radius: 5px;	
	}
	h4 {
		padding-bottom: 1rem;
		font-size: 1.1rem;
	}

	@media screen and (max-width: 768px) {
		margin-bottom: 1rem;
		.item-body {
			padding: 0 1rem .5rem 1rem;
		}
		h4 {
			font-size: 1rem;
		}
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
	const [playingAudio, setPlayingAudio] = useState(answers[0]?.audio);
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();
	const audioRef = useRef<any | HTMLAudioElement>(null);
	const navigate = useNavigate();


	return(
		<FinishedTestStyles className="container">
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
								<SampleTestPlayer
								setPlayingAudio={setPlayingAudio}
								audioRef={audioRef}
								currentAudio={answer.audio} 
								playingAudio={playingAudio}/>
							</div>
						</AnswerItem>
					})}

	  		<audio
	  		onEnded={() => setPlayingAudio('')}
	    ref={audioRef} 
	    src={playingAudio}
	    >    
	    </audio>
	    <div className="button-box">
					<button 
						onClick={() => {
							dispatch(finishedTestReset());
							navigate(`/current-test/${slug}`);
						}}
						className="main-button">Пройти заново</button>
						<button
						onClick={() => {
							dispatch(finishedTestReset());
							navigate('/');
						}}
						className="simple-button">Вернуться к тестам</button>	    	
	    </div>
				</AnswersBox>
				</>
			}

		</FinishedTestStyles>
		)
}

export default FinishedTest;