
// Initially hiding pin match messages...

document.getElementById('right-pin').style.display = 'none';
document.getElementById('wrong-pin').style.display = 'none';

// This function will generate a random number.

const generateBtn = document.getElementById('button-left');
generateBtn.addEventListener("click", function() {
    let screenLeft = document.getElementById('screen-left');
    let generatePin = Math.floor(100000 + Math.random() * 900000);
    generatePin = parseInt(generatePin.toString().substring(0, 4));
    screenLeft.value = generatePin;
})

// Number Pad section starts....
document.getElementById('screen-right').value = "";
function btnClick(num) {
    let screenRight = document.getElementById('screen-right');
    screenRight.value += num;
}

// For erasing number one by one.....
function backSpace(){
    let screenRight = document.getElementById('screen-right').value;
    let backSpace = screenRight.slice(0, -1);
    document.getElementById('screen-right').value = backSpace;
}

// To clear all numbers....
function clearAll() {
    let screenRight = document.getElementById('screen-right').value;
    let clearAll = ' ';
    document.getElementById('screen-right').value = clearAll;
}

// Number Pad section ends

// Function for submit button....

let screenRight = document.getElementById('screen-right');

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function () {

    let randomNumber = document.getElementById('screen-left').value;
    let screenRight = document.getElementById('screen-right').value;
    
    
    if(randomNumber == screenRight && randomNumber != '' && screenRight != ''){
        
     let messageForRight = document.getElementById('right-pin');
     messageForRight.style.display = 'block';

     let messageForWrong = document.getElementById('wrong-pin');
     messageForWrong.style.display = 'none';

     document.getElementById('screen-right').value ='';
     document.getElementById('screen-left').value ='';


    }

    else{
        let messageForRight = document.getElementById('right-pin');
     messageForRight.style.display = 'none';

     let messageForWrong = document.getElementById('wrong-pin');
     messageForWrong.style.display = 'block';

    }
})
