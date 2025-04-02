## 📦 CLASE BÁSICA
### Una clase es una plantilla para crear objetos

```ts

class Animal {
  // Propiedades: Variables asociadas a la clase
  public nombre: string;    // 'public' es modificador de acceso (por defecto)
  private edad: number = 4;     // 'private' solo accesible dentro de la clase
  protected tipo: string;   // 'protected' accesible en clase y subclases

  // Constructor: Método especial para inicializar objetos
  constructor(nombre: string, edad: number, tipo: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
  }

  // Método: Función asociada a la clase
  public hacerSonido(): void {
    console.log("Sonido genérico de animal");
  }
  static hola() {
    console.log("hola")
  }
  // Método protegido solo accesible desde la clase y subclases
  protected obtenerEdad(): number {
    return this.edad;
  }
}
```

## Animal.hola() método static
### 🐕 HERENCIA: Crear subclase que extiende de Animal

```ts

class Perro extends Animal {
  raza: string;  // Nueva propiedad específica de Perro

  constructor(nombre: string, edad: number, raza: string) {
    super(nombre, edad, "Mamífero");  // super llama al constructor padre
    this.raza = raza;
  }
  setter(nombre: string) {
    this.nombre = nombre
  }
  getter() {
    return this.nombre
  }
  // Polimorfismo: Sobreescribir método del padre
  hacerSonido(): void {
    console.log("¡Guau guau!");
  }

  hacerSonidoAnimal(): void {
    super.hacerSonido() // sonido genérico de animal
  }

  // Nuevo método específico de Perro
  mostrarInfo(): void {
    console.log(
      `${this.nombre} es un ${this.tipo} de raza ${this.raza}, tiene ${this.obtenerEdad()} años`
      // this.edad daría error por ser private en Animal
    );
  }
}
//const perruno = new Perro("Toby", 4, "Pastor Aleman")
//perruno.hacerSonido() // haría guau guau
```
## 🛠️ USO DE LAS CLASES
### Crear instancia de Animal
```ts

const miAnimal = new Animal("Genérico", 3, "Desconocido");
miAnimal.hacerSonido();  // Sonido genérico de animal

// Crear instancia de Perro
const miPerro = new Perro("Buddy", 5, "Golden Retriever");
miPerro.hacerSonido();   // ¡Guau guau! (método sobreescrito)
miPerro.mostrarInfo();   // Buddy es un Mamífero de raza Golden Retriever, tiene 5 años
```

## ⚡ MODIFICADORES DE ACCESO

* miAnimal.edad = 4;    // Error: propiedad privada
* miPerro.obtenerEdad(); // Error: método protegido

### 🌀 Miembros estáticos (pertenecen a la clase, no a instancias)
```ts

class Calculadora {
  static PI: number = 3.1416;

  static sumar(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculadora.PI);        // 3.1416
console.log(Calculadora.sumar(2, 3)); // 5
```