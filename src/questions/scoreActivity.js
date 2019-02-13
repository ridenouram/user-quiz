function scoreActivity(activity, scorecard) {
    if (activity === 'sedentary') {
        scorecard.shrimp += 1;
    }
    if (activity === 'stairs') {
        scorecard.salamander += 1;
    }
    if (activity === 'olympic') {
        scorecard.cheetah += 1;
    }

}

export default scoreActivity;