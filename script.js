// Get Handles
var calculatorDisplay = document.getElementById('js-cal-display');
var functionButtons = document.getElementsByClassName('btn-function');
var numberButtons = document.getElementsByClassName('btn-number');

// Functions
function setEventListeners(){
	
	// Add Event Listeners For Function Buttons
	for (i = 0; i < functionButtons.length; i++){
		
		if(functionButtons[i].name == 'clear'){
			// Add Event Listener for CLEAR Button
			functionButtons[i].addEventListener('click', function(){
				
				clearDisplay();
				
			});
		}else if(functionButtons[i].name == 'opposite'){
			// Add Event Listener for OPPOSITE Button		
			functionButtons[i].addEventListener('click', function(){
				
				let displayValue = calculatorDisplay.innerHTML;
				calculatorDisplay.innerHTML = ( displayValue * -1 );
				
			});
		}else{
			
			// Add Event Listener for PERCENT Button
			functionButtons[i].addEventListener('click', function(){
				
				let displayValue = calculatorDisplay.innerHTML;
				calculatorDisplay.innerHTML = ( displayValue / 100 );
				
			});
		}
		
	}
	
	for (j = 0; j < numberButtons.length; j++){
		
		let buttonValue = numberButtons[j].innerHTML;
		
		if(numberButtons[j].name == 'zero'){
			
			numberButtons[j].addEventListener('click', function(){
				//console.log("ZERO Button was Clicked!!!");
				addZeroToDisplay();
			});
			
		}
		else if(numberButtons[j].name == 'decimal'){
			
			numberButtons[j].addEventListener('click', function(){
				//console.log("DECIMAL Button was Clicked!!!");
				addDecimalToDisplay();
			});
		}
		else{
			
			numberButtons[j].addEventListener('click', function(){
				addNumberToDisplay(buttonValue);
			});
			
		}
		
	}
	
}

function initCalc(){
	clearDisplay();
	setEventListeners();
}

function clearDisplay(){
	
	if(calculatorDisplay.innerHTML != "0"){
		calculatorDisplay.innerHTML = "0";
	}
	
}

function addNumberToDisplay(displayValue){
	
	if(calculatorDisplay.innerHTML != "0"){
		calculatorDisplay.innerHTML += displayValue;
	}else{
		calculatorDisplay.innerHTML = displayValue;
	}
	
}

function addDecimalToDisplay(){
	
	if(!calculatorDisplay.innerHTML.includes(".")){
		calculatorDisplay.innerHTML += ".";
	}
	
}

function addZeroToDisplay(){
	
	if(calculatorDisplay.innerHTML != "0"){
		calculatorDisplay.innerHTML += 0;
	}else{
		calculatorDisplay.innerHTML = 0;
	}	
	
}

initCalc();