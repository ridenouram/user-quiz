import tally from './tally.js';

const resultsText = document.getElementById('results-text');

const json = window.localStorage.getItem('scorecard');

const scorecard = JSON.parse(json);

resultsText.textContent = tally(scorecard);



