$(document).ready(function($){
	$(".select2").select2({width: '100%',});
	var swiper = new Swiper('.main_slider', {
			  spaceBetween: 0,
			  effect: 'fade',
			  loop: true,
			  autoplay: {
				 delay: 400000,
				},
			  speed: 300,
				pagination: {
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					},
					el: '.swiper-pagination',
				},
		});
		var swiper2 = new Swiper('.clients_slider', {
			effect: '',
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				 delay: 4000,
				},
			speed: 1000,
			pagination: {
				el: '.clients_pagination',
				clickable: true,
				type: 'bullets',
			  },
			});

			$(".nav_link").click(function(){
				$(".main_dropdown").toggleClass("open");
			});

			$(".contacts_block_link").click(function(){

				let button = $(this);

				if(button.hasClass("contacts_block_link-close"))
					button
						.removeClass("contacts_block_link-close")
						.closest(".contacts_block").removeClass("open");
				else 	
					button
						.addClass("contacts_block_link-close")
						.closest(".contacts_block").addClass("open");
			});
			$(window).scroll(function(){
				if($(this).scrollTop() > 0) {
					$('.header_wrapper').addClass('bg');
				} else {
					$('.header_wrapper').removeClass('bg');
				}
			});
			$(".masked").mask("+7 (999) 999-99-99");
			$(".region_link").click(function(){
				$('.region_dropdown').addClass("open");
			});
			$(".region_dropdown-close").click(function(){
				$('.region_dropdown').removeClass("open");
			});
			$(".region_dropdown span").click(function(){
				let cityName = $(this).attr('value');

				$(this).addClass('selected').siblings().removeClass('selected');
				$('.region_link span').html(cityName);
				$('.region_dropdown').removeClass("open");
			});


/*
		$(".catalog_link").click(function(){
			$(this).toggleClass("catalog_link_close");
			$(".main_products").toggleClass("open");
		});

		$('.tabs').on('click', 'a:not(.active)', function() {
			$(this)
			  .addClass('active').removeClass('btn2').siblings().removeClass('active').addClass('btn2')
			  .closest('.subcategories').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
		});
		
		$('a.to_top').click(function() {
			$('body,html').animate({scrollTop:0});
		});
*/	
});	
