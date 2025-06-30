// Ejemplos avanzados de tipos en TypeScript
// De fácil a difícil

// 1. Union Types
// Un tipo que puede ser string o number
type StringOrNumber = string | number;

// 2. Intersection Types
// Un tipo que combina dos tipos
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age; // { name: string; age: number }

// 3. Type Alias
// Alias para un tipo complejo
type Point = { x: number; y: number };

// 4. Literal Types
// Solo acepta valores específicos
type Direction = "up" | "down" | "left" | "right";

// 5. Type Guards
// Función que discrimina tipos en tiempo de ejecución
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// 6. Discriminated Unions
// Unión de tipos con un campo discriminante
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
    }
}

// 7. Tipos Genéricos
function identity<T>(value: T): T {
    return value;
}

// 8. Tipos Condicionales
// Devuelve true si T es string, false si no
type IsString<T> = T extends string ? true : false;

// 9. Inferencia con infer
// Extrae el tipo de los elementos de un array
type ElementType<T> = T extends (infer U)[] ? U : never;

// 10. Mapped Types
// Hace que todas las propiedades sean opcionales
type PartialPerson = {
    [K in keyof Person]?: Person[K];
};

// 11. Utility Types: Pick y Omit
type PersonName = Pick<Person, "name">;
type PersonWithoutAge = Omit<Person, "age">;

// 12. Readonly y Record
type ReadonlyPerson = Readonly<Person>;
type StringToNumberMap = Record<string, number>;

// 13. Template Literal Types
// Construye tipos a partir de strings
type EventName = `on${Capitalize<Direction>}`; // "onUp" | "onDown" | ...

// 14. Tipos recursivos
// Un tipo que representa un árbol
type Tree<T> = {
    value: T;
    children?: Tree<T>[];
};

// 15. Tipos condicionales avanzados
// Si T es un array, devuelve el tipo de los elementos, si no, devuelve T
type Unpacked<T> = T extends (infer U)[] ? U : T;

// Ejemplo de uso avanzado con type guards y condicionales
function printValue<T>(value: T) {
    if (Array.isArray(value)) {
        // value es T[]
        value.forEach(v => console.log("Elemento:", v));
    } else if (typeof value === "object" && value !== null) {
        // value es un objeto
        console.log("Objeto:", value);
    } else {
        // value es un tipo primitivo
        console.log("Primitivo:", value);
    }
}
