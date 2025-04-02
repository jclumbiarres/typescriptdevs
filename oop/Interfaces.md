## 🎭 INTERFACES

* Las interfaces definen la forma (estructura) que deben tener los objetos/clases
* Son como contratos que especifican qué propiedades/métodos deben existir
### Interface básica para una Persona
```ts

interface Persona {
  nombre: string;    // Propiedad obligatoria
  edad: number;      // Propiedad obligatoria
  email?: string;    // Propiedad opcional (con ?)
  readonly id: number; // Propiedad de solo lectura
  saludar(): void;   // Método obligatorio
  //sumaEdad1(): number; // método obligatorio con retorno de string
}
```
## 🏭 IMPLEMENTANDO INTERFAZ EN CLASE
```ts
class UsuarioClase implements Persona {
  // Debemos implementar todas las propiedades/métodos obligatorios
  nombre: string;
  edad: number;
  readonly id: number;  // readonly se mantiene
  email?: string;       // Propiedad opcional

  constructor(nombre: string, edad: number, id: number, email?: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
    this.email = email;
  }

  // Implementamos método de la interfaz
  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }

  // Método adicional específico de la clase
  mostrarId(): void {
    console.log(`Mi ID es: ${this.id}`);
  }
}

// Uso de la clase que implementa interfaz
const usuario1 = new UsuarioClase("Ana", 30, 12345, "ana@email.com");
usuario1.saludar();    // Hola, soy Ana
usuario1.mostrarId();  // Mi ID es: 12345
// usuario1.id = 9999; // Error: readonly

// 🔄 HERENCIA DE INTERFACES
interface Estudiante extends Persona {
  curso: string;          // Nueva propiedad obligatoria
  matricularse(): string;   // Nuevo método obligatorio
}

class EstudianteUniversitario implements Estudiante {
  nombre: string;
  edad: number;
  readonly id: number;
  curso: string;

  constructor(nombre: string, edad: number, id: number, curso: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
    this.curso = curso;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre} del curso de ${this.curso}`);
  }

  matricularse(): string {
    return `Matriculado en ${this.curso}`
  }
}
```
## 🧩 IMPLEMENTAR MÚLTIPLES INTERFACES
```ts
interface Trabajador {
  puesto: string;
  trabajar(): void;
}

class PersonaMultitarea implements Persona, Trabajador {
  nombre: string;
  edad: number;
  readonly id: number;
  puesto: string;

  constructor(nombre: string, edad: number, id: number, puesto: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
    this.puesto = puesto;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y trabajo como ${this.puesto}`);
  }

  trabajar(): void {
    console.log("Realizando tareas laborales...");
  }
}

// 🛠️ USO AVANZADO: INTERFACES CON MÉTODOS ESPECÍFICOS
interface Calculador {
  calcular(a: number, b: number): number;
}

class Sumador implements Calculador {
  calcular(a: number, b: number): number {
    return a + b;
  }
}

class Multiplicador implements Calculador {
  calcular(a: number, b: number): number {
    return a * b;
  }
}
```
## 📌 USO DE INTERFACES COMO TIPO
```ts

let operacion: Calculador = new Sumador();
console.log(operacion.calcular(2, 3)); // 5
operacion = new Multiplicador();
console.log(operacion.calcular(2, 3)); // 6

// 💡 INTERFACES CON MÉTODOS OPCIONALES
interface Logger {
  log(mensaje: string): void;
  error?(mensaje: string): void;  // Método opcional
}

class ConsolaLogger implements Logger {
  log(mensaje: string): void {
    console.log(`[LOG] ${mensaje}`);
  }
  // No implementamos error() y es válido por ser opcional
}
```