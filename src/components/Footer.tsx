import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

const FooterStyle = styled.footer`
 padding: 1.5rem;
	display: flex;
	align-items: center;
	color: #fff;
	background: #333;

	.author-info {
		text-align: center;
		width: 70%;
		p {
			color: #fff;
		}
	}

	.social {
		width: 30%;
		h4 {
			padding-bottom: .5rem;
		}
		.social-icons {
			padding-top: .5rem;
			display: grid;
			grid-gap: .5rem; 
			gap: .5rem;
			grid-template-columns: 5% 5% 5%;
			svg {
				color: #fff;
				transition: transform 200ms ease-in;
				&:hover {
					transform: scale(1.2);
				}
			}
		}
	}

 @media (max-width: 768px) {
 	padding: 1rem;
 	flex-direction: column;

 	.author-info {
 		width: 100%;
 	}

 	.social {
 		width: 100%;
 		text-align: center;
 		.social-icons {
 			justify-content: center;
 			padding-top: 0;
 			padding-bottom: 1rem;
 		}
 	}
 }
 @media (max-width: 415px) {
 	padding: .5rem;
 }
`

function Footer() {
	const instIcon = <FontAwesomeIcon icon={faInstagram}/>
	const tgIcon = <FontAwesomeIcon icon={faTelegram}/>
	const gitIcon = <FontAwesomeIcon icon={faGithub}/>

	return(
		<FooterStyle>
			<div className="author-info">
				<p>by Kuzmenko Alexander, 2022</p>
			</div>

			<div className="social">
				<h4>Contact me:</h4>
				<div className="social-icons">				
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/alexanderkkqq">
						{instIcon}
					</a>
					<a target="_blank" rel="noreferrer" href="https://t.me/purplejamguitar">
						{tgIcon}
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/Purplejam">
						{gitIcon}
					</a>
				</div>
			</div>
			
		</FooterStyle>
		)
}

export default Footer;