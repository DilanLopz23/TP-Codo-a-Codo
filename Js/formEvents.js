function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var puesto = document.getElementById('puesto').value;
    
    // Realizar validaciones, por ejemplo:
    if (nombre.trim() === '') {
        alert('El campo Nombre completo es obligatorio.');
        console.log("Hola")
        return false;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return false;
    }
    
    if (!/^\d{10}$/.test(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return false;
    }
    
    if (puesto.trim() === '') {
        alert('El campo Puesto deseado es obligatorio.');
        return false;
    }

    // Agregar más validaciones según tus requisitos

    return true; // Si todas las validaciones pasan, se envía el formulario
}