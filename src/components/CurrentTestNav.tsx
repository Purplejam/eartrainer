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
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
	border-radius: 0.2rem;
	margin-bottom: 2vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: .2rem .2rem;
	padding: 1.5rem 6rem;

	@media (max-width: 1060px) {
		padding: 1rem 3rem;
	}

	@media (max-width: 1060px) {
		padding: 1rem 1rem;
	}

	@media (max-width: 900px) {
		padding: 1rem 1rem;
		justify-content: flex-start;
		align-content: center;
	}

	@media (max-width: 768px) {
		justify-content: space-between;
	}

	@media (max-width: 415px) {	
		padding: .5rem .5rem;
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
	&.answeredNav {
		background-color: #9DDDDB;
	}
	&.activeNav {
		background: #6B7AA1;
	}

	@media (max-width: 768px) {
		width: 9%;
		height: 9%;
		line-height: 1.6rem;
		font-size: .7rem;
		border-radius: 0;
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