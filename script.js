document.addEventListener('DOMContentLoaded', () => {
    // Chatbot Toggle
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatbotPopup = document.getElementById('chatbot-popup');
    const closeChat = document.getElementById('close-chat');

    chatbotTrigger.addEventListener('click', () => {
        chatbotPopup.classList.add('active');
    });

    closeChat.addEventListener('click', () => {
        chatbotPopup.classList.remove('active');
    });

    // Chatbot Input simulation
    const chatInput = document.querySelector('.chat-input-area input');
    const sendBtn = document.querySelector('.send-btn');
    const chatChips = document.querySelectorAll('.chat-chip');

    const triggerMessage = () => {
        if(chatInput.value.trim() !== '') {
            chatInput.value = '';
            // Basic simulation
            sendBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i>';
            setTimeout(() => {
                sendBtn.innerHTML = '<i class="ri-send-plane-fill"></i>';
            }, 1000);
        }
    };

    sendBtn.addEventListener('click', triggerMessage);
    chatInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') triggerMessage();
    });

    chatChips.forEach(chip => {
        chip.addEventListener('click', () => {
            chatInput.value = chip.innerText;
            triggerMessage();
        });
    });

    // Service cards hover/active logic
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('active-card'));
            card.classList.add('active-card');
        });
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animating once to keep the element visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});
