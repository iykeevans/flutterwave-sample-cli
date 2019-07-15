import axios from 'axios';
import schema from './helper/schema';
require('dotenv').config();

const endpoint = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay'

export default async (data) => {
	try {
		const answers = await data;
		const result = await schema.validate(answers)
		const response = await axios.post(endpoint, { PBFPubKey: process.env.SECRET, ...result });

		if (response.data.status === 'success') {
			console.log('Payment Successful')
		}
	} catch (err) {
		if (err.isJoi) {
			console.log('An error occurred, ' + err.details[0].message);
		} else {
			console.log(err.response.data.message);
		}
	}
};
