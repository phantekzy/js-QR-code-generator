// ==========================
// VARIABLES
// ==========================

// Input field where user types text or URL
let QrText = document.getElementById('QrText')

// Container that holds the QR code image
let QrBox = document.getElementById('QrBox')

// The actual QR image element
let QrImg = document.getElementById('QrImg')

// Button to generate QR code
let QrBtn = document.getElementById('QrBtn')

// ==========================
// QR CODE API
// ==========================

// URL of the free QR code API (150x150px)
const API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='


// ==========================
// FUNCTIONS
// ==========================

// Generate QR Code Function
function generateQR() {
	// If input is empty, show an alert
	if (QrText.value === '') {
		alert('Please enter a url to generate your QR code!')
		return;
	} else {
		// Set QR image src to API URL with user input
		QrImg.src = API_URL + QrText.value

		// Add class to show QR image block
		QrBox.classList.add("show-img")
	}
}


// ==========================
// EVENT LISTENERS
// ==========================

// Listen for button click to generate QR code
QrBtn.addEventListener('click', () => {
	generateQR()
})

