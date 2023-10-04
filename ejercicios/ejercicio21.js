/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

document.addEventListener("DOMContentLoaded", () => {

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"    

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 21 - Propiedades"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.width = "23.5rem"        

    let btnCalcularPropiedades = document.createElement("button")
    btnCalcularPropiedades.textContent = "Propiedades"
    btnCalcularPropiedades.style.padding = "1rem"    
    btnCalcularPropiedades.style.width = "100%"
    btnCalcularPropiedades.style.background = "yellow"
    btnCalcularPropiedades.style.fontFamily = "verdana"
    btnCalcularPropiedades.style.textTransform = "uppercase"
    btnCalcularPropiedades.style.border = "none"
    btnCalcularPropiedades.style.borderRadius = "0.5rem"
    btnCalcularPropiedades.style.fontWeight = "bolder"
    btnCalcularPropiedades.style.cursor = "pointer"     

    let contenedorResultado = document.createElement("div")

    let resultado = document.createElement("p")
    resultado.style.width = "20rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Escribir un programa para obtener un array de las propiedades de un objeto Persona. Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura"
    modal.style.width = "35rem"
    modal.style.height = "3rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"         

    btnCalcularPropiedades.addEventListener("click", (e) => {
        e.preventDefault()  
        
        let persona = {
            nombre: "martin",
            edad: 32,
            sexo: 'H',
            peso: 98,
            altura: 1.75
        };
        
        let propiedades = Object.keys(persona)
        
        resultado.textContent = `Las propiedades son: ${propiedades}`
        
    })    

    btnCalcularPropiedades.addEventListener("mouseenter", () => {
        btnCalcularPropiedades.style.background = "blueviolet"
    })

    btnCalcularPropiedades.addEventListener("mouseleave", () => {
        btnCalcularPropiedades.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
       titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(btnCalcularPropiedades)    

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})