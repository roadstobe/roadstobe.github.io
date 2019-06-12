let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultyplay = document.getElementById('buttonMultyplay');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operation){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result;
    if(operation === '+')
        {result = number1 + number2;}
    else if (operation === '-')
        result = number1 - number2;
    else if (operation === '*')
        result = number1 * number2;
    else if(number2 === 0)
        result = 'на нуль ділити не можна'
    else if(operation === '/' && number2 != 0)
        result = number1 / number2;
    else 
        result = 'operation  is unknown'
    
    window.alert(result);
}

function onOperationButton(eventObject){
    let clickElement = eventObject.currentTarget;
    let operation = clickElement.value;
    makeOperation(operation)
}

buttonPlus.addEventListener('click', onOperationButton);
buttonMinus.addEventListener('click', onOperationButton);
buttonMultyplay.addEventListener('click', onOperationButton);
buttonDevide.addEventListener('click', onOperationButton);

