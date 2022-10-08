const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
       
        mario.classList.remove('jump');
    
    }, 500);

}

const loop = setInterval(() => {

    const pipeposition = pipe.offsetleft;
    console.log(pipeposition)

    if (pipeposition <= 120 ) {
       
        pipe.style.animation = 'none';
        pipe.style.left = ' ${pipeposition}px';


    } 

}, 10)


document.addEventListener('keydown',jump)