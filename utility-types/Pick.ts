/*
Pick<T, K>
----------
Construye un tipo seleccionando un subconjunto de propiedades K de T.

Uso típico: Crear tipos con solo algunas propiedades de un objeto.
*/

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Solo queremos el título y el estado de completado
const summary: Pick<Todo, "title" | "completed"> = {
    title: "Aprender TypeScript",
    completed: false
};

// Otro ejemplo
function getTitle(todo: Pick<Todo, "title">) {
    return todo.title;
}
