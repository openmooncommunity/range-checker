import test from 'ava';
import isInRange from './index.js';

test('Number is within the range', t => {
    t.true(isInRange(30, { end: 100 }));
    t.true(isInRange(30, { start: 10, end: 100 }));
    t.true(isInRange(30, { start: 100, end: 10 }));
    t.false(isInRange(30, { end: 10 }));
    t.true(isInRange(30n, { start: 100n, end: 10 }));
});

test('Number is outside the range', t => {
    t.false(isInRange(5, { start: 10, end: 100 }));
    t.false(isInRange(200, { start: 10, end: 100 }));
});

test('Number is equal to the start or end of the range', t => {
    t.true(isInRange(10, { start: 10, end: 100 }));
    t.true(isInRange(100, { start: 10, end: 100 }));
});

test('Negative numbers are within the range', t => {
    t.true(isInRange(-50, { start: -100, end: 0 }));
    t.false(isInRange(-150, { start: -100, end: 0 }));
});

test('BigInt numbers are within the range', t => {
    t.true(isInRange(30n, { start: 10n, end: 100n }));
    t.false(isInRange(5n, { start: 10n, end: 100n }));
});
