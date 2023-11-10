let botonInicio = document.querySelector('#play');

let botonPausa = document.querySelector('#pause');

let video = document.querySelector('video');

botonInicio.addEventListener('click',()=>{
    video.play()
});

botonPausa.addEventListener('click',()=>{
    video.pause()
});

