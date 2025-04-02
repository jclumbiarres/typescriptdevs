```ts
// Simulamos una función que devuelve una Promise para obtener datos de un servidor
function obtenerDatos(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Simulamos si la operación fue exitosa o no
      if (exito) {
        resolve("Datos obtenidos correctamente!"); // Resolvemos la Promise con éxito
      } else {
        reject("Error al obtener los datos."); // Rechazamos la Promise si hay un error
      }
    }, 2000); // Simulamos un retraso de 2 segundos
  });
}

// Usamos la Promise con .then() y .catch()
obtenerDatos()
  .then((datos) => {
    console.log(datos); // Se ejecuta si la Promise se resuelve con éxito
  })
  .catch((error) => {
    console.error(error); // Se ejecuta si la Promise es rechazada
  });

/*
COMENTARIOS:
1. `Promise` es una forma clásica de manejar operaciones asíncronas.
2. Usamos `.then()` para manejar el caso de éxito y `.catch()` para manejar errores.
3. Este enfoque puede volverse difícil de leer si hay múltiples operaciones anidadas (callback hell).
*/

```
