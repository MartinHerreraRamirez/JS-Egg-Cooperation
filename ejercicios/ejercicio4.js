/*4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

document.addEventListener("DOMContentLoaded", () => {

    let caracter

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.justifyContent = "space-between"    
    contenedorPrincipal.style.alignItems = "center"
    
    let contenedorTitulo = document.createElement("div")  
    contenedorTitulo.style.width = "30%"      
    
    let contenedorResultado = document.createElement("div")

    let contenedorInputCaracter = document.createElement("div")
    contenedorInputCaracter.style.display = "flex"
    contenedorInputCaracter.style.gap = "1rem"

    let titulo = document.createElement("h2")
    titulo.textContent = 'Ejercicio 4 - Caracter S - N'  
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"
    
    let inputCaracter = document.createElement("input")
    inputCaracter.setAttribute("type", "text")
    inputCaracter.setAttribute("placeholder", "Ingrese Caracter")
    inputCaracter.style.padding = "0.5rem"
    inputCaracter.style.borderStyle = "none"
    inputCaracter.style.borderRadius = "0.5rem"
    inputCaracter.style.width = "10rem" 

    let btnCalcularCaracter = document.createElement("input")
    btnCalcularCaracter.setAttribute("type", "submit")
    btnCalcularCaracter.setAttribute("value", "identificar")
    btnCalcularCaracter.style.padding = "1rem"
    btnCalcularCaracter.style.width = "11.5rem"
    btnCalcularCaracter.style.background = "yellow"
    btnCalcularCaracter.style.fontFamily = "verdana"
    btnCalcularCaracter.style.textTransform = "uppercase"
    btnCalcularCaracter.style.border = "none"
    btnCalcularCaracter.style.borderRadius = "0.5rem"
    btnCalcularCaracter.style.fontWeight = "bolder"
    btnCalcularCaracter.style.cursor = "pointer" 

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"        

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    btnCalcularCaracter.addEventListener("mouseenter", () =>  {
        btnCalcularCaracter.style.background = "blueviolet"
    })

    btnCalcularCaracter.addEventListener("mouseleave", () => {
        btnCalcularCaracter.style.background = "yellow"
    })

    inputCaracter.addEventListener("change", (e) => {
        caracter = e.target.value
        caracter = caracter.charAt(0)
    })

    btnCalcularCaracter.addEventListener("click", (e) => {
        e.preventDefault()

        caracter == 'S' || caracter == 's' || caracter == 'N' || caracter == 'n'
        ? resultado.textContent = "CORRECTO" 
        : resultado.textContent = "INCORRECTO"
    })

    contenedorTitulo.appendChild(titulo)
    contenedorInputCaracter.appendChild(inputCaracter)
    contenedorInputCaracter.appendChild(btnCalcularCaracter)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorInputCaracter)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)
})
