let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
    
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
    
});

const cargarPeliculas = async () => {
    try {

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=502126d2a5e70a265e11d1ef79e32c4d&language=es-MX&page=${pagina}`);
        console.log(respuesta);
         
        //Si la respuetsa es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            
            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class ="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></img>
                    </div>
                    <h3 class="titulo">${pelicula.title}</h3>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        }else if(respuesta.status === 401){
            console.log('Pusiste nal la llave');
        }else if(respuesta.status === 404){
            console.log('No existe la pelicula');
        }else {
            console.log('Error desconocido');
        }

    }catch(error){
        console.log(error);
    }

}

cargarPeliculas();
