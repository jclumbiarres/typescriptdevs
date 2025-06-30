/*
ReturnType<T>
-------------
Obtiene el tipo de retorno de una función.

Uso típico: Inferir el tipo de retorno de funciones para reutilizarlo.
*/

function suma(a: number, b: number) {
    return a + b;
}

type SumaReturn = ReturnType<typeof suma>; // number

const resultado: SumaReturn = suma(2, 3);

// Otro ejemplo
const getUser = () => ({ id: 1, name: "Ana" });
type UserType = ReturnType<typeof getUser>; // { id: number; name: string; }
