/*10. Escribir una función flecha que reciba una palabra y la devuelva al revés. */

document.addEventListener("DOMContentLoaded", () => {

    let frase = ""

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 10 - Voltear Frase"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.gap = "1rem"

    let inputFrase = document.createElement("input")
    inputFrase.setAttribute("type", "text")
    inputFrase.setAttribute("placeholder", "Ingrese Frase")
    inputFrase.style.padding = "0.5rem"
    inputFrase.style.borderStyle = "none"
    inputFrase.style.borderRadius = "0.5rem"
    inputFrase.style.width = "10rem" 

    let btnVoltearFrase = document.createElement("button")
    btnVoltearFrase.textContent = "Voltear Frase"
    btnVoltearFrase.style.padding = "1rem"
    btnVoltearFrase.style.width = "11.5rem"
    btnVoltearFrase.style.background = "yellow"
    btnVoltearFrase.style.fontFamily = "verdana"
    btnVoltearFrase.style.textTransform = "uppercase"
    btnVoltearFrase.style.border = "none"
    btnVoltearFrase.style.borderRadius = "0.5rem"
    btnVoltearFrase.style.fontWeight = "bolder"
    btnVoltearFrase.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Escribir una función flecha que reciba una palabra y la devuelva al revés."
    modal.style.width = "35rem"
    modal.style.height = "2rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
   

    inputFrase.addEventListener("change", (e) => {
        frase = e.target.value
    })

    btnVoltearFrase.addEventListener("click", (e) => {
        e.preventDefault()

        voltearFrase()
    })    

    let voltearFrase = () => {
        frase = frase.split("").reverse().join("")

        resultado.textContent = frase
    }

    btnVoltearFrase.addEventListener("mouseenter", () => {
        btnVoltearFrase.style.background = "blueviolet"
    })

    btnVoltearFrase.addEventListener("mouseleave", () => {
        btnVoltearFrase.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(inputFrase)
    contenedorFormulario.appendChild(btnVoltearFrase)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})
