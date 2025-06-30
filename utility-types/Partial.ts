/*
Partial<T>
----------
Convierte todas las propiedades de un tipo T en opcionales.

Uso típico: Permitir la actualización parcial de objetos.
*/

interface User {
    id: number;
    name: string;
    email: string;
}

// Ejemplo de uso de Partial
const updateUser = (user: User, update: Partial<User>): User => {
    return { ...user, ...update };
};

const user: User = { id: 1, name: "Juan", password: "1234", email: "juan@email.com" };
const updated = updateUser(user, { name: "Carlos" }); // Solo actualiza el nombre

// updated: { id: 1, name: "Carlos", email: "juan@email.com" }
