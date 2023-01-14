
window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            emailjs.sendForm("service_u6e86fd", "template_9zjt4ud", this).then(
                function () {
                    console.log("SUCCESS!");
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
            document.getElementById("contact-form").reset();

        });

}

