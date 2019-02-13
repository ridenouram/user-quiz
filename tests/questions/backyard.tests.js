const test = QUnit.test;

QUnit.module('User input on backyard adds values to scorecard');

import scoreBackyard from '../../src/questions/scoreBackyard.js';

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { shrimp: 0, salamander: 0, cheetah: 0 };
});

test('if balcony selected salamander gets value 1', function(assert){
   
    //act
    scoreBackyard('balcony', scorecard);

    //assert
    assert.deepEqual(scorecard, { shrimp: 0, salamander: 1, cheetah: 0 });
});

test('if none selected salamander + shrimp get value 1', function(assert){
   
    //act
    scoreBackyard('none', scorecard);

    //assert
    assert.deepEqual(scorecard, { shrimp: 1, salamander: 1, cheetah: 0 });
});

test('if selected grass: cheetah get value 1', function(assert){
   
    //act
    scoreBackyard('grass', scorecard);

    //assert
    assert.deepEqual(scorecard, { shrimp: 0, salamander: 0, cheetah: 1 });
});
