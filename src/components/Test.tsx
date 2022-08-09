import styled from 'styled-components';
import fullStar from '../img/star-full.png';
import emptyStar from '../img/star-empty.png';
import {Link} from "react-router-dom";
import {currentTestAction} from '../actions/currentTestAction';
import {useDispatch} from 'react-redux';
import {AppStateType} from '../reducers/index';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';


type TestPropsTypes = {
	id: number,
	complexity: number,
	slug: string,
	name: string,
	description: string,
	quantity: number,
	technique: string,
}

const TestStyle = styled.div`
	height: 100%;
	position: relative;
	padding: 2rem 2rem 4rem 2rem;
	border: 2px solid #f1f3f4;
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
	transition: all 200ms ease-in;
	&:hover {
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
	}
	img {
		height: 40vh;
		width: 100%;
		object-fit: cover;
		object-position: left top;
	}
	h3 {
		padding: 0;
	} 
	button {
		position: absolute;
	 bottom: 1.5rem;
	 left: 0;
	 transform: translateX(2rem);
	}
`

const Description = styled.div`
	padding: 1.5rem 0;
	img {
		display: inline-block;
		width: 1rem;
		height: 1rem;	
	}

	.test-description {
		padding-top: 1rem;
	}

.technique {
	text-align: center;
	display: inline-block;
	padding: 0 .8rem;
	border-radius: 20px;
	background-color: #97A1BC;
	color: white;
	font-size: .8rem;
	margin-bottom: 1rem;
}

.description-header {
	padding-right: 0.8rem;
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

//main component
function Test({name, slug, complexity, description, quantity, technique}: TestPropsTypes) {

	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();

	function currentTestHandler(slug: string) {
		dispatch(currentTestAction(slug));
	}

 return (
 	<Link to={`/current-test/${slug}`}>
   <TestStyle>
   	<h3>{name}</h3>
   	<Description>
   		<p className="technique"><b>{technique}</b></p>
   		<Raiting><b className="description-header">Сложность:</b>{getStarRaiting(complexity)}</Raiting>
   		<p><b className="description-header">Тестов:</b>{quantity}</p>
   		<p className="test-description">{description}</p>
   	</Description>
   	<button className="main-button">Пройти тест</button>
   </TestStyle>
  </Link>
 );
}

export default Test;