/*24. Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/

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
    titulo.textContent = "Ejercicio 24 - Calcular Radio"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Escribir un programa de JavaScript que a través de un formulario calcule el radio de un circulo y lo muestre en el HTML."
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
    
    let inputCircunferencia = document.createElement("input")
    inputCircunferencia.setAttribute("type", "Number")
    inputCircunferencia.setAttribute("placeholder", "Ingrese Circunferencia")    
    inputCircunferencia.style.padding = "0.5rem"
    inputCircunferencia.style.borderStyle = "none"
    inputCircunferencia.style.borderRadius = "0.5rem"
    inputCircunferencia.style.width = "11rem"       
    
    let btnCalcularRadio = document.createElement("button")
    btnCalcularRadio.textContent = "calcular radio"
    btnCalcularRadio.style.padding = "1rem"
    btnCalcularRadio.style.width = "11rem"    
    btnCalcularRadio.style.background = "yellow"
    btnCalcularRadio.style.fontFamily = "verdana"
    btnCalcularRadio.style.textTransform = "uppercase"
    btnCalcularRadio.style.border = "none"
    btnCalcularRadio.style.borderRadius = "0.5rem"
    btnCalcularRadio.style.fontWeight = "bolder"
    btnCalcularRadio.style.cursor = "pointer"  

    let circunferencia 

    inputCircunferencia.addEventListener("change", (e) => {
        circunferencia = e.target.value     
    })      

    btnCalcularRadio.addEventListener("click", (e) => {
        e.preventDefault()          

        let radio = (circunferencia / (2 * Math.PI)).toFixed(2)

        resultado.textContent = `El radio es: ${radio}`             
    })      

    btnCalcularRadio.addEventListener("mouseenter", () => {
        btnCalcularRadio.style.background = "blueviolet"
    })

    btnCalcularRadio.addEventListener("mouseleave", () => {
        btnCalcularRadio.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)

    contenedorFormulario.appendChild(inputCircunferencia)
    contenedorFormulario.appendChild(btnCalcularRadio)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})