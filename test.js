import test from 'ava';
import ow from 'ow';
import {templateTags} from '.';

test('Barclays', async t => {
	const ret = await templateTags[0].run('', 'barclays');
	const retArr = ret.split('-');
	t.notThrows(() => ow(Number(retArr[0]), ow.number.inRange(20, 29)));
	t.notThrows(() => ow(Number(retArr[1]), ow.number.inRange(0, 99)));
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('HSBC', async t => {
	const ret = await templateTags[0].run('', 'hsbc');
	const retArr = ret.split('-');
	t.notThrows(() => ow(Number(retArr[0]), ow.number.inRange(40, 49)));
	t.notThrows(() => ow(Number(retArr[1]), ow.number.inRange(0, 99)));
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('Lloyds', async t => {
	const ret = await templateTags[0].run('', 'lloyds');
	const retArr = ret.split('-');
	t.notThrows(() => ow(Number(retArr[0]), ow.number.inRange(30, 39)));
	t.notThrows(() => ow(Number(retArr[1]), ow.number.inRange(0, 99)));
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('Santander', async t => {
	const ret = await templateTags[0].run('', 'santander');
	const retArr = ret.split('-');
	t.is(retArr[0], '09');
	t.notThrows(() => ow(Number(retArr[1]), ow.number.inRange(0, 19)));
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('Co-op', async t => {
	const ret = await templateTags[0].run('', 'coop');
	const retArr = ret.split('-');
	t.is(retArr[0], '08');
	t.notThrows(() => {
		let errs = 0;
		try {
			ow(Number(retArr[1]), ow.number.inRange(60, 61));
		} catch (err) {
			errs += 1;
		}
		try {
			ow(Number(retArr[1]), ow.number.inRange(90, 99));
		} catch (err) {
			errs += 1;
		}
		if (errs === 2) {
			throw (new Error(`Expected ${retArr[1]} to be in range [60..61] or [90..99]`));
		}
	});
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('RBS', async t => {
	const ret = await templateTags[0].run('', 'rbs');
	const retArr = ret.split('-');
	t.notThrows(() => ow(Number(retArr[0]), ow.number.inRange(15, 18)));
	t.notThrows(() => ow(Number(retArr[1]), ow.number.inRange(0, 99)));
	t.notThrows(() => ow(Number(retArr[2]), ow.number.inRange(0, 99)));
});

test('Default', async t => {
	const ret = await templateTags[0].run('', '');
	t.is(ret, 'Error - No bank selected');
});
