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

/*
     Usa interfaces cuando:
        Quieras modelar objetos complejos.
        Necesites extender la estructura más adelante.
        Trabajes con clases.

    Usa tipos cuando:
        Necesites describir algo más que objetos (como uniones o tuplas).
        No planees modificar la estructura más adelante.
        Quieras algo más general y flexible.
 */
```
