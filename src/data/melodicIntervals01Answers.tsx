import audio1 from './melodicIntervals01-audio/01.mp3';
import audio2 from './melodicIntervals01-audio/02.mp3';
import audio3 from './melodicIntervals01-audio/03.mp3';
import audio4 from './melodicIntervals01-audio/04.mp3';
import audio5 from './melodicIntervals01-audio/05.mp3';
import audio6 from './melodicIntervals01-audio/06.mp3';
import audio7 from './melodicIntervals01-audio/07.mp3';
import audio8 from './melodicIntervals01-audio/08.mp3';

export interface answersDataTypeRecords {
   [key: number]: {
				correct: string,
				audio: string,
				question: string
	}
}

const answers: answersDataTypeRecords = {
	0: {
		'correct': 'Квинта',
		'audio': audio1,
		'question': 'Квинта, кварта или терция?'
	},
	1: {
		'correct': 'Кварта',
		'audio': audio2,
		'question': 'Квинта, кварта или терция?'
	},
	2: {
		'correct': 'Большая терция',
		'audio': audio3,
		'question': 'Малая терция, большая терция или кварта?'
	},
	3: {
		'correct': 'Кварта',
		'audio': audio4,
		'question': 'Квинта, кварта или терция?'
	},
	4: {
		'correct': 'Малая терция',
		'audio': audio5,
		'question': 'Малая терция, большая терция или кварта?'
	},
	5: {
		'correct': 'Квинта',
		'audio': audio6,
		'question': 'Квинта, кварта или терция?'
	},
	6: {
		'correct': 'Малая терция',
		'audio': audio7,
		'question': 'Малая терция, большая терция или кварта?'
	},
	7: {
		'correct': 'Кварта',
		'audio': audio8,
		'question': 'Квинта, кварта или терция?'
	},
}

export default answers