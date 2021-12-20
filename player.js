window.player = {
    capa: document.querySelector('.card-image'),
    titulo: document.querySelector('.card-content h5'),
    artista: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    audioList: audios,
    audioAtual: {},
    tocandoAgora: 0,
    start(){
        this.atualiza()        
        this.audio.onended = () => this.next()
    },
    next(){
        this.tocandoAgora++
        if(this.tocandoAgora == this.audioList.length){
            this.tocandoAgora = 0
            this.atualiza()
        }else{
            this.atualiza()
            this.audio.play()
        }
        
    },
    atualiza(){
        this.audioAtual = this.audioList[this.tocandoAgora]

        this.capa.style.background = `url(./img/${this.audioAtual.capa})`
        this.titulo.innerHTML = this.audioAtual.titulo
        this.artista.innerHTML = this.audioAtual.artista
        this.audio.src = `./songs/${this.audioAtual.arquivo}`        
    },
    
}

