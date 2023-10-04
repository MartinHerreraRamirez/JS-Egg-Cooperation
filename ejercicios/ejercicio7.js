/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. */

document.addEventListener("DOMContentLoaded", () => {
    let numeroLimite = 0, sumaNumeros = 0

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 7 - Suma > Limite"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.gap = "1rem"

    let inputNumeroLimite = document.createElement("input")
    inputNumeroLimite.setAttribute("type", "text")
    inputNumeroLimite.setAttribute("placeholder", "Ingrese Numero Limite")
    inputNumeroLimite.style.padding = "0.5rem"
    inputNumeroLimite.style.borderStyle = "none"
    inputNumeroLimite.style.borderRadius = "0.5rem"
    inputNumeroLimite.style.width = "10rem" 

    let btnCalcular = document.createElement("button")
    btnCalcular.textContent = "calcular"
    btnCalcular.style.padding = "1rem"
    btnCalcular.style.width = "11.5rem"
    btnCalcular.style.background = "yellow"
    btnCalcular.style.fontFamily = "verdana"
    btnCalcular.style.textTransform = "uppercase"
    btnCalcular.style.border = "none"
    btnCalcular.style.borderRadius = "0.5rem"
    btnCalcular.style.fontWeight = "bolder"
    btnCalcular.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación solicite números al usuario hasta que la suma de los números introducidos supere el límite inicial."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
    

    inputNumeroLimite.addEventListener("change", (e) => {
        numeroLimite = e.target.value
    })

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault()

        do {               
            sumaNumeros += parseInt(prompt("Ingrese un numero"))

        } while (sumaNumeros < numeroLimite);

        resultado.textContent = sumaNumeros
    })    

    btnCalcular.addEventListener("mouseenter", () => {
        btnCalcular.style.background = "blueviolet"
    })

    btnCalcular.addEventListener("mouseleave", () => {
        btnCalcular.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(inputNumeroLimite)
    contenedorFormulario.appendChild(btnCalcular)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})

