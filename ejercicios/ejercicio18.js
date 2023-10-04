/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"
    contenedorPrincipal.style.marginBottom = "2rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 18 - Calculos Varios"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcularVarios = document.createElement("button")
    btnCalcularVarios.textContent = "calcular varios"
    btnCalcularVarios.style.padding = "1rem"    
    btnCalcularVarios.style.width = "100%"
    btnCalcularVarios.style.background = "yellow"
    btnCalcularVarios.style.fontFamily = "verdana"
    btnCalcularVarios.style.textTransform = "uppercase"
    btnCalcularVarios.style.border = "none"
    btnCalcularVarios.style.borderRadius = "0.5rem"
    btnCalcularVarios.style.fontWeight = "bolder"
    btnCalcularVarios.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "0.8rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "A partir del siguiente array: var valores = [true, 5, false, 'hola', 'adios', 2]: a) Determinar cual de los dos elementos de texto es mayor. b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false. c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos."
    modal.style.width = "35rem"
    modal.style.height = "5.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"          

    let resultadoString = document.createElement("div")
    let resultadosBooleans = document.createElement("div")
    let resultadosNumbers = document.createElement("div")

    btnCalcularVarios.addEventListener("click", (e) => {
        e.preventDefault()      

        let valores = [true, 5, false, "hola", "adios", 2]

        let string1 = valores[3]
        let string2 = valores[4]

        let num1 = valores[1]
        let num2 = valores[5]

        let boolean1 = valores[0]
        let boolean2 = valores[2]

        let palabraDeMayorLongitud = (string1, string2) => {   

            if(string1.length >= string2.length){
                return string1
            } else if (string1.length < string2.length){
                return string2
            } 
        }

        let resultadoTrue = boolean1 || boolean2
        let resultadoFalse = boolean1 && boolean2

        let sumar = num1 + num2
        let restar = num1 - num2
        let multiplicar = num1 * num2
        let dividir = num1 / num2

        resultadoString.textContent = `Mayor longitud es: ${palabraDeMayorLongitud(string1, string2)}`

        resultadosBooleans.textContent = `Resultado OR: ${resultadoTrue}, Resultado AND: ${resultadoFalse}`

        resultadosNumbers.textContent = `Suma: ${sumar}, Resta: ${restar}, Multiplicacion: ${multiplicar}, Division: ${dividir}`
    })    

    btnCalcularVarios.addEventListener("mouseenter", () => {
        btnCalcularVarios.style.background = "blueviolet"
    })

    btnCalcularVarios.addEventListener("mouseleave", () => {
        btnCalcularVarios.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCalcularVarios)

    resultado.appendChild(resultadoString)
    resultado.appendChild(resultadosBooleans)
    resultado.appendChild(resultadosNumbers)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})
