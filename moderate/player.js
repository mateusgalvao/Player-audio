window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    curretPlaying: 0,
    start() {
        this.update();
        this.audio.onended = () => this.next();
    },
    next(){
        this.curretPlaying++;

        if (this.curretPlaying == this.audioData.length) this.restart();
        this.update();
    },
    update() {
        this.currentAudio = this.audioData[this.curretPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);
    },
    restart() {
        this.curretPlaying = 0;
        this.update();
    }
};

