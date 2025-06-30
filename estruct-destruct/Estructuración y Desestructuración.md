## Estructuración y Desestructuración en JavaScript/TypeScript: Explicación Exhaustiva

La estructuración y desestructuración son técnicas modernas de JavaScript/TypeScript que permiten extraer valores de objetos y arrays de manera concisa y legible. Son fundamentales para escribir código limpio y eficiente.

### ¿Qué es la desestructuración?

La desestructuración es una sintaxis que permite extraer propiedades de objetos o elementos de arrays y asignarlos a variables de forma directa.

---

### Desestructuración de Objetos

Supongamos que tenemos un objeto:

```ts
const personaObj = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
};
```

Podemos extraer sus propiedades así:

```ts
const { nombre, edad, ciudad } = personaObj;
```

Esto equivale a:

```ts
const nombre = personaObj.nombre;
const edad = personaObj.edad;
const ciudad = personaObj.ciudad;
```

#### Cambiar el nombre de la variable

Puedes asignar la propiedad a una variable con otro nombre:

```ts
const { nombre: nombreCompleto } = personaObj;
console.log(nombreCompleto); // "Ana"
```

---

### Desestructuración de Arrays

Supongamos que tenemos un array:

```ts
const colores = ["rojo", "verde", "azul"];
```

Podemos extraer los elementos por posición:

```ts
const [primero, segundo, tercero] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(tercero); // "azul"
```

#### Saltar elementos

Puedes saltar elementos usando comas:

```ts
const [, , ultimo] = colores;
console.log(ultimo); // "azul"
```

---

### Desestructuración en Funciones

Puedes desestructurar argumentos directamente en la definición de la función:

```ts
function mostrarPersona({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
mostrarPersona(personaObj);
```

---

### Estructuración

La estructuración es el proceso inverso: crear objetos o arrays a partir de variables.

```ts
const nombre = "Ana";
const edad = 30;
const ciudad = "Madrid";
const persona = { nombre, edad, ciudad }; // Estructuración
```

---

### Ventajas

- Código más limpio y legible.
- Menos líneas para acceder a propiedades o elementos.
- Útil para trabajar con APIs, frameworks y librerías modernas.

---

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
// marca: marca,
// modelo: modelo,
// año: año
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

console.log(servidor); // Muestra "https://api.midominio.com"
console.log(tiempoEspera);// Muestra 5000 (valor del objeto)
console.log(reintentos); // Muestra 3 (valor por defecto)

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

console.log(nombre); // Muestra "Tech Solutions"
console.log(calle); // Muestra "Av. Principal"
console.log(ciudad); // Muestra "Barcelona"
console.log(empleados); // Muestra 250

```

```
