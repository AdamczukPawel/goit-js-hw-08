var _ = require('lodash');

const wholeForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const submitButton = document.querySelector("button");

// let LOCALSTORAGE_INPUTS = 'feedback-form-state';

var existing = localStorage.getItem('feedback-form-state');

existing = existing ? JSON.parse(existing) : {};

emailInput.value = existing.email;
messageInput.value = existing.message;

wholeForm.addEventListener("input", () => {
    existing['email'] = emailInput.value;
    existing['message'] = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(existing));
});

submitButton.addEventListener("click", () => {
    const output = localStorage.getItem('feedback-form-state');
    // localStorage.clear();
    // wholeForm.reset();
    localStorage.clear();
    return output;
});