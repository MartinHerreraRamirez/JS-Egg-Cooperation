/*20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18]. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 20 - Matriz"
    titulo.style.display = "relative"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcularMatriz = document.createElement("button")
    btnCalcularMatriz.textContent = "calcular matriz"
    btnCalcularMatriz.style.padding = "1rem"    
    btnCalcularMatriz.style.width = "100%"
    btnCalcularMatriz.style.background = "yellow"
    btnCalcularMatriz.style.fontFamily = "verdana"
    btnCalcularMatriz.style.textTransform = "uppercase"
    btnCalcularMatriz.style.border = "none"
    btnCalcularMatriz.style.borderRadius = "0.5rem"
    btnCalcularMatriz.style.fontWeight = "bolder"
    btnCalcularMatriz.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y muestre el siguiente array [6, 9, 12, 15, 18]."
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
       

    btnCalcularMatriz.addEventListener("click", (e) => {
        e.preventDefault()  
        
        let matriz = [[3],[6],[9],[12],[15]]

        matriz.flat()

        matriz = matriz.map( el => parseInt(el) + 3)  
        
        resultado.textContent = `El resultado es: ${matriz}`
    })    

    btnCalcularMatriz.addEventListener("mouseenter", () => {
        btnCalcularMatriz.style.background = "blueviolet"
    })

    btnCalcularMatriz.addEventListener("mouseleave", () => {
        btnCalcularMatriz.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCalcularMatriz)    

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})