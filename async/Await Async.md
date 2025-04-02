```ts
// Simulamos la misma función que devuelve una Promise
function obtenerDatosAwait(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false; // Simulamos si la operación fue exitosa o no
      if (exito) {
        resolve("Datos obtenidos correctamente!"); // Resolvemos la Promise con éxito
      } else {
        reject("Error al obtener los datos."); // Rechazamos la Promise si hay un error
      }
    }, 2000); // Simulamos un retraso de 2 segundos
  });
}

// Usamos async/await para manejar la Promise
async function manejarDatos() {
  try {
    const datos = await obtenerDatosAwait(); // Esperamos a que la Promise se resuelva
    console.log(datos); // Mostramos los datos si la operación fue exitosa
    return datos
  } catch (error) {
    console.error(error); // Capturamos y mostramos el error si la Promise es rechazada
    return error
  }
}
// esto es el toplevel
//manejarDatos().then((a) => console.log(a) /* datos */).catch((e) => console.error(e))

/*
COMENTARIOS:
1. `async` se usa para declarar una función asíncrona.
2. `await` pausa la ejecución de la función hasta que la Promise se resuelve.
3. `try/catch` se usa para manejar errores de manera limpia.
4. Este enfoque es más legible y evita el "callback hell".
*
*/

async function getDataAPI() {
  try {
    const datos = await fetch('https://swapi.dev/api/people/1')
    const aJson = await datos.json()
    return aJson
  } catch (e) {
    console.error(e)
  }
}
// Siempre que la función no sea async o sea toplevel, ejecutamos con then/catch
getDataAPI().then((datos) => console.log(datos)).catch((e) => console.error(e))
// getDataAPI()
```

