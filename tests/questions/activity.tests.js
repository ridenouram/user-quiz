const test = QUnit.test;

QUnit.module('testing the second fieldset adds values to scorecard obj.');

let scorecard= null;

QUnit.testStart(function(){
    scorecard = {
        shrimp: 0,
        salamander: 0,
        cheetah: 0
    }
});

import scoreActivity from '../../src/questions/scoreActivity.js';


test('sedentary adds value of 1 to scorecard', function(assert){
    // arrange

    // act
    scoreActivity('sedentary', scorecard);
    // assert
    assert.deepEqual(scorecard, {shrimp: 1, salamander: 0, cheetah: 0 });
});

test('stairs adds value of 1 to scorecard', function(assert){
    // arrange

    // act
    scoreActivity('stairs', scorecard);
    // assert
    assert.deepEqual(scorecard, {shrimp: 0, salamander: 1, cheetah: 0 });
});

test('olympic adds value of 1 to scorecard', function(assert){
    // arrange

    // act
    scoreActivity('olympic', scorecard);
    // assert
    assert.deepEqual(scorecard, {shrimp: 0, salamander: 0, cheetah: 1 });
});
