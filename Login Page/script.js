/* Registration*/
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Fetch values from the form
        const username = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const terms = document.getElementById("terms").checked;

        // Validation
        if (username.length < 3) {
            alert("Username must be at least 3 characters long.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        // If validation passes, process the form data
        console.log("Form Data:");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        alert("Registration successful!");

       
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
/* login*/
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("loginform");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Form is valid
        alert("Form submitted successfully!");
        console.log({
            email: email,
            password: password
        });

        // Optionally submit the form data here using fetch or XMLHttpRequest
    });

    // Email validation helper function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

