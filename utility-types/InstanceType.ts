/*
InstanceType<T>
----------------
Obtiene el tipo de instancia creado por un constructor.

Uso típico: Inferir el tipo de instancia de una clase.
*/

class Animal {
    constructor(public especie: string) { }
}

type AnimalInstance = InstanceType<typeof Animal>;

const perro: AnimalInstance = new Animal("perro");
// const gato: AnimalInstance = { especie: "gato" }; // También válido
