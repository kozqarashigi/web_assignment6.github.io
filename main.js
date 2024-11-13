// for form validation part 
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
    return emailPattern.test(email);
}


// for changing color part
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightorange', 'lightgrey'];
let currentIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// for current date and time part
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);

//for pop up subscription part
openFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'flex'; 
});

closeFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});


// for event handling
document.addEventListener('DOMContentLoaded', () => {
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
});

//greeting part
function getGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    return greeting;
}

document.getElementById('greeting').innerText = getGreeting();

