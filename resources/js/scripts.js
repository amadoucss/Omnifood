$(document).ready(function(){

	$('.js--section-features').waypoint(function(direction){
		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	}, {
  offset: '60px;'
});

$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.2,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});

$('.stroll-to-plan').click(function(){
	$('html, body').animate({
    scrollTop: $(".plans").offset().top
 }, 2000);
});

$('.stroll-to-start').click(function(){
	$('html, body').animate({
    scrollTop: $("#features").offset().top
 }, 1000);
});


wow = new WOW({
    animateClass: 'animated',
    offset: 300
})
  wow.init();


  	$('.js-nav-icon').click(function(){
  		var nav = $('.nav');
   	var icon = $('js-nav-icon i');
  	nav.slideToggle(200);
  	$('.js-nav-icon i').toggleClass("ion-navicon-round ion-close-round");

  });

});