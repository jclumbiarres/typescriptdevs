/*
ThisParameterType<T>
--------------------
Obtiene el tipo de 'this' para una función, o unknown si no está especificado.

Uso típico: Extraer el tipo de 'this' de funciones que lo usan explícitamente.
*/

function toHex(this: Number) {
    return this.toString(16);
}

type ToHexThisType = ThisParameterType<typeof toHex>; // Number

function callWithThis(fn: (this: Number) => string, value: Number) {
    return fn.call(value);
}

callWithThis(toHex, 255); // "ff"
