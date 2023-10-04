/* 22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.justifyContent = "space-between"
    contenedorPrincipal.style.alignItems = "center"    

    let contenedorTitulo = document.createElement("div")    
    contenedorTitulo.style.width = "30%"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.gap = "1rem"

    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.width = "20rem"

    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 22 - Mensaje"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a elección."
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
         
    
    let resultado = document.createElement("p")
    resultado.id = "resultado"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"
    
    let inputMensaje = document.createElement("input")
    inputMensaje.setAttribute("type", "text")
    inputMensaje.setAttribute("placeholder", "Ingrese Mensaje")    
    inputMensaje.style.padding = "0.5rem"
    inputMensaje.style.borderStyle = "none"
    inputMensaje.style.borderRadius = "0.5rem"
    inputMensaje.style.width = "11rem"       
    
    let btnMostrarMensaje = document.createElement("button")
    btnMostrarMensaje.textContent = "mostrar mensaje"
    btnMostrarMensaje.style.padding = "1rem"
    btnMostrarMensaje.style.width = "11rem"    
    btnMostrarMensaje.style.background = "yellow"
    btnMostrarMensaje.style.fontFamily = "verdana"
    btnMostrarMensaje.style.textTransform = "uppercase"
    btnMostrarMensaje.style.border = "none"
    btnMostrarMensaje.style.borderRadius = "0.5rem"
    btnMostrarMensaje.style.fontWeight = "bolder"
    btnMostrarMensaje.style.cursor = "pointer"  

    let mensaje

    inputMensaje.addEventListener("change", (e) => {
        mensaje = e.target.value     
    })      

    btnMostrarMensaje.addEventListener("click", (e) => {
        e.preventDefault()                  

       resultado.textContent = `El mensaje es: ${mensaje}`      
    })      

    btnMostrarMensaje.addEventListener("mouseenter", () => {
        btnMostrarMensaje.style.background = "blueviolet"
    })

    btnMostrarMensaje.addEventListener("mouseleave", () => {
        btnMostrarMensaje.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)

    contenedorFormulario.appendChild(inputMensaje)
    contenedorFormulario.appendChild(btnMostrarMensaje)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})