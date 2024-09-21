// Get custom cursor elements
const cursorOuter = document.getElementById('custom-cursor');
const cursorInner = cursorOuter.querySelector('#inner-cursor');

let mouseX = 0, mouseY = 0;
let innerX = 0, innerY = 0;
let outerX = 0, outerY = 0;

// Track mouse movement
document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor
function animateCursor() {
    // Smooth follow for inner cursor
    innerX += (mouseX - innerX) * 0.15;
    innerY += (mouseY - innerY) * 0.15;
    cursorInner.style.transform = `translate(${innerX}px, ${innerY}px)`;

    // Outer cursor trails behind
    outerX += (mouseX - outerX) * 0.1;
    outerY += (mouseY - outerY) * 0.1;
    cursorOuter.style.transform = `translate(${outerX}px, ${outerY}px)`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Add hover effects on links and buttons
document.querySelectorAll('.nav-links a, .social-icons a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOuter.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursorOuter.classList.remove('active');
    });
});
