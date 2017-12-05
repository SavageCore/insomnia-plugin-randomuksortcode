module.exports.templateTags = [{
	name: 'randomuksortcode',
	displayName: 'Random UK Sort Code',
	description: 'Generate a random UK bank sort code',
	args: [
		{
			displayName: 'HSBC',
			description: 'HSBC',
			type: 'boolean',
			defaultValue: true
		},
		{
			displayName: 'Lloyds',
			description: 'Lloyds',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'Barclays',
			description: 'Barclays',
			type: 'boolean',
			defaultValue: false
		},
		{
			displayName: 'The Royal Bank of Scotland',
			description: 'The Royal Bank of Scotland',
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
		}
	],
	async run(context, hsbc, lloyds, barclays, rbs, santander, coop) { // eslint-disable-line max-params
		const options = [];
		if (hsbc) {
			options.push('hsbc');
		}
		if (lloyds) {
			options.push('lloyds');
		}
		if (barclays) {
			options.push('barclays');
		}
		if (rbs) {
			options.push('rbs');
		}
		if (santander) {
			options.push('santander');
		}
		if (coop) {
			options.push('coop');
		}
		const option = options[Math.floor(Math.random() * (options.length - 0))];
    // Based on https://en.wikipedia.org/wiki/Sort_code#London_clearings
		switch (option) {
			case 'hsbc':
				return `${getRandomIntInclusive(40, 49)}-${pad(getRandomIntInclusive(0, 99), 2)}-${pad(getRandomIntInclusive(0, 99), 2)}`;
			case 'lloyds':
				return `${getRandomIntInclusive(30, 39)}-${pad(getRandomIntInclusive(0, 99), 2)}-${pad(getRandomIntInclusive(0, 99), 2)}`;
			case 'barclays':
				return `${getRandomIntInclusive(20, 29)}-${pad(getRandomIntInclusive(0, 99), 2)}-${pad(getRandomIntInclusive(0, 99), 2)}`;
			case 'rbs':
				return `${getRandomIntInclusive(15, 18)}-${pad(getRandomIntInclusive(0, 99), 2)}-${pad(getRandomIntInclusive(0, 99), 2)}`;
			case 'santander':
				return `09-${pad(getRandomIntInclusive(0, 19), 2)}-${pad(getRandomIntInclusive(0, 99), 2)}`;
			case 'coop': {
				const retValues = [];
				retValues.push(`08-${getRandomIntInclusive(60, 61)}-${pad(getRandomIntInclusive(0, 99), 2)}`);
				retValues.push(`08-${getRandomIntInclusive(90, 99)}-${pad(getRandomIntInclusive(0, 99), 2)}`);
				return retValues[Math.floor(Math.random() * (retValues.length - 0))];
			}
			default:
				return 0;
		}
		function getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		function pad(n, width, z) {
			z = z || '0';
			n = String(n);
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}
	}
}];
