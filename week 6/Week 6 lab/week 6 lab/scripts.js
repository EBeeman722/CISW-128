// check for score
let score = Number(prompt('What was your score? '));

// what did your score net you as a grade
if (score>89){
    console.log('You got an A')
}
else if (score>79){
    console.log('You got an B')
}
else if (score>69){
    console.log('You got an C')
}
else if (score>59){
    console.log('You got an D')
}
else{
    console.log('You failed')
};

// age check
let age = Number(prompt('what is your age?'));
if (age>17){
    console.log('Adult')
}
else{
    console.log('Minor')
};

// check for users name, specifically checking for me
let usersname = prompt('What is your name? ');
if (usersname === 'Charlotte'){
    console.log('Hello creator')
}
else{
    console.log('Hello '+ usersname)
};