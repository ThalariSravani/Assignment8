const form = document.getElementById('leave-form');
const errorMessages = document.getElementById('error-messages');

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const rollNumber = document.getElementById('roll-number').value.trim();
    const leaveType = document.getElementById('leave-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const reason = document.getElementById('reason').value.trim();

    let errors = [];

    if (name === '') {
        errors.push('Name is required.');
    }

    if (rollNumber === '') {
        errors.push('Roll Number is required.');
    }

    if (leaveType === '') {
        errors.push('Leave Type is required.');
    }

    if (startDate === '') {
        errors.push('Start Date is required.');
    }

    if (endDate === '') {
        errors.push('End Date is required.');
    }

    if (reason === '') {
        errors.push('Reason is required.');
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        // Form is valid, proceed with submission
        alert('Form submitted successfully!');
        // Add form submission logic here (e.g., AJAX request)
    }
}


