const jumpman = document.querySelector('.jumpman')
const pipe = document.querySelector('.pipe')

const jump = () => {
    jumpman.classList.add('jump')

   setTimeout(() => {
        jumpman.classList.remove('jump')
   } , 500
) ;
}

const loop = setInterval( () => {
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 120)
} , 10)

document.addEventListener(`keydown`, jump);
