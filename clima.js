
       
            // Utiliza la función fetch para realizar una solicitud GET a la URL de la API.
            fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto&forecast_days=1') // API a leer

                // La función then() se encarga de manejar la respuesta de la solicitud.
                .then(datos => datos.json()) // Convierte los datos de la respuesta a formato JSON y retorna una promesa.

                // Cuando se resuelva la promesa anterior, ejecuta esta función de devolución de llamada.
                .then(datos => {
                    // Actualiza el contenido del elemento HTML con el id "contenido".

                    console.log(datos);
                    contenido.innerHTML += `
                            <div class="tarjeta">
                                   
                               
                                <!-- Muestra la lluvia del dia obtenido de los datos de la API. -->
                                Lluvia: ${datos.daily.precipitation_sum} mm --
    
                                <!-- Muestra la temperatura maxima del dia de los datos de la API. -->
                               
                                Temperatura Maxima: ${datos.daily.temperature_2m_max} --
                                Temperatura Minima: ${datos.daily.temperature_2m_min} --
                                Viento: ${datos.daily.temperature_2m_max} km/h <br><br>
    
                            </div>`;
                })
                // Maneja errores de la solicitud fetch o de la conversión a JSON.
                .catch(error => {
                    console.error('Error al obtener datos de la API:', error);
                    contenido.innerHTML += `
                        <div class="tarjeta">
                            <!-- Muestra el mensaje de error -->
                            Error inesperado:<br>

                            <!-- Muestra el error devuelto -->
                            Error: ${error}
                        </div>`;
                });