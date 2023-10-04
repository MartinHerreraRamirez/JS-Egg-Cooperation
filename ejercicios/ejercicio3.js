/*3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. */

let valorEdad

document.addEventListener("DOMContentLoaded", () => {

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
    titulo.textContent = "Ejercicio 3 - Calcular Edad"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"

    let formulario = document.createElement("form")
    formulario.style.display = "flex"
    formulario.style.flexDirection = "row"
    formulario.style.gap = "1rem"

    let inputEdad = document.createElement("input")
    inputEdad.setAttribute("placeholder", "Ingrese Edad")
    inputEdad.style.padding = "0.5rem"
    inputEdad.style.borderStyle = "none"
    inputEdad.style.borderRadius = "0.5rem"
    inputEdad.style.width = "10rem" 

    let btnCalcularEdad = document.createElement("input")
    btnCalcularEdad.setAttribute("type", "submit")
    btnCalcularEdad.setAttribute("value", "calcular edad")
    btnCalcularEdad.style.padding = "1rem"
    btnCalcularEdad.style.width = "11.5rem"
    btnCalcularEdad.style.background = "yellow"
    btnCalcularEdad.style.fontFamily = "verdana"
    btnCalcularEdad.style.textTransform = "uppercase"
    btnCalcularEdad.style.border = "none"
    btnCalcularEdad.style.borderRadius = "0.5rem"
    btnCalcularEdad.style.fontWeight = "bolder"
    btnCalcularEdad.style.cursor = "pointer" 

    let modal = document.createElement("p")
    modal.textContent = "Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de edad se debe mostrar un mensaje indicándolo."
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
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

    inputEdad.addEventListener("change", (e) => {
        valorEdad = e.target.value
    })

    btnCalcularEdad.addEventListener("click", (e) => {
        e.preventDefault()
        valorEdad >= 18 
        ? resultado.textContent = "El usuario es mayor de edad" 
        : resultado.textContent = "El usuario es menor de edad"
    })

    btnCalcularEdad.addEventListener("mouseenter", () => {
        btnCalcularEdad.style.background = "blueviolet"
    })

    btnCalcularEdad.addEventListener("mouseleave", () => {
        btnCalcularEdad.style.background = "yellow"
    })

    let resultado = document.createElement("p")
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    formulario.appendChild(inputEdad)
    formulario.appendChild(btnCalcularEdad)

    contenedorTitulo.appendChild(titulo)
    contenedorFormulario.appendChild(formulario)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)    
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)    

    document.body.appendChild(contenedorPrincipal)
})


