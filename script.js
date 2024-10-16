"use strict";

const errorImg = document.querySelector(".error-img");
const errorText = document.querySelector(".error-text");
const form = document.querySelector("form");
const errorEmailInput = document.getElementById("email");
const myBtn = document.querySelector(".my-btn");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const errorEmailValue = errorEmailInput.value;
  const storedEmailValue = errorEmailInput.value;

  if (!emailPattern.test(storedEmailValue)) {
    errorImg.classList.remove("hidden");
    errorText.classList.remove("hidden");
    errorEmailInput.classList.add("error-outline");
  } else {
    window.location.reload();
    alert(`
      Message sent!
      
      Thanks for completing the form we'll be in touch soon

      Email: ${errorEmailValue}
        `);
  }
});
