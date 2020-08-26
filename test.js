import test from 'ava';
import {templateTags} from '.';

const inRange = require('in-range');

test('Barclays', async t => {
	const returnValue = await templateTags[0].run('', 'barclays');
	const returnValueArray = returnValue.split('-');
	t.true(inRange(Number(returnValueArray[0]), 20, 29));
	t.true(inRange(Number(returnValueArray[1]), 0, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('HSBC', async t => {
	const returnValue = await templateTags[0].run('', 'hsbc');
	const returnValueArray = returnValue.split('-');
	t.true(inRange(Number(returnValueArray[0]), 40, 49));
	t.true(inRange(Number(returnValueArray[1]), 0, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('Lloyds', async t => {
	const returnValue = await templateTags[0].run('', 'lloyds');
	const returnValueArray = returnValue.split('-');
	t.true(inRange(Number(returnValueArray[0]), 30, 39));
	t.true(inRange(Number(returnValueArray[1]), 0, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('Santander', async t => {
	const returnValue = await templateTags[0].run('', 'santander');
	const returnValueArray = returnValue.split('-');
	t.is(returnValueArray[0], '09');
	t.true(inRange(Number(returnValueArray[1]), 0, 19));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('Co-op', async t => {
	const returnValue = await templateTags[0].run('', 'coop');
	const returnValueArray = returnValue.split('-');
	t.is(returnValueArray[0], '08');
	t.true(inRange(Number(returnValueArray[1]), 60, 61) || inRange(Number(returnValueArray[1]), 90, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('RBS', async t => {
	const returnValue = await templateTags[0].run('', 'rbs');
	const returnValueArray = returnValue.split('-');
	t.true(inRange(Number(returnValueArray[0]), 15, 18));
	t.true(inRange(Number(returnValueArray[1]), 0, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});

test('Bank blank', async t => {
	const returnValue = await templateTags[0].run('', '');
	t.is(returnValue, 'Error - No bank selected');
});

test('Bank unset', async t => {
	const returnValue = await templateTags[0].run('');
	const returnValueArray = returnValue.split('-');
	t.true(inRange(Number(returnValueArray[0]), 20, 29));
	t.true(inRange(Number(returnValueArray[1]), 0, 99));
	t.true(inRange(Number(returnValueArray[2]), 0, 99));
});
