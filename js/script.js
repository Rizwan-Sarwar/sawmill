$('.client-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            dots: false,
        },
        800:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            dots: false,
        },
        567:{
            dots: false,
        }
    }
})