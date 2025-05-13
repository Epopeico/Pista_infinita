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
    const jumpmanPosition = +window.getComputedStyle(jumpman).bottom.replace('px' ,"");
    /* esse + na frente converte de string para numero pois precisamos somente do numero e nao do px */

    if (pipePosition <= 90 && pipePosition > 0 && jumpmanPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        jumpman.style.animation = 'none';
        jumpman.style.bottom = `${jumpmanPosition}px`

        jumpman.src = './image/game-over.png'
        jumpman.style.width = '75px'
        jumpman.style.marginleft ='50px'

        clearInterval(loop);

    }

} , 10) 

document.addEventListener(`keydown`, jump);
  