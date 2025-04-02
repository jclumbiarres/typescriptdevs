
```ts
// Simulamos una función que devuelve una Promise para obtener datos de un servidor
function obtenerDatos1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 1 obtenidos"); // Resolvemos la Promise después de 2 segundos
    }, 2000);
  });
}

function obtenerDatos2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 2 obtenidos"); // Resolvemos la Promise después de 3 segundos
    }, 3000);
  });
}

function obtenerDatos3(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 3 obtenidos"); // Resolvemos la Promise después de 1 segundo
    }, 1000);
  });
}

// Usamos Promise.all para ejecutar las Promises en paralelo
async function procesarDatosEnParalelo() {
  try {
    console.log("Iniciando la obtención de datos en paralelo...");

    // Promise.all recibe un array de Promises y espera a que todas se resuelvan
    const resultados = await Promise.all([obtenerDatos1(), obtenerDatos2(), obtenerDatos3()]);

    // Los resultados se devuelven en el mismo orden que las Promises en el array
    console.log("Resultados obtenidos:");
    console.log(resultados); // ["Datos 1 obtenidos", "Datos 2 obtenidos", "Datos 3 obtenidos"]

    console.log("Todos los datos fueron obtenidos correctamente.");
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

procesarDatosEnParalelo();
```
