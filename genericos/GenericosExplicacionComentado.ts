/**
 * Genéricos en TypeScript
 * =======================
 * 
 * Los genéricos son una característica poderosa de TypeScript que permite crear componentes reutilizables y flexibles,
 * capaces de trabajar con diferentes tipos de datos sin perder la seguridad de tipos.
 * 
 * ¿Qué son los genéricos?
 * -----------------------
 * Un genérico es una forma de definir funciones, clases o interfaces que pueden operar sobre diferentes tipos de datos,
 * sin especificar de antemano cuáles serán esos tipos. Esto permite escribir código más flexible y reutilizable.
 */

// Ejemplo básico de función sin genéricos
function identidad(arg: number): number {
    return arg;
}
// Solo acepta y retorna números. ¿Qué pasa si queremos una función que funcione con cualquier tipo?

// Función genérica
function identidadGenerica<T>(arg: T): T {
    return arg;
}
// - `T` es un parámetro de tipo genérico. Puede tener cualquier nombre, pero por convención se usa `T` (de "Type").
// - Ahora la función puede aceptar y retornar cualquier tipo, manteniendo la relación entre el tipo de entrada y salida.

// Uso de la función genérica
let resultado1 = identidadGenerica<number>(10); // resultado1 es number
let resultado2 = identidadGenerica<string>("hola"); // resultado2 es string
// TypeScript puede inferir el tipo automáticamente:
let resultado3 = identidadGenerica(true); // resultado3 es boolean

/**
 * Genéricos en interfaces
 */
interface Caja<T> {
    valor: T;
}

const cajaDeNumero: Caja<number> = { valor: 123 };
const cajaDeTexto: Caja<string> = { valor: "texto" };

/**
 * Genéricos en clases
 */
class Contenedor<T> {
    private contenido: T;
    constructor(valor: T) {
        this.contenido = valor;
    }
    obtenerContenido(): T {
        return this.contenido;
    }
}

const contenedorNumero = new Contenedor<number>(42);
const contenedorString = new Contenedor<string>("hola");

/**
 * Restricciones en genéricos
 * A veces queremos limitar los tipos que puede aceptar un genérico. Para eso usamos `extends`:
 */
function longitud<T extends { length: number }>(arg: T): number {
    return arg.length;
}

longitud("hola"); // OK, string tiene length
longitud([1, 2, 3]); // OK, array tiene length
// longitud(10); // Error, number no tiene length

/**
 * Genéricos con múltiples parámetros
 */
function combinar<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

const resultado = combinar<number, string>(1, "uno"); // [1, "uno"]

/**
 * Genéricos y funciones flecha
 */
const identidadFlecha = <T>(arg: T): T => arg;

/**
 * Buenas prácticas:
 * - Usa nombres descriptivos para los parámetros de tipo si hay más de uno: <TKey, TValue>.
 * - Limita los tipos con `extends` cuando sea necesario.
 * - Prefiere genéricos cuando quieras reutilizar lógica para diferentes tipos.
 *
 * Resumen:
 * Los genéricos permiten escribir código flexible, reutilizable y seguro en TypeScript. Son esenciales para crear librerías,
 * componentes y funciones que trabajen con diferentes tipos de datos sin perder la seguridad de tipos.
 *
 * Explora y experimenta con los ejemplos para entender mejor cómo funcionan los genéricos en TypeScript.
 */
