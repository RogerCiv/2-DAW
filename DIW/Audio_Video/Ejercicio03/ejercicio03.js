// let video = document.getElementById("video");
// let videoFile = document.getElementById("videoFile");
// let eventLog = document.getElementById("eventLog");
// let files = [];
// let currentFile = 0;

// videoFile.addEventListener("change", function () {
//   let file = this.files[0];
//   if (file) {
//     files.push(file);
//     if (files.length === 1) {
//       logEvent("Se ha cargado el fichero de vídeo.");
//       playVideo();
//     }
//   } else {
//     logEvent("El fichero de vídeo no existe.",true);
//   }
// });

// video.addEventListener("ended", function () {
//   currentFile++;
//   if (currentFile < files.length) {
//     playVideo();
//   } else {
//     logEvent("Todos los vídeos han terminado de reproducirse.");
//   }
// });

// video.addEventListener("loadstart", function () {
//   logEvent("Se ha producido el evento loadstart.");
// });

// video.addEventListener("load", function () {
//   logEvent("Se ha producido el evento load.");
// });

// video.addEventListener("play", function () {
//   logEvent("Se ha producido el evento play.");
// });

// video.addEventListener("pause", function () {
//   logEvent("Se ha producido el evento pause.");
// });

// video.addEventListener("volumechange", function () {
//   logEvent("Se ha producido el evento volumechange.");
// });

// // Añade más eventos del API de vídeo aquí

// function playVideo() {
//   if (files && files[currentFile]) {
//     let fileURL = URL.createObjectURL(files[currentFile]);
//     video.src = fileURL;
//     video.play();
//   } else {
//     console.error("El fichero de vídeo no existe.");
//     logEvent("El fichero de vídeo no existe.",true);
//   }
// }

// function logEvent(message, isError) {
//   let p = document.createElement('p');
//   p.textContent = message;
//   eventLog.appendChild(p);

//   // Limita el número de elementos hijos a 2
//   while (eventLog.children.length > 2) {
//       eventLog.removeChild(eventLog.firstChild);
//   }

//   // Cambia el color de fondo si es un error
//   if (isError) {
//       eventLog.classList.remove('bg-green-500');
//       eventLog.classList.add('bg-red-500');
//   } else {
//       eventLog.classList.remove('bg-red-500');
//       eventLog.classList.add('bg-green-500');
//   }
// }
let video = document.getElementById("video");
let videoFile = document.getElementById("videoFile");
let eventLog = document.getElementById("eventLog");
let files = [];
let currentFile = 0;

let playButton = document.getElementById("playButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let volumeUpButton = document.getElementById("volumeUpButton");
let volumeDownButton = document.getElementById("volumeDownButton");

videoFile.addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      files.push(e.target.result);
      if (files.length === 1) {
        logEvent("Se ha cargado el fichero de vídeo.");
        playVideo();
        playButton.textContent = 'Pause';
        playButton.classList.remove('bg-green-500', 'hover:bg-green-700');
        playButton.classList.add('bg-red-500', 'hover:bg-red-700');
      }
    };
    reader.readAsDataURL(file);
  } else {
    logEvent("El fichero de vídeo no existe.", true);
  }
});

video.addEventListener("ended", function () {
  currentFile++;
  if (currentFile < files.length) {
    playVideo();
  } else {
    logEvent("Todos los vídeos han terminado de reproducirse.");
  }
});

function playVideo() {
  if (files && files[currentFile]) {
    video.src = files[currentFile];
    video.play();

  } else {
    console.error("El fichero de vídeo no existe.");
    logEvent("El fichero de vídeo no existe.", true);
  }
}



function logEvent(message, isError) {
  let p = document.createElement('p');
  p.textContent = message;
  eventLog.appendChild(p);
  
  // Limita el número de elementos hijos a 2
  while (eventLog.children.length > 2) {
    eventLog.removeChild(eventLog.firstChild);
  }
  
  // Cambia el color de fondo si es un error
  if (isError) {
    eventLog.classList.remove('bg-green-700');
    eventLog.classList.add('bg-red-500');
  } else {
    eventLog.classList.remove('bg-red-500');
    eventLog.classList.add('bg-green-500');
  }
}

// Añade más eventos del API de vídeo aquí

video.addEventListener("loadstart", function () {
  logEvent("Se ha producido el evento loadstart.");
});

video.addEventListener("load", function () {
  logEvent("Se ha producido el evento load.");
});

video.addEventListener("play", function () {
  logEvent("Se ha producido el evento play.");
});

video.addEventListener("pause", function () {
  logEvent("Se ha producido el evento pause.");
});

video.addEventListener("volumechange", function () {
  logEvent("Se ha producido el evento volumechange.");
});


// Funcionalidades adicionales
playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
    playButton.classList.remove('bg-green-500', 'hover:bg-green-700');
    playButton.classList.add('bg-red-500', 'hover:bg-red-700');
  } else {
    video.pause();
    playButton.textContent = 'Play';
    playButton.classList.remove('bg-red-500', 'hover:bg-red-700');
    playButton.classList.add('bg-green-500', 'hover:bg-green-700');
  }
});
nextButton.addEventListener("click", function () {
  if (currentFile < files.length - 1) {
    currentFile++;
    playVideo();
  }
});

prevButton.addEventListener("click", function () {
  if (currentFile > 0) {
    currentFile--;
    playVideo();
  }
});

volumeUpButton.addEventListener("click", function () {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
});

volumeDownButton.addEventListener("click", function () {
  if (video.volume > 0) {
    video.volume -= 0.1;
  }
});