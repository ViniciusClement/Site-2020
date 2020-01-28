
	var $target = $('.header'),
		animationClass = 'header-anime';

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		console.log(documentTop);
		$target.each(function(){
			// var itemTop = $(this).offset().top;

			if(documentTop > 75) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();
	