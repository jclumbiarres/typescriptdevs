/*
NonNullable<T>
--------------
Construye un tipo excluyendo null y undefined de T.

Uso típico: Asegurar que un valor no sea nulo ni indefinido.
*/

type MaybeString = string | null | undefined;
type DefString = NonNullable<MaybeString>; // string

function printLength(s: DefString) {
    console.log(s.length);
}

// printLength(null); // Error
printLength("hola"); // Correcto
