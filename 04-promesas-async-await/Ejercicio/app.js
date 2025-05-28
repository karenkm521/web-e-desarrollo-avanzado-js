// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa,
        if(mesasSolicitadas<=mesasDisponibles){
            resolve(`Reserva exitosa. ${mesasSolicitadas} mesas confirmadas.`)
    } 
        else{
            reject(`No hay suficientes mesas disponibles. Solo contamos con ${mesasDisponibles}.`)
    }
      // de lo contrario, recházala con un mensaje adecuado.
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente,mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        // Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
        // para simular si el correo se envió correctamente o si ocurrió un error.
        const exitosa=Math.random()
            if (exitosa>=0.2) {
            resolve(
                `Confirmación de reserva de ${mesasSolicitadas} mesa(s) a nombre de ${nombreCliente}.`
            );
        } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
        }
        }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);
        // Si la reserva fue exitosa, se descuentan las mesas
        mesasDisponibles -= mesasSolicitadas;

        console.log("Enviando correo de confirmación...");
        const confirmacion = await enviarConfirmacionReserva(nombreCliente, mesasSolicitadas);
        console.log(confirmacion);
    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
  finally{
    console.log(`Gracias por visitarnos ${nombreCliente}.`); 
    console.log("-----------------------------------------")
  }
}

// Llamada de prueba
async function ejecutarReservas() {
    await hacerReserva("Juan Pérez", 3);
    await hacerReserva("Irene Florentino", 3);
}

ejecutarReservas();