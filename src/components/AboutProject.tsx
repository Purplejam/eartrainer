import styled from 'styled-components';
import bgimage from '../img/purple-guitar.png';

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

//main component
function AboutProject() {

	return(
	 	<AboutStyles id="about">
	 	<div className="main-block">
	 		<h3>О проекте</h3>
	 		<p>Недостаток практики в работе с музыкальным слухом – основная проблема всех начинающих музыкантов. 
	 		Далеко не у всех есть тяга и время упорно заниматься мелодическим, ритмическим или техническим слухом.</p>
	 		<p>Отсюда и трудности в подборе на слух, неумение услышать и устранить свои собственные технические ошибки. 
	 		Рассинхроны, спешка, призвуки от соседних струн – это прежде всего недостаток в работе со слухом, чем с постановками, хватами медиатора и прочим.</p>
	 		<p>Задача данного тренажёра помочь студентам внедрить работу со слухом в регулярные занятия инструментом.</p>
	 		<p>Уделяйте прохождению тестов 20-30 минут несколько раз в неделю и вы начнете совсем иначе подходить к занятиям на инструменте.</p>
	 	</div>

	 	<div className="image-block">
	 		<img src={bgimage} alt="eartrainer"/>
	 	</div>


	 	</AboutStyles>	
		)
}


export default AboutProject;