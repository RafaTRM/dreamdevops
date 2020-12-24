
/*window.addEventListener("submit", function(){
    sendEmail();
});*/


//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm); 


function submitForm(e) {
    e.preventDefault();

    //get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let county = document.getElementById("estado").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("matter").value;
    let sector = document.getElementById("sector").value;
        //document.querySelector(".contact-form").reset();
    sendEmail(name, email, phone, message, subject, sector, county);
}



function sendEmail(name, email, phone, message, subject, sector, county) {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "integrabmc@gmail.com",
    Password : "xqicgrnklpccexhf",
    To : 'rafael.trejo@bbsbys.com',
    From : "integrabmc@gmail.com",
    Subject : "Contacto Página WEB Contacto 2",
    Body: `Name: ${name} <br/> Email: ${email} <br/> phone: ${phone} <br/> Estado: ${county} <br/> Asunto: ${subject} <br/> Empresa - Sector: ${sector} <br/> Message: ${message}`
    
    
}).then ((message) => alert("Su mensaje se envió correctamente. Gracias por ponerse en contacto con nosotros, pronto nos pondremos en contacto con Usted.")
);
}

/*
(function(response){
    if (response == 'ok') {
        alert("Su mensaje se envió correctamente. Gracias por ponerse en contacto con nosotros, pronto nos pondremos en contacto con Usted.");
    } else {
        throw new Error("Error: su mensaje no pudo enviarse");
    }
});
}
*/
