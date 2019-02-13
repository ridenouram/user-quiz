const test = QUnit.test;

QUnit.module('testing third fieldset adding value to input chosen');

let scorecard= null;

QUnit.testStart(function(){
    scorecard = {
        shrimp: 0,
        salamander: 0,
        cheetah: 0
    }
});

function scoreResponsibility(responsibility, scorecard) {
    if (responsibility === 'cactus') {
        scorecard = {
            shrimp: 0,
            salamander: 0,
            cheetah: 0
        }
    }
    if (responsibility === 'dishes') {
        scorecard.salamander += 1;
        scorecard.cheetah += 1;
    }
    if (responsibility === 'taxes') {
        scorecard.shrimp += 1;
    }
}

test('if cactus selected zero out', function(assert){

    //act
    scoreResponsibility('cactus', scorecard);

    assert.deepEqual(scorecard, { shrimp: 0, salamander: 0, cheetah: 0})
})
test('if taxes selected shrimp plus 1', function(assert){

    //act
    scoreResponsibility('taxes', scorecard);

    assert.deepEqual(scorecard, { shrimp: 1, salamander: 0, cheetah: 0})
})