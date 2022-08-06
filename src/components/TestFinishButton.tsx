import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const FinishButtonStyles = styled.button`
`

function TestFinishButton({answer}: any) {
	return(
		<FinishButtonStyles 
		className={`main-button ${answer === '' ? "inactive" : ""}`} 
		onClick={() => null}>Завершить тест!</FinishButtonStyles>
		)
}