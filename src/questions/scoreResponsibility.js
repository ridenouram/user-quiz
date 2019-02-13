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

export default scoreResponsibility;