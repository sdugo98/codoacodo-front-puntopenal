function validarDiaLaborable(inputFecha) {
    let fechaSeleccionada = new Date(inputFecha.value);
    let diaabierto = fechaSeleccionada.getDay();
    if (diaabierto === 0 || diaabierto === 6) {
        document.getElementById("mensajeError").textContent = "Ese dia la cancha no esta abierta";
        inputFecha.value = "";
    } else {
        document.getElementById("mensajeError").textContent = "";
    }
}


let reservarBtn = document.getElementById("reservarBtn");

const formReserva = document.getElementById("form-reserva");

formReserva.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok) {
        alert('Reserva realizada con éxito!');
        window.location.href = 'index.html';
    }
}