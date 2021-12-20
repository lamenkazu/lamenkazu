/**************************abrir e fechar cards**********************/

function abrirFilosofia() {
    document.querySelector('.modal-overlay.filosofia').classList.add('active')

}

function abrirMusica() {
    document.querySelector('.modal-overlay.musica').classList.add('active')
}

function abrirProgramação() {
    document.querySelector('.modal-overlay.programação').classList.add('active')
}

function fecharFilosofia() {
    document.querySelector('.modal-overlay.filosofia').classList.remove('active')

}

function fecharProgramação() {
    document.querySelector('.modal-overlay.programação').classList.remove('active')

}

function fecharMusica() {
    document.querySelector('.modal-overlay.musica').classList.remove('active')

}


var start = 0

function toca0(){
    start = 0
    player.start(start)
}

function toca1(){
    start = 1
    player.start(start)
}


window.addEventListener('load', player.start(start))