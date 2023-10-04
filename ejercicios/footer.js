document.addEventListener("DOMContentLoaded", () => {

    let footer = document.createElement("footer")
    footer.style.fontSize = "1rem"
    footer.textContent = `todos los derechos reservados ${new Date().getFullYear()}`
    footer.style.marginTop = "2rem"
    footer.style.textAlign = "center"
    footer.style.fontWeight = "bold"
    footer.style.textTransform = "uppercase"

    document.body.appendChild(footer)

})