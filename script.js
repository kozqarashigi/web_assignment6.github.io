// toggle switching modes
document.addEventListener('DOMContentLoaded', function() {
    const modeToggler = document.getElementById('modeToggler');
    const body = document.body;

    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
        modeToggler.textContent = savedMode === 'day-mode' ? 'Switch to Night Mode' : 'Switch to Day Mode';
    } else {
        body.classList.add('day-mode'); // to day mode by default 
        modeToggler.textContent = 'Switch to Night Mode';
    }

    modeToggler.addEventListener('click', function() {
        if (body.classList.contains('day-mode')) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            modeToggler.textContent = 'Switch to Day Mode';
            localStorage.setItem('theme', 'night-mode');
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            modeToggler.textContent = 'Switch to Night Mode';
            localStorage.setItem('theme', 'day-mode');
        }
    });
});


//* for read more part
document.getElementById("myBtn").addEventListener("click", function() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}); 

// Functionality to load more products
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    var products = [
        "App: Headspace - Mindfulness and Meditation",
        "Book: 'Mindset' by Carol S. Dweck",
        "Workshop: 'Goal Setting for Success'",
        "Podcast: 'The Tim Ferriss Show'"
    ];

    var productContainer = document.getElementById("products");
    
    // Append new product items
    products.forEach(function(product) {
        var li = document.createElement("li");
        li.textContent = product;
        productContainer.appendChild(li);
    });

    // Disable the button after loading more content
    this.disabled = true;
    this.innerText = "All products loaded";
});

    // Form Validation
    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!validateEmail(email)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'Invalid email format';
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (password.length < 8) {
            isValid = false;
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        if (password !== confirmPassword) {
            isValid = false;
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        } else {
            document.getElementById('confirmPasswordError').textContent = '';
        }

        if (isValid) {
            alert('Form submitted successfully');
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        alert('Input valid email!')
        return emailPattern.test(email);
    }

    // Change Background Color
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightgrey'];
    let currentIndex = 0;
    function changeColor() {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        alert('Color is changed!');
    }
    document.querySelector('button[onclick="changeColor()"]').addEventListener('click', changeColor);

    // Display Current Date and Time
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
    }
    setInterval(updateDateTime, 1000);

    // Popup Subscription
    document.getElementById('openFormBtn').addEventListener('click', function() {
        document.getElementById('popupForm').style.display = 'flex';
    });
    document.getElementById('closeFormBtn').addEventListener('click', function() {
        document.getElementById('popupForm').style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('popupForm')) {
            document.getElementById('popupForm').style.display = 'none';
        }
    });

    // Keyboard Navigation
    const navItems = document.querySelectorAll('#navMenu li');
    navItems.forEach((item, index) => {
        item.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    if (index < navItems.length - 1) {
                        navItems[index + 1].focus();
                    }
                    break;
                case 'ArrowUp':
                    if (index > 0) {
                        navItems[index - 1].focus();
                    }
                    break;
            }
        });
    });

// form 
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('button[id^="nextBtn"]');
    const prevBtns = document.querySelectorAll('button[id^="prevBtn"]');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const usernameInput = document.getElementById('username');
    let currentStep = 0;

    // Show a specific step
    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle('active', index === step);
        });
    }

    // Check if the user is logged in
    function checkLogin() {
        const username = localStorage.getItem('username');
        if (username) {
            // User is logged in
            document.getElementById('loginStep').style.display = 'none';
            logoutBtn.style.display = 'block';
            currentStep = 1; // Start from the next step after login
        } else {
            // User is not logged in
            document.getElementById('loginStep').style.display = 'block';
            logoutBtn.style.display = 'none';
            currentStep = 0;
        }
        showStep(currentStep);
    }

    // Handle login
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        if (username) {
            localStorage.setItem('username', username);
            checkLogin();
        } else {
            alert("Please enter a username.");
        }
    });

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        checkLogin();
    });

    // Handle next and previous buttons
    nextBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Initialize on page load
    checkLogin();
});
