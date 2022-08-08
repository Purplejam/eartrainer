import styled from 'styled-components';
import {answerTypeRecords} from './CurrentTest';

type currentTestNavType = {
	navigate: Function,
	index: number,
	length: number,
	answerList: answerTypeRecords
}

//styles
const ThumbNail = styled.div`
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 0.2rem;
	height: 10vh;
	margin-bottom: 2vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0rem 6rem;
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
	&.answeredNav {
		background-color: #9DDDDB;
	}
	&.activeNav {
		background-color: #6B7AA1;
	}

`

//main component
function CurrentTestNav({navigate, index, length, answerList}: currentTestNavType) {
	let divs = [];
	for (let i = 0; i <= length - 1; i++) {
		divs.push(<ThumbNailItem
			className={`${i === index ? 'activeNav' : ''} 
			${answerList.hasOwnProperty(i) ? 'answeredNav' : ''}`} 
			onClick={() => navigate(i)}
			key={i}>{i + 1}</ThumbNailItem>);
	}
	return (
			<ThumbNail>
			{divs}
			</ThumbNail>
		)
}

export default CurrentTestNav;