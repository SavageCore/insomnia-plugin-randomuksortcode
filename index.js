const randomInt = require('random-int');
const zeroFill = require('zero-fill');

module.exports.templateTags = [{
	name: 'randomuksortcode',
	displayName: 'Random UK Sort Code',
	description: 'Generate a random UK bank sort code',
	args: [
		{
			displayName: 'Barclays',
			description: 'Barclays',
			type: 'boolean',
			defaultValue: true
		},
		{
			displayName: 'HSBC',
			description: 'HSBC',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'Lloyds',
			description: 'Lloyds',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'Santander UK',
			description: 'Santander UK',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'The Co-operative Bank',
			description: 'The Co-operative Bank',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'The Royal Bank of Scotland',
			description: 'The Royal Bank of Scotland',
			type: 'boolean',
			defaultValue: false
		}
	],
	async run(context, barclays, hsbc, lloyds, santander, coop, rbs) { // eslint-disable-line max-params
		const options = [];
		if (barclays) {
			options.push('barclays');
		}
		if (hsbc) {
			options.push('hsbc');
		}
		if (lloyds) {
			options.push('lloyds');
		}
		if (santander) {
			options.push('santander');
		}
		if (coop) {
			options.push('coop');
		}
		if (rbs) {
			options.push('rbs');
		}
		const option = options[Math.floor(Math.random() * (options.length - 0))];
    // Based on https://en.wikipedia.org/wiki/Sort_code#London_clearings
		switch (option) {
			case 'barclays':
				return `${randomInt(20, 29)}-${zeroFill(2, randomInt(0, 99), 2)}-${zeroFill(randomInt(0, 99))}`;
			case 'hsbc':
				return `${randomInt(40, 49)}-${zeroFill(2, randomInt(0, 99), 2)}-${zeroFill(randomInt(0, 99))}`;
			case 'lloyds':
				return `${randomInt(30, 39)}-${zeroFill(2, randomInt(0, 99), 2)}-${zeroFill(randomInt(0, 99))}`;
			case 'santander':
				return `09-${zeroFill(2, randomInt(0, 19), 2)}-${zeroFill(randomInt(0, 99))}`;
			case 'coop': {
				const retValues = [];
				retValues.push(`08-${randomInt(60, 61)}-${zeroFill(2, randomInt(0, 99))}`);
				retValues.push(`08-${randomInt(90, 99)}-${zeroFill(2, randomInt(0, 99))}`);
				return retValues[Math.floor(Math.random() * (retValues.length - 0))];
			}
			case 'rbs':
				return `${randomInt(15, 18)}-${zeroFill(2, randomInt(0, 99), 2)}-${zeroFill(randomInt(0, 99))}`;
			default:
				return 0;
		}
	}
}];
