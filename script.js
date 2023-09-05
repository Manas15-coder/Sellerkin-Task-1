document.addEventListener('DOMContentLoaded', function () {
    const topButton = document.querySelector('.floating-button a');

    topButton.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function typeEffect(element, text, speed) {
    let i = 0;
    const typingInterval = setInterval(function () {
        if (i < text.length) {
            document.getElementById(element).textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}


document.addEventListener('DOMContentLoaded', function () {
    typeEffect('typing-text', 'Skyrocket 🚀 Your Etsy Business and Copying for Instant Sucess 🎯', 50);
});
