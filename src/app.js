const { prompt } = require('inquirer');
const httpService = require('./httpService');
const questions = require('./questions');


const getAnswers = async () => {
	const answers = await prompt(questions)
	return answers;
}

const answers = getAnswers();
httpService(answers);
