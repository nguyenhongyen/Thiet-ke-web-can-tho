$(function(){
	AOS.init({
		once: true
	});

	 let typed = $('#typed');
	if(typed === 0) return false;

	var Type = new Typed('#typed', {
		stringsElement:'#type-string ' ,
		typeSpeed :40,
		fadeOut: true,
		fadeOutClass: 'custom-fadeout',
		fadeOutDelay: 2000,
		loop : true,
	});

	const handleHeaderSlider = function () {
		new Swiper('#swiper-image .swiper', {
			spaceBetween: 10,
			centeredSlides: true,
			autoplay: {
				delay: 2500,
			},
		});
	}
	const handleHeaderSliderTwo = function () {
		new Swiper('#swiper-image-two .swiper', {
			spaceBetween: 10,
			centeredSlides: true,
			autoplay: {
				delay: 3500,
			},
		});
	}

	const itemCollapseCourse = $('#accordion-question .accordion-button[aria-expanded]');
	itemCollapseCourse.on('click', function () {
		if ($(this).hasClass('show')) return false;
		$('#accordion-question .accordion-collapse.show').each((_, element) => {
			new bootstrap.Collapse(element, {
				show: false
			});
		});
	});

	const handleSectionService = function () {
		if ($('#section-service').length) {
			let elmDescription = $('#section-service');
			let scrollHeight =  elmDescription.find('.content').scrollHeight;
			elmDescription.css('--height', scrollHeight + 'px');

			if (scrollHeight <= elmDescription.innerHeight() + 4) {
				$('#expand-button').remove();
			} else {
				$('#expand-button').click(function () {
					if (elmDescription.hasClass('is-show')) {
						elmDescription.removeClass('is-show');
						$(this).html('Xem thêm <i class="fal fa-angle-down"></i>');
					} else {
						elmDescription.addClass('is-show');
						$(this).html('Thu gọn <i class="fal fa-angle-up"></i>');
					}
				});
			}
		}
	}

	handleHeaderSlider();
	handleHeaderSliderTwo();
	handleSectionService();
});



