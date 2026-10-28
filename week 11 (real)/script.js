const clickButton = document.getElementById("clickBtn")
clickButton.addEventListener("click",()=>{
alert("Woe! Rabies upon thee!");
});

// Example 2: Double-click event
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "Double-clicked!";
});
// Example 3: Hover in / out
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
hoverText.style.color = "red";
});
hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "black";
});
// Example 4: Key press
document.addEventListener("keyup", (event) => {
document.getElementById("output").textContent = "You pressed: " + event.key;
});
// Example 5: Input typing
const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
console.log("User typed:", textInput.value);
});

//event1
// changes the highlight when the appropriate button is clicked
const highlightButton = document.getElementById("highlightButton")
highlightButton.addEventListener("click",()=>{
document.body.style.backgroundColor = "#ce8fcb";
});

//event2
// will change the text's colour to blue when the button from before is double clicked
dblBtn.addEventListener("dblclick",()=>{
hoverText.style.color = "blue"
})

//event3
// will annoy the user with constant alerts about what they key they pressed
let userAnnoy = document.addEventListener("keydown",(event)=>{
alert("This is here to annoy you! You typed..." +event.key)
})

//event4
//will change the text that shows a fun surprise to a fun surprise on pressing the down arrow
let surpriseContent = document.addEventListener("keydown",()=>{
document.getElementById("surpriseText").textContent = "HA! Now every key you press will be alerted!"
})

//event5
//clicking the change spin button will make it rotate 2 degs
const spinButton = document.getElementById("spinButton")
let rotation = 0;

spinButton.addEventListener("click",function() {
    rotation += 2;
    document.body.style.transform=`rotate(${rotation}deg)`;
})