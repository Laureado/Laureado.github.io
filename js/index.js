function enviarMail(elForm) {

    nombre = document.getElementById("name").value;
    email = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    cuerpo = document.getElementById("mensaje").value;
    admin = "laureadojesus@gmail.com";

    if (nombre != "" && email != "" && cuerpo != "") {

        topic = "Contactame "; {
            parent.location.href = 'mailto:' + admin + '?subject=' + asunto  + '&body=' + "Nombre: " + nombre + "%0D%0A" + cuerpo;

        }

    } else {
        alert("Complete los datos!");
    }

    return false;

}