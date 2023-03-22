let res = document.getElementById("res")


document.addEventListener("keydown", function () {
    document.body.style.backgroundColor = "red"
    res.textContent = "Key Pressed"
    res.style.color = "white"
})


document.addEventListener("keyup", function () {
    res.style.color = "black"
    res.textContent = "Key Released"
    document.body.style.backgroundColor = "yellow"
})