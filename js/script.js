  // Obtener elementos del DOM
  const audioPlayer = document.getElementById('audioPlayer');
  const playButton = document.getElementById('playButton');
  const downloadLink = document.getElementById('downloadLink');
  
  // Función para alternar entre reproducción y pausa
  function togglePlay() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = 'pause_circle';
    } else {
      audioPlayer.pause();
      playButton.textContent = 'play_circle';
    }
  }
  
  // Evento clic en el botón de reproducción
  playButton.addEventListener('click', togglePlay);
  
  // Evento reproducción terminada
  audioPlayer.addEventListener('ended', () => {
    playButton.textContent = 'play_circle';
  });
  
  // Evento clic en el botón de descarga
  downloadLink.addEventListener('click', () => {
    if (audioPlayer.src) {
      const filename = audioPlayer.src.split('/').pop();
      downloadLink.setAttribute('download', filename);
    }
  });
  
  function toggleCard(button) {
    const card = button.closest('.card');
    card.classList.toggle('is-flipped');
  }
  
  //galería de imagenes 
  
  document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".cajafotos img");
    
    imagenes.forEach(function(imagen) {
      imagen.addEventListener("click", function() {
        imagenes.forEach(function(img) {
          img.classList.remove("ampliada");
        });
        this.classList.add("ampliada");
        setTimeout(function() {
          imagen.classList.remove("ampliada");
        }, 5000);
      });
    });
  
    window.addEventListener("click", function(event) {
      if (!event.target.closest(".ampliada")) {
        imagenes.forEach(function(imagen) {
          imagen.classList.remove("ampliada");
        });
      }
    });
  });