# Enums en TypeScript

Los **enums** (enumeraciones) en TypeScript son una característica que permite definir un conjunto de constantes con nombre, lo que facilita la escritura de código más legible y mantenible. Los enums son útiles cuando se necesita representar un grupo de valores relacionados, como días de la semana, estados de una aplicación, roles de usuario, etc.

## Tipos de Enums

### 1. Enums Numéricos

Por defecto, los enums en TypeScript son numéricos. Los miembros reciben valores numéricos incrementales automáticamente, comenzando desde 0, a menos que se especifique otro valor inicial.

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
```

También se pueden asignar valores explícitos:

```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
```

### 2. Enums de Cadenas (String Enums)

Permiten asignar valores de tipo string a los miembros del enum:

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
```

### 3. Enums Heterogéneos

Mezclan valores numéricos y de cadena, aunque no es recomendable por claridad y consistencia.

```typescript
enum Mixed {
  No = 0,
  Yes = "YES",
}
```

## Características de los Enums

- **Bidireccionalidad (solo numéricos):** Se puede acceder al nombre del miembro a partir del valor y viceversa.
- **Const Enums:** Usando `const enum` se eliminan del código JavaScript final, mejorando el rendimiento.

```typescript
const enum Direction {
  Up,
  Down,
}
let dir = Direction.Up;
```

- **Uso en Switch:** Los enums son ideales para usar en sentencias `switch`.

## Ventajas

- Mejoran la legibilidad del código.
- Agrupan valores relacionados bajo un mismo nombre.
- Facilitan el mantenimiento y la refactorización.

## Desventajas y Consideraciones

- Los enums tradicionales de TypeScript pueden tener problemas de seguridad de tipos, especialmente los numéricos.
- Los enums no son tan flexibles como otros patrones (por ejemplo, objetos literales o unions de string).
- Los enums pueden generar código JavaScript adicional, lo que puede afectar el tamaño del bundle.

## Ejemplo de Uso

```typescript
enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role) {
  switch (role) {
    case Role.Admin:
      return "All permissions";
    case Role.User:
      return "Limited permissions";
    case Role.Guest:
      return "Read-only";
  }
}
```

---

En resumen, los enums en TypeScript son útiles para representar conjuntos de valores constantes, pero es importante conocer sus limitaciones y considerar alternativas más seguras cuando sea necesario.
