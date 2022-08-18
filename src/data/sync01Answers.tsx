import audio1 from './sync-01-audio/01.mp3';
import audio2 from './sync-01-audio/02.mp3';
import audio3 from './sync-01-audio/03.mp3';
import audio4 from './sync-01-audio/04.mp3';
import audio5 from './sync-01-audio/05.mp3';
import audio6 from './sync-01-audio/06.mp3';
import audio7 from './sync-01-audio/07.mp3';
import audio8 from './sync-01-audio/08.mp3';
import audio9 from './sync-01-audio/09.mp3';
import audio10 from './sync-01-audio/10.mp3';
import audio11 from './sync-01-audio/11.mp3';
import audio12 from './sync-01-audio/12.mp3';
import audio13 from './sync-01-audio/13.mp3';
import audio14 from './sync-01-audio/14.mp3';
import audio15 from './sync-01-audio/15.mp3';
import audio16 from './sync-01-audio/16.mp3';
import audio17 from './sync-01-audio/17.mp3';
import audio18 from './sync-01-audio/18.mp3';
import audio19 from './sync-01-audio/19.mp3';
import audio20 from './sync-01-audio/20.mp3';


export interface answersDataTypeRecords {
 [key: number]: {
		correct: string,
		audio: string,
		question: string
	}
}

const answers: answersDataTypeRecords = {
	0: {
		'correct': 'Рассинхрона нет',
		'audio': audio1,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	1: {
		'correct': 'Рассинхрон есть',
		'audio': audio2,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	2: {
		'correct': 'Рассинхрона нет',
		'audio': audio3,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	3: {
		'correct': 'Рассинхрон есть',
		'audio': audio4,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	4: {
		'correct': 'Рассинхрона нет',
		'audio': audio5,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	5: {
		'correct': 'Рассинхрон есть',
		'audio': audio6,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	6: {
		'correct': 'Рассинхрона нет',
		'audio': audio7,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	7: {
		'correct': 'Рассинхрон есть',
		'audio': audio8,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	8: {
		'correct': 'Рассинхрона нет',
		'audio': audio9,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	9: {
		'correct': 'Рассинхрон есть',
		'audio': audio10,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	10: {
		'correct': 'Рассинхрона нет',
		'audio': audio11,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	11: {
		'correct': 'Рассинхрон есть',
		'audio': audio12,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	12: {
		'correct': 'Рассинхрона нет',
		'audio': audio13,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	13: {
		'correct': 'Рассинхрон есть',
		'audio': audio14,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	14: {
		'correct': 'Рассинхрона нет',
		'audio': audio15,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	15: {
		'correct': 'Рассинхрон есть',
		'audio': audio16,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	16: {
		'correct': 'Рассинхрона нет',
		'audio': audio17,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	17: {
		'correct': 'Рассинхрон есть',
		'audio': audio18,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	18: {
		'correct': 'Рассинхрона нет',
		'audio': audio19,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
	19: {
		'correct': 'Рассинхрон есть',
		'audio': audio20,
		'question': 'Фраза сыграна с рассинхроном или нет?',
	},
}

export default answers