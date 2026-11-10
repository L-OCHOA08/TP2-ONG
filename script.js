function flexToggle() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("flexToggle")

    let links = document.querySelectorAll(".link")
    links.forEach(link => link.classList.toggle("linkToggle"))
}

function abrirModal() {
    const modal = document.createElement("div")

    modal.innerHTML = 
    `<h1>DONACIONES</h1>
    <p>Realiza una donación para ayudar.</p>
    <button onclick="mostrarFormulario()">Envíar donación</button>`

    modal.classList.add("modal")

    document.body.appendChild(modal)
}

function mostrarFormulario() {
    document.querySelector(".modal").innerHTML = `
    <h1>Elegí cuánto querés donar</h1>
    <form onsubmit="enviarDonacion(event)">
        <label for="monto">Monto a donar</label>
        <select id="monto" name="monto" required>
            <option value="" disabled selected>Seleccioná un monto</option>
            <option value="5000">$5.000</option>
            <option value="10000">$10.000</option>
            <option value="20000">$20.000</option>
            <option value="50000">$50.000</option>
        </select>
        <button type="submit" onclick="cambiarModal()">Confirmar donación</button>
    </form>`
}


function cambiarModal() {
    document.querySelector(".modal").innerHTML = `
    <h1>Gracias por tu donación</h1>
    <p>Con tu aporte ayudamos a Código para Todos
    <button onclick="cerrarModal()">Cerrar</button>`
}

function cerrarModal() {
    document.querySelector(".modal").remove()
}