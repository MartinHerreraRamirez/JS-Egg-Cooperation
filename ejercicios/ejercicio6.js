/*6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */


document.addEventListener("DOMContentLoaded", () => {
    let numero

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"
    contenedorPrincipal.style.marginTop = "3rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 6 - Par / Impar"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "flex"
    contenedorFormulario.style.gap = "1rem"

    let inputNumero = document.createElement("input")
    inputNumero.setAttribute("type", "text")
    inputNumero.setAttribute("placeholder", "Ingrese Numero")
    inputNumero.style.padding = "0.5rem"
    inputNumero.style.borderStyle = "none"
    inputNumero.style.borderRadius = "0.5rem"
    inputNumero.style.width = "10rem" 

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
    modal.textContent = "Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar"
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"       

    inputNumero.addEventListener("change", (e) => {
        numero = e.target.value
    })

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault()

        numero % 2 == 0 ? resultado.textContent = "Numero Par" : resultado.textContent = "Numero Impar"
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
    
    contenedorFormulario.appendChild(inputNumero)
    contenedorFormulario.appendChild(btnCalcular)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})


