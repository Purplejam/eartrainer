import audio1 from './rhythm01-audio/01.mp3';
import audio2 from './rhythm01-audio/02.mp3';
import audio3 from './rhythm01-audio/03.mp3';
import audio4 from './rhythm01-audio/04.mp3';
import audio5 from './rhythm01-audio/05.mp3';
import audio6 from './rhythm01-audio/06.mp3';
import audio7 from './rhythm01-audio/07.mp3';
import audio8 from './rhythm01-audio/08.mp3';
import audio9 from './rhythm01-audio/09.mp3';
import audio10 from './rhythm01-audio/10.mp3';
import audio11 from './rhythm01-audio/11.mp3';
import audio12 from './rhythm01-audio/12.mp3';
import audio13 from './rhythm01-audio/13.mp3';
import audio14 from './rhythm01-audio/14.mp3';
import audio15 from './rhythm01-audio/15.mp3';
import audio16 from './rhythm01-audio/16.mp3';
import audio17 from './rhythm01-audio/17.mp3';
import audio18 from './rhythm01-audio/18.mp3';
import audio19 from './rhythm01-audio/19.mp3';
import audio20 from './rhythm01-audio/20.mp3';


export interface answersDataTypeRecords {
   [key: number]: {
				correct: string,
				audio: string,
				question: string
	}
}

const answers: answersDataTypeRecords = {
	0: {
		'correct': 'Играет ровно',
		'audio': audio1,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	1: {
		'correct': 'Играет ровно',
		'audio': audio2,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	2: {
		'correct': 'Спешит',
		'audio': audio3,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	3: {
		'correct': 'Отстает',
		'audio': audio4,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	4: {
		'correct': 'Спешит',
		'audio': audio5,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	5: {
		'correct': 'Спешит',
		'audio': audio6,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	6: {
		'correct': 'Играет ровно',
		'audio': audio7,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	7: {
		'correct': 'Отстает',
		'audio': audio8,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	8: {
		'correct': 'Играет ровно',
		'audio': audio9,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	9: {
		'correct': 'Отстает',
		'audio': audio10,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	10: {
		'correct': 'Спешит',
		'audio': audio11,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	11: {
		'correct': 'Играет ровно',
		'audio': audio12,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	12: {
		'correct': 'Спешит',
		'audio': audio13,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	13: {
		'correct': 'Спешит',
		'audio': audio14,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	14: {
		'correct': 'Играет ровно',
		'audio': audio15,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	15: {
		'correct': 'Отстает',
		'audio': audio16,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	16: {
		'correct': 'Спешит',
		'audio': audio17,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	17: {
		'correct': 'Играет ровно',
		'audio': audio18,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	18: {
		'correct': 'Играет ровно',
		'audio': audio19,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
	19: {
		'correct': 'Отстает',
		'audio': audio20,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
	},
}

export default answers