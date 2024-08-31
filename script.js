// Add your JavaScript here

// Example function to track a complaint
function trackComplaint() {
    const complaintId = document.getElementById('complaint-id').value;
    // Placeholder for tracking logic
    document.getElementById('complaint-status').innerText = `Tracking complaint ID: ${complaintId}`;
}

// Example form submission handling
document.getElementById('complaint-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Complaint submitted successfully!');
});

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Feedback submitted successfully!');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logged in successfully!');
});
