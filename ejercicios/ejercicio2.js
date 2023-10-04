/*2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio */

document.addEventListener("DOMContentLoaded", () => {  
    
    let valorRadio = 0

    let calcularArea = () => {
        return Math.PI * Math.pow(valorRadio, 2)
    }

    let calcularPerimetro = () => {
        return 2 * Math.PI * valorRadio
    }
    
    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.justifyContent = "space-between"
    contenedorPrincipal.style.alignItems = "center"

    let contenedorTitulo = document.createElement("div")  
    contenedorTitulo.style.width = "30%"  
      
    let contenedorFormulario = document.createElement("div")
    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.width = "20rem"

    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 2 - Circunferencia"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"  

    let modal = document.createElement("p")
    modal.textContent = "Conocido el número en matemática PI, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"     

    let formulario = document.createElement("form")
    formulario.style.display = "flex"
    formulario.style.justifyContent = "space-between"
    formulario.style.gap = "1rem"

    let inputRadio = document.createElement("input")
    inputRadio.setAttribute("type", "text")
    inputRadio.setAttribute("placeholder", "Ingrese Radio")
    inputRadio.setAttribute("id","radio")
    inputRadio.style.padding = "0.5rem"
    inputRadio.style.borderStyle = "none"
    inputRadio.style.borderRadius = "0.5rem"
    inputRadio.style.width = "10rem"    

    let btnCalcularRadio = document.createElement("input")
    btnCalcularRadio.setAttribute("type", "submit")
    btnCalcularRadio.setAttribute("value", "calcular radio")
    btnCalcularRadio.style.padding = "1rem"
    btnCalcularRadio.style.width = "11.5rem"
    btnCalcularRadio.style.background = "yellow"
    btnCalcularRadio.style.fontFamily = "verdana"
    btnCalcularRadio.style.textTransform = "uppercase"
    btnCalcularRadio.style.border = "none"
    btnCalcularRadio.style.borderRadius = "0.5rem"
    btnCalcularRadio.style.fontWeight = "bolder"
    btnCalcularRadio.style.cursor = "pointer" 
    
    let resultado = document.createElement("div")

    let resultadoArea = document.createElement("p")
    resultadoArea.style.fontSize = "1rem"
    resultadoArea.style.fontWeight = "bold"

    let resultadoPerimetro = document.createElement("p")
    resultadoPerimetro.style.fontSize = "1rem"
    resultadoPerimetro.style.fontWeight = "bold"

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })    
    
    btnCalcularRadio.addEventListener("mouseenter", () => {
        btnCalcularRadio.style.background = "blueviolet"
    })

    btnCalcularRadio.addEventListener("mouseleave" , () => {
        btnCalcularRadio.style.background = "yellow"
    })

    inputRadio.addEventListener("change", (e) => {
        valorRadio = parseFloat(e.target.value)
    })

    btnCalcularRadio.addEventListener("click", (e) => {
        e.preventDefault()
        resultadoArea.textContent = `El valor del area es: ${calcularArea()}`
        resultadoPerimetro.textContent = `El valor del perimetro es: ${calcularPerimetro()}`
    })
                                        
    formulario.appendChild(inputRadio)
    formulario.appendChild(btnCalcularRadio)

    resultado.appendChild(resultadoArea)
    resultado.appendChild(resultadoPerimetro)

    contenedorTitulo.appendChild(titulo)
    contenedorFormulario.appendChild(formulario)
    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)
})

