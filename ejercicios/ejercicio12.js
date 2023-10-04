/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/

document.addEventListener("DOMContentLoaded", () => {

    let dato = ""

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 12 - Tipo de Dato"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.gap = "1rem"

    let inputDato = document.createElement("input")
    inputDato.setAttribute("type", "text")
    inputDato.setAttribute("placeholder", "Ingrese Dato")
    inputDato.style.padding = "0.5rem"
    inputDato.style.borderStyle = "none"
    inputDato.style.borderRadius = "0.5rem"
    inputDato.style.width = "10rem" 

    let btnConsultarTipo = document.createElement("button")
    btnConsultarTipo.textContent = "consultar tipo"
    btnConsultarTipo.style.padding = "1rem"
    btnConsultarTipo.style.width = "11.5rem"
    btnConsultarTipo.style.background = "yellow"
    btnConsultarTipo.style.fontFamily = "verdana"
    btnConsultarTipo.style.textTransform = "uppercase"
    btnConsultarTipo.style.border = "none"
    btnConsultarTipo.style.borderRadius = "0.5rem"
    btnConsultarTipo.style.fontWeight = "bolder"
    btnConsultarTipo.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato."
    modal.style.width = "35rem"
    modal.style.height = "2rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"       

    inputDato.addEventListener("change", (e) => {
        dato = e.target.value
    })

    btnConsultarTipo.addEventListener("click", (e) => {
        e.preventDefault()

        tipoDeDato()
    })    

    let tipoDeDato = () => {         

        if(!isNaN(dato) && dato.length > 0){
            resultado.textContent = "Number"
        }        

        if(isNaN(dato) && dato.length > 0){
            resultado.textContent = "String"
        }

        if(dato.length === 0){
            resultado.textContent = "Undefined"
        }        
    }

    btnConsultarTipo.addEventListener("mouseenter", () => {
        btnConsultarTipo.style.background = "blueviolet"
    })

    btnConsultarTipo.addEventListener("mouseleave", () => {
        btnConsultarTipo.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(inputDato)
    contenedorFormulario.appendChild(btnConsultarTipo)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})