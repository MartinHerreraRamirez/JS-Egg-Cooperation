/*5. Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"

    let contenedorTitulo = document.createElement("div")   
    contenedorTitulo.style.width = "30%" 

    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 5 - Calculadora"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.margin = "0.5rem"  
    contenedorFormulario.style.width = "23.5rem"
    contenedorFormulario.style.height = "20rem"       

    let formulario = document.createElement("form")  
    formulario.style.width = "23.5rem"
    formulario.style.height = "20rem"      

    let fila0 = document.createElement("div")
    fila0.style.display = "grid" 
    fila0.style.gridTemplateColumns = "1, 1fr"
    
    let fila1 = document.createElement("div")
    fila1.style.display = "grid" 
    fila1.style.gridTemplateColumns = "repeat(4,1fr)"

    let fila2 = document.createElement("div")
    fila2.style.display = "grid" 
    fila2.style.gridTemplateColumns = "repeat(4,1fr)"

    let fila3 = document.createElement("div")
    fila3.style.display = "grid" 
    fila3.style.gridTemplateColumns = "repeat(4,1fr)" 

    let fila4 = document.createElement("div")
    fila4.style.display = "grid" 
    fila4.style.gridTemplateColumns = "repeat(4,1fr)"

    let fila5 = document.createElement("div")
    fila5.style.display = "grid" 
    fila5.style.gridTemplateColumns = "1, 1fr"

    let inputPantalla = document.createElement("input")   
    inputPantalla.setAttribute("type", "text")   
    inputPantalla.fontWeight = "bold"
    inputPantalla.style.fontSize = "1rem"
    inputPantalla.style.borderRadius = "0.5rem"
    inputPantalla.style.background = "#eeeeee"    
    inputPantalla.style.padding = "1rem"
    inputPantalla.disabled = "true"    
    
    let btnNum7 = document.createElement("button")
    btnNum7.textContent = "7"
    btnNum7.fontWeight = "bold"
    btnNum7.style.fontSize = "1.5rem"
    btnNum7.style.borderRadius = "0.5rem"
    btnNum7.style.background = "yellow"
    btnNum7.style.cursor = "pointer"
    btnNum7.style.padding = "1rem"
    
    let btnNum8 = document.createElement("button")
    btnNum8.textContent = "8"
    btnNum8.fontWeight = "bold"
    btnNum8.style.fontSize = "1.5rem"
    btnNum8.style.borderRadius = "0.5rem"
    btnNum8.style.background = "yellow"
    btnNum8.style.cursor = "pointer"
    btnNum8.style.padding = "1rem"
    
    let btnNum9 = document.createElement("button")
    btnNum9.textContent = "9"
    btnNum9.fontWeight = "bold"
    btnNum9.style.fontSize = "1.5rem"
    btnNum9.style.borderRadius = "0.5rem"
    btnNum9.style.background = "yellow"
    btnNum9.style.cursor = "pointer"
    btnNum9.style.padding = "1rem"
    
    let btnDividir = document.createElement("button")
    btnDividir.textContent = "/"
    btnDividir.fontWeight = "bold"
    btnDividir.style.fontSize = "1.5rem"
    btnDividir.style.borderRadius = "0.5rem"
    btnDividir.style.background = "yellow"
    btnDividir.style.cursor = "pointer"
    btnDividir.style.padding = "1rem"
    
    let btnNum4 = document.createElement("button")
    btnNum4.textContent = "4"
    btnNum4.fontWeight = "bold"
    btnNum4.style.fontSize = "1.5rem"
    btnNum4.style.borderRadius = "0.5rem"
    btnNum4.style.background = "yellow"
    btnNum4.style.cursor = "pointer"
    btnNum4.style.padding = "1rem"

    let btnNum5 = document.createElement("button")
    btnNum5.textContent = "5"
    btnNum5.fontWeight = "bold"
    btnNum5.style.fontSize = "1.5rem"
    btnNum5.style.borderRadius = "0.5rem"
    btnNum5.style.background = "yellow"
    btnNum5.style.cursor = "pointer"
    btnNum5.style.padding = "1rem"

    let btnNum6 = document.createElement("button")
    btnNum6.textContent = "6"
    btnNum6.fontWeight = "bold"
    btnNum6.style.fontSize = "1.5rem"
    btnNum6.style.borderRadius = "0.5rem"
    btnNum6.style.background = "yellow"
    btnNum6.style.cursor = "pointer"
    btnNum6.style.padding = "1rem"

    let btnMultiplicar = document.createElement("button")
    btnMultiplicar.textContent = "*"
    btnMultiplicar.fontWeight = "bold"
    btnMultiplicar.style.fontSize = "1.5rem"
    btnMultiplicar.style.borderRadius = "0.5rem"
    btnMultiplicar.style.background = "yellow"
    btnMultiplicar.style.cursor = "pointer"
    btnMultiplicar.style.padding = "1rem"
    
    let btnNum3 = document.createElement("button")
    btnNum3.textContent = "3"
    btnNum3.fontWeight = "bold"
    btnNum3.style.fontSize = "1.5rem"
    btnNum3.style.borderRadius = "0.5rem"
    btnNum3.style.background = "yellow"
    btnNum3.style.cursor = "pointer"
    btnNum3.style.padding = "1rem"

    let btnNum2 = document.createElement("button")
    btnNum2.textContent = "2"
    btnNum2.fontWeight = "bold"
    btnNum2.style.fontSize = "1.5rem"
    btnNum2.style.borderRadius = "0.5rem"
    btnNum2.style.background = "yellow"
    btnNum2.style.cursor = "pointer"
    btnNum2.style.padding = "1rem"

    let btnNum1 = document.createElement("button")    
    btnNum1.textContent = "1"
    btnNum1.fontWeight = "bold"
    btnNum1.style.fontSize = "1.5rem"
    btnNum1.style.borderRadius = "0.5rem"
    btnNum1.style.background = "yellow"
    btnNum1.style.cursor = "pointer"
    btnNum1.style.padding = "1rem"
    
    let btnRestar = document.createElement("button")
    btnRestar.textContent = "-"
    btnRestar.fontWeight = "bold"
    btnRestar.style.fontSize = "1.5rem"
    btnRestar.style.borderRadius = "0.5rem"
    btnRestar.style.background = "yellow"
    btnRestar.style.cursor = "pointer"
    btnRestar.style.padding = "1rem"

    let btnClear = document.createElement("button")
    btnClear.textContent = "C"
    btnClear.fontWeight = "bold"
    btnClear.style.fontSize = "1.5rem"
    btnClear.style.borderRadius = "0.5rem"
    btnClear.style.background = "yellow"
    btnClear.style.cursor = "pointer"
    btnClear.style.padding = "1rem"

    let btnNum0 = document.createElement("button")
    btnNum0.textContent = "0"
    btnNum0.fontWeight = "bold"
    btnNum0.style.fontSize = "1.5rem"
    btnNum0.style.borderRadius = "0.5rem"
    btnNum0.style.background = "yellow"
    btnNum0.style.cursor = "pointer"
    btnNum0.style.padding = "1rem"

    let btnPoint = document.createElement("button")
    btnPoint.textContent = "."
    btnPoint.fontWeight = "bold"
    btnPoint.style.fontSize = "1.5rem"
    btnPoint.style.borderRadius = "0.5rem"
    btnPoint.style.background = "yellow"
    btnPoint.style.cursor = "pointer"
    btnPoint.style.padding = "1rem"

    let btnSumar = document.createElement("button")
    btnSumar.textContent = "+"
    btnSumar.fontWeight = "bold"
    btnSumar.style.fontSize = "1.5rem"
    btnSumar.style.borderRadius = "0.5rem"
    btnSumar.style.background = "yellow"
    btnSumar.style.cursor = "pointer"
    btnSumar.style.padding = "1rem"

    let btnIgual = document.createElement("button")
    btnIgual.textContent = "="
    btnIgual.fontWeight = "bold"
    btnIgual.style.fontSize = "1.5rem"
    btnIgual.style.borderRadius = "0.5rem"
    btnIgual.style.background = "yellow"
    btnIgual.style.cursor = "pointer"
    btnIgual.style.padding = "1rem"

    let modal = document.createElement("p")
    modal.textContent = "Construir un programa que simule un menú de opciones para realizar las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores numéricos enteros. El usuario, además, debe especificar la operación con el primer carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división."
    modal.style.width = "35rem"
    modal.style.height = "5.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"        

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    btnNum0.addEventListener("mouseenter", () => {
        btnNum0.style.background = "blueviolet"
        btnNum0.style.transitionDuration = "1.5s"
    })

    btnNum1.addEventListener("mouseenter", () => {
        btnNum1.style.background = "blueviolet"
        btnNum1.style.transitionDuration = "1.5s"
    })

    btnNum2.addEventListener("mouseenter", () => {
        btnNum2.style.background = "blueviolet"
        btnNum2.style.transitionDuration = "1.5s"
    })

    btnNum3.addEventListener("mouseenter", () => {
        btnNum3.style.background = "blueviolet"
        btnNum3.style.transitionDuration = "1.5s"
    })

    btnNum4.addEventListener("mouseenter", () => {
        btnNum4.style.background = "blueviolet"
        btnNum4.style.transitionDuration = "1.5s"
    })

    btnNum5.addEventListener("mouseenter", () => {
        btnNum5.style.background = "blueviolet"
        btnNum5.style.transitionDuration = "1.5s"
    })

    btnNum6.addEventListener("mouseenter", () => {
        btnNum6.style.background = "blueviolet"
        btnNum6.style.transitionDuration = "1.5s"
    })

    btnNum7.addEventListener("mouseenter", () => {
        btnNum7.style.background = "blueviolet"
        btnNum7.style.transitionDuration = "1.5s"
    })

    btnNum8.addEventListener("mouseenter", () => {
        btnNum8.style.background = "blueviolet"
        btnNum8.style.transitionDuration = "1.5s"
    })

    btnNum9.addEventListener("mouseenter", () => {
        btnNum9.style.background = "blueviolet"
        btnNum9.style.transitionDuration = "1.5s"
    })

    btnIgual.addEventListener("mouseenter", () => {
        btnIgual.style.background = "blueviolet"
        btnIgual.style.transitionDuration = "1.5s"
    })

    btnClear.addEventListener("mouseenter", () => {
        btnClear.style.background = "blueviolet"
        btnClear.style.transitionDuration = "1.5s"
    })

    btnSumar.addEventListener("mouseenter", () => {
        btnSumar.style.background = "blueviolet"
        btnSumar.style.transitionDuration = "1.5s"
    })

    btnRestar.addEventListener("mouseenter", () => {
        btnRestar.style.background = "blueviolet"
        btnRestar.style.transitionDuration = "1.5s"
    })

    btnPoint.addEventListener("mouseenter", () => {
        btnPoint.style.background = "blueviolet"
        btnPoint.style.transitionDuration = "1.5s"
    })

    btnDividir.addEventListener("mouseenter", () => {
        btnDividir.style.background = "blueviolet"
        btnDividir.style.transitionDuration = "1.5s"
    })

    btnMultiplicar.addEventListener("mouseenter", () => {
        btnMultiplicar.style.background = "blueviolet"
        btnMultiplicar.style.transitionDuration = "1.5s"
    })

    btnNum0.addEventListener("mouseleave", () => {
        btnNum0.style.background = "yellow"
    })

    btnNum1.addEventListener("mouseleave", () => {
        btnNum1.style.background = "yellow"
    })

    btnNum2.addEventListener("mouseleave", () => {
        btnNum2.style.background = "yellow"
    })

    btnNum3.addEventListener("mouseleave", () => {
        btnNum3.style.background = "yellow"
    })

    btnNum4.addEventListener("mouseleave", () => {
        btnNum4.style.background = "yellow"
    })

    btnNum5.addEventListener("mouseleave", () => {
        btnNum5.style.background = "yellow"
    })

    btnNum6.addEventListener("mouseleave", () => {
        btnNum6.style.background = "yellow"
    })

    btnNum7.addEventListener("mouseleave", () => {
        btnNum7.style.background = "yellow"
    })

    btnNum8.addEventListener("mouseleave", () => {
        btnNum8.style.background = "yellow"
    })

    btnNum9.addEventListener("mouseleave", () => {
        btnNum9.style.background = "yellow"
    })

    btnIgual.addEventListener("mouseleave", () => {
        btnIgual.style.background = "yellow"
    })

    btnClear.addEventListener("mouseleave", () => {
        btnClear.style.background = "yellow"
    })

    btnSumar.addEventListener("mouseleave", () => {
        btnSumar.style.background = "yellow"
    })

    btnRestar.addEventListener("mouseleave", () => {
        btnRestar.style.background = "yellow"
    })

    btnPoint.addEventListener("mouseleave", () => {
        btnPoint.style.background = "yellow"
    })

    btnDividir.addEventListener("mouseleave", () => {
        btnDividir.style.background = "yellow"
    })

    btnMultiplicar.addEventListener("mouseleave", () => {
        btnMultiplicar.style.background = "yellow"
    })  
    
    btnNum0.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "0"      
    })

    btnNum1.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "1"      
    })

    btnNum2.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "2"      
    })

    btnNum3.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "3"      
    })

    btnNum4.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "4"      
    })

    btnNum5.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "5"      
    })

    btnNum6.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "6"      
    })

    btnNum7.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "7"      
    })

    btnNum8.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "8"      
    })

    btnNum9.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "9"      
    })

    btnPoint.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "."      
    })

    btnClear.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value = ""      
    })

    btnSumar.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "+"      
    })

    btnRestar.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "-"      
    })

    btnMultiplicar.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "*"      
    })

    btnDividir.addEventListener("click", (e) => {
        e.preventDefault()
        inputPantalla.value += "/"      
    })    

    btnIgual.addEventListener("click", (e) => {
        e.preventDefault()
        let resultado = eval(inputPantalla.value)
        inputPantalla.value = resultado      
    })    

    contenedorTitulo.appendChild(titulo)

    /*fila0*/
    fila0.appendChild(inputPantalla)
    /*Fila1*/
    fila1.appendChild(btnNum7)
    fila1.appendChild(btnNum8)
    fila1.appendChild(btnNum9)
    fila1.appendChild(btnDividir)    
    /*Fila2*/
    fila2.appendChild(btnNum4)
    fila2.appendChild(btnNum5)
    fila2.appendChild(btnNum6)
    fila2.appendChild(btnMultiplicar)
    /*Fila3*/
    fila3.appendChild(btnNum1)
    fila3.appendChild(btnNum2)
    fila3.appendChild(btnNum3)
    fila3.appendChild(btnRestar)
    /*Fila4*/
    fila4.appendChild(btnClear)
    fila4.appendChild(btnNum0)
    fila4.appendChild(btnPoint)
    fila4.appendChild(btnSumar)
    /*Fila5*/
    fila5.appendChild(btnIgual)

    formulario.appendChild(fila0)
    formulario.appendChild(fila1)
    formulario.appendChild(fila2)
    formulario.appendChild(fila3)
    formulario.appendChild(fila4)
    formulario.appendChild(fila5)

    contenedorFormulario.appendChild(formulario)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)

    document.body.appendChild(contenedorPrincipal)     
})