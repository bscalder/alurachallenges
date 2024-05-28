function validarFormulario(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var nombre = document.querySelector('.formnombre').value;
    var email = document.querySelector('.formemail').value;
    var asunto = document.querySelector('.formasunto').value;
    var mensaje = document.querySelector('.formmensaje').value;

    if (nombre.trim() === "") {
        alert("El campo de nombre no puede ir vacío.");
        return;
    }
    if (!email.includes("@")) {
        alert("El correo no tiene un formato correcto.");
        return;
    }
    if (asunto.trim() === "") {
        alert("El asunto no puede ir vacío.");
        return;
    }
    if (mensaje.trim() === "") {
        alert("El mensaje no puede ir vacío.");
        return;
    }

    alert("Gracias por enviar tu mensaje.");
    document.querySelector('form').submit(); // Enviar el formulario si todo es correcto
}