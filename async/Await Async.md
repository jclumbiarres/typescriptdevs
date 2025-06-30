## Async/Await en TypeScript: Explicación Exhaustiva

El uso de `async` y `await` en TypeScript permite escribir código asíncrono de manera mucho más legible y estructurada, evitando el llamado "callback hell" y facilitando el manejo de errores. A continuación, se explica en profundidad cómo funcionan y por qué son tan útiles.

### ¿Qué es una función `async`?

Una función declarada con la palabra clave `async` siempre devuelve una `Promise`. Esto significa que puedes usar `await` dentro de ella para pausar la ejecución hasta que una promesa se resuelva o rechace.

### ¿Qué hace `await`?

`await` solo puede usarse dentro de funciones `async`. Su función es "esperar" a que una promesa termine (ya sea con éxito o error) antes de continuar con la siguiente línea de código. Esto permite escribir código asíncrono como si fuera síncrono.

### Ejemplo práctico:

```ts
// Simulamos una función que devuelve una Promise (operación asíncrona)
function obtenerDatosAwait(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false; // Cambia a true para simular éxito
      if (exito) {
        resolve("Datos obtenidos correctamente!");
      } else {
        reject("Error al obtener los datos.");
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Usamos async/await para manejar la Promise
async function manejarDatos() {
  try {
    const datos = await obtenerDatosAwait(); // Espera a que la Promise se resuelva
    console.log(datos); // Se ejecuta si la operación fue exitosa
    return datos;
  } catch (error) {
    console.error(error); // Se ejecuta si la Promise es rechazada
    return error;
  }
}

// Ejecución toplevel (fuera de función):
// manejarDatos().then((a) => console.log(a)).catch((e) => console.error(e));
```

#### Explicación paso a paso:

1. **Declaración de función asíncrona:** `async function manejarDatos()` permite usar `await` dentro de la función.
2. **Uso de `await`:** `const datos = await obtenerDatosAwait();` pausa la función hasta que la promesa se resuelva o rechace.
3. **Manejo de errores:** El bloque `try/catch` captura cualquier error que ocurra en la promesa, permitiendo un manejo limpio y centralizado de errores.
4. **Ventaja principal:** El código es mucho más legible y fácil de mantener que usando solo `.then()` y `.catch()`.

### ¿Por qué usar async/await?

- **Legibilidad:** El código se parece más al código síncrono tradicional.
- **Manejo de errores centralizado:** Puedes usar `try/catch` como en código síncrono.
- **Evita el callback hell:** No necesitas anidar múltiples callbacks.

### Ejemplo adicional: Llamada a una API

```ts
async function getDataAPI() {
  try {
    const datos = await fetch("https://swapi.dev/api/people/1");
    const aJson = await datos.json();
    return aJson;
  } catch (e) {
    console.error(e);
  }
}
// Siempre que la función no sea async o sea toplevel, ejecutamos con then/catch
getDataAPI()
  .then((datos) => console.log(datos))
  .catch((e) => console.error(e));
// getDataAPI()
```
