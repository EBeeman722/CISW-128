const title=document.getElementById("title");
// document represents the whole page
// .getElementByID("title") finds the element in the html with the same ID

title.textContent="wasdsadwadwadswasd";
// .textContent accesses or changes the text inside the element

// selecting elements
// getElementByID() selecst one element of the page by its ID
// querySelector() selects the first match
// querySelectorAll() returns a nodelist of all matches

const mainSection = document.querySelector(".main");
mainSection.style.backgroundColor="red";

const paragraphs = document.querySelectorAll("p")
paragraphs.forEach((para,index) => {
para.textContent = "Paragraph" + (index + 1)+ " modified";
para.style.color='#9526f0';
})

//event listeners
//select button
const button = document.getElementById("toggle");
//listen for a button click
button.addEventListener("click",() => {

document.body.classList.toggle("highlight");







});