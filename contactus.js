// contactus.js

// Initialize EmailJS with your Public Key
(function () {
  emailjs.init({
    publicKey: "wxVGnWvpxtuJkF-C6", // Your Public Key
  });
})();

// Get references to notification elements
const formMessages = document.getElementById("form-messages");
const messageText = document.getElementById("message-text");
const closeMessageButton = document.getElementById("close-message");

// Function to display the notification
function displayNotification(message, type) {
  let emoji = "";
  let bgColor = "";

  if (type === "success") {
    emoji = "✅ "; // Green checkmark emoji
    bgColor = "#4CAF50"; // Green
  } else if (type === "error") {
    emoji = "❌ "; // Red cross mark emoji
    // Alternatively for a sad face: emoji = '😞 ';
    bgColor = "#f44336"; // Red
  }

  messageText.textContent = emoji + message; // Prepend emoji to the message
  formMessages.style.backgroundColor = bgColor;
  formMessages.style.display = "block"; // Make it visible
  formMessages.style.opacity = "1"; // Fade it in

  // Automatically hide after 5 seconds
  setTimeout(() => {
    hideNotification();
  }, 5000);
}

// Function to hide the notification
function hideNotification() {
  formMessages.style.opacity = "0"; // Fade it out
  // Wait for the transition to complete before setting display to none
  setTimeout(() => {
    formMessages.style.display = "none";
  }, 500); // Match this with your CSS transition duration
}

// Add event listener to close button
if (closeMessageButton) {
  closeMessageButton.addEventListener("click", hideNotification);
}

// Function to send email
function sendEmail(event) {
  event.preventDefault(); // Prevent default form submission (page reload)

  // Set the current time before sending
  const currentTimeField = document.getElementById("current-time");
  if (currentTimeField) {
    currentTimeField.value = new Date().toLocaleString(); // Format: e.g., "6/17/2025, 3:50:00 PM"
  }

  const serviceID = "service_vrmc159"; // Your Service ID
  const templateID = "template_yhl6ryr"; // Your Template ID
  const form = document.getElementById("contact-form");

  // Disable button and show loading state (optional)
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  submitButton.innerHTML = "Sending...";
  submitButton.disabled = true;

  emailjs.sendForm(serviceID, templateID, form).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      displayNotification(
        "Your message has been sent successfully!",
        "success"
      ); // Will now include green emoji
      form.reset(); // Clear the form after successful submission
      submitButton.innerHTML = originalButtonText; // Restore button text
      submitButton.disabled = false; // Re-enable button
    },
    (error) => {
      console.log("FAILED...", error);
      displayNotification(
        "Failed to send message. Please try again later.",
        "error"
      ); // Will now include red emoji
      submitButton.innerHTML = originalButtonText; // Restore button text
      submitButton.disabled = false; // Re-enable button
    }
  );
}
