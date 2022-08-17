import audio1 from './melodicIntervals02-audio/01.mp3';
import audio2 from './melodicIntervals02-audio/02.mp3';
import audio3 from './melodicIntervals02-audio/03.mp3';
import audio4 from './melodicIntervals02-audio/04.mp3';
import audio5 from './melodicIntervals02-audio/05.mp3';
import audio6 from './melodicIntervals02-audio/06.mp3';
import audio7 from './melodicIntervals02-audio/07.mp3';
import audio8 from './melodicIntervals02-audio/08.mp3';
import audio9 from './melodicIntervals02-audio/09.mp3';
import audio10 from './melodicIntervals02-audio/10.mp3';
import audio11 from './melodicIntervals02-audio/11.mp3';
import audio12 from './melodicIntervals02-audio/12.mp3';
import audio13 from './melodicIntervals02-audio/13.mp3';
import audio14 from './melodicIntervals02-audio/14.mp3';
import audio15 from './melodicIntervals02-audio/15.mp3';
import audio16 from './melodicIntervals02-audio/16.mp3';
import audio17 from './melodicIntervals02-audio/17.mp3';
import audio18 from './melodicIntervals02-audio/18.mp3';
import audio19 from './melodicIntervals02-audio/19.mp3';
import audio20 from './melodicIntervals02-audio/20.mp3';


export interface answersDataTypeRecords {
   [key: number]: {
				correct: string,
				audio: string,
				question: string
	}
}

const answers: answersDataTypeRecords = {
	0: {
		'correct': 'Октава',
		'audio': audio1,
		'question': 'Большая секста, малая септима или октава?'
	},
	1: {
		'correct': 'Большая септима',
		'audio': audio2,
		'question': 'Большая секста, большая септима или октава?'
	},
	2: {
		'correct': 'Большая секста',
		'audio': audio3,
		'question': 'Большая секста, большая септима или октава?'
	},
	3: {
		'correct': 'Большая секста',
		'audio': audio4,
		'question': 'Большая секста, большая септима или октава?'
	},
	4: {
		'correct': 'Малая секста',
		'audio': audio5,
		'question': 'Малая секста, малая септима или октава?'
	},
	5: {
		'correct': 'Малая септима',
		'audio': audio6,
		'question': 'Малая секста, малая септима или октава?'
	},
	6: {
		'correct': 'Малая секста',
		'audio': audio7,
		'question': 'Малая секста, малая септима или октава?'
	},
	7: {
		'correct': 'Большая секста',
		'audio': audio8,
		'question': 'Большая секста, большая септима или октава?'
	},
	8: {
		'correct': 'Малая секста',
		'audio': audio9,
		'question': 'Малая секста, малая септима или октава?'
	},
	9: {
		'correct': 'Октава',
		'audio': audio10,
		'question': 'Большая секста, малая септима или октава?'
	},
	10: {
		'correct': 'Большая септима',
		'audio': audio11,
		'question': 'Большая секста, большая септима или октава?'
	},
	11: {
		'correct': 'Большая септима',
		'audio': audio12,
		'question': 'Большая секста, большая септима или октава?'
	},
	12: {
		'correct': 'Большая секста',
		'audio': audio13,
		'question': 'Большая секста, малая септима или октава?'
	},
	13: {
		'correct': 'Большая секста',
		'audio': audio14,
		'question': 'Большая секста, малая септима или октава?'
	},
	14: {
		'correct': 'Октава',
		'audio': audio15,
		'question': 'Малая секста, малая септима или октава?'
	},
	15: {
		'correct': 'Малая секста',
		'audio': audio16,
		'question': 'Малая секста, малая септима или октава?'
	},
	16: {
		'correct': 'Большая септима',
		'audio': audio17,
		'question': 'Малая секста, большая септима или октава?'
	},
	17: {
		'correct': 'Октава',
		'audio': audio18,
		'question': 'Большая секста, малая септима или октава?'
	},
	18: {
		'correct': 'Большая септима',
		'audio': audio19,
		'question': 'Большая секста, большая септима или октава?'
	},
	19: {
		'correct': 'Малая септима',
		'audio': audio6,
		'question': 'Малая секста, малая септима или октава?'
	},
}

export default answers