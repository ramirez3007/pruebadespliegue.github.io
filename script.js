document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.card');
    const { clientX, clientY } = e;

    // Subtle tilt effect
    const x = (window.innerWidth / 2 - clientX) / 25;
    const y = (window.innerHeight / 2 - clientY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.card');
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
