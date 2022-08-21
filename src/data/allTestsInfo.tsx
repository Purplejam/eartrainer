export type testInfoType = {
	id: number,
	name: string,
	slug: string,
	quantity: number,
	complexity: number,
	description: string,
	technique: string
}

const allTestsInfo: testInfoType[] = [
	{
	'id': 1,
	'quantity': 20,
	'name': 'Интервалы, уровень 1',
	'slug': 'melodic-intervals-1',
	'technique': 'Гармонический слух',
	'complexity': 4,
	'description': 'Простые гармонические интервалы от малой секунды до квинты. Учимся распознавать созвучия на слух. Начинайте подбирать с Вашим инструментом, а затем без него.'},
{
	'id': 2,
	'quantity': 20,
	'name': 'Интервалы, уровень 2',
	'slug': 'melodic-intervals-2',
	'technique': 'Гармонический слух',
	'complexity': 6,
	'description': 'Простые гармонические интервалы от сексты до октавы. Учимся распознавать созвучия на слух. Начинайте подбирать с Вашим инструментом, а затем без него.'},
{
	'id': 3,
	'quantity': 20,
	'name': 'Тайминг, уровень 1 (50-60ms)',
	'slug': 'rhythm-0',
	'technique': 'Ритмика',
	'complexity': 4,
	'description': 'Учимся слышать заметную спешку или отставание при работе с ритм-секцией. Если второй уровень для вас оказался сложным, проходите уровень 1, пока он не покажется простым.'},
{
	'id': 4,
	'quantity': 20,
	'name': 'Тайминг, уровень 2 (30-40ms)',
	'slug': 'rhythm-1',
	'technique': 'Ритмика',
	'complexity': 7,
	'description': 'Учимся слышать спешку и отставание при работе с ритм-секцией (в пределах 30-40мс). Важнейший навык для игры на любом инструменте вместе.'},
{
	'id': 5,
	'quantity': 20,
	'name': 'Рассинхрон, уровень 1',
	'slug': 'sync-1',
	'technique': 'Техника',
	'complexity': 4,
	'description': 'Рассинхрон – это несвоевременная работа одной из рук, которая проявляется в виде различных технических артефактов. С чем мы и боремся в занятиях техникой.'},

]

export default allTestsInfo;