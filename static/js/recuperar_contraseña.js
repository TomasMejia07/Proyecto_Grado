function validacionEmail() {
    let Gmail = document.getElementById("Gmail").value;
    if (Gmail === "") {
        document.getElementById("ErrorGmail").innerText = "Esto es obligatorio.";
        return false;
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(Gmail)) {
        document.getElementById("ErrorGmail").innerText = "Ingrese un correo valido";
        return false;
    }

    return true;
}


function validacionCodigo() {
    let Codigo = document.getElementById("Codigo").value;

    if (Codigo === "") {
        document.getElementById("ErrorCodigo").innerText = "Esto es obligatorio.";
        return false;
    }

    return true;
}

function validacionPassword() {
    let password = document.getElementById("password").value;
    let passwordCon = document.getElementById("passwordCon").value;

    if (password === "") {
        document.getElementById("Errorpassword").innerText = "Esto es obligatorio.";
        return false;
    }
    if (passwordCon === "") {
        document.getElementById("ErrorpasswordCon").innerText = "Esto es obligatorio.";
        return false;
    }
    if (password !== passwordCon) {
        document.getElementById("ErrorpasswordCon").innerText = "Las contraseñas no coinciden.";
        return false;
    }


    alert("Contraseña cambiada con éxito!");
    return true;
}


