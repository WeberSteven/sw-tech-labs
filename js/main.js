const text = "Cloud • Networking • Automation • DevOps • Security";
const typingElement = document.querySelector(".typing");

let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

document.addEventListener("DOMContentLoaded", type);