import Test from './Test';
import styled from 'styled-components';
import {useEffect} from 'react';
import {allTestsAction} from '../actions/testsInfoAction';
import {useDispatch} from 'react-redux';
import {AppStateType} from '../reducers/index';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {useSelector} from 'react-redux';
import LoadingGif from './LoadingGif';
import MainPage from './MainPage'; 
import AboutProject from './AboutProject';

const HomeStyle = styled.div`
	&.container {
		padding-top: 3rem;
	}
	
	h2 {
		text-align: center;
	}

	@media (max-width: 768px) {
		&.container {
			padding-top: 2rem;
		}
		h2 {
   font-size: 1.5rem;
   padding: 1rem 0;
		}
	}

	@media (max-width: 415px) {
		&.container {
			padding-top: 2rem;
		}

		h2 {
			text-align: left;
   font-size: 1rem;
			&:after {
				margin-top: .5rem;
				content: '';
				display: block;
				width: 4rem;
				height: 2px;
				background-color: #EF4F4F;
		}	
	}
`


const TestList = styled.div`
	padding-top: 1.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
	grid-auto-rows: 1fr;
	
	@media (max-width: 415px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding-top: 0;
	}
`

//main component
function Home() {
	const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch();
	
	useEffect(() => {
		dispatch(allTestsAction());
	}, [dispatch]);

	const {tests, isLoading} = useSelector((state: AppStateType) => state.testsInfo);
	
  return (
  	<>
  	<MainPage/>
	 	<HomeStyle className="container" id="tests">
	 	<h2>Тестовые модули</h2>
	 		{isLoading 
	 			? <LoadingGif/>
	 			: <TestList>			
	 				{tests.map(test => {
	 					return <Test 
	 					name={test.name} 
	 					complexity={test.complexity}
	 					slug={test.slug}
	 					id={test.id}
	 					description={test.description}
	 					key={test.slug}
	 					technique={test.technique}
	 					quantity={test.quantity}
	 					/>
	 				})}
	 			</TestList>}
	  </HomeStyle>
	  <AboutProject/> 
	  </>
  );
}

export default Home;