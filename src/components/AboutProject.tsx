import styled from 'styled-components';
import bgimage from '../img/purple-guitar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const AboutStyles = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	background-color: #FAFAFA;
	.main-block {
		width: 65%;
		padding: 0rem 5rem 0rem 5.1rem;
		h3 {
			&:after {
				margin-top: .5rem;
				content: '';
				display: block;
				width: 4rem;
				height: 2px;
				background-color: #EF4F4F;
			}
		}
			p {
				margin-bottom: 1.2rem;
			}
	}
	.image-block {
		width: 35%;
		img {
			max-width: 100%;
			height: 100vh;
			object-fit: cover;
		}
	}



	@media (max-width: 768px) {
		.main-block {
			padding: 0 2rem;
		}
	}

	@media (max-width: 415px) {
		.image-block {
			display: none;
		}

		.main-block {
			padding: 2rem 1rem 3rem 1rem;
			width: 100%;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			h3 {
				&:after {
					width: 4rem;
				}
			}
		}
	}

	@media (max-width: 330px) {
		padding: 0 .5rem;
	}

`

function AboutProject() {

	return(
	 	<AboutStyles id="about">
	 	<div className="main-block">
	 		<h3>О проекте</h3>
	 		<p>Одной из основных проблем начинающих музыкантов – неумение работать с музыкальным слухом. 
	 		Далеко не у всех есть тяга и время серьезно и долго заниматься сольфеджио, ритмическим и техническим слухом.</p>
	 		<p>Отсюда и неумение слышать технические тонкости исполнения, свои ошибки и сложные детали различных партий. </p>
	 		<p>Задача данного проекта помочь студентам внедрить занятия слухом на постоянной основе в ваши регулярные занятия. Определить слабые стороны и работать над ними.</p>
	 		<p>Уделяйте прохождению тестов 20-30 минут несколько раз в неделю и вы начнете совсем иначе воспринимать игру на инструменте.</p>
	 	</div>

	 	<div className="image-block">
	 		<img src={bgimage} alt="eartrainer"/>
	 	</div>


	 	</AboutStyles>	
		)
}


export default AboutProject;