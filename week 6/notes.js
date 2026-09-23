// comparison operators
// === is equal to
// !== not equal to
// >= greater and equal
// <= lesser and equal


let score = 85;

if (score>89){
    console.log('you got an a')
}
else if (score>79){
    console.log('you got a b')
}
else if (score>69){
    console.log('you got a c')
}
else {
    console.log('your grade is mediocre')
}

// prompt() makes the website interactive
// input is string, number is for numbers
let score=number(prompt('enter your score 1-100'))

document.body.innerHTML += "<p>Your score was" + score + "</p>"; //(put defer at the end of your script tag in html)

let username = input(prompt('What is your name?'))
document.body.innerHTML += "<p>Hello" + username + "</p>";