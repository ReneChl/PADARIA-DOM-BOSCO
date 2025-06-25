window.revelar = ScrollReveal({reset:true});

    revelar.reveal('.efeito-img-topo', { // estou chamando a classe  a qual eu quero atribuir o efeito do scrollReveal
        duration: 2000,
        distance: '70px'
    });

    revelar.reveal('.clientes-efeito', {
        duration: 2000,
        distance: '120px',
        origin: 'right'
    });

    revelar.reveal('.principais-productos', {
        duration: 2000,
        distance: '120px',
        origin: 'left'
    });

    revelar.reveal('.sobre-nos', {
        duration: 2000,
        distance: '120px',
        origin: 'right'
    });

    revelar.reveal('.contatos', {
        duration: 2000,
        distance: '120px',
        origin: 'top'
    });






// hamburgerButton
// Aqui adicionamos um evento de escutar o click dou mause sobre o ícone de hamburguer.
hamburgerButton.addEventListener("click",function() {
    mobileMenu.classList.add("flex");
    //criamos uma função que a ouvir o click dou mause, ele adiciona uma class (flex), que está fazendo nossa caixa (div) visível, ou seja, ficará totalmente visível para todos
});
//criamos uma função que a ouvir o click do mause, ele REMOVE uma class, que está fazendo nossa caixa (div) desaparecer, ou seja, ficara invesível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});