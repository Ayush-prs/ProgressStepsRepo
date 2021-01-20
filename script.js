const steps = document.querySelectorAll('.step')

const progress = document.querySelector('.progress')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')

let currentActive = 1;
nextButton.addEventListener('click', () => {
    currentActive++;
    steps[currentActive-1].classList.add('completed');
    if(currentActive == steps.length) {
        nextButton.setAttribute('disabled','true');
    } 
    if(currentActive > 1) {
        prevButton.removeAttribute('disabled');
    } 

    let newWidth = (currentActive -1) * 33;
    progress.style.width = newWidth + '%';
})

prevButton.addEventListener('click', () => {
    currentActive--;
    steps[currentActive].classList.remove('completed');
    if(currentActive == 1) {
        prevButton.setAttribute('disabled','true');
    }
    if(currentActive < steps.length) {
        nextButton.removeAttribute('disabled');
    }
    let newWidth = (currentActive -1) * 33;

    progress.style.width = newWidth + '%';
})