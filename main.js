const display = document.getElementById('display')
const keypad = document.getElementById('keypad')

display.textContent = '0'
operationMode = false
numberOne = 0

keypad.addEventListener('click', e => {
    const element = e.target
    const data = element.dataset

    if (data.number) writeScreen(data.number)
    if (data.operation) getOperation(element, data.operation)
    if (data.command) runCommand(data.command)
})

const writeScreen = number =>{
    if (display.textContent === '0'|| operationMode === true){
        display.textContent = number
        operationMode = false
    }
    else
        display.textContent += number
}

const getOperation = (element, operation) => {
    operationMode = true

    if (numberOne != 0){
        numberOne = runOperation(numberOne, operationNow, Number(display.textContent))
        display.textContent = String(numberOne)
    }else if (display.textContent === '0'){
        return
    }else{
        numberOne = Number(display.textContent)
        display.textContent = element.textContent
    }

    operationNow = operation
    //console.log(numberOne)
    //console.log(operation)
}

const runCommand = command => {
    switch (command) {
        case 'del':
            display.textContent = display.textContent.slice(0, -1)
            break;
        case 'reset':
            display.textContent = '0'
            numberOne = 0
            operationMode = false
            break;
    }
}

const runOperation = (numberOne, operation, numberTwo) => {
    switch (operation) {
        case 'add':
            result = numberOne + numberTwo
            break;
        case 'minus':
            result = numberOne - numberTwo
            break;
        case 'divide':
            result = numberOne / numberTwo
            break;
        case 'multiply':
            result = numberOne * numberTwo
            break;
    }

    return result
}
