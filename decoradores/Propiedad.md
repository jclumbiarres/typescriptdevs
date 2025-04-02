```ts
// Decorador de propiedad
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
producto.precio = 200; // Intenta establecer un nuevo valor
console.log(producto.precio); // Obtiene el valor actualizado

/*
COMENTARIOS:
1. El decorador `ReadOnly` modifica el comportamiento de la propiedad `precio`.
2. Usa `Object.defineProperty` para definir getters y setters personalizados.
3. Esto es útil para agregar validaciones, logs o restricciones a las propiedades.
*/
```
