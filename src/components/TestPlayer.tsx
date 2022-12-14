import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
//@ts-ignore
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

type PlayerType = {
	currentAudio: string
}

const PlayerStyle = styled.div`
.player {
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 2rem 0;
 border: 2px solid #f1f3f4;
 background-color: #f1f3f4;
	border-radius: 5px;
	width: 50%;
	margin-bottom: 1rem;	
}

.time-control {
  width: 75%;
  display: flex;
  align-items: center;
	input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: col-resize;
	}
	p {
		padding: 1.3rem;
	}
}

.play-control {
	position: relative;
	width: 15%;
	display: flex;
	justify-content: space-around;
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
  -webkit-mask-image: -webkit-radial-gradient(white, black);
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
  transition: transform 0ms linear;
  cursor: col-resize;
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
		padding: 1rem 0;
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
export const loadingDisc = <FontAwesomeIcon size="2x" className="loading-icon" icon={faCompactDisc} />

//main component
function Player({currentAudio}: PlayerType) {
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const [audioLoading, setLoading] = useState<boolean>(true);
	const [slowAnimation, setAnimation] = useState<boolean>(true);
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
		setAnimation(false);
		setLoading(true);
		setPlaying(true);
		setAudioInfo({
    currentTime: 0,
    duration: 0,
    animatedInput: 0			
		});
		startPlaying();
	}, [currentAudio])

//handlers
	async function startPlaying() {
		nprogress.start();
		await audioRef.current.play();
		nprogress.done();
		setTimeout(() => setLoading(false), 250);
	}


	function playSongHandler(): void {
		if (isPlaying) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play();
			setPlaying(true);
			setTimeout(() => setAnimation(true), 100);
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
		});
	}

 function getDurationHandler(e: React.ChangeEvent<HTMLAudioElement>): void  {
		setAnimation(true);
  setAudioInfo({
    ...audioInfo,
    duration: e.target.duration,
    animatedInput: 0
  })
 }

 function audioEndHandler() {
 	setPlaying(false);
 	setAnimation(false);
 	setAudioInfo({
 		...audioInfo,
 		currentTime: 0,
 		animatedInput: 100
 	})
 }


	return(
		<PlayerStyle>
			<div className="player">
				<div className="play-control" id="play-control">
				{audioLoading 
					? loadingDisc
					: isPlaying ? pauseIcon : playIcon}
				</div>
				<div className="time-control">
					<div style={{background: `linear-gradient(to right, #6B7AA1, #97A1BC)`}} className="track">				
						<input 
							type="range" 
							min={0} 
							id="volume"
							name="volume"
							value={audioInfo.currentTime} 
							max={audioInfo.duration} 
							onChange={dragHandler}/>
							<div 
							style={{transform: `translateX(${audioInfo.animatedInput}%)`,
							transition: `${slowAnimation 
								? isPlaying ? "transform 250ms linear" : "transform 0ms linear"
								: "transform 0ms linear"}`}} className="animate-track"></div>
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