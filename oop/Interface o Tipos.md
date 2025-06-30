## ¿Interface o Type? Explicación Exhaustiva en TypeScript

En TypeScript, tanto `interface` como `type` permiten definir la forma de los objetos, pero tienen diferencias importantes y usos recomendados.

---

### Ejemplo usando `interface`

```ts
interface IUsuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

class IGestorUsuarios {
  usuarios: IUsuario[];
  constructor() {
    this.usuarios = [];
  }
  agregarUsuario(usuario: IUsuario): void {
    this.usuarios.push(usuario);
  }
}
```

### Ejemplo usando `type`

```ts
type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

class TGestorUsuarios {
  usuarios: Usuario[];
  constructor() {
    this.usuarios = [];
  }
  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
}
```

---

### ¿Cuándo usar `interface`?

- Cuando quieras modelar objetos complejos.
- Si necesitas extender la estructura más adelante (herencia de interfaces).
- Cuando trabajas con clases (implementación de interfaces).

### ¿Cuándo usar `type`?

- Cuando necesitas describir algo más que objetos (uniones, tuplas, tipos primitivos).
- Si no planeas modificar la estructura más adelante.
- Cuando quieres algo más general y flexible.

---

### Diferencias clave

- Las interfaces pueden extenderse y fusionarse automáticamente.
- Los tipos (`type`) son más versátiles para uniones y composición avanzada.
- Ambos pueden usarse para describir la forma de objetos, pero las interfaces son preferidas para contratos públicos y las clases.

---
