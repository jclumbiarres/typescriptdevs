# ¿Por qué usar los "Better Enums" de Matt Pocock?

Los enums tradicionales de TypeScript, aunque útiles, presentan limitaciones y riesgos en cuanto a la seguridad de tipos y la flexibilidad. Matt Pocock propone una alternativa conocida como "Better Enums" que aprovecha las uniones de literales de string y objetos para crear enumeraciones más seguras y predecibles.

## Problemas de los Enums Tradicionales

1. **No son completamente type-safe:** Los enums numéricos permiten asignar cualquier número, incluso valores fuera del rango definido.
   ```typescript
   enum Status {
     Success = 1,
     Error = 2,
   }
   let s: Status = 3; // No error en tiempo de compilación
   ```
2. **Bidireccionalidad innecesaria:** Los enums numéricos generan un objeto en JavaScript que permite acceder tanto por nombre como por valor, lo que puede ser fuente de errores y aumenta el tamaño del bundle.
3. **Dificultad para iterar:** Iterar sobre los valores de un enum tradicional no es tan directo como con un array u objeto.
4. **No funcionan bien con string literals:** Los enums de string no permiten obtener una lista de todos los valores fácilmente.

## ¿Qué son los "Better Enums"?

Los "Better Enums" son una técnica que utiliza un objeto y una unión de literales de string para definir un conjunto de valores válidos, logrando mayor seguridad de tipos y facilidad de uso.

```typescript
const Status = {
  Success: "SUCCESS",
  Error: "ERROR",
  Pending: "PENDING",
} as const;

type Status = (typeof Status)[keyof typeof Status];
```

## Ventajas de los "Better Enums"

- **Type-safe:** Solo se pueden asignar los valores definidos, evitando errores de asignación.
- **Fácil de iterar:** Se puede obtener un array de los valores válidos fácilmente.
  ```typescript
  const allStatuses = Object.values(Status); // ['SUCCESS', 'ERROR', 'PENDING']
  ```
- **No hay bidireccionalidad innecesaria:** El objeto generado es simple y no introduce lógica extra en el bundle.
- **Mejor autocompletado:** Los editores como VS Code ofrecen mejor autocompletado y validación.
- **Compatibilidad con utilidades de TypeScript:** Se pueden usar utilidades como `keyof` y `typeof` para manipular los tipos.

## Ejemplo de Uso

```typescript
function setStatus(status: Status) {
  if (status === Status.Success) {
    // ...
  }
}

setStatus("SUCCESS"); // OK
setStatus("FAIL"); // Error de compilación
```

## Conclusión

Los "Better Enums" de Matt Pocock son una alternativa más segura, flexible y eficiente a los enums tradicionales de TypeScript. Permiten aprovechar al máximo el sistema de tipos, evitando errores comunes y mejorando la experiencia de desarrollo.
