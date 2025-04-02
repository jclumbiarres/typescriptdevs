```ts
// Desestructuración Objetos
// Creamos un objeto persona con 3 propiedades
const personaObj = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
};
// DESESTRUCTURACIÓN: Extraemos las propiedades del objeto
const { nombre, edad, ciudad } = personaObj;
// Esto equivale a:
// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;

console.log(nombre); // Muestra "Ana"
console.log(edad);   // Muestra 30
console.log(ciudad); // Muestra "Madrid"

// También podemos extraer cambiando el nombre de la variable
const { nombre: nombreCompleto } = personaObj;
console.log(nombreCompleto); // Muestra "Ana"

// Desestructuración array
// Creamos un array con 3 elementos
const colores = ["rojo", "verde", "azul"];

// DESESTRUCTURACIÓN: Extraemos los elementos por posición
const [primero, segundo, tercero] = colores;
// Esto equivale a:
// const primero = colores[0];
// const segundo = colores[1];
// const tercero = colores[2];

console.log(primero); // Muestra "rojo"
console.log(segundo); // Muestra "verde"
console.log(tercero); // Muestra "azul"

// Podemos saltarnos elementos usando comas
const [, , ultimo] = colores;
console.log(ultimo); // Muestra "azul"

// Estructuración de Objetos
// Tenemos variables sueltas
const marca = "Toyota";
const modelo = "Corolla";
const año = 2020;

// ESTRUCTURACIÓN: Creamos un objeto a partir de variables
const coche = { marca, modelo, año };
// Esto equivale a:
// const coche = {
//     marca: marca,
//     modelo: modelo,
//     año: año
// };

console.log(coche);
// Muestra: { marca: "Toyota", modelo: "Corolla", año: 2020 }

// Desestructuración en Parámetros de Función
// Creamos un objeto
const estudiante = {
  nombre: "Carlos",
  calificaciones: [8, 7, 9],
  universidad: "UNAM"
};

// Función que usa desestructuración en los parámetros
function mostrarEstudiante({ nombre, calificaciones, universidad }) {
  console.log(`El estudiante ${nombre} de la ${universidad} tiene calificaciones:`);
  console.log(calificaciones.join(", "));
}

mostrarEstudiante(estudiante);
// Muestra:
// El estudiante Carlos de la UNAM tiene calificaciones:
// 8, 7, 9

// Desestructuración con Valores por Defecto
// Objeto con algunas propiedades
const configuracion = {
  servidor: "https://api.midominio.com",
  tiempoEspera: 5000,
  reintentos: 4
};

// Desestructuramos con valores por defecto para propiedades que podrían no existir
const {
  servidor,
  tiempoEspera = 3000,
  reintentos = 3
} = configuracion;

console.log(servidor);    // Muestra "https://api.midominio.com"
console.log(tiempoEspera);// Muestra 5000 (valor del objeto)
console.log(reintentos);  // Muestra 3 (valor por defecto)

// Desestructuración anidada
// Objeto con estructura anidada
const empresa = {
  nombreEmpresa: "Tech Solutions",
  direccionEmpresa: {
    calle: "Av. Principal",
    numero: 123,
    ciudadEmpresa: "Barcelona"
  },
  empleados: 250
};

// Desestructuración anidada
const {
  nombreEmpresa,
  direccionEmpresa: { calle, numero, ciudadEmpresa },
  empleados
} = empresa;

console.log(nombre);  // Muestra "Tech Solutions"
console.log(calle);   // Muestra "Av. Principal"
console.log(ciudad);  // Muestra "Barcelona"
console.log(empleados); // Muestra 250
```
