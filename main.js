
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function(enterkey) {if(enterkey.key == 'Enter' &&screen1.classList.contains('hiding')) {handleResetClick()}})

// callbacks
function toggleScreen(){
    screen1.classList.toggle("hiding")
    screen2.classList.toggle("hiding")
}

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == "") {return}
    console.log(randomNumber)
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Guessed in ${xAttempts} attempts!`
    }

    inputNumber.value = ""
    xAttempts++
    
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    /* console.log(randomNumber) */
}



