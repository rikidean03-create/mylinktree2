document.addEventListener('DOMContentLoaded', () => {
    const portfolioCard = document.getElementById('portfolio');

    // Portfolio interaction logic
    portfolioCard.addEventListener('click', (e) => {
        e.preventDefault();
        portfolioCard.classList.toggle('active');
        portfolioCard.classList.add('shake');
        setTimeout(() => {
            portfolioCard.classList.remove('shake');
        }, 500);
    });

    // Suble floating background movement
    const background = document.querySelector('.background-overlay');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        background.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });

    console.log('%c RIKII.DEA Linktree Loaded ', 'background: #8cc9ff; color: #fff; font-size: 14px; font-weight: bold; border-radius: 10px; padding: 5px 10px;');
});


