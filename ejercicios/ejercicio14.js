/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas. */

document.addEventListener("DOMContentLoaded", () => {

    let isbn, tituloLibro, autor, numeroDePaginas

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.style.display = "flex"
    contenedorPrincipal.style.flexDirection = "row"
    contenedorPrincipal.style.alignItems = "center"
    contenedorPrincipal.style.gap = "10rem"
    contenedorPrincipal.style.marginTop = "3rem"

    let contenedorTitulo = document.createElement("div") 
    contenedorTitulo.style.width = "30%"      
    
    let titulo = document.createElement("h2")
    titulo.textContent = "Ejercicio 14 - Objeto Libro"
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
    inputRadio.setAttribute("placeholder", "Ingrese ISBN")
    inputRadio.style.padding = "0.5rem"
    inputRadio.style.borderStyle = "none"
    inputRadio.style.borderRadius = "0.5rem"
    inputRadio.style.width = "100%" 

    let inputTituloLibro = document.createElement("input")
    inputTituloLibro.setAttribute("type", "text")
    inputTituloLibro.setAttribute("placeholder", "Ingrese Titulo")
    inputTituloLibro.style.padding = "0.5rem"
    inputTituloLibro.style.borderStyle = "none"
    inputTituloLibro.style.borderRadius = "0.5rem"
    inputTituloLibro.style.width = "100%" 

    let inputAutorLibro = document.createElement("input")
    inputAutorLibro.setAttribute("type", "text")
    inputAutorLibro.setAttribute("placeholder", "Ingrese Autor")
    inputAutorLibro.style.padding = "0.5rem"
    inputAutorLibro.style.borderStyle = "none"
    inputAutorLibro.style.borderRadius = "0.5rem"
    inputAutorLibro.style.width = "100%" 

    let inputNumeroDePaginas = document.createElement("input")
    inputNumeroDePaginas.setAttribute("type", "text")
    inputNumeroDePaginas.setAttribute("placeholder", "Ingrese Cantidad de Paginas")
    inputNumeroDePaginas.style.padding = "0.5rem"
    inputNumeroDePaginas.style.borderStyle = "none"
    inputNumeroDePaginas.style.borderRadius = "0.5rem"
    inputNumeroDePaginas.style.width = "100%"   

    let btnCrearLibro = document.createElement("button")
    btnCrearLibro.textContent = "Crear Libro"
    btnCrearLibro.style.padding = "1rem"
    btnCrearLibro.style.width = "10rem"
    btnCrearLibro.style.marginLeft = "auto"
    btnCrearLibro.style.marginRight = "auto"
    btnCrearLibro.style.background = "yellow"
    btnCrearLibro.style.fontFamily = "verdana"
    btnCrearLibro.style.textTransform = "uppercase"
    btnCrearLibro.style.border = "none"
    btnCrearLibro.style.borderRadius = "0.5rem"
    btnCrearLibro.style.fontWeight = "bolder"
    btnCrearLibro.style.cursor = "pointer" 

    let contenedorResultado = document.createElement("div")
    contenedorResultado.style.height = "5rem"

    let resultado = document.createElement("p")
    resultado.style.width = "9rem"
    resultado.style.fontSize = "1rem"
    resultado.style.fontWeight = "bold"

    let modal = document.createElement("p")
    modal.textContent = "Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas."
    modal.style.width = "35rem"
    modal.style.height = "3.5rem"
    modal.style.background = "white"
    modal.style.color = "black"
    modal.style.borderRadius = "0.5rem"     
    modal.style.fontSize = "0.8rem"
    modal.style.padding = "0.5rem"
    modal.style.marginTop = "0.5rem"    


    inputRadio.addEventListener("change", (e) => {
        isbn = e.target.value
    })

    inputTituloLibro.addEventListener("change", (e) => {
        tituloLibro = e.target.value
    })    

    inputAutorLibro.addEventListener("change", (e) => {
        autor = e.target.value
    })

    inputNumeroDePaginas.addEventListener("change", (e) => {
        numeroDePaginas = e.target.value
    })

    btnCrearLibro.addEventListener("click", (e) => {
        e.preventDefault()    
        
        let Libro = {
            isbn,
            tituloLibro,
            autor,
            numeroDePaginas
        }
        
        cargarLibro(Libro)
        mostrarLibro(Libro)
        
    })      

    const cargarLibro = (libro) => {
        libro.isbn = isbn
        libro.tituloLibro = tituloLibro
        libro.autor = autor
        libro.numeroDePaginas = numeroDePaginas
        return libro
    }

    const mostrarLibro = (libro) => {

        const datos = `
            Datos Libro
            Isbn: ${libro.isbn}
            Titulo: ${libro.tituloLibro}
            Autor: ${libro.autor}
            Paginas: ${libro.numeroDePaginas}
        `
        resultado.textContent = datos
    }

    btnCrearLibro.addEventListener("mouseenter", () => {
        btnCrearLibro.style.background = "blueviolet"
    })

    btnCrearLibro.addEventListener("mouseleave", () => {
        btnCrearLibro.style.background = "yellow"
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
    contenedorFormulario.appendChild(inputAutorLibro)
    contenedorFormulario.appendChild(inputNumeroDePaginas)
    contenedorFormulario.appendChild(btnCrearLibro)

    contenedorResultado.appendChild(resultado)

    contenedorPrincipal.appendChild(contenedorTitulo)
    contenedorPrincipal.appendChild(contenedorFormulario)
    contenedorPrincipal.appendChild(contenedorResultado)

    document.body.appendChild(contenedorPrincipal)    
})