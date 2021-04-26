const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "como começei a programar",
    artist:"Mateus Galvão",
    cover: "files/alt.jpg",
    file: "files/aud.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerHTML = `<span class="material-icons">account_circle</span> ${data.artist}`
audio.src = data.file;


