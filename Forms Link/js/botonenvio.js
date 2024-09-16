// Inicializa EmailJS
(function() {
    emailjs.init("nT1K2hFTWev3-Dsxl");  // Reemplaza "YOUR_USER_ID" con tu userID de EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe de la forma estándar

    const form = document.getElementById('contactForm');
    const fileInput = document.getElementById('file-upload');
    const reader = new FileReader();

    // Leer el archivo y convertirlo a base64
    reader.onloadend = function() {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, ''); // Quita metadata de base64

        // Datos del formulario
        const formData = {
            nombre: form.nombre.value,
            phone: form.phone.value,
            email: form.email.value,
            url: form.url.value,
            image_base64: base64String // Enviar la imagen en formato base64
        };

        // Enviar el formulario con EmailJS
        emailjs.send('service_k5kuqq7', 'template_brg5xpw', formData)
        .then(function(response) {
            alert('Correo enviado con éxito');
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
    };

    // Leer el archivo
    reader.readAsDataURL(fileInput.files[0]);
});
