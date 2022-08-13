import getProgammingLanguage from 'guess-programming-language';

async function getCodingLanguage(value) {
	console.log(value);
	console.log(await getProgammingLanguage(value));
}

export default getCodingLanguage;
