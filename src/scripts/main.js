$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
			items:1,
			dots:false
        },
        768:{
			items:1,
			dots:false
        },
        992:{
			nav:false,
            items:1
        }
    }
})
$(function(){

	onscroll()

})

function onscroll(){

	$(window).scroll(function () {
		let height = "1";
		let scroll = $(window).scrollTop();
		if (scroll > height) {
			$("header").addClass("active");
		} else{
			$("header").removeClass("active");
		}
	});
}
