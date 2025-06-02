
    document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const data={
          nombre: document.getElementById('nombre').value.trim(),
          correo: document.getElementById('correo').value.trim(),
          telefono: document.getElementById('telefono').value.trim(),
          intereses: document.querySelectorAll('input[name="intereses"]:checked'),
          horario: document.querySelector('input[name="horario"]:checked'),
          fecha: document.getElementById('fecha').value,
          hora: document.getElementById('hora').value
      };
      //destructuring del objeto data
      const { nombre, correo,telefono } = data
      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }
      //Validacion de nombre 
      const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/
      const longitud = nombre.trim().length
      if (!nombreRegex.test(nombre)) {
        alert('Por favor, ingrese un nombre valido.');
        return;
      }
      if(longitud < 3 || longitud > 40){
        alert("El nombre debe tener entre 3 y 40 caracteres.");
        return;
      }
      // Validación de correo
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const correoLongitud = correo.length;

      if (!correoRegex.test(correo)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
      }

      if (correoLongitud < 5 || correoLongitud > 100) {
        alert("El correo debe tener entre 5 y 100 caracteres.");
        return;
      }
    // Validación de teléfono
      const telefonoRegex = /^\d{10}$/;
      if (!telefonoRegex.test(telefono)) {
        alert("Ingresa un número de teléfono válido de 10 dígitos.");
        return;
      }
    //Validación de seleccion de horario habil
    //Separamos los minutos y horas.
    const [horaStr, minutoStr] = data.hora.split(":");
    // Guardamos las horas en una const
    const hora = parseInt(horaStr);

        if (hora < 7 || hora > 23) {
          alert("Por favor, selecciona una hora entre las 07:00 a.m. y las 11:00 p.m.");
          return;
        }



      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!'
        
      );
    });
