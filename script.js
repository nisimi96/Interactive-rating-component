let selectedRating = 0

function setRating(rating) {
    selectedRating = rating;
}

function submitRating() {
    if (!selectedRating) {
        alert('Please select a rating before submitting.');
    } else {
        localStorage.setItem('userRating', selectedRating);
        window.location.href = 'thank.html';
    }
}

const userRating = localStorage.getItem('userRating');

document.getElementById('userRating').innerText = userRating || "No rating";