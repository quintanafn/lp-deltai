// JavaScript para a funcionalidade de acordeão do glossário
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Verifica se este item já está ativo
            const isActive = item.classList.contains('active');
            
            // Fecha todos os itens
            accordionItems.forEach(accordionItem => {
                accordionItem.classList.remove('active');
            });
            
            // Se o item clicado não estava ativo, abre-o
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Abre o primeiro item por padrão
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
});
