/*9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

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
    titulo.textContent = "Ejercicio 9 - Separar Caracteres"
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

    let btnSepararCaracter = document.createElement("button")
    btnSepararCaracter.textContent = "Separar Frase"
    btnSepararCaracter.style.padding = "1rem"
    btnSepararCaracter.style.width = "11.5rem"
    btnSepararCaracter.style.background = "yellow"
    btnSepararCaracter.style.fontFamily = "verdana"
    btnSepararCaracter.style.textTransform = "uppercase"
    btnSepararCaracter.style.border = "none"
    btnSepararCaracter.style.borderRadius = "0.5rem"
    btnSepararCaracter.style.fontWeight = "bolder"
    btnSepararCaracter.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Realizar un programa que pida una frase y el programa deberá mostrar la frase con un espacio entre cada letra. La frase se mostrara así: H o l a."
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
    

    inputFrase.addEventListener("change", (e) => {
        frase = e.target.value
    })

    btnSepararCaracter.addEventListener("click", (e) => {
        e.preventDefault()

        frase = frase.split("").join(" ")

        resultado.textContent = frase
    })    

    btnSepararCaracter.addEventListener("mouseenter", () => {
        btnSepararCaracter.style.background = "blueviolet"
    })

    btnSepararCaracter.addEventListener("mouseleave", () => {
        btnSepararCaracter.style.background = "yellow"
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
    contenedorFormulario.appendChild(btnSepararCaracter)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})

