
function fakeServerCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 2000);
    });
}

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const successMsg = document.getElementById('success-message');
    const submitBtn = document.querySelector('button');

    nameField.style.border = '1px solid #333';
    emailField.style.border = '1px solid #333';
    messageField.style.border = '1px solid #333';
    successMsg.style.display = 'none';

    let isValid = true;

    if (nameField.value.trim() === '') {
        nameField.style.border = '1px solid red';
        isValid = false;
    }

    if (!emailField.value.includes('@') || !emailField.value.includes('.')) {
        emailField.style.border = '1px solid red';
        isValid = false;
    }

    if (messageField.value.length < 5) {
        messageField.style.border = '1px solid red';
        isValid = false;
    }

    if (isValid) {
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Sending Data...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        await fakeServerCall();

        submitBtn.innerText = originalText;
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;

        successMsg.style.display = 'block';

        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
    }
});