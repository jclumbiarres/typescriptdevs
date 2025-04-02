```ts
// Decorador de método
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Guardamos el método original
  descriptor.value = function(...args: any[]) {
    console.log(`Método "${propertyKey}" llamado con argumentos:`, args);
    const result = originalMethod.apply(this, args); // Llamamos al método original
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

/*
COMENTARIOS:
1. El decorador `LogMethod` recibe tres argumentos:
   - `target`: El prototipo de la clase (para métodos estáticos, sería el constructor).
   - `propertyKey`: El nombre del método.
   - `descriptor`: Un objeto que describe el método.
2. Modificamos el método original para agregar logs antes y después de su ejecución.
3. Esto es útil para depurar o monitorear métodos.
*/
```
