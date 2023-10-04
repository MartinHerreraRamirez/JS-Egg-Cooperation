/*1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. */

document.addEventListener("DOMContentLoaded", () => {    
    
    let consultarDia = "No se ingresaron datos"
    
    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.justifyContent = "space-between"
    contenedorPrincipal.style.alignItems = "center"    

    let contenedorTitulo = document.createElement("div")    
    contenedorTitulo.style.width = "30%"    

    let contenedorFormulario = document.createElement("div")
    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.width = "20rem"

    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 1 - Consultar Clima"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. "
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"     

    let formulario = document.createElement("form")
    formulario.style.padding = "0.5rem 2rem"
    formulario.style.display = "flex"
    formulario.style.gap = "1rem"      
    
    let resultado = document.createElement("p")
    resultado.id = "resultado"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"    
    
    let inputEstado = document.createElement("input")
    inputEstado.setAttribute("type", "text")
    inputEstado.setAttribute("placeholder", "Ingrese Estado")    
    inputEstado.style.padding = "0.5rem"
    inputEstado.style.borderStyle = "none"
    inputEstado.style.borderRadius = "0.5rem"
    inputEstado.style.width = "10rem"       
    
    let btnConsultarDia = document.createElement("button")
    btnConsultarDia.textContent = "¿Como esta el dia?"
    btnConsultarDia.style.padding = "1rem"
    btnConsultarDia.style.background = "yellow"
    btnConsultarDia.style.fontFamily = "verdana"
    btnConsultarDia.style.textTransform = "uppercase"
    btnConsultarDia.style.border = "none"
    btnConsultarDia.style.borderRadius = "0.5rem"
    btnConsultarDia.style.fontWeight = "bolder"
    btnConsultarDia.style.cursor = "pointer"   
    
    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"                    
        titulo.appendChild(modal)        
       
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
       
    })
    
    inputEstado.addEventListener("change", (e) => {
        e.preventDefault()
        consultarDia = e.target.value
    })
    
    btnConsultarDia.addEventListener("mouseenter", () => {
        btnConsultarDia.style.background = "blueviolet"
    })
    
    btnConsultarDia.addEventListener("mouseleave", () =>{
        btnConsultarDia.style.background = "yellow"
    })

    btnConsultarDia.addEventListener("click", (e) => {
        e.preventDefault()
        resultado.textContent = `El dia esta: ${consultarDia}`
    })   

    formulario.appendChild(inputEstado)
    formulario.appendChild(btnConsultarDia)

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(formulario)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)    
    
    document.body.appendChild(contenedorPrincipal)
})
