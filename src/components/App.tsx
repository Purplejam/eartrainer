import Nav from './Nav';
import Home from './Home';
import CurrentTest from './CurrentTest';
import CurrentTestWrapper from './CurrentTestWrapper';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {GlobalStyle} from './GlobalStyles';
import styled from 'styled-components';
import FinishedTest from './FinishedTest';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


const AppContainer = styled.div`

`


function App() {
  return (
  	<Router>
  		<Nav/>
      <AppContainer>
      <GlobalStyle/>
      <ScrollToTop/>
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
