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
	'name': 'Гармонические интервалы, уровень 1',
	'slug': 'melodic-intervals-1',
	'technique': 'Гармонический слух',
	'complexity': 3,
	'description': 'Простые гармонические интервалы от малой секунды до квинты. Вы научитесь распознавать разные созвучия на слух. Начинайте подбирать с Вашим инструментом, а затем без него.'},
{
	'id': 2,
	'quantity': 20,
	'name': 'Гармонические интервалы, уровень 2',
	'slug': 'melodic-intervals-2',
	'technique': 'Гармонический слух',
	'complexity': 4,
	'description': 'Простые гармонические интервалы от сексты до октавы. Вы научитесь распознавать разные созвучия на слух. Начинайте подбирать с Вашим инструментом, а затем без него.'},
{
	'id': 3,
	'quantity': 20,
	'name': 'Рассинхрон, уровень 1',
	'slug': 'synchronisation-1',
	'technique': 'Гармонически1 слух',
	'complexity': 4,
	'description': 'Простые гармонические интервалы от сексты до октавы. Вы научитесь распознавать разные созвучия на слух. Начинайте подбирать с Вашим инструментом, а затем без него.'},
]

export default allTestsInfo;