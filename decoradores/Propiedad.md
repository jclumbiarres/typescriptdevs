## Decoradores de Propiedad en TypeScript: Explicación Exhaustiva

Los decoradores de propiedad permiten modificar el comportamiento de las propiedades de una clase, por ejemplo, haciendo que sean de solo lectura, agregando validaciones, etc.

### ¿Qué es un decorador de propiedad?

Un decorador de propiedad es una función que recibe:

- `target`: El prototipo de la clase.
- `propertyKey`: El nombre de la propiedad decorada.

### Ejemplo práctico:

```ts
function ReadOnly(target: any, propertyKey: string) {
  let valor: any;
  const getter = () => {
    console.log(`Obteniendo valor de "${propertyKey}":`, valor);
    return valor;
  };
  const setter = (nuevoValor: any) => {
    console.log(`Estableciendo valor de "${propertyKey}" a:`, nuevoValor);
    valor = nuevoValor;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Producto {
  @ReadOnly
  precio: number;
  constructor(precio: number) {
    this.precio = precio;
  }
}

const producto = new Producto(100);
console.log(producto.precio); // Obtiene el valor
producto.precio = 200; // Establece un nuevo valor
console.log(producto.precio); // Obtiene el valor actualizado
```

#### Explicación paso a paso:

1. El decorador redefine los métodos getter y setter de la propiedad.
2. Permite interceptar la lectura y escritura de la propiedad.
3. Es útil para validaciones, logs, o restricciones como solo lectura.

### Usos comunes

- Validaciones automáticas.
- Logs de acceso a propiedades.
- Implementar propiedades de solo lectura.

---

2. Usa `Object.defineProperty` para definir getters y setters personalizados.
3. Esto es útil para agregar validaciones, logs o restricciones a las propiedades.
   \*/

```

```
