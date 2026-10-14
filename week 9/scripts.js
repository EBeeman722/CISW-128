// asks the user's name and greets them
function greetUser(){
    let name = prompt("what is your name?");
    console.log('Greetings ' + name);
}

// adds 2 numbers together
function addNumbers(number1, number2){
    return number1+number2;
}

// multiplies to find area
function calculateArea(length,width){
    return length*width;
}

// assigning values for the area calculation
let givenLength = Number(prompt('What is the length of the object'))
let givenWidth = Number(prompt('What is the width of the object'))

// greeting user with no input as that is already in the function
greetUser();

// adding 2 numbers together
console.log(addNumbers(7,8));

// calculates the area given the previously provided promptsfor length and width
console.log(calculateArea(givenLength,givenWidth));