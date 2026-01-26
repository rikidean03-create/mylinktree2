document.addEventListener('DOMContentLoaded', () => {
    const portfolioCard = document.getElementById('portfolio');

    // Add logic for portfolio card click if needed
    // Since it's "COMING SOON", we might want to prevent default behavior
    // and show a nice alert or just keep the CSS hover effect.

    portfolioCard.addEventListener('click', (e) => {
        // Prevent any accidental navigation
        e.preventDefault();

        // Toggle active state to keep the "IN ARRIVO" overlay visible
        portfolioCard.classList.toggle('active');

        // Optional: Shake effect or specific notification
        portfolioCard.classList.add('shake');
        setTimeout(() => {
            portfolioCard.classList.remove('shake');
        }, 500);
    });

    // Add subtle reveal animation for the background on mouse move
    const background = document.querySelector('.background-overlay');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Influence the background position slightly
        background.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    });

    // Log a welcoming message
    console.log('%c Riccardo De Angelis | Linktree Loaded ', 'background: #222; color: #bada55; font-size: 14px');
});

// CSS for the shake effect added dynamically or already in CSS? 
// Let's add it via JS for simplicity if not in CSS.
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateY(-5px) translateX(0); }
        25% { transform: translateY(-5px) translateX(-5px); }
        75% { transform: translateY(-5px) translateX(5px); }
    }
    .shake {
        animation: shake 0.3s ease-in-out infinite;
    }
`;
document.head.appendChild(style);
