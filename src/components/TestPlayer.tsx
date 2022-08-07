import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayerStyle = styled.div`
.player {
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-bottom: 2rem;
 margin-top: 2rem;
}

.time-control {
  width: 30%;
  display: flex;
  align-items: center;
	input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
	}
	p {
		padding: 1.3rem;
	}
}

.play-control {
	width: 4rem;
	display: flex;
	justify-content: space-between;
	svg {
		color: #6B7AA1;
		cursor: pointer;
		transition: color 150ms;
		&:hover {
			color: #97A1BC
		}
	}
}

.time-counter {
	width: 15%;
	text-align: center;
}

.selected {
	background-color: rgba(130, 109, 166, 0.5) !important;
  span {
    opacity: 1 !important;
  }
}

.track {
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: blue;
}
.animate-track {
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  padding: 1rem;
  pointer-events: none;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  opacity: 0;
  height: 16px;
  width: 16px;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  opacity: 0;
  background: transparent;
  border: none;
}

input[type="range"]::-ms-thumb {
  opacity:0;
}

@media screen and (max-width: 768px) {
  .time-control {
    width: 90%;
    p {
      padding: 0.8rem;
    }
  }

  .play-control {
    width:85%;
  }

  .time-counter {
    width: 20%;
  }
} 
`

function Player({currentAudio}: any) {
	const [isPlaying, setPlaying] = useState<boolean>(false);
  const [audioInfo, setAudioInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatedInput: 0
  })
	const audioRef = useRef<any | HTMLAudioElement>(null);
//icons
	const playIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="play" icon={faPlay} />
	const pauseIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="pause" icon={faPause} />
	
	useEffect(() => {
		audioRef.current.play();
		setPlaying(true);
	}, [currentAudio])

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

 function timeUpdateHandler(e: React.ChangeEvent<HTMLAudioElement>): void {

  let current = e.target.currentTime;
  let duration = e.target.duration;
  setAudioInfo({
    ...audioInfo,
    currentTime: current,
    animatedInput: Math.round(current / duration * 100),
  })
}


	function dragHandler(e: React.ChangeEvent<HTMLInputElement>): void {
		audioRef.current.currentTime = e.target.value;
		setAudioInfo({
			...audioInfo,
			currentTime: +e.target.value
		})
	}

 function getDurationHandler(e: React.ChangeEvent<HTMLAudioElement>): void  {
   setAudioInfo({
     ...audioInfo,
     duration: e.target.duration,
     animatedInput: 0
   })
 }

 function audioEndHandler() {
 	setPlaying(false);
 	setAudioInfo({
 		...audioInfo,
 		currentTime: 0,
 		animatedInput: 100
 	})
 }

	return(
		<PlayerStyle>
			<div className="player">
				<div className="play-control">
				{isPlaying ? pauseIcon : playIcon}
				</div>
				<div className="time-control">
					<div style={{background: `linear-gradient(to right, #6B7AA1, #97A1BC)`}} className="track">				
						<input type="range" 
										min={0} 
										id="volume"
										name="volume"
										value={audioInfo.currentTime} 
										max={audioInfo.duration} 
										onChange={dragHandler}/>
							<div style={{transform: `translateX(${audioInfo.animatedInput}%)`}} className="animate-track"></div>
					</div>
				</div>
	  <audio
	  		onEnded={audioEndHandler} 
	    onLoadedMetadata={getDurationHandler} 
	    ref={audioRef} 
	    src={`${currentAudio}`} 
	    onTimeUpdate={timeUpdateHandler}></audio>
			</div>
		</PlayerStyle>
		)
}


export default Player;