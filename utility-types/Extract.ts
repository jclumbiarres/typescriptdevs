/*
Extract<T, U>
-------------
Construye un tipo extrayendo de T los tipos que están asignados a U.

Uso típico: Filtrar tipos de una unión que coincidan con otro tipo.
*/


// Usando un tipo diferente para evitar duplicados
type StatusExtract = "active" | "inactive" | "pending";
type OnlyPending = Extract<StatusExtract, "pending">; // "pending"

const s: OnlyPending = "pending";
// const s2: OnlyPending = "active"; // Error

// Otro ejemplo


// Usando un tipo diferente para evitar duplicados
type LettersExtract = "a" | "b" | "c";
type OnlyB = Extract<LettersExtract, "b" | "c">; // "b" | "c"
