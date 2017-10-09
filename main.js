const app = new Vue({
	el: '#app',
	data: {
		test: "Hello World!"
	}
});


$('document').ready(function () {
	$('.navbar-burger').click(function() {
		$('.navbar-menu').toggleClass('is-active');
	});

	$('#button-scroll-top').hover(function () {
		$('#button-scroll-top').toggleClass('is-info');
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
	});


});
