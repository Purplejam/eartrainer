type testType = {
	id: number,
	audio: string,
	question: string,
	answers: {
		id: number,
		answer: string
	}[],
}

type tasksType = {
	slug: string,
	tests: testType[]
}


const tasks: tasksType = {
	'slug': 'melodic-intervals-1',
	'tests': [
	{
		'id': 0,
		'audio': '',
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
		'audio': '',
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
		'id': 2,
		'audio': '',
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
		'id': 3,
		'audio': '',
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
	]
}

const answers = {
	0: 'Выше',
	1: 'Ниже',
	2: 'Ниже',
	3: 'Выше',
}


export default tasks;





