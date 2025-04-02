* Mixins en TypeScript:
    Son patrones para composición de objetos
    Se implementan generalmente con clases y herencia múltiple
    Pueden contener estado (propiedades)
    Se resuelven en tiempo de ejecución
    Son más flexibles pero menos seguros en cuanto a tipos
    No son un concepto nativo del lenguaje sino un patrón implementado con clases
```ts

// 1. Definimos un tipo genérico para el constructor de cualquier clase
// Esto significa que T puede ser cualquier tipo que extienda de un constructor
type Constructor<T = {}> = new (...args: any[]) => T;

// 2. Creamos nuestro primer mixin: Timestamp
// Este añadirá una propiedad timestamp a cualquier clase
function Timestamp<TBase extends Constructor>(Base: TBase) {
  // 3. Retornamos una nueva clase que extiende la clase base
  return class extends Base {
    // 4. Añadimos una nueva propiedad
    timestamp = Date.now();

    // 5. Opcionalmente podemos sobrescribir métodos
    toString() {
      return `${super.toString()} [Timestamp: ${this.timestamp}]`;
    }
  };
}

// 6. Creamos otro mixin: Loggable
// Este añadirá capacidades de logging
function Loggable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    // 7. Añadimos un nuevo método
    log(message: string) {
      console.log(`[LOG] ${message}`);
    }
  };
}

// 8. Definimos una clase básica
class MiClaseBasica {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  toString() {
    return `MiClaseBasica (id: ${this.id})`;
  }
}

// 9. Aplicamos los mixins a nuestra clase básica
// Nota: El orden importa - se aplican de izquierda a derecha
const MiClaseMejorada = Timestamp(Loggable(MiClaseBasica));

// 10. Creamos una instancia de la clase mejorada
const instancia = new MiClaseMejorada(123);

// 11. Usamos las nuevas funcionalidades
instancia.log("Hola desde la instancia"); // Método del mixin Loggable
console.log(instancia.timestamp); // Propiedad del mixin Timestamp
console.log(instancia.toString()); // Método sobrescrito por Timestamp

// Salida esperada:
// [LOG] Hola desde la instancia
// [número de timestamp actual]
// MiClaseBasica (id: 123) [Timestamp: [mismo número de timestamp]]
```
