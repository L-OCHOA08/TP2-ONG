function flexToggle() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("flexToggle")

    let links = document.querySelectorAll(".link")
    links.forEach(link => link.classList.toggle("linkToggle"))
}
