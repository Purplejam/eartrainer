import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

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
  }

  .time-counter {
    width: 20%;
  }
} 
`

function SampleTestPlayer({audioRef, currentAudio, playingAudio, setPlayingAudio}: any) {
	const [isPlaying, setPlaying] = useState<boolean>(false);

	//icons
	const playIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="play" icon={faPlay} />
	const pauseIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="pause" icon={faPause} />

	useEffect(() => {
		if (playingAudio === currentAudio) {
			audioRef.current.play();
			setPlaying(true);			
		} else if(playingAudio !== currentAudio) {
			setPlaying(false);	
		}
	}, [playingAudio])

	//handlers
	function playSongHandler(): void {
		if (isPlaying) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play();
			setPlaying(true);
		}
	}
	return(
		<PlayerStyle>
			<div className="player">
				<div className="play-control" onClick={() => setPlayingAudio(currentAudio)}>
				{isPlaying ? pauseIcon : playIcon}
				</div>
			</div>
		</PlayerStyle>
		)
}


export default SampleTestPlayer;