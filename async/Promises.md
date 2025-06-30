## Promesas en TypeScript: Explicación Exhaustiva

Las promesas (`Promise`) son la base para manejar operaciones asíncronas en JavaScript y TypeScript. Permiten ejecutar código que depende de resultados futuros, como llamadas a servidores, temporizadores, etc.

### ¿Qué es una Promise?

Una `Promise` es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

### Ejemplo práctico:

```ts
// Simulamos una función que devuelve una Promise para obtener datos de un servidor
function obtenerDatos(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Cambia a false para simular error
      if (exito) {
        resolve("Datos obtenidos correctamente!");
      } else {
        reject("Error al obtener los datos.");
      }
    }, 2000);
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
```

#### Explicación paso a paso:

1. Se crea una promesa que simula una operación asíncrona (por ejemplo, una llamada a servidor).
2. Si la operación es exitosa, se llama a `resolve` y la promesa se resuelve.
3. Si hay un error, se llama a `reject` y la promesa se rechaza.
4. `.then()` se usa para manejar el caso de éxito, `.catch()` para errores.

### Ventajas y desventajas

- **Ventaja:** Permite encadenar operaciones asíncronas de forma más limpia que los callbacks.
- **Desventaja:** Si se anidan muchas promesas, el código puede volverse difícil de leer (callback hell). Para esto existen `async/await`.

---
