/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo) */

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
    titulo.textContent = "Ejercicio 23 - Resaltar Palabras"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Resalte todas las palabras de más de 8 caracteres en el texto del párrafo"
    modal.style.width = "35rem"
    modal.style.height = "1.5rem"
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
    
    let btnResaltar = document.createElement("button")
    btnResaltar.textContent = "Resaltar"
    btnResaltar.style.padding = "1rem"
    btnResaltar.style.width = "11rem"    
    btnResaltar.style.background = "yellow"
    btnResaltar.style.fontFamily = "verdana"
    btnResaltar.style.textTransform = "uppercase"
    btnResaltar.style.border = "none"
    btnResaltar.style.borderRadius = "0.5rem"
    btnResaltar.style.fontWeight = "bolder"
    btnResaltar.style.cursor = "pointer"  

    let mensaje

    inputMensaje.addEventListener("change", (e) => {
        mensaje = e.target.value     
    })      

    btnResaltar.addEventListener("click", (e) => {
        e.preventDefault()    
        
        mensaje = mensaje.split(" ")

        let parrafo = mensaje.map( el => {
            if(el.length >= 8){
                return `<mark>${el}</mark>`
            } else {
                return el
            }
        })

        parrafo = parrafo.join(" ")

        resultado.innerHTML = `${parrafo}`      
    })      

    btnResaltar.addEventListener("mouseenter", () => {
        btnResaltar.style.background = "blueviolet"
    })

    btnResaltar.addEventListener("mouseleave", () => {
        btnResaltar.style.background = "yellow"
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
    contenedorFormulario.appendChild(btnResaltar)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})