
function dec() {
    let finalResult = document.getElementById("result").value
    console.log(finalResult);
    if (finalResult > 0) {
        document.getElementById("result").value = finalResult - 1
    }
    else {
        alert("Decrement is not done below 1")
    }
}

function inc() {
    let finalResult = document.getElementById("result").value
    console.log(finalResult);
    finalResult = parseInt(finalResult)
    if (finalResult < 10) {
        document.getElementById("result").value = finalResult + 1
    }
    else {
        alert("Increment is not done above 10")
    }
}

function cls() {
    document.getElementById("result").value = 0
}