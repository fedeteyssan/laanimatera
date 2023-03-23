
document.getElementById("form-button").addEventListener("click", function(e){
    e.preventDefault();

    var params = {
        nombre: document.getElementById("nombre").value,
        apellido:  document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        evento: document.getElementById("evento").value,
        edad:document.getElementById("edad").value,
        lugar: document.getElementById("lugar").value,
        cantidad: document.getElementById("cantidad").value,
        mensaje: document.getElementById("mensaje").value,
    }

    const isEmpty = Object.values(params).every(x => x != '');

    if(isEmpty==false){
        if(params.nombre==""){Swal.fire('Nos está faltando tu nombre');}
        else {
            if(params.apellido==""){Swal.fire('Nos está faltando tu apellido')}
            else {
                if(params.telefono==""){Swal.fire('Nos está faltando tu telefono')}
                else {
                    if(params.email==""){Swal.fire('Nos está faltando tu email')}
                    else {
                        if(params.evento==""){Swal.fire('Nos está faltando tu tipo de evento')}
                        else {
                            if(params.edad==""){Swal.fire('Nos está faltando la edad de l@s asistentes')}
                            else {
                                if(params.lugar==""){Swal.fire('Nos está faltando el lugar de tu evento')}
                                else {
                                    if(params.cantidad==""){Swal.fire('Nos está faltando la cantidad de asistentes')}
                                    else {
                                        if(params.mensaje==""){Swal.fire('Nos está faltando tu mensaje')}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
    else{
        sendMail();
    }

});

function sendMail(){

    var params = {
        nombre: document.getElementById("nombre").value,
        apellido:  document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        evento: document.getElementById("evento").value,
        edad:document.getElementById("edad").value,
        lugar: document.getElementById("lugar").value,
        cantidad: document.getElementById("cantidad").value,
        mensaje: document.getElementById("mensaje").value,
    }

    const serviceID = "service_m5ng0nk";
    const templateID = "template_ijjl1tk";

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
            document.getElementById("cantidad").value="";
            document.getElementById("mensaje").value="";
            document.getElementById("contact-form").reset();
            window.location.href="confirmacion.html";
        })
    .catch((err)=>console.log(err));
}