## Decoradores de Clase en TypeScript: Explicación Exhaustiva

Los decoradores de clase permiten modificar o extender el comportamiento de una clase en el momento en que es definida. Son una poderosa herramienta de metaprogramación.

### ¿Qué es un decorador de clase?

Un decorador de clase es una función que recibe el constructor de la clase como argumento y puede:

- Registrar información sobre la clase.
- Modificar el prototipo o el constructor.
- Reemplazar la clase por otra.

### Ejemplo práctico:

```ts
// Decorador de clase
function LogClass(constructor: Function) {
  console.log(`Clase "${constructor.name}" ha sido inicializada.`);
}

// Aplicamos el decorador a la clase usando @
@LogClass
class Persona {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Al instanciar la clase, veremos el mensaje del decorador
const persona = new Persona("Juan");
persona.saludar();
```

#### Explicación paso a paso:

1. El decorador `LogClass` se ejecuta **cuando la clase es definida**, no cuando se instancia.
2. Recibe el constructor de la clase y puede acceder a su nombre y prototipo.
3. Es útil para registrar logs, aplicar validaciones globales, o modificar el comportamiento de la clase.

### Usos comunes

- Registro de clases para frameworks.
- Aplicar metadatos.
- Modificar o extender clases automáticamente.

---
