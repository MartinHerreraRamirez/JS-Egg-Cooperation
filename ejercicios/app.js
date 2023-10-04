document.addEventListener("DOMContentLoaded", () => {

    let title = document.createElement("h1")
    title.textContent = "Javascript"
    title.style.textAlign = "center"   
    title.style.fontSize = "3.5rem"     
    title.style.color = "yellow"
    title.style.textDecoration = "underline"    
    title.style.zIndex = "1"

    let subtitle = document.createElement("h1")
    subtitle.textContent = "Egg Cooperation"
    subtitle.style.textAlign = "center"   
    subtitle.style.fontSize = "3rem"     
    subtitle.style.color = "yellow"
    subtitle.style.textDecoration = "underline"

    let botonMode = document.createElement("button")
    botonMode.setAttribute("class", "light")    
    botonMode.style.position = "absolute"
    botonMode.style.background = "none"
    botonMode.style.backgroundImage = "url(../assets/mode-light.png)"
    botonMode.style.backgroundSize = "3rem"
    botonMode.style.backgroundPosition = "center"
    botonMode.style.border = "none"
    botonMode.style.height = "4rem"
    botonMode.style.width = "3.5rem"
    botonMode.style.top = "4rem"
    botonMode.style.right = "4rem"

    document.body.style.fontFamily = "Verdana"
    document.body.style.padding = "1rem"
    document.body.style.color = "rgba(0, 0, 0, 0.945)"
    document.body.style.backgroundColor = "rgb(80,150,150)"    

    document.body.appendChild(title)
    document.body.appendChild(subtitle)
    document.body.appendChild(botonMode)        

    botonMode.addEventListener("click", () => {
        
        if(botonMode.classList.contains("light")){

            botonMode.classList.remove("light")
            botonMode.classList.add("dark")
            
            document.body.style.fontFamily = "Verdana"
            document.body.style.padding = "1rem"
            document.body.style.color = "#eeeeee"
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.945)"     

            botonMode.style.position = "absolute"
            botonMode.style.background = "none"
            botonMode.style.backgroundImage = "url(../assets/mode-dark.png)"
            botonMode.style.backgroundSize = "4.5rem"
            botonMode.style.backgroundPosition = "center"
            botonMode.style.height = "4rem"
            botonMode.style.width = "3.5rem"
            botonMode.style.top = "4rem"
            botonMode.style.right = "4rem"            
            
        } else {   

            botonMode.classList.remove("dark")
            botonMode.classList.add("light")

            document.body.style.fontFamily = "Verdana"
            document.body.style.padding = "1rem"
            document.body.style.color = "rgba(0, 0, 0, 0.945)"
            document.body.style.backgroundColor = "rgb(80,150,150)"  

            botonMode.style.position = "absolute"
            botonMode.style.background = "none"
            botonMode.style.backgroundImage = "url(../assets/mode-light.png)"
            botonMode.style.backgroundSize = "3rem"
            botonMode.style.backgroundPosition = "center"
            botonMode.style.border = "none"
            botonMode.style.height = "4rem"
            botonMode.style.width = "3.5rem"
            botonMode.style.top = "4rem"
            botonMode.style.right = "4rem"            
        }
    })    
})