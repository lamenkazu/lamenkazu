window.player = {
    capa: document.querySelector('.card-image'),
    titulo: document.querySelector('.card-content h5'),
    artista: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    audioList: audios,
    audioAtual: {},
    start(x){
        this.audioAtual = this.audioList[x]
        this.capa.style.background = `url(./img/${this.audioAtual.capa})`
        this.titulo.innerHTML = this.audioAtual.titulo
        this.artista.innerHTML = this.audioAtual.artista
        this.audio.src = `./songs/${this.audioAtual.arquivo}`
        this.audio.addEventListener('ended', function(){
            
        })
    },
    
}

