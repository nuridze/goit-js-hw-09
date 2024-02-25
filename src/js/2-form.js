const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');


const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
};


const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email || "";
        messageInput.value = message || "";
    }
};

form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput)
        saveStateToLocalStorage();
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    if (emailValue !== '' && messageValue !== '') {
        console.log({
            email: emailValue,
            message: messageValue,
        });
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';
    } else {
        alert('Both strings must be filled!');
    }
});

loadStateFromLocalStorage();