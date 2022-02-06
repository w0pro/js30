const birdBtns = document.querySelector('.header');
const birdBtn = document.querySelector('.nav-item');
const fon = document.querySelector('.back');
const logoBtn = document.querySelector('.logo')
const button = document.querySelector('.play')


function changeColor () {
    
    birdBtn.classList.add('nav-item:active');
}; 


/*Смена изображений*/
function changeImage(event) {
    if(event.target.classList.contains('nav-item')) {
        const bird = event.target.dataset.bird;
        fon.style.backgroundImage = `url('assets/img/${bird}.jpg')`;
    }else if(event.target.classList.contains('logo')){
        fon.style.backgroundImage = `url('assets/img/forest.jpg')`;
    }
};
birdBtns.addEventListener('click', changeImage);


/*Смена музыки*////
const audio = new Audio ();
audio.src = `assets/audio/forest.mp3`;


function changeAudio(event) {
    if(event.target.classList.contains('nav-item')) {
        const bird = event.target.dataset.bird;
        audio.src = `assets/audio/${bird}.mp3`;
        audio.play();
        button.classList.toggle('pause')
    }else if(event.target.classList.contains('logo')){
        audio.src = `assets/audio/forest.mp3`;
        audio.play();
        button.classList.toggle('pause')
    }
};
birdBtns.addEventListener('click', changeAudio);

/*Плей пауза*/
function playAudio() {
    if(audio.paused) {        
        audio.play()
        
    }else {
        audio.pause()
        
    }
};
button.addEventListener('click', playAudio); 

/*смена кнопки*/
let isPlay = false;

function toggleBtn() {
    if(!isPlay) {
    button.classList.add('pause')
    isPlay = true;
    }else {
    button.classList.toggle('pause')
    isPlay = false;
    };
};
button.addEventListener('click', toggleBtn);
birdBtns.addEventListener('click', toggleBtn);
birdBtns.addEventListener('click', changeColor);


