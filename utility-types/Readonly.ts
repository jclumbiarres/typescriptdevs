/*
Readonly<T>
-----------
Convierte todas las propiedades de un tipo T en solo lectura (no pueden ser reasignadas).

Uso típico: Proteger objetos de modificaciones accidentales.
*/

interface Point {
    x: number;
    y: number;
}

const p1: Readonly<Point> = { x: 10, y: 20 };
// p1.x = 5; // Error: no se puede asignar a 'x' porque es de solo lectura

function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}

const frozen = freeze({ a: 1, b: 2 });
// frozen.a = 3; // Error
