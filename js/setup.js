$('.owl-carousel').owlCarousel({
    loop:true, /* false- desativa a "rotação", chega no fim e para*/
    margin:5,
    nav:true,
    responsive:{ /*Responsividade da página*/
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})