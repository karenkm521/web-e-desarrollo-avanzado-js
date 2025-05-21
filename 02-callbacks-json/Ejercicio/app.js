// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}
// Funcion para simular la escritura de datos (Guardar en JSON)
function guardarDatos(callback){
    setTimeout(() => {
        // Aquí simula guardar el JSON con un retraso de 1 segundo
        callback();
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo,autor,genero,disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    /* Se llama a la función guardarDatos, que con el setTimeout 
    que simula el tiempo que toma guardar  un archivo (1 segundo). 
    Cuando termina la espera, se ejecuta la función anónima que agrega el libro al arreglo. */
    guardarDatos(()=>{
        biblioteca.libros.push(nuevoLibro)
        console.log(`El libro "${titulo}" ha sido agregado.`)
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
    })
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    guardarDatos(()=>{
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (!libro) {
            console.log(`El libro "${titulo}" no se encontró.`);
            return;
        }
        libro.disponible = nuevoEstado;
        console.log(`El estado de "${titulo}" ha sido actualizado a ${nuevoEstado ? "disponible" : "prestado"}.`);
    })
    
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
mostrarLibros();