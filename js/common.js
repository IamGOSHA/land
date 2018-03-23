
jQuery(document).ready(function($) {
		$('.content-filter input').click(function(e){
			console.log(e.target.id);
		});
		$('.ajax').click(function(e){
			e.preventDefault();

			var data = $(this).serialize();
			$.ajax({
				type: "POST",
				url: "../base.php",
				data: data,
				success: function(result){
					alert(result);
				 $('.container-works').append(result);
				}

			});
			

		});
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
		  $( ".min" ).val( ui.values[ 0 ] );
		  $( ".max" ).val(  ui.values[ 1 ] );
		   
		  }
		});
		$( ".min" ).val($('#slider-range').slider('values',0));
		$( ".max" ).val($('#slider-range').slider('values',1));




		$('.content').click(function(){
		$(this).toggleClass('showin');
		$(this).next('.list').toggleClass('showin');
		});

		$(".menu-button").click(function(e){
			 $('.menu').toggleClass('show');
			
		});

		$('.carousel').slick({
			appendArrows: $(''),
			prevArrow: '<button id="prev" type="button" class="btn slick-prev"> Туда</button>',
			nextArrow: '<button id="next" type="button" class="btn slick-next">Сюда </button>',
			infinite: true,
			autoplay: true,
			speed: 700,
			arrows: true,
			speed: 500,
			  responsive: [{

				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
				  }

				}, {

				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
				  }

				}, {

				  breakpoint: 300,
				  settings: "unslick" // destroys slick

				}]
			});
	$('a').click(function(e){

		let target = $(this).attr('href');
		$('html,body').animate({scrollTop: $(target).offset().top},1000)
	});
	// Custom JS
	let offset = $('.top-line').offset();
	$(window).scroll(function(){
		
		if($(window).scrollTop() > offset.top){
		$('.top-line').addClass('fixed-menu');
	}else{
		$('.top-line').removeClass('fixed-menu');
	}
	});	
	$('#preloader').fadeOut('slow',function(e){$(this).remove();});	

});
