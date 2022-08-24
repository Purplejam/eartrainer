import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const FooterStyle = styled.footer`
 padding: 1rem;
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
			padding-bottom: 0rem;
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
 			grid-template-columns: 10% 10% 10%;
 		}
 	}
 }
 @media (max-width: 415px) {
 	padding: 1.5rem .5rem .5rem .5rem;

 	.social {
 		.social-icons {
 			padding-top: .5rem;
 		}
 	}
 }
`

//main component
function Footer() {
	const instIcon = <FontAwesomeIcon icon={faInstagram}/>
	const tgIcon = <FontAwesomeIcon icon={faTelegram}/>
	const webIcon = <FontAwesomeIcon icon={faGlobe}/>

	return(
		<FooterStyle>
			<div className="author-info">
				<p>@ Кузьменко Александр, 2022</p>
			</div>

			<div className="social">
				<h4>Контакты:</h4>
				<div className="social-icons">				
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/alexanderkkqq">
						{instIcon}
					</a>
					<a target="_blank" rel="noreferrer" href="https://t.me/alexkuzmenko09">
						{tgIcon}
					</a>
					<a target="_blank" rel="noreferrer" href="https://purplejam.com.ua/">
						{webIcon}
					</a>
				</div>
			</div>
			
		</FooterStyle>
		)
}

export default Footer;