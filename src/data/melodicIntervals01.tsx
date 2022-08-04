export type testType = {
	id: number,
	audio: string,
	question: string,
	answers: {
		id: number,
		answer: string
	}[],
}

export type tasksType = {
	slug: string,
	tests: testType[]
}


const tasks: tasksType = {
	'slug': 'melodic-intervals-1',
	'tests': [
	{
		'id': 0,
		'audio': 'audio-link-1',
		'question': 'Вторая нота выше или ниже относительно первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
		]
	},
	{
		'id': 1,
		'audio': 'audio-link-14',
		'question': 'Мелодия движется вверх или вниз?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Вверх'
			},
			{
				'id': 1,
				'answer': 'Вниз'
			},
		]
	}, 
	{
		'id': 2,
		'audio': 'audio-link-12',
		'question': 'Вторая нота выше или ниже относительно первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
			{
				'id': 2,
				'answer': 'Ноты одинаковы'
			},
		]
	}, 
	{
		'id': 3,
		'audio': 'audio-link-16',
		'question': 'Мелодия движется вверх или вниз?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Вверх'
			},
			{
				'id': 1,
				'answer': 'Вниз'
			},
		]
	},
	{
		'id': 4,
		'audio': 'audio-link-26',
		'question': 'Последняя нота фразы выше или ниже самой первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
			{
				'id': 2,
				'answer': 'Ноты одинаковы'
			},
		]
	},
	{
		'id': 5,
		'audio': 'audio-link-216',
		'question': 'Последняя нота фразы выше или ниже самой первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
		]
	},
	{
		'id': 6,
		'audio': 'audio-link-55',
		'question': 'Последняя нота фразы выше или ниже самой первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
		]
	},
	{
		'id': 7,
		'audio': 'audio-link-56',
		'question': 'Последняя нота фразы выше или ниже самой первой?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Ниже'
			},
			{
				'id': 1,
				'answer': 'Выше'
			},
			{
				'id': 2,
				'answer': 'Ноты одинаковы'
			},
		]
	},        
	]
}

export const answers = {
	0: 'Выше',
	1: 'Ниже',
	2: 'Ниже',
	3: 'Выше',
}


export default tasks;





