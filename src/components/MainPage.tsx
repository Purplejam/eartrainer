import styled from 'styled-components';
import bgimage from '../img/image_processing20200212-1116-d0f1ir-min.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const FirstScreen = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	.main-block {
		width: 65%;
		p {
			&:after {
				content: '';
				display: block;
				width: 10%;
				height: 2px;
				background-color: #EF4F4F;
				margin: 0 auto;
			}
		}

		button.main-button {
			padding: .6rem 2rem;
			svg {
				padding-left: 1.5rem;
			}
		}
	}

	.image-block {
		width: 35%;
		img {
			max-width: 100%;
			height: calc(100vh - 4rem);
			object-fit: cover;
		}
	}

	@media (max-width: 415px) {
		.image-block {
			display: none;
		}

		.main-block {
			width: 100%;
			height: calc(100vh - 4rem);
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			background-image: url(${bgimage});
			background-position: center;
			h3, p {
				color: #fff;
				text-transform: uppercase;
			}
			p {
				&:after {
					width: 25%;
				}
			}
			button.main-button {
				
				width: 90%;
				svg {
					padding-left: .5rem;
				}
			}
		}
	}
`

function MainPage() {
const downIcon = <FontAwesomeIcon icon={faArrowDownLong} />

	return(
	 	<FirstScreen>
	 	<div className="image-block">
	 		<img src={bgimage} alt="eartrainer"/>
	 	</div>

	 	<div className="main-block">
	 		<p>Eartrainer</p>
	 		<h3>Тренировка слуха для музыкантов</h3>
	 		<a href="/#tests"><button className="main-button">К тестам {downIcon}</button></a>
	 	</div>
	 	</FirstScreen>	
		)
}


export default MainPage;