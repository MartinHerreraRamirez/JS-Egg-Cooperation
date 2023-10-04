/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” */

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
    titulo.textContent = "Ejercicio 11 - Longitud String"
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

    let btnMayorLongitud = document.createElement("button")
    btnMayorLongitud.textContent = "mayor longitud"
    btnMayorLongitud.style.padding = "1rem"
    btnMayorLongitud.style.width = "11.5rem"
    btnMayorLongitud.style.background = "yellow"
    btnMayorLongitud.style.fontFamily = "verdana"
    btnMayorLongitud.style.textTransform = "uppercase"
    btnMayorLongitud.style.border = "none"
    btnMayorLongitud.style.borderRadius = "0.5rem"
    btnMayorLongitud.style.fontWeight = "bolder"
    btnMayorLongitud.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Escribir una función que reciba un String y devuelva la palabra más larga. String Ejemplo: “Guia de JavaScript”"
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

    btnMayorLongitud.addEventListener("click", (e) => {
        e.preventDefault()

        palabraDeMayorLongitud(frase)
    })    

    let palabraDeMayorLongitud = (frase) => {  

        let fraseArray = frase.split(" ")
        let palabraDeMayorLongitud = fraseArray[0].length
        let mayorPalabra = fraseArray[0]
      
        for (let i = 1; i < fraseArray.length; i++) {
            if(palabraDeMayorLongitud < fraseArray[i].length){
                palabraDeMayorLongitud = fraseArray[i].length
                mayorPalabra = fraseArray[i]
            }            
        }    
        
        resultado.textContent = mayorPalabra      
    }

    btnMayorLongitud.addEventListener("mouseenter", () => {
        btnMayorLongitud.style.background = "blueviolet"
    })

    btnMayorLongitud.addEventListener("mouseleave", () => {
        btnMayorLongitud.style.background = "yellow"
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
    contenedorFormulario.appendChild(btnMayorLongitud)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})

