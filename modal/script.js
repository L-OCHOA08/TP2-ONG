function abrirModal() {
    const modal = document.createElement("div")

    modal.innerHTML = 
    `<h1>Titulo</h1>
    <p>Subtitulo</p>
    <button onclick="cambiarModal()">Envíar donación</button>`

    modal.classList.add("modal")

    document.body.appendChild(modal)
}

function cambiarModal() {
    document.querySelector(".modal").innerHTML = `
    <h1>Gracias por tu donación</h1>
    <p>Con tu aporte ayudamos a ...
    <button onclick="cerrarModal()">Cerrar</button>`
}

function cerrarModal() {
    document.querySelector(".modal").remove()
}