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
    const favColour = document.getElementById("colour").value

    // Display the info back to the user
    result.innerHTML = `
      <h3>Is this correct?</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Favourite Colour: ${favColour}</p>
    `;
});