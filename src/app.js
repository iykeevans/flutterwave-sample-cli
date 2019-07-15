import { prompt } from 'inquirer';
import httpService from './httpService';
import questions from './questions';


const getAnswers = async () => await prompt(questions);

httpService(getAnswers());
