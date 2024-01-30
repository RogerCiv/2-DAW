theVideo = document.querySelector("#myVideo");
var zoom = 0;

function playVideo() {
   theVideo.play();
}

function pauseVideo() {
   theVideo.pause();
}

function zoomIn() {
    zoom = zoom + 0.1;
    //theVideo.style.transform = 'scale('+zoom+')';
}

function zoomOut() {
    zoom = zoom - 0.1;
    //theVideo.style.transform = 'scale('+zoom+')';
}

function rotateLeft() {

}

function rotateRight() {

}