function tally(scorecard) {
    if(scorecard.shrimp >= scorecard.salamander && scorecard.shrimp >= scorecard.cheetah) {
        return 'shrimp';
    }
    if(scorecard.salamander > scorecard.shrimp && scorecard.salamander >= scorecard.cheetah) {
        return 'salamander';
    }
    if(scorecard.cheetah > scorecard.salamander && scorecard.cheetah > scorecard.shrimp) {
        return 'cheetah';
    }

}

export default tally;