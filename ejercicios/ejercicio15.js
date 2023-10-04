/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario. */

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
    titulo.textContent = "Ejercicio 15 - Objeto Circulo"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    
    
    let modal = document.createElement("p")
    modal.textContent = "Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El radio del círculo lo proporcionará el usuario."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
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
    
    let inputRadio = document.createElement("input")
    inputRadio.setAttribute("type", "Number")
    inputRadio.setAttribute("placeholder", "Ingrese Radio")    
    inputRadio.style.padding = "0.5rem"
    inputRadio.style.borderStyle = "none"
    inputRadio.style.borderRadius = "0.5rem"
    inputRadio.style.width = "11rem"       
    
    let btnCalcularCirculo = document.createElement("button")
    btnCalcularCirculo.textContent = "calcular"
    btnCalcularCirculo.style.padding = "1rem"
    btnCalcularCirculo.style.width = "11rem"    
    btnCalcularCirculo.style.background = "yellow"
    btnCalcularCirculo.style.fontFamily = "verdana"
    btnCalcularCirculo.style.textTransform = "uppercase"
    btnCalcularCirculo.style.border = "none"
    btnCalcularCirculo.style.borderRadius = "0.5rem"
    btnCalcularCirculo.style.fontWeight = "bolder"
    btnCalcularCirculo.style.cursor = "pointer"  

    let area = document.createElement("div")        
    let perimetro = document.createElement("div")

    let Circulo = {
        radio: 0                     
    }   

    inputRadio.addEventListener("change", (e) => {
        Circulo.radio = parseFloat(e.target.value)        
    })      

    btnCalcularCirculo.addEventListener("click", (e) => {
        e.preventDefault()                  

        area.textContent = `El area es: ${calcularArea()}`
        perimetro.textContent = `El perimetro es: ${calcularPerimetro()}`        
    })      

    let calcularArea = () => {
        return (Math.pow(Circulo.radio,2) * Math.PI).toFixed(2)
    }

    let calcularPerimetro = () => {
        return (2 * Math.PI * Circulo.radio).toFixed(2)
    }

    btnCalcularCirculo.addEventListener("mouseenter", () => {
        btnCalcularCirculo.style.background = "blueviolet"
    })

    btnCalcularCirculo.addEventListener("mouseleave", () => {
        btnCalcularCirculo.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)

    resultado.appendChild(area)
    resultado.appendChild(perimetro)

    contenedorFormulario.appendChild(inputRadio)
    contenedorFormulario.appendChild(btnCalcularCirculo)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})