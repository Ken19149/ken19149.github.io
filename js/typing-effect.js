const textToType = ["Welcome to my portfolio!", "This is a typing effect example."];
const initialDelay = 2000; // 2 seconds delay before typing the first text
const typingSpeed = 100;
const deleteSpeed = 50;
const transitionDelayTyping = 2000; // 2 seconds delay after typing a text
const transitionDelayDeleting = 1000; // 1 second delay after deleting a text
const typedTextElement = document.getElementById('typed-text');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const text = textToType[textIndex];
    if (!isDeleting && charIndex < text.length) {
        typedTextElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
        typedTextElement.textContent = text.substring(0, charIndex);
        charIndex--;
        setTimeout(typeText, deleteSpeed);
    } else {
        isDeleting = !isDeleting;
        textIndex = (textIndex + 1) % textToType.length;
        const delay = isDeleting ? transitionDelayDeleting : transitionDelayTyping;
        setTimeout(typeText, delay); // Add delay before typing or deleting the next text
    }
}

// Start typing after the initial delay
setTimeout(typeText, initialDelay);
