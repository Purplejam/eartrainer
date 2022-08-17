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
	'slug': 'melodic-intervals-2',
	'tests': [
	{
		'id': 0,
		'audio': audio1,
		'question': 'Большая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Октава'
			},
			{
				'id': 2,
				'answer': 'Малая септима'
			},
		]
	},
	{
		'id': 1,
		'audio': audio2,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Октава'
			},
			{
				'id': 2,
				'answer': 'Большая септима'
			},
		]
	}, 
	{
		'id': 2,
		'audio': audio3,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Октава'
			},
			{
				'id': 2,
				'answer': 'Большая септима'
			},
		]
	}, 
	{
		'id': 3,
		'audio': audio4,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Октава'
			},
			{
				'id': 2,
				'answer': 'Большая септима'
			},
		]
	},
	{
		'id': 4,
		'audio': audio5,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 5,
		'audio': audio6,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 6,
		'audio': audio7,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 7,
		'audio': audio8,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 8,
		'audio': audio9,
		'question': 'Малая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 9,
		'audio': audio10,
		'question': 'Большая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Октава'
			},
			{
				'id': 1,
				'answer': 'Большая секста'
			},
			{
				'id': 2,
				'answer': 'Малая септима'
			},
		]
	},
	{
		'id': 10,
		'audio': audio11,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 11,
		'audio': audio12,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 12,
		'audio': audio13,
		'question': 'Большая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	}, 
	{
		'id': 13,
		'audio': audio14,
		'question': 'Большая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая септима'
			},
			{
				'id': 1,
				'answer': 'Большая секста'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 14,
		'audio': audio15,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Октава'
			},
			{
				'id': 1,
				'answer': 'Малая секста'
			},
			{
				'id': 2,
				'answer': 'Малая септима'
			},
		]
	},
	{
		'id': 15,
		'audio': audio16,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Октава'
			},
			{
				'id': 1,
				'answer': 'Малая секста'
			},
			{
				'id': 2,
				'answer': 'Малая септима'
			},
		]
	},
	{
		'id': 16,
		'audio': audio17,
		'question': 'Малая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 17,
		'audio': audio18,
		'question': 'Большая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 18,
		'audio': audio19,
		'question': 'Большая секста, большая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая секста'
			},
			{
				'id': 1,
				'answer': 'Большая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},
	{
		'id': 19,
		'audio': audio20,
		'question': 'Малая секста, малая септима или октава?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Малая секста'
			},
			{
				'id': 1,
				'answer': 'Малая септима'
			},
			{
				'id': 2,
				'answer': 'Октава'
			},
		]
	},                   
	]
}



export default tasks;





