/*
Parameters<T>
-------------
Obtiene una tupla con los tipos de los parámetros de una función.

Uso típico: Reutilizar la lista de parámetros de una función.
*/

function greet(name: string, age: number) {
    return `Hola ${name}, tienes ${age} años.`;
}

type GreetParams = Parameters<typeof greet>; // [string, number]

function callGreet(...args: GreetParams) {
    return greet(...args);
}

callGreet("Carlos", 30); // "Hola Carlos, tienes 30 años."
