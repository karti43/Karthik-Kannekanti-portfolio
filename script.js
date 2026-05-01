document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect for the Subtitle
    const textElement = document.getElementById('dynamic-text');
    const phrases = ["Data Science Engineer", "AI Specialist", "ML Modeler"];
    let i = 0;
    let j = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function type() {
        currentPhrase = phrases[i];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, j - 1);
            j--;
        } else {
            textElement.textContent = currentPhrase.substring(0, j + 1);
            j++;
        }

        if (!isDeleting && j === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause at end
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();

    // 2. Scroll Reveal Animation
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
