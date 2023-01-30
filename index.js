function sendMail(){
    var params = {
        nombre: document.getElementById("nombre").value,
        apellido:  document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        evento: document.getElementById("evento").value,
        edades:document.getElementById("edad").value,
        lugar: document.getElementById("lugar").value,
        cantidad: document.getElementById("asistentes").value,
        mensaje: document.getElementById("mensaje").value,
    }

    const serviceID = "service_ud25szg";
    const templateID = "template_gcrq01c";

    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("nombre").value="";
            document.getElementById("apellido").value="";
            document.getElementById("telefono").value="";
            document.getElementById("email").value="";
            document.getElementById("evento").value="";
            document.getElementById("edad").value="";
            document.getElementById("lugar").value="";
            document.getElementById("asistentes").value="";
            document.getElementById("mensaje").value="";
            console.log(res);
            alert ("Tu mensaje fue enviado")
        }
    )
    .catch((err)=>console.log(err));
}