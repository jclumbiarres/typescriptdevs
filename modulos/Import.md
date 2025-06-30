## Importación de Módulos en TypeScript: Explicación Exhaustiva

En TypeScript, los módulos permiten dividir el código en archivos reutilizables y organizados. Para usar código de otro archivo, se utiliza la instrucción `import`.

### Ejemplo práctico de importación

Supongamos que tienes un archivo que exporta una clase y una función:

```ts
// decoradorParametro.ts
export function LogParameter(...) { /* ... */ }
export default class Servicio { /* ... */ }
```

Para importar ambos en otro archivo:

```ts
import Servicio, { LogParameter } from "./decoradorParametro";

const prueba = new Servicio();
prueba.procesar(10, "Importado");
console.log(prueba);
```

#### Explicación:

- `import Servicio` importa la exportación por defecto del archivo.
- `{ LogParameter }` importa una exportación nombrada.
- La ruta `./decoradorParametro` debe ser relativa al archivo actual y sin la extensión `.ts`.

### Tipos de importaciones

- **Por defecto:** `import MiClase from "./archivo";`
- **Nombradas:** `import { funcion, constante } from "./archivo";`
- **Todo el módulo:** `import * as modulo from "./archivo";`

### Ventajas de los módulos

- Permiten reutilizar código.
- Mejoran la organización y mantenibilidad.
- Evitan conflictos de nombres.

---
