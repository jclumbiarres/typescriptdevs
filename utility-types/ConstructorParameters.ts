/*
ConstructorParameters<T>
-----------------------
Obtiene una tupla con los tipos de los parámetros del constructor de una clase.

Uso típico: Reutilizar la lista de parámetros de un constructor.
*/

class Person {
    constructor(public name: string, public age: number) { }
}

type PersonParams = ConstructorParameters<typeof Person>; // [string, number]

const args: PersonParams = ["Lucía", 25];
const p = new Person(...args);
