import {Link} from "react-router-dom";
import styled from 'styled-components';

const NavStyle = styled.nav`
	padding: 0rem 5rem 0rem 5rem;
	height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 1px 30px 0 rgba(32,33,36,0.28);
	ul {
		li {
			display: inline-block;
			padding: 0rem 0.5rem;
			font-weight: 600;
			a {
				line-height: 10vh;
			}
			&:after {
				display:block;
		  content: '';
		  border-bottom: solid 3px #F38BA0;  
		  transform: scaleX(0);  
		  transition: transform 180ms ease-in-out;
		  transform-origin:  0% 50%;
			}
			&:hover:after {
				transform: scaleX(1); 
			}
		}
	}
`

const Logo = styled.h3`
	cursor: pointer;
`

function Nav() {
  return (
    <NavStyle>
    	<Logo>Eartrainer</Logo>
	     <div>
	     	<ul>
	     		<li><Link to="/">Главная</Link></li>
	     		<li><Link to="/current-test">Пройти тест</Link></li>
	     	</ul>    	  	
	    	</div>
    </NavStyle>
  );
}

export default Nav;