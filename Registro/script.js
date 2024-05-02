// JavaScript para validar el formulario de registro
document.getElementById("registroForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    }
});

document.getElementById("inicioSesionForm").addEventListener("submit", function(event) {
});
