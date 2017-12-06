import test from 'ava';
import {templateTags} from './index';

const inRange = require('in-range');

test('Barclays', async t => {
	const ret = await templateTags[0].run('', true, false, false, false, false, false);
	const retArr = ret.split('-');
	t.true(inRange(Number(retArr[0]), 20, 29));
	t.true(inRange(Number(retArr[1]), 0, 99));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('HSBC', async t => {
	const ret = await templateTags[0].run('', false, true, false, false, false, false);
	const retArr = ret.split('-');
	t.true(inRange(Number(retArr[0]), 40, 49));
	t.true(inRange(Number(retArr[1]), 0, 99));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('Lloyds', async t => {
	const ret = await templateTags[0].run('', false, false, true, false, false, false);
	const retArr = ret.split('-');
	t.true(inRange(Number(retArr[0]), 30, 39));
	t.true(inRange(Number(retArr[1]), 0, 99));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('Santander', async t => {
	const ret = await templateTags[0].run('', false, false, false, true, false, false);
	const retArr = ret.split('-');
	t.is(retArr[0], '09');
	t.true(inRange(Number(retArr[1]), 0, 19));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('Co-op', async t => {
	const ret = await templateTags[0].run('', false, false, false, false, true, false);
	const retArr = ret.split('-');
	t.is(retArr[0], '08');
	t.true(inRange(Number(retArr[1]), 60, 61) || inRange(Number(retArr[1]), 90, 99));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('RBS', async t => {
	const ret = await templateTags[0].run('', false, false, false, false, false, true);
	const retArr = ret.split('-');
	t.true(inRange(Number(retArr[0]), 15, 18));
	t.true(inRange(Number(retArr[1]), 0, 99));
	t.true(inRange(Number(retArr[2]), 0, 99));
});

test('Default', async t => {
	const ret = await templateTags[0].run('', false, false, false, false, false, false);
	t.is(ret, 0);
});
