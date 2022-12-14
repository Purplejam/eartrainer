import styled from 'styled-components';

type CurrentTestButtonType = {
	answer: string,
	isAnswered: boolean,
	newAnswerHandler: Function
}

type SkipTestButtonType = {
	currentIndex: number,
	isAnswered: boolean,
	changeSingleTest: Function
}

type FinishTestButtonType = {
	answer: string,
	finishTestHandler: Function
}

const ButtonStyles = styled.button`
		&.main-button {
		position: relative;

		&.tooltip-active::before, &.tooltip-active::after {
  	--arrow-size: 6px;
  	--tooltip-color: #97A1BC;
			position: absolute;
			top: -200%;
			left: 50%;
			transform: translateX(-50%) translateY(var(--translate-y, 0));
			transform-origin: top center;
			cursor: pointer;
		}
		&.tooltip-active::before {
			--translate-y: calc(140% - var(--arrow-size));
			content: attr(data-tooltip);
			background-color: var(--tooltip-color);
			width: max-content;
			padding: 0.4rem 2px;
			font-size: 0.7rem;
			max-width: 100%;
			width: 100%;
			border-radius: .2rem;
		}
		&.tooltip-active:focus::after, &.tooltip-active:focus::before {
		}
		&.tooltip-active::after {
			--translate-y: calc(3.2 * var(--arrow-size));
			content: '';
			border: var(--arrow-size) solid transparent;
			border-bottom-color: var(--tooltip-color);
			transform-origin: bottom center;
		}
	}

	@media (max-width: 446px) {
		&.main-button {
			&.tooltip-active::before {
				--translate-y: calc(110% - var(--arrow-size));
			}
			&.tooltip-active::after {
				--translate-y: calc(2 * var(--arrow-size));
			}
		}
	}
`

const NextButtonStyles = styled.button`
		&.simple-button {
		margin-left: 1.5rem;
	}

	@media (max-width: 446px) {
		&.simple-button {
			margin-left: 0;
		}
	}
`

//main component
function MainTestButton({answer, isAnswered, newAnswerHandler}: CurrentTestButtonType) {
	return(
			<ButtonStyles
				data-tooltip="Укажите ответ"
				onMouseUp={(e) => e.preventDefault()} 
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => answer !== '' 
				? newAnswerHandler() : (e.target as HTMLButtonElement).classList.toggle('tooltip-active')}
				className={`main-button ${answer === '' ? "inactive" : ""}`}>{isAnswered 
					? "Изменить ответ" 
					: "Ответить"}
	  </ButtonStyles>
		)
}

//skip button component
export function NextTestButton({isAnswered, currentIndex, changeSingleTest}: SkipTestButtonType) {
	return(
		<NextButtonStyles 
			className="simple-button" 
			onClick={() => changeSingleTest(currentIndex + 1)}>{isAnswered 
				? "Далее"
				: "Пропустить"}
		</NextButtonStyles>
		)
}


export function TestFinishButton({answer, finishTestHandler}: FinishTestButtonType) {
	return(
		<ButtonStyles
		data-tooltip="Укажите ответ"
		onMouseUp={(e) => e.preventDefault()} 
		className={`main-button ${answer === '' ? "inactive" : ""}`}
		onClick={(e: React.MouseEvent<HTMLButtonElement>) => answer !== '' 
		? finishTestHandler() : (e.target as HTMLButtonElement).classList.toggle('tooltip-active')}>Завершить тест!</ButtonStyles>
		)
}



export default MainTestButton;










