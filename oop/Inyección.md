```ts
// PASO 1: Definimos una interfaz para el servicio
// Esto describe qué métodos debe tener nuestro servicio de mensajes
interface MensajeService {
  enviarMensaje(mensaje: string): void;
}

// PASO 2: Creamos una implementación concreta del servicio
// Esta es la clase real que enviará mensajes por email
class EmailService implements MensajeService {
  enviarMensaje(mensaje: string): void {
    console.log(`Enviando email: ${mensaje}`);
    // Aquí iría el código real para enviar un email
  }
}

// PASO 3: Creamos otra implementación para testing
// Esta es una versión falsa para usar en pruebas
class MockService implements MensajeService {
  enviarMensaje(mensaje: string): void {
    console.log(`[TEST] Mensaje simulado: ${mensaje}`);
    // No envía nada realmente, solo para pruebas
  }
}

// PASO 4: Creamos la clase que usará el servicio
// Notifica usuarios usando el servicio de mensajes
class Notificador {
  // El servicio se inyecta por el constructor
  constructor(private servicio: MensajeService) { }

  notificar(usuario: string, mensaje: string): void {
    const mensajeCompleto = `Para ${usuario}: ${mensaje}`;
    this.servicio.enviarMensaje(mensajeCompleto);
  }
}

// PASO 5: Implementación en producción
// Creamos el servicio real (EmailService)
const emailService = new EmailService();
// Lo inyectamos en el Notificador
const notificadorReal = new Notificador(emailService);
notificadorReal.notificar("Juan", "Hola desde la app!");

// PASO 6: Implementación para pruebas
// Creamos el servicio falso (MockService)
const mockService = new MockService();
// Lo inyectamos en el Notificador
const notificadorTest = new Notificador(mockService);
notificadorTest.notificar("UsuarioTest", "Mensaje de prueba");
```
