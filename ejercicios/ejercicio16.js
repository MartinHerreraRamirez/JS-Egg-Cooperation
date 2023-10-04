/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 16 - Rellenar Arreglos"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCargarYMostrar = document.createElement("button")
    btnCargarYMostrar.textContent = "cargar & mostrar"
    btnCargarYMostrar.style.padding = "1rem"    
    btnCargarYMostrar.style.width = "100%"
    btnCargarYMostrar.style.background = "yellow"
    btnCargarYMostrar.style.fontFamily = "verdana"
    btnCargarYMostrar.style.textTransform = "uppercase"
    btnCargarYMostrar.style.border = "none"
    btnCargarYMostrar.style.borderRadius = "0.5rem"
    btnCargarYMostrar.style.fontWeight = "bolder"
    btnCargarYMostrar.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios y los muestre por pantalla."
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"     

    let valoresVector1 = document.createElement("div")
    let valoresVector2 = document.createElement("div")

    btnCargarYMostrar.addEventListener("click", (e) => {
        e.preventDefault()

        let random = () => {
            return Math.round(Math.random() * 20)
        }
        
        let vector1 = []
        let vector2 = []
        let numeroRandom = 0
        
        for (let i = 0; i < 5; i++) {
            numeroRandom = random()     
            vector1[i] = numeroRandom
            numeroRandom = random() 
            vector2[i] = numeroRandom
        }

        valoresVector1.textContent = `Valores V1: ${vector1}`
        valoresVector2.textContent = `Valores V2: ${vector2}`
    })    

    btnCargarYMostrar.addEventListener("mouseenter", () => {
        btnCargarYMostrar.style.background = "blueviolet"
    })

    btnCargarYMostrar.addEventListener("mouseleave", () => {
        btnCargarYMostrar.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCargarYMostrar)

    resultado.appendChild(valoresVector1)
    resultado.appendChild(valoresVector2)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})