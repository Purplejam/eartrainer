import styled from 'styled-components';
import fullStar from '../img/star-full.png';
import emptyStar from '../img/star-empty.png';


type TestPropsTypes = {
	img_link: string,
	id: number,
	complexity: number,
	slug: string,
	name: string,
	description: string,
	quantity: number,
	technique: string,
}

const TestStyle = styled.div`
	padding: 1rem 0rem;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
	img {
		height: 40vh;
		width: 100%;
		object-fit: cover;
		object-position: left top;
	}
	h3 {
		padding: 1.5rem 2rem;
	} 
	button {
		margin-left: 2rem;
	}
`

const Description = styled.div`
	padding: 1.5rem 2rem 2.5rem 2rem;
	img {
		display: inline-block;
		width: 1rem;
		height: 1rem;	
	}
	.test-description {
		padding-top: 1rem;
	}
	p {
		b {
			padding-right: 0.7rem;
		}
	}
`

const Raiting = styled.p`
	display: flex;
	align-items: center;
	.empty-star {
		opacity: 0.4;
	}
`

function getStarRaiting(qty: number) {
	let star = [];
	if (qty !== null) {
		qty = Math.floor(qty);
		for (let i = 1; i <= 10; i++) {
			if (i <= qty) {
				star.push(<img src={fullStar} key={i} alt="Full Star"/>)
			} else {
				star.push(<img className="empty-star" src={emptyStar} key={i} alt="Empty Star"/>)
			}
		}
		return star;
	}
}

function Test({img_link, name, slug, complexity, description, quantity, technique}: TestPropsTypes) {
 return (
   <TestStyle>
   	<h3>{name}</h3>
   	<div>
   		<img src={img_link} alt="testtest"/>
   	</div>
   	<Description>
   		<p><b>{technique}</b></p>
   		<Raiting><b>Сложность:</b>{getStarRaiting(complexity)}</Raiting>
   		<p><b>Тестов:</b>{quantity}</p>
   		<p className="test-description">{description}</p>
   	</Description>
   	<button className="simple-button">Пройти тест</button>
   </TestStyle>
 );
}

export default Test;