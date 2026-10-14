// Functions

// greetUser();
// // calls the function to be ran

// function greet(name){
//     console.log("Hello "+ name);
// }

// greet("user's name");

// function that adds 2 numbers, then console.log's the total
function addNumbers(firstNumber, secondNumber){
    return firstNumber+secondNumber;
}

let total = addNumbers(4,6)
console.log("the total is " + total)

// return gives the answer to be used later
// console.log states the answer in the console

function multNumbers(a,b){
    return a*b;
}

let result = multNumbers(15,15)
console.log(result)

function countTo5(baseNumber){
    while (baseNumber <= 5){
        console.log(baseNumber);
        baseNumber += 1;
    };
};

let startingNumber = Number(prompt("What number would you like to count up to 5?"))
countTo5(startingNumber);