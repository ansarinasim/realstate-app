$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
		{
            breakpoint: 475,
            settings: {
                slidesToShow: 2
            }
        },
		{
			breakpoint: 375,
            settings: {
                slidesToShow: 1
            }
		}]
    });
});