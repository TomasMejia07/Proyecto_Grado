function validacion() {
    let usuario = document.getElementById("usuario").value;
    let contra = document.getElementById("password").value

    if (usuario === "") {
        document.getElementById("ErrorUsuario").innerText = "Este campo es obligatorio.";
        return false;
    } else if (!/^[a-zA-Z]/.test(usuario)) {
        document.getElementById("ErrorUsuario").innerText = "Solo letras";
        return false;
    } else if (usuario.length < 5) {
        document.getElementById("ErrorUsuario").innerText = "Usuario no valido";
        return false;
    } else {
        document.getElementById("ErrorUsuario").innerText = "";
    } if (contra === "") {
        document.getElementById("ErrorPassword").innerText = "Este campo es obligatorio.";
        return false;
    } else {
        document.getElementById("ErrorPassword").innerText = "";

    }

    document.getElementById("form").reset();
    return true;
}

