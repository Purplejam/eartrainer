import Nav from './Nav';
import Home from './Home';
import CurrentTest from './CurrentTest';
import CurrentTestWrapper from './CurrentTestWrapper';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {GlobalStyle} from './GlobalStyles';
import styled from 'styled-components';
import FinishedTest from './FinishedTest';
import Footer from './Footer'; 

const AppContainer = styled.div`
  padding: 0rem 5rem 5rem 5rem;
  min-height: calc(100vh - 4rem);

  @media (max-width: 768px) {
  	padding: 0rem 2rem 2rem 2rem;
  }
  @media (max-width: 415px) {
  	padding: 0rem 1rem 2rem 1rem;
  }
  @media (max-width: 330px) {
    padding: 0rem .5rem 2rem .5rem;
  }
`


function App() {
  return (
  	<Router>
  		<Nav/>
      <AppContainer>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/current-test/:slug" element={<CurrentTestWrapper />}/>
        <Route path="/current-test" element={<CurrentTest />}/>
        <Route path="/finished-test" element={<FinishedTest />}/>
      </Routes>
      </AppContainer>
      <Footer/>
   </Router>
  );
}

export default App;
