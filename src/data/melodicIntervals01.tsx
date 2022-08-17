import audio1 from './melodicIntervals01-audio/01.mp3';
import audio2 from './melodicIntervals01-audio/02.mp3';
import audio3 from './melodicIntervals01-audio/03.mp3';
import audio4 from './melodicIntervals01-audio/04.mp3';
import audio5 from './melodicIntervals01-audio/05.mp3';
import audio6 from './melodicIntervals01-audio/06.mp3';
import audio7 from './melodicIntervals01-audio/07.mp3';
import audio8 from './melodicIntervals01-audio/08.mp3';
import audio9 from './melodicIntervals01-audio/09.mp3';
import audio10 from './melodicIntervals01-audio/10.mp3';
import audio11 from './melodicIntervals01-audio/11.mp3';
import audio12 from './melodicIntervals01-audio/12.mp3';
import audio13 from './melodicIntervals01-audio/13.mp3';
import audio14 from './melodicIntervals01-audio/14.mp3';
import audio15 from './melodicIntervals01-audio/15.mp3';
import audio16 from './melodicIntervals01-audio/16.mp3';
import audio17 from './melodicIntervals01-audio/17.mp3';
import audio18 from './melodicIntervals01-audio/18.mp3';
import audio19 from './melodicIntervals01-audio/19.mp3';
import audio20 from './melodicIntervals01-audio/20.mp3';

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
		'audio': audio1,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Терция'
			},
		]
	},
	{
		'id': 1,
		'audio': audio2,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Терция'
			},
		]
	}, 
	{
		'id': 2,
		'audio': audio3,
		'question': 'Малая терция, большая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Малая терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	}, 
	{
		'id': 3,
		'audio': audio4,
		'question': 'Малая терция, большая терция или кварта',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Терция'
			},
		]
	},
	{
		'id': 4,
		'audio': audio5,
		'question': 'Малая терция, большая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Малая терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 5,
		'audio': audio6,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Терция'
			},
		]
	},
	{
		'id': 6,
		'audio': audio7,
		'question': 'Малая терция, большая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Малая терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 7,
		'audio': audio8,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Терция'
			},
		]
	},
	{
		'id': 8,
		'audio': audio9,
		'question': 'Квинта, малая терция или большая терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Малая терция'
			},
			{
				'id': 2,
				'answer': 'Квинта'
			},
		]
	},
	{
		'id': 9,
		'audio': audio10,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 10,
		'audio': audio11,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 11,
		'audio': audio12,
		'question': 'Секунда, терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Секунда'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 12,
		'audio': audio13,
		'question': 'Большая терция, малая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Малая терция'
			},
		]
	}, 
	{
		'id': 13,
		'audio': audio14,
		'question': 'Большая терция, малая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Малая терция'
			},
		]
	},
	{
		'id': 14,
		'audio': audio15,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 15,
		'audio': audio16,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 16,
		'audio': audio17,
		'question': 'Большая терция, малая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Малая терция'
			},
		]
	},
	{
		'id': 17,
		'audio': audio18,
		'question': 'Секунда, терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Секунда'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 18,
		'audio': audio19,
		'question': 'Квинта, кварта или терция?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Квинта'
			},
			{
				'id': 1,
				'answer': 'Терция'
			},
			{
				'id': 2,
				'answer': 'Кварта'
			},
		]
	},
	{
		'id': 19,
		'audio': audio20,
		'question': 'Большая терция, малая терция или кварта?',
		'answers': [
			{	
				'id': 0,
				'answer': 'Большая терция'
			},
			{
				'id': 1,
				'answer': 'Кварта'
			},
			{
				'id': 2,
				'answer': 'Малая терция'
			},
		]
	},                   
	]
}



export default tasks;





