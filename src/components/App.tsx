import Nav from './Nav';
import Home from './Home';
import CurrentTest from './CurrentTest';
import CurrentTestWrapper from './CurrentTestWrapper';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {GlobalStyle} from './GlobalStyles';
import styled from 'styled-components';
import FinishedTest from './FinishedTest'; 

const AppContainer = styled.div`
  padding: 0rem 5rem 5rem 5rem;

  @media (max-width: 768px) {
  	padding: 0rem 2rem 2rem 2rem;
  }
  @media (max-width: 415px) {
  	padding: 0rem 1rem 1rem 1rem;
  }
`

//TODO 1. Make current test wrapper
//TODO 2. Wrapper takes a slug and make thunk-dispatch
//TODO 3. If !isLoading => render Current Test

function App() {
  return (
  	<Router>
  		<Nav/>
      <AppContainer>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/current-test/:slug" element={<CurrentTestWrapper />}/>
        <Route path="/finished-test" element={<FinishedTest />}/>
      </Routes>
      </AppContainer>
   </Router>
  );
}

export default App;
