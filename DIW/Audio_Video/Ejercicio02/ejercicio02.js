let audio = new Audio();
let playButton = document.getElementById('playButton');
let currentTime = document.getElementById('currentTime');
let audioFile = document.getElementById('audioFile');

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

audioFile.addEventListener('change', function() {
    let file = this.files[0];
    audio.src = URL.createObjectURL(file);
    playButton.textContent = 'Play';
});

audio.addEventListener('timeupdate', function() {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime - minutes * 60);
    currentTime.textContent = minutes + ':' + seconds;
});

audio.addEventListener('pause', function() {
    currentTime.style.display = 'none';
    audioFile.style.display = 'none';
});

audio.addEventListener('play', function() {
    currentTime.style.display = 'block';
    audioFile.style.display = 'block';
});

audio.addEventListener('ended', function() {
    playButton.textContent = 'Play';
    audioFile.style.display = 'block';
    currentTime.style.display = 'none';
    audioFile.value = "";
})