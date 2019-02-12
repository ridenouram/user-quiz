const userProfileForm = document.getElementById('user-profile-form');

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userProfileForm);

    const userProfile = {
        name: formData.get('name'),
        avatar: formData.get('avatar')
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
    
    window.location = './quiz.html';



});
