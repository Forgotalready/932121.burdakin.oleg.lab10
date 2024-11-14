document.querySelector(".curtain").addEventListener("click", (event) => {
    event.preventDefault()

    element = event.target
    element.classList.remove("not-click")

    element.classList.add("movable")
    document.querySelector(".lamp").classList.remove("no-active")
})

document.querySelector(".lamp").addEventListener("click", (event) => {
    event.preventDefault()
    const light = document.querySelector(".light")
    light.classList.remove("light-noactive")
    light.classList.add("light-active")
})