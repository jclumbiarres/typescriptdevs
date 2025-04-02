## Asincronía

| Contenido                | Descripción          |
| ------------------------ | -------------------- |
| [[Await Async]]          | Await / Asyc         |
| [[Promises]]             | Promesas             |
| [[Promises en Paralelo]] | Promesas en Paralelo |

## Decoradores

| Contenido     | Descripción            |
| ------------- | ---------------------- |
| [[Clase]]     | Decorador de clase     |
| [[Método]]    | Decorador de método    |
| [[Parámetro]] | Decorador de parámetro |
| [[Propiedad]] | Decorador de propiedad |

## OOP (Orientación a Objetos)

| Contenido                       | Descripción                               |
| ------------------------------- | ----------------------------------------- |
| [[Clases]]                      | Clases                                    |
| [[Implementación de Interface]] | Implementación de interfaces sobre clases |
| [[Interface o Tipos]]           | Cuando usar tipos o interface             |
| [[Interfaces]]                  | Información sobre las interfaces          |
| [[Inyección]]                   | Inyección de dependencias                 |
| [[Mixins]]                      | Mixins                                    |

## Módulos

| Contenido  | Descripción           |
| ---------- | --------------------- |
| [[Import]] | Como importar módulos |

## Estructuración y Desestructuración

| Contenido                              | Descripción                                       |
| -------------------------------------- | ------------------------------------------------- |
| [[Estructuración y Desestructuración]] | Como estructurar y desestructurar objetos y demás |

Para usar los decoradores recomiendo crear en la raíz del proyecto un tsconfig.json con estos datos:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
