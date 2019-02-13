const test = QUnit.test;

import tally from '../src/tally.js';

test('salamander as greatest', function(assert){
    let scorecard = { shrimp: 0, salamander: 1, cheetah: 0};

    const result = tally(scorecard);

    assert.deepEqual(result, 'salamander');
})

test('shrimp as greatest', function(assert){
    let scorecard = { shrimp: 1, salamander: 0, cheetah: 0};

    const result = tally(scorecard);

    assert.deepEqual(result, 'shrimp');
})

test('cheetah as greatest', function(assert){
    let scorecard = { shrimp: 0, salamander: 0, cheetah: 2};

    const result = tally(scorecard);

    assert.deepEqual(result, 'cheetah');
})
