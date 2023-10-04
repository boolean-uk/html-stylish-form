document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    window.location.href = "thankyou.html";
});

document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (input.validity.valid) {
            input.style.borderColor = 'green';
        } else {
            input.style.borderColor = 'red';
        }
    });
});
