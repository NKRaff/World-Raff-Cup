/* Carousol - Start */
const nextIcon = '<img src="../content/images/icons/right-arrow.svg" alt:"right">';
const prevIcon = '<img src="../content/images/icons/left-arrow.svg" alt:"left">';
$('.news-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.players-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    margin:10,
    nav:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
/* Carousol - End */
