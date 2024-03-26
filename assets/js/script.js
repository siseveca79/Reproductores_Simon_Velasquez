// Implementación del patrón módulo mediante IIFE
const ReproductorModule = (function() {
    function insertarVideo(url, id) {
      const iframe = document.getElementById(id);
      iframe.setAttribute('src', url);
    }
  
    return {
      reproducirVideo: function(url, id) {
        insertarVideo(url, id);
      }
    };
  })();
  
  // Definición de la clase padre Multimedia
  class Multimedia {
    constructor(url) {
      this.url = url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  // Definición de la clase hija Reproductor
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      ReproductorModule.reproducirVideo(this.url, this.id);
    }
  
    setInicio(tiempo) {
      const inicio = `${this.url}?start=${tiempo}`;
      ReproductorModule.reproducirVideo(inicio, this.id);
    }
  }
  
  // Instanciación de la clase hija para cada categoría de vídeo
  const musicaReproductor = new Reproductor('https://embed.music.apple.com/us/album/wasting/1696474450?i=1696474454&l=es-MX', 'musica');
  const peliculasReproductor = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
  const seriesReproductor = new Reproductor('https://pluto.tv/es/on-demand/series/5e1e5fc52fe6c1fc70e12be6/episode/6075d5dc5426cf001a3b1be4', 'series');
  
  // Invocación del método playMultimedia() para cada instancia creada
  musicaReproductor.playMultimedia();
  peliculasReproductor.playMultimedia();
  seriesReproductor.playMultimedia();
  
  // Utilización del método setInicio() para modificar el tiempo de inicio en alguna de las instancias creadas
  musicaReproductor.setInicio(30); // Modificar tiempo de inicio para el reproductor de música (reproducir desde el segundo 30)
  