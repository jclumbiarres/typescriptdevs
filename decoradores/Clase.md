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

/*
COMENTARIOS:
1. El decorador `LogClass` recibe el constructor de la clase como argumento.
2. Cuando la clase es definida (no cuando se instancia), el decorador se ejecuta.
3. Esto es útil para registrar información sobre la clase o modificar su comportamiento.
*/
```
