const display = document.getElementById('display')
const keypad = document.getElementById('keypad')
display.textContent = '0'

keypad.addEventListener('click', e => {
    const element = e.target
    const data = element.dataset

    if (data.number) writeScreen(data.number)
    if (data.operation) getOperation(element, data.operation)
    if (data.command) runCommand(data.command)
})

const writeScreen = number =>{
    if (display.textContent === '0')
        display.textContent = number
    else
        display.textContent += number
}

const getOperation = (element, operation) => {
    display.textContent = element.textContent
    console.log(display.textContent)
}

const runCommand = command => {
    console.log(command)
}