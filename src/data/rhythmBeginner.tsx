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
	'slug': 'rhythm-1',
	'tests': [
	{
		'id': 0,
		'audio': audio1,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 1,
		'audio': audio2,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	}, 
	{
		'id': 2,
		'audio': audio3,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	}, 
	{
		'id': 3,
		'audio': audio4,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 4,
		'audio': audio5,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 5,
		'audio': audio6,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 6,
		'audio': audio7,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 7,
		'audio': audio8,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 8,
		'audio': audio9,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 9,
		'audio': audio10,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 10,
		'audio': audio11,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 11,
		'audio': audio12,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 12,
		'audio': audio13,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	}, 
	{
		'id': 13,
		'audio': audio14,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 14,
		'audio': audio15,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 15,
		'audio': audio16,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 16,
		'audio': audio17,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 17,
		'audio': audio18,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 18,
		'audio': audio19,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},
	{
		'id': 19,
		'audio': audio20,
		'question': 'Гитара спешит, отстает или играет ровно относительно ударных?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Спешит'
			},
			{
				'id': 1,
				'answer': 'Отстает'
			},
			{
				'id': 2,
				'answer': 'Играет ровно'
			},
		]
	},                   
	]
}



export default tasks;





