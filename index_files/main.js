/*=========================================
	#Preload Spinner
=========================================*/
	$(window).on('load', function () {
		setTimeout(removeLoader, 500);
	});

	function removeLoader() {
		$(".preloadSpinner").fadeOut(300, function () {
			$(".preloadSpinner").remove();
		});
	}

/*=========================================
	#Back To Top
=========================================*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.backtotop').fadeIn(100);
		} else {
			$('.backtotop').fadeOut(100);
		}
	});
	$('.backtotop').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 100);
		return false;
	});

$(document).ready(function ($) {
	/*=========================================
		#Footer Copyrights Year
	=========================================*/
	// Jquery Code below for footer copyright Year
	$('#copyright_year').html(new Date().getFullYear());

	/*=========================================
		#Countdown
	=========================================*/
	$('#counter').countdown('2023/12/31', function (event) {
		$('#day').html(event.strftime('%D'));
		$('#hour').html(event.strftime('%H'));
		$('#minute').html(event.strftime('%M'));
		$('#second').html(event.strftime('%S'));
	});

	/*=========================================
	#FAQ
	=========================================*/
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if ($(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}
		e.preventDefault();
	});
	/* ================================================== 
	 	#Order Form 
	================================================== */
	if ($("#contact_form").length) {
		$("#contact_form").validate({
			errorPlacement: function (error, element) {
				return true;
			},
			rules: {
				first_name: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					number: true,
					minlength: 10
				},
				billing_address: {
					required: true,
				},
				city: {
					required: true,
				},
				state: {
					required: true,
				},
				zip: {
					required: true,
				},
				country: {
					required: true,
				}
			},
			submitHandler: function (form) {
				var formData = $('#contact_form').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/order-form.php',
					dataType: "json",
					data: formData,
					beforeSend: function() {
						// Setting button isable after single click
						$('.pay-btn').addClass('loading').attr("disabled", "disabled");
					},
					success: function (data) {
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#contact_form").trigger("reset");
						} else {
							$('.form-status').addClass('alert alert-danger');
							$('.form-status').text('Error Occurred, Please Try Again');
							$('.form-status').slideDown().delay(3000).slideUp();
						}
					},
					error: function (xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}

	/* ================================================== 
	 	# Monthly Order Form 
	================================================== */
	if ($("#contact_form2").length) {
		$("#contact_form2").validate({
			errorPlacement: function (error, element) {
				return true;
			},
			rules: {
				first_name: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					number: true,
					minlength: 10
				},
				billing_address: {
					required: true,
				},
				city: {
					required: true,
				},
				state: {
					required: true,
				},
				zip: {
					required: true,
				},
				country: {
					required: true,
				}
			},
			submitHandler: function (form) {
				var formData = $('#contact_form2').serialize();
				$.ajax({
					type: 'POST',
					url: 'assets/php/monthly-order-form.php',
					dataType: "json",
					data: formData,
					beforeSend: function() {
						// Setting button isable after single click
						$('.pay-btn').addClass('loading').attr("disabled", "disabled");
					},
					success: function (data) {
						if (data.success) {
							$('.form-status').addClass('alert alert-success');
							$('.form-status').text('Your Message Has been Sent Successfully');
							form.submit();
							$('.form-status').slideDown().delay(3000).slideUp();
							$("#contact_form2").trigger("reset");
						} else {
							$('.form-status').addClass('alert alert-danger');
							$('.form-status').text('Error Occurred, Please Try Again');
							$('.form-status').slideDown().delay(3000).slideUp();
						}
					},
					error: function (xhr, status, error) {
						$('.form-status').addClass('alert alert-danger');
						$('.form-status').text('Something Went Wrong');
						$('.form-status').slideDown().delay(3000).slideUp();
					}
				});
			}
		});
	}


});