$(document).ready(function() {

    // Фіксований sidebar. Argument: Class_Name (string). Default: 'sticky'
    postFixedSidebar(/*'sticky'*/);

});

function postFixedSidebar(className) {
	/*
		styles for parent block:

		.sticky-wrapper {
		    width: inherit;
		    left: auto;
		    right: auto;
			transition: all 0.2s linear;
		}

		.sticky-wrapper.fixed {
			position: fixed;
		}
	*/

	var className = className || 'sticky';
	var $sticky = $('.' + className).wrap('<div class="' + className +'-wrapper"></div>').parent();

	$(window).scroll(fixedScrolling);

	function isScreen(element) {
		var win = $(window),
		    winTop = win.scrollTop(),
		    stickyTop = element[0].getBoundingClientRect().top + pageYOffset;
		    // winHeight = win.height(),
		    // stickyBox = element.height() + stickyTop;

		// console.log(element);
		// console.log('stickyTop, winTop: ' + stickyTop + ' <= ' + winTop);
		// console.log('winTop + winHeight, stickyBox: ' + winTop + ' + ' + winHeight + ' <= ' + stickyBox);
		// console.log((winTop + winHeight) + ' <= ' + stickyBox);
		// console.log((stickyTop <= winTop && winTop + winHeight <= stickyBox));

		return (stickyTop <= winTop);
	}

	function fixedScrolling() {
		var scroll = $(window).scrollTop(),
		    parent = $sticky.parent();
		    // stickyTop = parent[0].getBoundingClientRect().top + pageYOffset;

		if (isScreen(parent)) {
		  $sticky.addClass('fixed');
		} else {		  
		  $sticky.removeClass('fixed');
		} 
	}
}