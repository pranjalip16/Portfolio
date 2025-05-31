// JS Fundamentals Demo

// Variables
let userName = "Visitor";
const skills = ["HTML", "CSS", "JavaScript", "React"];
const greeting = "Welcome to my portfolio!";

// Console logs
console.log(greeting);
console.log("User Name:", userName);
console.log("My skills:");
for (let i = 0; i < skills.length; i++) {
  console.log(`- ${skills[i]}`);
}

// Function example
function showAlertMessage(message) {
  const alertBanner = document.getElementById("alertBanner");
  if (alertBanner) {
    alertBanner.textContent = message;
    alertBanner.classList.remove("hidden");
  }
}

// Call the function to show alert on page load
window.onload = function () {
  showAlertMessage(`${greeting} Thanks for visiting!`);
};

// DOM & Events Demo

// Element selection
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Set initial theme button text
themeToggleBtn.textContent = "Switch to Light Theme";

// Theme toggle logic
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    themeToggleBtn.textContent = "Switch to Dark Theme";
  } else {
    themeToggleBtn.textContent = "Switch to Light Theme";
  }
});

// Form validation function
function validateForm() {
  const nameInput = contactForm.name;
  const emailInput = contactForm.email;
  const messageInput = contactForm.message;

  if (!nameInput.value.trim()) {
    showFormMessage("Please enter your name.", "error");
    nameInput.focus();
    return false;
  }
  if (!emailInput.value.trim() || !emailInput.checkValidity()) {
    showFormMessage("Please enter a valid email.", "error");
    emailInput.focus();
    return false;
  }
  if (!messageInput.value.trim()) {
    showFormMessage("Please enter your message.", "error");
    messageInput.focus();
    return false;
  }
  return true;
}

// Show form message helper
function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.classList.remove('hidden');
  formMessage.style.color = type === "error" ? '#e11d48' : '#22c55e';
}

// Clear message on input
contactForm.addEventListener('input', () => {
  formMessage.textContent = '';
  formMessage.classList.add('hidden');
});

// Form submit handler
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    showFormMessage(`Thank you, ${contactForm.name.value}! Your message has been sent.`, "success");
    contactForm.reset();
  }

  
});
