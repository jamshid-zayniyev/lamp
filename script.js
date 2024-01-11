const Input = document.querySelector("input")
const Light = document.querySelector(".light")
const maxValue = document.querySelector("#maxValue")
Input.addEventListener("change",(e)=>{
    let rangeValue = e.target.value
    Light.style.opacity = rangeValue/10
    maxValue.innerHTML = rangeValue
})