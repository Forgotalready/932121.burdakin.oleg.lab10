document.querySelector(".curtain").addEventListener("click", (event) => {
    event.preventDefault()

    element = event.target
    element.classList.remove("not-click")

    element.classList.add("movable")
    document.querySelector(".lamp").classList.remove("no-active")
})

var isOn = false

document.querySelector(".lamp").addEventListener("click", (event) => {
    event.preventDefault()
    const light = document.querySelector(".light")

    if(isOn)
    {
        light.classList.remove("light-active")
        light.classList.add("light-noactive")
        document.querySelector(".focus-holder")
            .style
            .display = "none"   
    }else{
        light.classList.remove("light-noactive")
        light.classList.add("light-active")
        document.querySelector(".focus-holder")
            .style
            .display = "grid"    
    }
    isOn = !isOn
})


var number = 0
const images = ["./Web - Лабораторная работа №1.10/Bird.png", "./Web - Лабораторная работа №1.10/Rabbit.png"]
document.querySelector(".rabbit-main").addEventListener(
    "click",
    (event) => {
        event.preventDefault()
        elem = event.target
        elem.classList.add("image-moving")
        setTimeout(() => 
            {
                elem.src = images[number % 2]
                elem.classList.remove("image-moving")
                number++    
            }, 2000)
    }
)