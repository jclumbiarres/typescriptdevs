/*
Omit<T, K>
----------
Construye un tipo excluyendo un subconjunto de propiedades K de T.

Uso típico: Crear tipos sin ciertas propiedades.
*/

interface User {
    id: number;
    name: string;
    password: string;
    email: string;
}

// Queremos un tipo User sin la contraseña
const publicUser: Omit<User, "password"> = {
    id: 1,
    name: "Juan",
    email: "user@email.com"
};

// Otro ejemplo
function withoutPassword(user: Omit<User, "password">) {
    return user;
}
