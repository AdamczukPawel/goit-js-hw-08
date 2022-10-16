var _ = require('lodash');

const wholeForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const submitButton = document.querySelector("button");
// let LOCALSTORAGE_INPUTS = 'feedback-form-state';

var existing = localStorage.getItem('feedback-form-state');

existing = existing ? JSON.parse(existing) : {};
if (existing.email !== undefined || existing.message !== undefined) {
    emailInput.value = existing.email;
    messageInput.value = existing.message;
}

wholeForm.addEventListener("input", _.throttle(() => {
    existing['email'] = emailInput.value;
    existing['message'] = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(existing));
}, 500));

submitButton.addEventListener("click", (event) => {
    const output = localStorage.getItem('feedback-form-state');
    // localStorage.clear();
    // wholeForm.reset();
    localStorage.clear();
    wholeForm.reset();
    console.log(output);
    event.preventDefault();
});