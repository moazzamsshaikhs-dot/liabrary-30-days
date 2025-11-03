let imgbox = document.querySelector("#imgbox");
let qrimg = document.querySelector("#qrimg");
let qrtext = document.querySelector("#qrtext");
let errorMessage = document.querySelector("#errorMessage");
let loadingSpinner = document.querySelector("#loadingSpinner");

function generateQR() {
    // Validate input
    if (!qrtext.value.trim()) {
        errorMessage.style.display = 'block';
        imgbox.classList.remove("show-img");
        return;
    }

    errorMessage.style.display = 'none';
    loadingSpinner.style.display = 'block';
    imgbox.classList.remove("show-img");

    // Generate QR code
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrtext.value);

    // Show QR code when image loads
    qrimg.onload = function () {
        loadingSpinner.style.display = 'none';
        imgbox.classList.add("show-img");
    };

    // Handle image loading errors
    qrimg.onerror = function () {
        loadingSpinner.style.display = 'none';
        errorMessage.textContent = "Failed to generate QR code. Please try again.";
        errorMessage.style.display = 'block';
    };
}

// Add Enter key support
qrtext.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateQR();
    }
});

// Clear error when user starts typing
qrtext.addEventListener("input", function () {
    errorMessage.style.display = 'none';
});