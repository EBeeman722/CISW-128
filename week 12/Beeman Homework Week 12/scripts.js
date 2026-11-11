// Select the form and result section
const form = document.getElementById("userInfo");
const result = document.getElementById("userInfo");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const PMC = document.getElementById("PMC").value;
    const Newsletter=document.getElementById("Newsletter").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Is this correct?</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Preferred Method of Contact: ${PMC}</p>
      <p><strong>Newsletter updates? ${Newsletter}</p>
    `;
});

// Changes the page's text colour to red when the page is hovered over 
form.addEventListener("mouseover",(event) => {
event.target.style.color= "red";
});