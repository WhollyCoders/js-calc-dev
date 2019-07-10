/* FUNCTIONS */
function getDisplayContents() {
    return calculatorDisplay.innerHTML;
}

/* ELEMENT HANDLES */
var calculatorDisplay = document.getElementById('js-cal-display');
var clearButton = document.getElementById('btn-clear');
var oppositeButton = document.getElementById('btn-opposite');
var percentButton = document.getElementById('btn-percent');
// var oneButton = document.getElementById('btn-one');
// var twoButton = document.getElementById('btn-two');
// var threeButton = document.getElementById('btn-three');
// var fourButton = document.getElementById('btn-four');
// var fiveButton = document.getElementById('btn-five');
// var sixButton = document.getElementById('btn-six');
// var sevenButton = document.getElementById('btn-seven');
// var eightButton = document.getElementById('btn-eight');
// var nineButton = document.getElementById('btn-nine');
// var zeroButton = document.getElementById('btn-zero');
var decimalButton = document.getElementById('btn-decimal');
var numberButtons = document.getElementsByClassName('btn-number');


/* EVENT LISTENERS */
clearButton.addEventListener('click', () => {
    calculatorDisplay.innerHTML = "0";
});

oppositeButton.addEventListener('click', () => {
    calculatorDisplay.innerHTML = getDisplayContents() / -1;
});

percentButton.addEventListener('click', () => {
    calculatorDisplay.innerHTML = getDisplayContents() / 100;
});

for (var i = 0; i < numberButtons.length; i++) {
    console.log('NUMBER: '+i);
    console.log(numberButtons[i]);
    console.log(numberButtons[i].innerHTML);
}



//     let buttonValue = numberButtons[i].innerHTML;
//     console.log(buttonValue);
//     if (buttonValue == "0") {
//         console.log("This is the ZERO Button");
//         numberButtons[i].addEventListener('click', () => {
//             if (getDisplayContents() !== "0") {
//                 calculatorDisplay.innerHTML += buttonValue;
//             }
//         });
//     } else if (buttonValue == ".") {

//         decimalButton.addEventListener('click', function () {
//             let btnValue = decimalButton.innerHTML;
//             console.log("The DECIMAL Button Was Clicked!!!");
//             if (!calculatorDisplay.innerHTML.includes(".")) {
//                 calculatorDisplay.innerHTML += btnValue;
//             }
//         }

//     } else {
//         buttonValue = numberButtons[i].innerHTML;
//         console.log("This is a NUMBER Button");
//         numberButtons[i].addEventListener('click', function () {
//             console.log('The ' + buttonValue + ' Button Was Pressed...');
//             if (getDisplayContents() !== "0") {
//                 calculatorDisplay.innerHTML += buttonValue;
//             } else {
//                 calculatorDisplay.innerHTML = buttonValue;
//             }
//         });
//     })
// }
