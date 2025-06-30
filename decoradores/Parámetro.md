## Decoradores de Parámetro en TypeScript: Explicación Exhaustiva

Los decoradores de parámetro permiten registrar información o aplicar lógica especial sobre los parámetros de un método. Aunque son menos comunes, son útiles para validaciones, inyección de dependencias, etc.

### ¿Qué es un decorador de parámetro?

Un decorador de parámetro es una función que recibe:

- `target`: El prototipo de la clase.
- `methodName`: El nombre del método donde está el parámetro.
- `parameterIndex`: La posición del parámetro en la lista de argumentos.

### Ejemplo práctico:

```ts
export function LogParameter(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(
    `Parámetro en posición ${parameterIndex} del método "${methodName}" registrado.`
  );
}

export default class Servicio {
  procesar(@LogParameter id: number, nombre: string) {
    console.log(`Procesando ID: ${id}, Nombre: ${nombre}`);
  }
}

const servicio = new Servicio();
servicio.procesar(1, "Producto A");
```

#### Explicación paso a paso:

1. El decorador se ejecuta cuando se define el método, no cuando se llama.
2. Permite registrar metadatos sobre los parámetros, útil para validaciones automáticas, frameworks, etc.

### Usos comunes

- Validación de parámetros.
- Inyección de dependencias.
- Registro de metadatos para frameworks.

---
