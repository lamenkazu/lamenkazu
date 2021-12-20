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

window.addEventListener('load', player.start())