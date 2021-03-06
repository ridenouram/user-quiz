import scoreBackyard from '../questions/scoreBackyard.js';
import scoreActivity from '../questions/scoreActivity.js';
import scoreResponsibility from '../questions/scoreResponsibility.js';

const quizForm = document.getElementById('quiz-form');


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const formData = new FormData(quizForm);
    
    const answer = {
        backyard: formData.get('backyard'),
        activity: formData.get('activity'),
        responsibility: formData.get('responsibility')
    };
    
    const scorecard = {
        shrimp: 0,
        salamander: 0,
        cheetah: 0
    };
    
    scoreBackyard(answer.backyard, scorecard);
    scoreActivity(answer.activity, scorecard);
    scoreResponsibility(answer.responsibilty, scorecard);
    
    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);
    window.location = './results.html';
    
})
