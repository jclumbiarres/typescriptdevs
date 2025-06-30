## Decoradores de Método en TypeScript: Explicación Exhaustiva

Los decoradores de método permiten interceptar, modificar o extender el comportamiento de los métodos de una clase. Son útiles para logging, validaciones, control de acceso, etc.

### ¿Qué es un decorador de método?

Un decorador de método es una función que recibe:

- `target`: El prototipo de la clase (o el constructor para métodos estáticos).
- `propertyKey`: El nombre del método decorado.
- `descriptor`: Un descriptor que permite modificar el método.

### Ejemplo práctico:

```ts
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método "${propertyKey}" llamado con argumentos:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Método "${propertyKey}" devolvió:`, result);
    return result;
  };
}

class CalcDecorada {
  @LogMethod
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const calculadora = new CalcDecorada();
calculadora.sumar(5, 3);
```

#### Explicación paso a paso:

1. El decorador reemplaza el método original por una nueva función que agrega logs antes y después de la ejecución.
2. Se puede acceder a los argumentos y al resultado.
3. Es útil para depuración, monitoreo, validaciones, etc.

### Usos comunes

- Logging de métodos.
- Validaciones automáticas.
- Medición de tiempos de ejecución.

---
