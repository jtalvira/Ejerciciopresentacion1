
async function obtenerInformacion() {
    const API_URL = 'https://api.themoviedb.org/3/movie/now_playing';
    const API_KEY = 'api_key=14a1e7de4368a6f1aa7846b910aa671c';

    const URL = `${API_URL}?${API_KEY}`;

    
    const resultado = await fetch(URL);
    const datos = await resultado.json();
    const {results} = datos;

   results.map(info => {


        const titulo = [info.title];
        console.log(titulo);

        const descrip = [info.overview]
        console.log(descrip)
      

                
        for (let i = 0; i < titulo.length && descrip.length; i++) {
           document.querySelector('#tabla').innerHTML += `
                    <tr>
                       <th class="lineas"> ${titulo} </th>
                       <th class="lineas"> ${descrip} </th>
                    </tr>
           `
        }
      
   });

 }

obtenerInformacion();
