var cuerpo = document.querySelector("body")

function cambiarModo() {
    alert("hola")
    var oscuro = cuerpo.classList.toggle("dark");
    localStorage.setItem("oscuro", oscuro);
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("oscuro")=="true") {
        cambiarModo();
    }
});