document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signup-button");
    const errorBox = document.getElementById("error-box");
    const successBox = document.getElementById("success-box");
    const errorBoxMessage = errorBox.querySelector("h3");
    const successBoxMessage = successBox.querySelector("h3");
  
    signUpButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
  
        // Define inputs array here
        const inputs = document.querySelectorAll(".signup-container input[required], .signup-container select[required]");
  
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.classList.add("error-input");
            } else {
                input.classList.remove("error-input");
            }
        });
  
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const country = document.getElementById("country").value;
        const agreeCheckbox = document.getElementById("agree-checkbox").checked;
  
        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === "" ||
            dateOfBirth.trim() === "" ||
            country.trim() === "" ||
            !agreeCheckbox
        ) {
            displayErrorMessage("Please fill in all fields correctly.", errorBox, errorBoxMessage);
            return;
        }
  
        if (password !== confirmPassword) {
            displayErrorMessage("Passwords do not match. Please try again.", errorBox, errorBoxMessage);
            return;
        }
  
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("country", country);
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save-data.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    displaySuccessMessage(`Sign-up successful welcome ${firstName} ${lastName}.`, successBox, successBoxMessage);
                    clearInputs();
                    setTimeout(function() {
                        window.location.href = "index.html"; // Redirect after 4 seconds
                    }, 4000);
                } else {
                    displayErrorMessage("An error occurred while saving data.", errorBox, errorBoxMessage);
                }
            }
        };
        xhr.send(formData);
    });
  
    function clearInputs() {
        const inputs = document.querySelectorAll(".signup-container input, .signup-container select");
        inputs.forEach(input => {
            input.value = "";
        });
        document.getElementById("agree-checkbox").checked = false;
    }
  
    function displayErrorMessage(message, boxElement, messageElement) {
        messageElement.textContent = message;
        boxElement.classList.remove("success_message");
        boxElement.classList.add("error_message");
        boxElement.style.display = "block";
        setTimeout(function() {
            boxElement.style.display = "none";
        }, 4000);
    }
  
    function displaySuccessMessage(message, boxElement, messageElement) {
        messageElement.textContent = message;
        boxElement.classList.remove("error_message");
        boxElement.classList.add("success_message");
        boxElement.style.display = "block";
        setTimeout(function() {
            boxElement.style.display = "none";
        }, 4000);
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const countrySelect = document.getElementById("country");
    
    // Fetch country data from Rest Countries API
    fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.alpha2Code; // Use alpha2Code as value
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));
  });



  