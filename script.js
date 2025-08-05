
// Google Script Web App URL
const scriptURL = "YOUR_GOOGLE_WEB_APP_URL";

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value,
    message: document.getElementById("message").value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById("bookingMessage").textContent = 
      `✅ Thank you, ${formData.name}! Your booking is saved.`;
    document.getElementById("bookingMessage").classList.remove("hidden");
    document.getElementById("bookingForm").reset();
  })
  .catch(error => {
    document.getElementById("bookingMessage").textContent = 
      `❌ Something went wrong. Please try again.`;
    document.getElementById("bookingMessage").classList.remove("hidden");
  });
});