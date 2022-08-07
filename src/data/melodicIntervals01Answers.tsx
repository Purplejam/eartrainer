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
		'audio': 'audio-link-1',
		'question': 'Квинта, кварта или терция?'
	},
	1: {
		'correct': 'Кварта',
		'audio': 'audio-link-14',
		'question': 'Квинта, кварта или терция?'
	},
	2: {
		'correct': 'Большая терция',
		'audio': 'audio-link-12',
		'question': 'Малая терция, большая терция или кварта?'
	},
	3: {
		'correct': 'Кварта',
		'audio': 'audio-link-16',
		'question': 'Квинта, кварта или терция?'
	},
	4: {
		'correct': 'Малая терция',
		'audio': 'audio-link-26',
		'question': 'Малая терция, большая терция или кварта?'
	},
	5: {
		'correct': 'Квинта',
		'audio': 'audio-link-216',
		'question': 'Квинта, кварта или терция?'
	},
	6: {
		'correct': 'Малая терция',
		'audio': 'audio-link-55',
		'question': 'Малая терция, большая терция или кварта?'
	},
	7: {
		'correct': 'Кварта',
		'audio': 'audio-link-56',
		'question': 'Квинта, кварта или терция?'
	},
}

export default answers