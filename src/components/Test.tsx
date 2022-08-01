import styled from 'styled-components';

type TestPropsTypes = {
	img_link: string
}

const TestStyle = styled.div`
	padding: 1rem 0rem;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	overflow: hidden;
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
`

function Test({img_link}: TestPropsTypes) {
  return (
    <TestStyle>
    	<h3>Подбор интервалов: часть 1</h3>
    	<div>
    		<img src={img_link} alt="testtest"/>
    	</div>
    	<Description>
    		<p>Уровень сложности: </p>
    		<p>Тестов: 20</p>
    		<p>Описание</p>
    	</Description>
    	<button className="simple-button">Пройти тест</button>
    </TestStyle>
  );
}

export default Test;