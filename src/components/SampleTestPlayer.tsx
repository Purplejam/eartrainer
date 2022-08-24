import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import {loadingDisc} from './TestPlayer';
//@ts-ignore
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const PlayerStyle = styled.div`
.player {
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 1.2rem .5rem;
 border: 2px solid #f1f3f4;
 background-color: #f1f3f4;
	border-radius: 5px;
	width: 20%;
}

.play-control {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-size: 1.4rem;
	svg {
		color: #6B7AA1;
		cursor: pointer;
		transition: color 150ms;
		&:hover {
			color: #97A1BC
		}
	}

	.loading-icon {
		animation: loading 1s linear infinite;
	}
}

@keyframes loading {
 0% { 
   transform: rotate(0); 
 }
 100% { 
   transform: rotate(360deg);
 }
}

@media screen and (max-width: 768px) {
	.player {
		width: 100%;
		padding: .5rem 0;
	}
  .time-control {
    width: 80%;
    p {
      padding: 0.8rem;
    }
  }

  .play-control {
    width:15%;
    font-size: 1.1rem;
  }

  .time-counter {
    width: 20%;
  }
} 
`

//main component
function SampleTestPlayer({audioRef, currentAudio, playingAudio, setPlayingAudio}: any) {
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const [audioLoading, setLoading] = useState<boolean>(false);

	//icons
	const playIcon = <FontAwesomeIcon size="2x" className="play" icon={faPlay} />
	const pauseIcon = <FontAwesomeIcon size="2x" className="pause" icon={faPause} />

	useEffect(() => {
	if (playingAudio !== currentAudio) {
			setPlaying(false);	
		}
// eslint-disable-next-line
	}, [playingAudio])


	//handlers
	function playSongHandler(): void {
		if (isPlaying) {
			audioRef.current.pause();
			setPlaying(false);
		} else if (!isPlaying) {
			audioRef.current.play();
			setPlaying(true);
		}
	}

	async function startPlaying() {
		nprogress.start();
		setLoading(true);
		setPlaying(true);
		await audioRef.current.play();
		nprogress.done();
		setTimeout(() => setLoading(false), 250);
	}

	async function setAudioHandler() {
		if (currentAudio !== playingAudio) {
			await setPlayingAudio(currentAudio);
		}
		startPlaying();
	}

	return(
		<PlayerStyle>
			<div className="player">
				<div className="play-control" onClick={() => {
					currentAudio !== playingAudio 
					? setAudioHandler()
					: playSongHandler()
				}}>
				{audioLoading 
					? loadingDisc
					: isPlaying ? pauseIcon : playIcon}
				</div>
			</div>
		</PlayerStyle>
		)
}


export default SampleTestPlayer;