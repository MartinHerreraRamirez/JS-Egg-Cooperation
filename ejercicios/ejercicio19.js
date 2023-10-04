/*19. Realizar un programa en JavaScript donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20. */

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"  
    contenedorPrincipal.style.marginBottom = "3.5rem"  

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 19 - Array Combinado"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcularArray = document.createElement("button")
    btnCalcularArray.textContent = "calcular arrays"
    btnCalcularArray.style.padding = "1rem"    
    btnCalcularArray.style.width = "100%"
    btnCalcularArray.style.background = "yellow"
    btnCalcularArray.style.fontFamily = "verdana"
    btnCalcularArray.style.textTransform = "uppercase"
    btnCalcularArray.style.border = "none"
    btnCalcularArray.style.borderRadius = "0.5rem"
    btnCalcularArray.style.fontWeight = "bolder"
    btnCalcularArray.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "0.8rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = " Realizar un programa en JavaScript donde se creen dos arreglos: el primero será un arreglo A de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20. "
    modal.style.width = "35rem"
    modal.style.height = "7.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
     
    
    let arrayOriginal = document.createElement("div")
    let array1 = document.createElement("div")
    let array2 = document.createElement("div")

    btnCalcularArray.addEventListener("click", (e) => {
        e.preventDefault()  
        
        let arrayA = []
        let arrayB = []

        for (let i = 0; i < 10; i++) {
            arrayA[i] = Math.round(Math.random() * 20)

            if(i < 10){
                arrayB[i] = Math.round(Math.random() * 20)
            }
        }  

        arrayOriginal.textContent = `Array Original: ${arrayA}`
        arrayA.sort( (a,b) =>{
            return a - b
        })

        for (let i = 5; i < arrayB.length; i++) {
            arrayB[i] = 0.5    
        }

        array1.textContent = `Array Ordenado: ${arrayA}`
        array2.textContent = `Array Modificado: ${arrayB}`        
    })    

    btnCalcularArray.addEventListener("mouseenter", () => {
        btnCalcularArray.style.background = "blueviolet"
    })

    btnCalcularArray.addEventListener("mouseleave", () => {
        btnCalcularArray.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCalcularArray)

    resultado.appendChild(arrayOriginal)
    resultado.appendChild(array1)
    resultado.appendChild(array2)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})
