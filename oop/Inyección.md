## Inyección de Dependencias en TypeScript: Explicación Exhaustiva

La inyección de dependencias (Dependency Injection, DI) es un patrón de diseño que permite desacoplar las clases de sus dependencias, facilitando la reutilización, el testeo y el mantenimiento del código.

---

### ¿Qué es la inyección de dependencias?

Consiste en proporcionar a una clase sus dependencias (servicios, objetos, etc.) desde fuera, en lugar de crearlas internamente. Así, la clase no depende de implementaciones concretas, sino de abstracciones (interfaces).

---

### Ejemplo completo de inyección de dependencias

```ts
// 1. Definimos una interfaz para el servicio
interface MensajeService {
  enviarMensaje(mensaje: string): void;
}

// 2. Implementación concreta del servicio (envía emails)
class EmailService implements MensajeService {
  enviarMensaje(mensaje: string): void {
    console.log(`Enviando email: ${mensaje}`);
    // Aquí iría el código real para enviar un email
  }
}

// 3. Implementación para testing (mock)
class MockService implements MensajeService {
  enviarMensaje(mensaje: string): void {
    console.log(`[TEST] Mensaje simulado: ${mensaje}`);
    // No envía nada realmente, solo para pruebas
  }
}

// 4. Clase que usa el servicio inyectado
class Notificador {
  constructor(private servicio: MensajeService) {}
  notificar(usuario: string, mensaje: string): void {
    const mensajeCompleto = `Para ${usuario}: ${mensaje}`;
    this.servicio.enviarMensaje(mensajeCompleto);
  }
}

// 5. Implementación en producción
const emailService = new EmailService();
const notificadorReal = new Notificador(emailService);
notificadorReal.notificar("Juan", "Hola desde la app!");

// 6. Implementación para pruebas
const mockService = new MockService();
const notificadorTest = new Notificador(mockService);
notificadorTest.notificar("UsuarioTest", "Mensaje de prueba");
```

---

### Ventajas de la inyección de dependencias

- Facilita el testeo (puedes inyectar mocks o stubs).
- Desacopla las clases de implementaciones concretas.
- Permite cambiar la lógica de negocio sin modificar la clase consumidora.

---
