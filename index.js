import randomInt from 'random-int';
import zeroFill from 'zero-fill';

export const templateTags = [{
	name: 'randomuksortcode',
	displayName: 'Random UK Sort Code',
	description: 'Generate a random UK bank sort code',
	args: [
		{
			displayName: 'Bank',
			type: 'enum',
			options: [
				{displayName: 'Barclays', value: 'barclays'},
				{displayName: 'HSBC', value: 'hsbc'},
				{displayName: 'Lloyds', value: 'lloyds'},
				{displayName: 'Santander UK', value: 'santander'},
				{displayName: 'The Co-operative Bank', value: 'coop'},
				{displayName: 'The Royal Bank of Scotland', value: 'rbs'},
			],
		},
	],
	async run(context, bank = 'barclays') {
		// Based on https://en.wikipedia.org/wiki/Sort_code#London_clearings
		switch (bank) {
			case 'barclays':
				return `${randomInt(20, 29)}-${zeroFill(2, randomInt(0, 99))}-${zeroFill(2, randomInt(0, 99))}`;
			case 'hsbc':
				return `${randomInt(40, 49)}-${zeroFill(2, randomInt(0, 99))}-${zeroFill(2, randomInt(0, 99))}`;
			case 'lloyds':
				return `${randomInt(30, 39)}-${zeroFill(2, randomInt(0, 99))}-${zeroFill(2, randomInt(0, 99))}`;
			case 'santander':
				return `09-${zeroFill(2, randomInt(0, 19))}-${zeroFill(2, randomInt(0, 99))}`;
			case 'coop': {
				const returnValueValues = [];
				returnValueValues.push(`08-${randomInt(60, 61)}-${zeroFill(2, randomInt(0, 99))}`, `08-${randomInt(90, 99)}-${zeroFill(2, randomInt(0, 99))}`);
				return returnValueValues[Math.floor(Math.random() * (returnValueValues.length - 0))];
			}

			case 'rbs':
				return `${randomInt(15, 18)}-${zeroFill(2, randomInt(0, 99))}-${zeroFill(2, randomInt(0, 99))}`;
			default:
				return 'Error - No bank selected';
		}
	},
}];
