## Promesas en Paralelo con Promise.all: Explicación Exhaustiva

En JavaScript/TypeScript, muchas veces necesitamos ejecutar varias operaciones asíncronas al mismo tiempo y esperar a que todas terminen antes de continuar. Para esto, se utiliza `Promise.all`, que permite ejecutar múltiples promesas en paralelo y obtener todos los resultados juntos.

### ¿Qué es `Promise.all`?

`Promise.all` es un método que recibe un array de promesas y devuelve una nueva promesa que:

- Se resuelve cuando **todas** las promesas del array se resuelven.
- Se rechaza si **alguna** de las promesas se rechaza.
- Devuelve un array con los resultados, en el mismo orden que las promesas originales.

### Ejemplo práctico:

```ts
// Simulamos funciones que devuelven Promises con diferentes tiempos de espera
function obtenerDatos1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 1 obtenidos");
    }, 2000);
  });
}

function obtenerDatos2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 2 obtenidos");
    }, 3000);
  });
}

function obtenerDatos3(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos 3 obtenidos");
    }, 1000);
  });
}

// Ejecutamos todas en paralelo
async function procesarDatosEnParalelo() {
  try {
    console.log("Iniciando la obtención de datos en paralelo...");
    // Promise.all espera a que todas las promesas terminen
    const resultados = await Promise.all([
      obtenerDatos1(),
      obtenerDatos2(),
      obtenerDatos3(),
    ]);
    console.log("Resultados obtenidos:");
    console.log(resultados); // ["Datos 1 obtenidos", "Datos 2 obtenidos", "Datos 3 obtenidos"]
    console.log("Todos los datos fueron obtenidos correctamente.");
    return resultados;
  } catch (error) {
    console.error("Error en alguna de las promesas:", error);
  }
}
```

#### Explicación paso a paso:

1. Se definen varias funciones que devuelven promesas con diferentes tiempos de espera.
2. `Promise.all` ejecuta todas en paralelo y espera a que todas terminen.
3. Si alguna falla, el `catch` captura el error.
4. Los resultados se devuelven en el mismo orden que las promesas originales.

### Ventajas de Promise.all

- **Eficiencia:** Todas las operaciones se ejecutan al mismo tiempo, no una tras otra.
- **Simplicidad:** El manejo de resultados y errores es centralizado.

### Errores comunes

- Si una sola promesa falla, `Promise.all` rechaza inmediatamente y no espera a las demás.

---

} catch (error) {
console.error("Error al obtener los datos:", error);
}
}

procesarDatosEnParalelo();

```

```
