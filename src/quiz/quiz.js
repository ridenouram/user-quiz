import scoreBackyard from '../questions/scoreBackyard.js';
const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit-button', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answer = {
        backyard: formData.get('backyard'),
    };

    const scorecard = {
        shrimp: 0,
        salamander: 0,
        cheetah: 0
    };

    scoreBackyard(answer.backyard, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);
    console.log('hi');
    // window.location = './results.html';

    
})
