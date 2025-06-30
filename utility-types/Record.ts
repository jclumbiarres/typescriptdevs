/*
Record<K, T>
------------
Construye un tipo de objeto cuyas claves son K y los valores son de tipo T.

Uso típico: Mapear claves conocidas a valores de un tipo específico.
*/

type Role = "admin" | "user" | "guest";

const permissions: Record<Role, string[]> = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
};

// Otro ejemplo
interface Product {
    name: string;
    price: number;
}

const products: Record<string, Product> = {
    "p1": { name: "Camiseta", price: 20 },
    "p2": { name: "Pantalón", price: 30 }
};
