//Disable Scrolling 

function startSceneAnimations() {

	var lastPosition = -100;

$('#start-stove-img').css({
	    "transform":"translateY(0%)"
	  	}); 


$('#headline-texts').css({
	    "transform":"translateY(-600%)",
	    "opacity" : 1
	  	}); 

$('body').css('overflow', 'scroll');




$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.4;			//Scroll time
	var scrollDistance = 325;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
	
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});

//$("html").niceScroll();
//Jquery Animations
}


$(window).load(function(){


$(".loader").fadeOut("fast");

		$('.img-slider').bxSlider({
  auto: true,
hideControlOnEnd: true,
controls : false
});


});



 $(window).ready(function(){

	$('body').addClass("fully-loaded")

 	$('#scene2').waypoint({
  handler: function(direction) {
   
   $('#s2SideText').css({
	    "transform":"translate(0%,0%)",
	    "opacity" : 1
	  	}); 
	},

	offset: '18%'


});





	 $(this).one('mousewheel',function(event){
	 	window.scrollTo(0,0);
	 	  $('#start_cover_phone').css({
	    "transform":"translate(0%, 0%) scale(0.08) rotate(90deg)"
	  	}).delay(2000).queue(function (next) { 
  			  $(this).css({
	    "transform":"translate(0%, 5%) scale(0.08) rotate(90deg)",
		
	  	}); 

  		startSceneAnimations();
  			  
    //next(); 
  });

	  //	startSceneAnimations();
	});

	

});




 //Waypoints Setup
