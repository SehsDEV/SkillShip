// this feature is not availble right now
document.getElementById("show-not-available-btn").addEventListener("click", function() {
  const notAvailableBox = document.getElementById("not-available-box");
  notAvailableBox.style.display = "block"; // Show the block
  setTimeout(function() {
    notAvailableBox.style.display = "none"; // Hide the block after 4 seconds
  }, 4000);
});
// back to top smoothly

const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
      backToTopBtn.classList.add("active");
  } else {
      backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 // newsletter code

const inputElement = document.querySelector('.newsletter_input');

inputElement.addEventListener('input', function() {
this.classList.add('typing');
});

inputElement.addEventListener('blur', function() {
if (!this.value) {
  this.classList.remove('typing');
}
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Your form submission logic here (AJAX request, validation, etc.)

  // You can optionally scroll to a specific element on the page
  // window.scrollTo(0, document.getElementById("elementID").offsetTop);
});
 document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  submitForm();
});

function submitForm() {
  var emailInput = document.querySelector('.newsletter_input');
  var email = emailInput.value;

  if (email) {
      console.log("Email submitted:", email);

      // Use AJAX to execute the PHP script in the background
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "execute_background.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("email=" + encodeURIComponent(email));

      emailInput.value = ""; // Clear the input
  } else {
      console.log("Please enter an email.");
  }
}

// ---------------checkout_page--------------

