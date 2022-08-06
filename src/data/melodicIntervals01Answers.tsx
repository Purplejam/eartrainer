export interface answersDataTypeRecords {
   [key: number]: {
				correct: string,
				audio: string,
				question: string
	}
}


const answers: answersDataTypeRecords = {
	0: {
		'correct': 'Выше',
		'audio': 'audio-link-1',
		'question': 'Вторая нота выше или ниже относительно первой?'
	},
	1: {
		'correct': 'Вверх',
		'audio': 'audio-link-14',
		'question': 'Мелодия движется вверх или вниз?'
	},
	2: {
		'correct': 'Ниже',
		'audio': 'audio-link-12',
		'question': 'Вторая нота выше или ниже относительно первой?'
	},
	3: {
		'correct': 'Вверх',
		'audio': 'audio-link-16',
		'question': 'Мелодия движется вверх или вниз?'
	},
	4: {
		'correct': 'Ниже',
		'audio': 'audio-link-26',
		'question': 'Последняя нота фразы выше или ниже самой первой?'
	},
	5: {
		'correct': 'Ниже',
		'audio': 'audio-link-216',
		'question': 'Последняя нота фразы выше или ниже самой первой?'
	},
	6: {
		'correct': 'Выше',
		'audio': 'audio-link-55',
		'question': 'Последняя нота фразы выше или ниже самой первой?'
	},
	7: {
		'correct': 'Выше',
		'audio': 'audio-link-56',
		'question': 'Последняя нота фразы выше или ниже самой первой?'
	},
}

export default answers