/*
Exclude<T, U>
-------------
Construye un tipo excluyendo de T los tipos que están asignados a U.

Uso típico: Filtrar tipos de una unión.
*/

type Status = "active" | "inactive" | "pending";
type VisibleStatus = Exclude<Status, "pending">;

const status1: VisibleStatus = "active"; // Correcto
// const status2: VisibleStatus = "pending"; // Error

// Otro ejemplo

type Letters = "a" | "b" | "c";
type NoB = Exclude<Letters, "b">; // "a" | "c"
