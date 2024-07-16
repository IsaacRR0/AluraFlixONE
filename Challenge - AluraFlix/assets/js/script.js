function listarPeliculas() {
    var listaDePeliculas = document.getElementById("lista-de-peliculas");
    elemento = "";
    for (i = 0; i < todasLasPeliculas.length; i++) {
        elemento += "<div>";
        elemento += "<img alt='Portada de la Película' src=" + todasLasPeliculas[i].url + ">";
        elemento += "<h1>" + todasLasPeliculas[i].nombre + "</h1>";
        elemento += "</div>";
    }
    listaDePeliculas.innerHTML = elemento;
}

function agregarPelicula() {
    var nombreDeLaNuevaPelicula = document.getElementById("nombre-de-la-nueva-pelicula").value;
    var urlDeLaNuevaPelicula = document.getElementById("url-de-la-nueva-pelicula").value;

    if (nombreDeLaNuevaPelicula == "") {
        Swal.fire({icon: 'error', title: 'Oops...', text: '¡Olvidaste el nombre de la película!'});
    } else if (urlDeLaNuevaPelicula.endsWith(".JPG") || urlDeLaNuevaPelicula.endsWith(".jpg") || urlDeLaNuevaPelicula.endsWith(".png") || urlDeLaNuevaPelicula.endsWith(".PNG")) {
        todasLasPeliculas.push({nombre: nombreDeLaNuevaPelicula, url: urlDeLaNuevaPelicula});
        Swal.fire({icon: 'success', title: 'Éxito', text: '¡Película Agregada!'});
        
        document.getElementById("nombre-de-la-nueva-pelicula").value = "";
        document.getElementById("url-de-la-nueva-pelicula").value = "";
        listarPeliculas();
    } else {
        Swal.fire({icon: 'error', title: 'Oops...', text: '¡URL de la Portada Inválida!'});
    }
}

var todasLasPeliculas = [
    {
        nombre: 'Blade Runner 2049',
        url: 'https://m.media-amazon.com/images/I/81LQFOxy4BL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Inception',
        url: 'https://m.media-amazon.com/images/I/51U1bYz1RaL._AC_.jpg'
    },
    {
        nombre: 'The Matrix',
        url: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg'
    },
    {
        nombre: 'Interstellar',
        url: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg'
    },
    {
        nombre: 'Arrival',
        url: 'https://m.media-amazon.com/images/I/91m2QljC+8L._AC_SL1500_.jpg'
    },
    {
        nombre: 'Star Wars: A New Hope',
        url: 'https://m.media-amazon.com/images/I/71aWJqD8-hL._AC_SL1000_.jpg'
    }
];

listarPeliculas();
