/*
OmitThisParameter<T>
-------------------
Crea un tipo de función igual a T pero sin el parámetro 'this'.

Uso típico: Convertir funciones que usan 'this' explícito en funciones normales.
*/

function toHex2(this: Number) {
    return this.toString(16);
}

const hex: OmitThisParameter<typeof toHex2> = () => toHex2.call(255);

console.log(hex()); // "ff"
