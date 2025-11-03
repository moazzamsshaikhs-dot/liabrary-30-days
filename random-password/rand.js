const passwordbox = document.querySelector("#password");
const toast = document.querySelector("#toast");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";

    // Ensure at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest randomly
    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    // Shuffle the password to mix the fixed characters
    password = shuffleString(password);
    passwordbox.value = password;

    // Show password strength
    updateStrengthMeter(password);
}

function shuffleString(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function copyPassword() {
    if (!passwordbox.value) {
        showToast("Generate a password first!");
        return;
    }

    passwordbox.select();
    passwordbox.setSelectionRange(0, 99999); // For mobile devices

    try {
        navigator.clipboard.writeText(passwordbox.value).then(() => {
            showToast("Password copied to clipboard!");
        }).catch(() => {
            // Fallback for older browsers
            document.execCommand("copy");
            showToast("Password copied to clipboard!");
        });
    } catch (err) {
        // Final fallback
        document.execCommand("copy");
        showToast("Password copied to clipboard!");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function updateStrengthMeter(password) {
    // Simple strength calculation
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 10;

    const strengthFill = document.querySelector('.strength-fill');
    if (strengthFill) {
        strengthFill.style.width = strength + '%';
        strengthFill.style.background = strength >= 75 ? '#019f55' : strength >= 50 ? '#ffa500' : '#ff4444';
    }
}

// Create strength meter if it doesn't exist
if (!document.querySelector('.strength-meter')) {
    const strengthMeter = document.createElement('div');
    strengthMeter.className = 'strength-meter';
    strengthMeter.innerHTML = '<div class="strength-fill"></div>';
    document.querySelector('.display').parentNode.insertBefore(strengthMeter, document.querySelector('.display').nextSibling);
}

// Generate initial password on load
window.addEventListener('load', createPassword);