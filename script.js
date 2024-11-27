
const playButton = document.getElementById("playBtn");
const stopButton = document.getElementById("stopBtn");


function playAnimations() {
    const elementsWithAnimations = document.querySelectorAll('.text-animation span, .animated-box');
    elementsWithAnimations.forEach(element => {
        element.style.animationPlayState = 'running';
    });
}


function stopAnimations() {
    const elementsWithAnimations = document.querySelectorAll('.text-animation span, .animated-box');
    elementsWithAnimations.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
}


playButton.addEventListener('click', playAnimations);
stopButton.addEventListener('click', stopAnimations);
