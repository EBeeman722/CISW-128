// changes the text shown from what is on the html page to what is written here and adding the image here
// 1) Grab your title and main section
const titleEl = document.getElementById("titleID");
const mainEl = document.getElementById("mainPage");
// 2) Update the title text
titleEl.textContent = "Video Games — Powered by JavaScript";
// WHY: textContent replaces the visible text inside the element safely.
const imgEl = document.getElementById("imageID");
// Swap to a new image and alt text (use any public image URL)
imgEl.src = "Titanfall_2.jpg";
imgEl.alt = "An image of a robotic mech running along side its pilot";
// WHY: Changing attributes lets you swap content without editing HTML.

// adds lists to the webpage based on how many items are in the "items" variable
// Example data structure — use your own keys/values
const items = [
{ name: "Deadlock", info: "Moba/Third Person Shooter" },
{ name: "Dying Light", info: "Parkour/Action" },
{ name: "Satisfactory", info: "Automation/Factory Sim" }
];
// Target the list you created in HTML
const listEl = document.getElementById("listOfGames");
listEl.innerHTML = ""; // clear existing
// Create and append list items from your data
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});
// WHY: createElement + appendChild builds real nodes (safer than string HTML).

// Turns on or off the highlight on the main page
const toggleBtn = document.getElementById("changeHighlightButton");
// Toggle on the <main> or on document.body — your choice
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("videoGameHighlights");
});
// WHY: classList.toggle adds the class if missing, removes if present.

// Takes the button that was added in the html and makes it change the image shown
// This keeps style logic in CSS, behavior in JS (good separation).
const swapBtn = document.getElementById("changeImageButton");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "Deadlock.jpg";
imgEl.alt = "Box art for Deadlock from the Old Gods, New Blood update";
swapped = true; } else {
imgEl.src = "Dying_Light.jpg";
imgEl.alt = "An image of the player running across the rooftops in Dying Light's Slums district";
swapped = false;
}
});
// WHY: This shows conditional logic + DOM attribute updates on a user action.

// Changes the Text colour
const textColourSwap = document.getElementById("independentChallenge");
textColourSwap.style.color = "#f35f5f";