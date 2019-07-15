const axios = require('axios');
const schema = require('./helper/schema');

const endpoint = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay'

module.exports = async (data) => {
	try {
		const answers = await data;
		const result = await schema.validate(answers)
		console.log(result);
		// const result = await axios.post(endpoint);
	} catch (err) {
		console.log(err);
	}
};

