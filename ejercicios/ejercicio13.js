/*13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript. */

document.addEventListener("DOMContentLoaded", () => {

    let nombre, edad, sexo, peso, altura, opcionSexo

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 13 - Objeto Persona"
    titulo.style.height = "3.5rem"
    titulo.style.paddingTop = "1.5rem"    

    let contenedorFormulario = document.createElement("div")
    contenedorFormulario.style.display = "grid"  
    contenedorFormulario.style.gridTemplateRows = "repeat(5, 1fr)"
    contenedorFormulario.style.width = "22rem"
    contenedorFormulario.style.height = "20rem"
    
    contenedorFormulario.style.gap = "1rem"

    let inputRadio = document.createElement("input")
    inputRadio.setAttribute("type", "text")
    inputRadio.setAttribute("placeholder", "Ingrese Nombre")
    inputRadio.style.padding = "0.5rem"
    inputRadio.style.borderStyle = "none"
    inputRadio.style.borderRadius = "0.5rem"
    inputRadio.style.width = "100%" 

    let inputTituloLibro = document.createElement("input")
    inputTituloLibro.setAttribute("type", "number")
    inputTituloLibro.setAttribute("placeholder", "Ingrese Edad")
    inputTituloLibro.style.padding = "0.5rem"
    inputTituloLibro.style.borderStyle = "none"
    inputTituloLibro.style.borderRadius = "0.5rem"
    inputTituloLibro.style.width = "100%" 

    let inputAutorLibro = document.createElement("input")
    inputAutorLibro.setAttribute("type", "number")
    inputAutorLibro.setAttribute("placeholder", "Ingrese Peso")
    inputAutorLibro.style.padding = "0.5rem"
    inputAutorLibro.style.borderStyle = "none"
    inputAutorLibro.style.borderRadius = "0.5rem"
    inputAutorLibro.style.width = "100%" 

    let inputNumeroDePaginas = document.createElement("input")
    inputNumeroDePaginas.setAttribute("type", "text")
    inputNumeroDePaginas.setAttribute("placeholder", "Ingrese Altura")
    inputNumeroDePaginas.style.padding = "0.5rem"
    inputNumeroDePaginas.style.borderStyle = "none"
    inputNumeroDePaginas.style.borderRadius = "0.5rem"
    inputNumeroDePaginas.style.width = "100%" 

    let selectSexoPersona = document.createElement("select")
    selectSexoPersona.style.padding = "0.5rem"
    selectSexoPersona.style.borderStyle = "none"
    selectSexoPersona.style.borderRadius = "0.5rem"
    selectSexoPersona.style.width = "105%" 
    selectSexoPersona.style.textAlign = "center"
    selectSexoPersona.style.textTransform = "uppercase"
    selectSexoPersona.style.fontWeight = "bolder"
    selectSexoPersona.style.cursor = "pointer"

    let opcion0 = document.createElement("option")
    opcion0.setAttribute("value", "0")
    opcion0.textContent = "seleccione una opcion"

    let opcion1 = document.createElement("option")
    opcion1.setAttribute("value", "1")
    opcion1.textContent = "hombre"    

    let opcion2 = document.createElement("option")
    opcion2.setAttribute("value", "2")
    opcion2.textContent = "mujer"

    let opcion3 = document.createElement("option")
    opcion3.setAttribute("value", "3")
    opcion3.textContent = "otro"

    selectSexoPersona.appendChild(opcion0)   
    selectSexoPersona.appendChild(opcion1)
    selectSexoPersona.appendChild(opcion2)
    selectSexoPersona.appendChild(opcion3)    

    let btnCrearPersona = document.createElement("button")
    btnCrearPersona.textContent = "Crear Persona"
    btnCrearPersona.style.padding = "1rem"
    btnCrearPersona.style.width = "10rem"
    btnCrearPersona.style.marginLeft = "auto"
    btnCrearPersona.style.marginRight = "auto"
    btnCrearPersona.style.background = "yellow"
    btnCrearPersona.style.fontFamily = "verdana"
    btnCrearPersona.style.textTransform = "uppercase"
    btnCrearPersona.style.border = "none"
    btnCrearPersona.style.borderRadius = "0.5rem"
    btnCrearPersona.style.fontWeight = "bolder"
    btnCrearPersona.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.height = "5rem"

    let resultado = document.createElement("p")
    resultado.style.width = "9rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript."
    modal.style.width = "35rem"
    modal.style.height = "3rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    
 

    inputRadio.addEventListener("change", (e) => {
        nombre = e.target.value
    })

    inputTituloLibro.addEventListener("change", (e) => {
        edad = e.target.value
    })

    selectSexoPersona.addEventListener("change", (e) => {
        opcionSexo = e.target.value
    })

    inputAutorLibro.addEventListener("change", (e) => {
        peso = e.target.value
    })

    inputNumeroDePaginas.addEventListener("change", (e) => {
        altura = e.target.value
    })

    btnCrearPersona.addEventListener("click", (e) => {
        e.preventDefault()        
        
        if(opcionSexo == 1){
             sexo = "H"
        } else if ( opcionSexo == 2){
            sexo = "M"
        }else {
            sexo = "O"
        }
        
        let Persona = {
            nombre,
            edad,
            sexo,
            peso,
            altura
        }

        resultado.textContent = "Datos Persona: \n"+ "Nombre: "+ Persona.nombre + "Edad: " + Persona.edad + "Sexo: " + Persona.sexo + "Peso: " + Persona.peso + "Altura: " + Persona.altura        
    })       

    selectSexoPersona.addEventListener("click", () => { 
        selectSexoPersona.removeChild(opcion0)
    })

    btnCrearPersona.addEventListener("mouseenter", () => {
        btnCrearPersona.style.background = "blueviolet"
    })

    btnCrearPersona.addEventListener("mouseleave", () => {
        btnCrearPersona.style.background = "yellow"
    })

    titulo.addEventListener("mouseenter", () => { 
        titulo.style.cursor = "pointer"       
        titulo.appendChild(modal)
    })    

    titulo.addEventListener("mouseleave", () =>{
        titulo.removeChild(modal)
    })

    contenedorTitulo.appendChild(titulo)
    
    contenedorFormulario.appendChild(inputRadio)
    contenedorFormulario.appendChild(inputTituloLibro)
    contenedorFormulario.appendChild(selectSexoPersona)
    contenedorFormulario.appendChild(inputAutorLibro)
    contenedorFormulario.appendChild(inputNumeroDePaginas)
    contenedorFormulario.appendChild(btnCrearPersona)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})