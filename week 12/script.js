// puts user info in console
// select element form
// const form = document.getElementById("contactForm");

// //listen for the submit event
// form.addEventListener("submit",function(event){
// // stops the page from reloading when submitted form
//     event.preventDefault();
// // get the input
//     const name=document.getElementById("name").value;
//     console.log("hello",name);
// })

// Display data frontside
const result=document.getElementById("contactForm")
result.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name = getElementById("name").value;
    result.innerHTML=`<p>Hello, ${name}! Thank you for submitting</p>`;

})