## Implementación de Interfaces en TypeScript: Explicación Exhaustiva

Las interfaces en TypeScript permiten definir la forma que debe tener un objeto, clase o función. Son fundamentales para garantizar la consistencia y robustez del código, especialmente en proyectos grandes.

---

### ¿Qué es una interfaz?

Una interfaz es un contrato que especifica qué propiedades y métodos debe tener un objeto o clase, pero **no implementa** la lógica, solo la define.

---

### Ejemplo completo: Clase que implementa una interfaz

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
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completada = false; // Por defecto, la tarea no está completada
  }

  // 5. Implementamos el método "marcarComoCompletada" definido en la interfaz
  marcarComoCompletada(): void {
    this.completada = true;
    console.log(`La tarea "${this.titulo}" ha sido marcada como completada.`);
  }
}

// 6. Instanciamos un objeto de la clase Tarea
const miTarea = new Tarea(
  "Aprender TypeScript",
  "Estudiar interfaces y clases"
);

// 7. Mostramos el estado inicial de la tarea
console.log(`Título: ${miTarea.titulo}`);
console.log(`Descripción: ${miTarea.descripcion}`);
console.log(`Completada: ${miTarea.completada}`);

// 8. Marcamos la tarea como completada
miTarea.marcarComoCompletada();

// 9. Verificamos el nuevo estado de la tarea
console.log(`Completada: ${miTarea.completada}`);
```

---

### Explicación paso a paso

1. **Definición de la interfaz:** Se especifican las propiedades y métodos que debe tener cualquier clase que implemente `ITarea`.
2. **Implementación en la clase:** La clase `Tarea` usa `implements ITarea` para obligarse a cumplir el contrato de la interfaz.
3. **Inicialización:** El constructor recibe los valores y establece el estado inicial.
4. **Implementación de métodos:** Todos los métodos definidos en la interfaz deben implementarse en la clase.
5. **Ventaja:** Si olvidas implementar alguna propiedad o método, TypeScript mostrará un error.

---

### Ventajas de usar interfaces

- Garantizan la estructura de los objetos y clases.
- Facilitan el mantenimiento y escalabilidad del código.
- Permiten la programación orientada a contratos.
- Mejoran la autocompletación y documentación en los editores.

---
