/*
Required<T>
-----------
Convierte todas las propiedades opcionales de un tipo T en requeridas.

Uso típico: Asegurar que todas las propiedades estén presentes.
*/

interface Config {
    url?: string;
    port?: number;
}

// Ejemplo de uso de Required
const setConfig = (config: Required<Config>) => {
    // config.url y config.port son requeridos
    return config;
};

// Error: falta 'port'
// setConfig({ url: "localhost" });

setConfig({ url: "localhost", port: 8080 }); // Correcto
