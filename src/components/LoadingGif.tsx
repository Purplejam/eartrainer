import styled from 'styled-components';
import loading from '../img/Ellipsis-2.9s-128px.gif';

const LoadingDiv = styled.div`
	text-align: center;
		img {
			display: inline-block;
		}
`

function LoadingGif() {
	return(
		<LoadingDiv>
			<img src={loading} alt="loading..."/>
		</LoadingDiv>
		
		)
}

export default LoadingGif;