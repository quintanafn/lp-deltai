document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Inicialização do carrossel de benefícios
    initBenefitsCarousel();
    
    // Função para inicializar o carrossel de benefícios
    function initBenefitsCarousel() {
        const track = document.querySelector('.carousel-track');
        const cards = Array.from(track.querySelectorAll('.benefit-card'));
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const dots = Array.from(document.querySelectorAll('.dot'));
        
        if (!track || !nextButton || !prevButton || cards.length === 0) return;
        
        let currentIndex = 0;
        let cardWidth = 0;
        let visibleCards = 3;
        
        // Ajusta o número de cards visíveis com base na largura da tela
        function updateVisibleCards() {
            const windowWidth = window.innerWidth;
            
            if (windowWidth < 768) {
                visibleCards = 1;
            } else if (windowWidth < 1024) {
                visibleCards = 2;
            } else {
                visibleCards = 3;
            }
            
            // Atualiza a largura dos cards
            cardWidth = track.clientWidth / visibleCards;
            
            // Atualiza a posição do carrossel
            updateCarouselPosition();
        }
        
        // Atualiza a posição do carrossel
        function updateCarouselPosition() {
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Atualiza os dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Navega para o próximo card
        function nextCard() {
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volta para o início
            }
            updateCarouselPosition();
        }
        
        // Navega para o card anterior
        function prevCard() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = cards.length - visibleCards; // Vai para o final
            }
            updateCarouselPosition();
        }
        
        // Adiciona event listeners aos botões
        nextButton.addEventListener('click', nextCard);
        prevButton.addEventListener('click', prevCard);
        
        // Adiciona event listeners aos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarouselPosition();
            });
        });
        
        // Inicializa o carrossel
        updateVisibleCards();
        
        // Atualiza o carrossel quando a janela é redimensionada
        window.addEventListener('resize', updateVisibleCards);
        
        // Auto-play do carrossel (opcional)
        let autoplayInterval = setInterval(nextCard, 5000);
        
        // Pausa o autoplay quando o mouse está sobre o carrossel
        track.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        // Retoma o autoplay quando o mouse sai do carrossel
        track.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextCard, 5000);
        });
    }
    
    // Efeito de scroll no header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = '70px';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.height = '80px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Menu mobile
    let menuOpen = false;
    
    mobileMenuToggle.addEventListener('click', () => {
        if (!menuOpen) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
    
    function openMobileMenu() {
        mainNav.style.display = 'block';
        mainNav.style.position = 'fixed';
        mainNav.style.top = '80px';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.height = 'calc(100vh - 80px)';
        mainNav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        mainNav.style.padding = '20px';
        mainNav.style.zIndex = '999';
        
        mainNav.querySelector('ul').style.flexDirection = 'column';
        mainNav.querySelector('ul').style.alignItems = 'center';
        mainNav.querySelector('ul').style.gap = '20px';
        
        document.body.style.overflow = 'hidden';
        
        // Animar toggle
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '0';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
        
        menuOpen = true;
    }
    
    function closeMobileMenu() {
        mainNav.style = '';
        mainNav.querySelector('ul').style = '';
        document.body.style.overflow = '';
        
        // Resetar toggle
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = '';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = '';
        
        menuOpen = false;
    }
    
    // Fechar menu ao clicar em links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                closeMobileMenu();
            }
        });
    });
    
    // Animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
