import Test from './Test';
import styled from 'styled-components';
import img1 from "../img/test-1.jpg";
import img4 from "../img/test-4.jpg";
import img6 from "../img/test-6.jpg";

const HomeStyle = styled.div`
	padding-top: 2rem;
	h2 {
		text-align: center;
	}
`

const TestList = styled.div`
	padding-top: 1.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`


function Home() {
  return (
	 	<HomeStyle>
	 		<h2>Тестовые модули</h2>
	   <TestList>
	   	<Test img_link={img6}/>
	   	<Test img_link={img6}/>
	   	<Test img_link={img6}/>
	   </TestList>
	  </HomeStyle>
  );
}

export default Home;