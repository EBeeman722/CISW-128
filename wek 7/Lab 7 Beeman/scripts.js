for(let i=1; i<=10; i++){
    console.log("I's count is "+i)
};

let promptedNumber = Number(prompt('Give be a number to count up to'))
for (let count = 1; count <=promptedNumber; count++){
    console.log('Count is ' + count)
};

let triangle = ''
let triLength = Number(prompt('How long do you want your triangle?'))
for (let i=1; i<=triLength;i++){
    triangle += '#'
    console.log(triangle)
};