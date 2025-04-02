```ts

// 1. Definimos la interfaz ITarea
interface ITarea {
  titulo: string; // Propiedad "titulo" de tipo string
  descripcion: string; // Propiedad "descripcion" de tipo string
  completada: boolean; // Propiedad "completada" de tipo boolean
  marcarComoCompletada(): void; // Método que no retorna nada (void)
}

// 2. Creamos la clase Tarea que implementa la interfaz ITarea
class Tarea implements ITarea {
  // 3. Declaramos las propiedades requeridas por la interfaz
  titulo: string;
  descripcion: string;
  completada: boolean;

  // 4. Constructor para inicializar las propiedades
  constructor(titulo: string, descripcion: string) {
    this.titulo = titulo; // Asignamos el valor del parámetro al atributo "titulo"
    this.descripcion = descripcion; // Asignamos el valor del parámetro al atributo "descripcion"
    this.completada = false; // Por defecto, la tarea no está completada
  }

  // 5. Implementamos el método "marcarComoCompletada" definido en la interfaz
  marcarComoCompletada(): void {
    this.completada = true; // Cambiamos el estado de "completada" a true
    console.log(`La tarea "${this.titulo}" ha sido marcada como completada.`);
  }
}

// 6. Instanciamos un objeto de la clase Tarea
const miTarea = new Tarea("Aprender TypeScript", "Estudiar interfaces y clases");

// 7. Mostramos el estado inicial de la tarea
console.log(`Título: ${miTarea.titulo}`);
console.log(`Descripción: ${miTarea.descripcion}`);
console.log(`Completada: ${miTarea.completada}`);

// 8. Marcamos la tarea como completada
miTarea.marcarComoCompletada();

// 9. Verificamos el nuevo estado de la tarea
console.log(`Completada: ${miTarea.completada}`);
```
