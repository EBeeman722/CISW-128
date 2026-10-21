// a function used  to ask for a number
function askForNumber(){
    let number1 = Number(prompt("Give me a number? >"));
    console.log("The number you chose was "+ number1);
    return number1;
};

//function to count up to a number from the previously provided number
function countUpTo(baseNumber){
    let number2 = Number(prompt('What number would you like to start counting from?'));
    // produces an error message if it can not count up to the number
    if (baseNumber<= number2){
        console.log("I can not count *up* to "+ baseNumber + " from " + number2 +" as it is lower than or equal to "+ number2 +'.')
    };
    //counts up to the number listed earlier from another number provided from the user
    console.log("I will now begin counting from "+number2+ " to "+ baseNumber);
    while (number2 <= baseNumber){
        console.log(number2);
        number2 += 1;
    };
};

// squares the number provided by the user after asking for their number using a previous function
function squareNumber(){
    let numToSquare = askForNumber();
    let numSquared = numToSquare*numToSquare;
    console.log("The number you chose when squared equals "+ numSquared +'.');
};

// calls for functions to be ran
let favNumber = askForNumber();
squareNumber(countUpTo(favNumber));
