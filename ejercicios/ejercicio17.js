/*17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 17 - Push 2 Posiciones"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcularYPushear = document.createElement("button")
    btnCalcularYPushear.textContent = "cargar & pushear"
    btnCalcularYPushear.style.padding = "1rem"    
    btnCalcularYPushear.style.width = "100%"
    btnCalcularYPushear.style.background = "yellow"
    btnCalcularYPushear.style.fontFamily = "verdana"
    btnCalcularYPushear.style.textTransform = "uppercase"
    btnCalcularYPushear.style.border = "none"
    btnCalcularYPushear.style.borderRadius = "0.5rem"
    btnCalcularYPushear.style.fontWeight = "bolder"
    btnCalcularYPushear.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el resultado "
    modal.style.width = "35rem"
    modal.style.height = "2.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    

    let valoresVectorOriginal = document.createElement("div")
    let valoresVectorModificado = document.createElement("div")

    btnCalcularYPushear.addEventListener("click", (e) => {
        e.preventDefault()      

        let numeroRandom = () => {
            return Math.round(Math.random() * 99)
        }      

        let longitudRandom = () => {
            return Math.round(Math.random() * 10)
        }

        let longitud = longitudRandom()

        let vectorOriginal = []
        let vectorModificado = []
        
        for (let i = 0; i < longitud; i++) {    
            vectorOriginal[i] = numeroRandom()
        }
        
        vectorModificado = vectorOriginal.slice(0, longitud - 2)

        valoresVectorOriginal.textContent = `Arreglo original: ${vectorOriginal}`
        valoresVectorModificado.textContent = `Arreglo modificado: ${vectorModificado}`
    })    

    btnCalcularYPushear.addEventListener("mouseenter", () => {
        btnCalcularYPushear.style.background = "blueviolet"
    })

    btnCalcularYPushear.addEventListener("mouseleave", () => {
        btnCalcularYPushear.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCalcularYPushear)

    resultado.appendChild(valoresVectorOriginal)
    resultado.appendChild(valoresVectorModificado)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})