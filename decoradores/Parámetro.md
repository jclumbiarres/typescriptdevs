```ts
// Decorador de parámetro
export function LogParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parámetro en posición ${parameterIndex} del método "${methodName}" registrado.`);
}

export default class Servicio {
  procesar(@LogParameter id: number, nombre: string) {
    console.log(`Procesando ID: ${id}, Nombre: ${nombre}`);
  }
}

const servicio = new Servicio();
servicio.procesar(1, "Producto A");

/*
COMENTARIOS:
1. El decorador `LogParameter` recibe tres argumentos:
   - `target`: El prototipo de la clase.
   - `methodName`: El nombre del método donde está el parámetro.
   - `parameterIndex`: La posición del parámetro en la lista de argumentos.
2. Este tipo de decorador es menos común, pero puede ser útil para registrar metadatos o validar parámetros.
*/
```
