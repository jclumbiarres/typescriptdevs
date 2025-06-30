/*
Awaited<T>
----------
Obtiene el tipo de valor que resuelve una Promise o un tipo similar a Promise.

Uso típico: Inferir el tipo de resultado de una función async.
*/

async function fetchData(): Promise<string> {
    return "datos";
}

type Data = Awaited<ReturnType<typeof fetchData>>; // string

// Otro ejemplo
function getNumber(): Promise<number> {
    return Promise.resolve(42);
}
type NumberType = Awaited<ReturnType<typeof getNumber>>; // number
