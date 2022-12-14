import audio1 from './melodicIntervals01-audio/01.mp3';
import audio2 from './melodicIntervals01-audio/02.mp3';
import audio3 from './melodicIntervals01-audio/03.mp3';
import audio4 from './melodicIntervals01-audio/04.mp3';
import audio5 from './melodicIntervals01-audio/05.mp3';
import audio6 from './melodicIntervals01-audio/06.mp3';
import audio7 from './melodicIntervals01-audio/07.mp3';
import audio8 from './melodicIntervals01-audio/08.mp3';
import audio9 from './melodicIntervals01-audio/09.mp3';
import audio10 from './melodicIntervals01-audio/10.mp3';
import audio11 from './melodicIntervals01-audio/11.mp3';
import audio12 from './melodicIntervals01-audio/12.mp3';
import audio13 from './melodicIntervals01-audio/13.mp3';
import audio14 from './melodicIntervals01-audio/14.mp3';
import audio15 from './melodicIntervals01-audio/15.mp3';
import audio16 from './melodicIntervals01-audio/16.mp3';
import audio17 from './melodicIntervals01-audio/17.mp3';
import audio18 from './melodicIntervals01-audio/18.mp3';
import audio19 from './melodicIntervals01-audio/19.mp3';
import audio20 from './melodicIntervals01-audio/20.mp3';

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
	8: {
		'correct': 'Большая терция',
		'audio': audio9,
		'question': 'Квинта, малая терция или большая терция?'
	},
	9: {
		'correct': 'Квинта',
		'audio': audio10,
		'question': 'Квинта, кварта или терция?'
	},
	10: {
		'correct': 'Кварта',
		'audio': audio11,
		'question': 'Квинта, кварта или терция?'
	},
	11: {
		'correct': 'Секунда',
		'audio': audio12,
		'question': 'Секунда, терция или кварта?'
	},
	12: {
		'correct': 'Кварта',
		'audio': audio13,
		'question': 'Большая терция, малая терция или кварта?'
	},
	13: {
		'correct': 'Малая терция',
		'audio': audio14,
		'question': 'Большая терция, малая терция или кварта?'
	},
	14: {
		'correct': 'Кварта',
		'audio': audio15,
		'question': 'Квинта, кварта или терция?'
	},
	15: {
		'correct': 'Квинта',
		'audio': audio16,
		'question': 'Квинта, кварта или терция?'
	},
	16: {
		'correct': 'Большая терция',
		'audio': audio17,
		'question': 'Большая терция, малая терция или кварта?'
	},
	17: {
		'correct': 'Секунда',
		'audio': audio18,
		'question': 'Секунда, терция или кварта?'
	},
	18: {
		'correct': 'Кварта',
		'audio': audio19,
		'question': 'Квинта, кварта или терция?'
	},
	19: {
		'correct': 'Большая терция',
		'audio': audio20,
		'question': 'Большая терция, малая терция или кварта?'
	},
}

export default answers