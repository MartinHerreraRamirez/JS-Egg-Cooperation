/*8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 8 - Max. - Min. - Prom."
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcular = document.createElement("button")
    btnCalcular.textContent = "calcular"
    btnCalcular.style.padding = "1rem"    
    btnCalcular.style.width = "100%"
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
    modal.textContent = "Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el  programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
     

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault()

        let numeroMaximo = 0, numeroMinimo = 0, promedio = 0, suma = 0, numero
        let arrayNumeros = []
        do {                  
            numero = parseInt(prompt("Ingrese un numero"))   
            if(numero >= 1){
                arrayNumeros.push(numero)
            }         

        } while (numero != 0);

        numeroMaximo = Math.max(...arrayNumeros)
        numeroMinimo = Math.min(...arrayNumeros)
        suma = arrayNumeros.reduce((acumulador, actual) => acumulador + actual,0)
        promedio = suma / arrayNumeros.length
        resultado.textContent = `Max.: ${numeroMaximo} Min.: ${numeroMinimo} Prom. = ${promedio.toFixed(2)}`
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
    
    contenedorFormulario.appendChild(btnCalcular)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})

