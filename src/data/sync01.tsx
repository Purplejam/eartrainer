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
	'slug': 'sync-1',
	'tests': [
	{
		'id': 0,
		'audio': audio1,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 1,
		'audio': audio2,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	}, 
	{
		'id': 2,
		'audio': audio3,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	}, 
	{
		'id': 3,
		'audio': audio4,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 4,
		'audio': audio5,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 5,
		'audio': audio6,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 6,
		'audio': audio7,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 7,
		'audio': audio8,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 8,
		'audio': audio9,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 9,
		'audio': audio10,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 10,
		'audio': audio11,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 11,
		'audio': audio12,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 12,
		'audio': audio13,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	}, 
	{
		'id': 13,
		'audio': audio14,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 14,
		'audio': audio15,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 15,
		'audio': audio16,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 16,
		'audio': audio17,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 17,
		'audio': audio18,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 18,
		'audio': audio19,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},
	{
		'id': 19,
		'audio': audio20,
		'question': 'Фраза сыграна с рассинхроном или нет?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Рассинхрон есть'
			},
			{
				'id': 1,
				'answer': 'Рассинхрона нет'
			},
		]
	},                   
	]
}



export default tasks;





