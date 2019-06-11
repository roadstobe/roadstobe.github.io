let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultyplay = document.getElementById('buttonMultyplay');
let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function getNumber(elementId){
    return elementId.value;
}

function onButtonPlus(){
    window.alert(Number(getNumber(input1)) + Number(getNumber(input2)));
}

function onbuttonMinus(){
    window.alert(Number(getNumber(input1)) - Number(getNumber(input2)));
}

function onbuttonMultyplay(){
    window.alert(Number(getNumber(input1)) * Number(getNumber(input2)));
}

function onbuttonDevide(){
    if(Number(getNumber(input2) == 0))
        window.alert('на нуль ділити не можна');
    else
        window.alert(Number(getNumber(input1)) * Number(getNumber(input2)));
}





function fillDate(){
    
    
    
     number1 = input1.value;
     number2 = input2.value;
}


number1.addEventListener('keydown', fillDate);
number2.addEventListener('keydown', fillDate);
buttonPlus.addEventListener('click', onButtonPlus);
buttonMinus.addEventListener('click', onbuttonMinus);
buttonMultyplay.addEventListener('click', onbuttonMultyplay);
buttonDevide.addEventListener('click', onbuttonDevide);

