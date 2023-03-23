window.addEventListener('scroll', fadeInOut);

function fadeInOut() {
    const fadeInOutDiv = document.querySelector('.fade-in-out');
    const distanceFromTop = fadeInOutDiv.getBoundingClientRect().top;

    if (distanceFromTop - window.innerHeight < 0) {
        fadeInOutDiv.classList.add('fade-in');
    } else {
        fadeInOutDiv.classList.remove('fade-in');
    }
}

window.addEventListener('scroll', fadeInOut2);

function fadeInOut2() {
    const fadeInOutDiv = document.querySelector('.fade-in-out2');
    const distanceFromTop = fadeInOutDiv.getBoundingClientRect().top;

    if (distanceFromTop - window.innerHeight < 0) {
        fadeInOutDiv.classList.add('fade-in2');
    } else {
        fadeInOutDiv.classList.remove('fade-in2');
    }
}