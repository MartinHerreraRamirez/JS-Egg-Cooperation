/*25. Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.justifyContent = "space-between"
    contenedorPrincipal.style.alignItems = "center"    

    let contenedorTitulo = document.createElement("div")    
    contenedorTitulo.style.width = "30%"    

    let contenedorFormulario = document.createElement("form")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.flexDirection = "column"
    contenedorFormulario.style.gap = "1rem"

    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.width = "20rem"

    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 25 - Obtener Valores"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario."
    modal.style.width = "35rem"
    modal.style.height = "2rem"
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
    
    let inputNombre = document.createElement("input")
    inputNombre.setAttribute("type", "text")
    inputNombre.setAttribute("placeholder", "Ingrese Nombre")    
    inputNombre.style.padding = "0.5rem"
    inputNombre.style.borderStyle = "none"
    inputNombre.style.borderRadius = "0.5rem"
    inputNombre.style.width = "11rem"   
    
    let inputApellido = document.createElement("input")
    inputApellido.setAttribute("type", "text")
    inputApellido.setAttribute("placeholder", "Ingrese Apellido")    
    inputApellido.style.padding = "0.5rem"
    inputApellido.style.borderStyle = "none"
    inputApellido.style.borderRadius = "0.5rem"
    inputApellido.style.width = "11rem"  
    
    let btnCargarDatos = document.createElement("button")
    btnCargarDatos.textContent = "cargar datos"
    btnCargarDatos.style.padding = "1rem"
    btnCargarDatos.style.width = "11rem"    
    btnCargarDatos.style.background = "yellow"
    btnCargarDatos.style.fontFamily = "verdana"
    btnCargarDatos.style.textTransform = "uppercase"
    btnCargarDatos.style.border = "none"
    btnCargarDatos.style.borderRadius = "0.5rem"
    btnCargarDatos.style.fontWeight = "bolder"
    btnCargarDatos.style.cursor = "pointer" 

    let nombre, apellido

    inputNombre.addEventListener("change", (e) => {
        nombre = e.target.value     
    })   
    
    inputApellido.addEventListener("change", (e) => {
        apellido = e.target.value
    })

    btnCargarDatos.addEventListener("click", (e) => {
        e.preventDefault()  

        resultado.innerHTML = `<p>${nombre} ${apellido}</p>`
    })      

    btnCargarDatos.addEventListener("mouseenter", () => {
        btnCargarDatos.style.background = "blueviolet"
    })

    btnCargarDatos.addEventListener("mouseleave", () => {
        btnCargarDatos.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)

    contenedorFormulario.appendChild(inputNombre)
    contenedorFormulario.appendChild(inputApellido)
    contenedorFormulario.appendChild(btnCargarDatos)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})