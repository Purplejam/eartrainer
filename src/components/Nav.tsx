import {Link} from "react-router-dom";
import styled from 'styled-components';
import headphones from '../img/ear-listen-solid.svg';
import { faEarListen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavStyle = styled.nav`
	padding: 0 5rem;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 1px 30px 0 rgba(32,33,36,0.28);
	ul {
		li {
			display: inline-block;
			padding: 0rem 0.5rem;
			font-weight: 600;
			cursor: pointer;
			a {
				padding: 1.5rem 0rem;
				line-height: 3.6rem;
			}
			&:after {
				display:block;
		  content: '';
		  border-bottom: solid .2rem #F38BA0;  
		  transform: scaleX(0);  
		  transition: transform 180ms ease-in-out;
		  transform-origin:  0% 50%;
			}
			&:before {
				display:block;
		  content: '';
		  border-bottom: solid .2rem #FFF;  
		  transform: scaleX(0);  
		  transition: transform 180ms ease-in-out;
		  transform-origin:  0% 50%;
			}
			&:hover:after {
				transform: scaleX(1); 
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0 3rem;
	}

	@media (max-width: 415px) {
		padding: 0 1rem;
	}
`

const Logo = styled.h3`
	font-family: 'Kanit', sans-serif;
	cursor: pointer;
	svg {
		padding-right: .5rem;
	}
`

const logoEarIcon = <FontAwesomeIcon icon={faEarListen}/>

//main component
function Nav() {
  return (
    <NavStyle>
    	<Link to="/"><Logo>{logoEarIcon}Eartrainer</Logo></Link>
	     <div>
	     	<ul>
	     		<li><Link to="/">Главная</Link></li>
	     		<li><Link to="/current-test">Случайный тест</Link></li>
	     	</ul>    	  	
	    	</div>
    </NavStyle>
  );
}

export default Nav;