function scoreBackyard(backyard, scorecard) {
    if(backyard === 'balcony'){
        scorecard.salamander += 1;
    }
    if(backyard === 'none'){
        scorecard.salamander += 1;
        scorecard.shrimp += 1;
    }
    if(backyard === 'grass'){
        scorecard.cheetah += 1;
    }
}

export default scoreBackyard;