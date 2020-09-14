jQuery(document).ready(function ($) {
	"use strict";

	//Contact
	$('.intro_form').submit(function () {
		var f = $(this).find('.form-group'),
			ferror = false,
			emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

		f.children('input').each(function () { // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if (rule !== undefined) {
				var ierror = false; // error flag for current input
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}

				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;

					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;

					case 'email':
						if (!emailExp.test(i.val())) {
							ferror = ierror = true;
						}
						break;

					case 'checked':
						if (!i.is(':checked')) {
							ferror = ierror = true;
						}
						break;

					case 'regexp':
						exp = new RegExp(exp);
						if (!exp.test(i.val())) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show();
			}
		});
		// f.children('textarea').each(function () { // run all inputs

		// 	var i = $(this); // current input
		// 	var rule = i.attr('data-rule');

		// 	if (rule !== undefined) {
		// 		var ierror = false; // error flag for current input
		// 		var pos = rule.indexOf(':', 0);
		// 		if (pos >= 0) {
		// 			var exp = rule.substr(pos + 1, rule.length);
		// 			rule = rule.substr(0, pos);
		// 		} else {
		// 			rule = rule.substr(pos + 1, rule.length);
		// 		}

		// 		switch (rule) {
		// 			case 'required':
		// 				if (i.val() === '') {
		// 					ferror = ierror = true;
		// 				}
		// 				break;

		// 			case 'minlen':
		// 				if (i.val().length < parseInt(exp)) {
		// 					ferror = ierror = true;
		// 				}
		// 				break;
		// 		}
		// 		i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
		// 	}
		// });
		if (ferror) return false;
		else var str = $(this).serialize();
		var action = $(this).attr('action');
		if (!action) {
			action = '../mail.php';
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$('.intro_form-thx-h3').addClass('intro_form-thx-h3-active');
				setTimeout(function () {
					// Done Functions
					$('.intro_form-thx-h3').removeClass('intro_form-thx-h3-active');
					th.trigger("reset");
				}, 1500);
			});
			return false;
		}
		// $.ajax({
		// 	type: "POST",
		// 	url: action,
		// 	data: str,
		// 	success: function (msg) {
		// 		// alert(msg);
		// 		if (msg == 'OK') {
		// 			$("#sendmessage").addClass("show");
		// 			$("#errormessage").removeClass("show");
		// 			$('.contactForm').find("input, textarea").val("");
		// 		} else {
		// 			$("#sendmessage").removeClass("show");
		// 			$("#errormessage").addClass("show");
		// 			$('#errormessage').html(msg);
		// 		}
		// 	}
		// });
		// var th = $(this);
		// $.ajax({
		// 	type: "POST",
		// 	url: "mail.php", //Change
		// 	data: th.serialize()
		// }).done(function () {
		// 	$('.intro_form-thx-h3').addClass('intro_form-thx-h3-active');
		// 	setTimeout(function () {
		// 		// Done Functions
		// 		$('.intro_form-thx-h3').removeClass('intro_form-thx-h3-active');
		// 		th.trigger("reset");
		// 	}, 1500);
		// });
		// return false;
	});
	$('.form').submit(function () {
		var f = $(this).find('.form-group'),
			ferror = false,
			emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

		f.children('input').each(function () { // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if (rule !== undefined) {
				var ierror = false; // error flag for current input
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}

				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;

					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;

					case 'email':
						if (!emailExp.test(i.val())) {
							ferror = ierror = true;
						}
						break;

					case 'checked':
						if (!i.is(':checked')) {
							ferror = ierror = true;
						}
						break;

					case 'regexp':
						exp = new RegExp(exp);
						if (!exp.test(i.val())) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show();
			}
		});
		// f.children('textarea').each(function () { // run all inputs

		// 	var i = $(this); // current input
		// 	var rule = i.attr('data-rule');

		// 	if (rule !== undefined) {
		// 		var ierror = false; // error flag for current input
		// 		var pos = rule.indexOf(':', 0);
		// 		if (pos >= 0) {
		// 			var exp = rule.substr(pos + 1, rule.length);
		// 			rule = rule.substr(0, pos);
		// 		} else {
		// 			rule = rule.substr(pos + 1, rule.length);
		// 		}

		// 		switch (rule) {
		// 			case 'required':
		// 				if (i.val() === '') {
		// 					ferror = ierror = true;
		// 				}
		// 				break;

		// 			case 'minlen':
		// 				if (i.val().length < parseInt(exp)) {
		// 					ferror = ierror = true;
		// 				}
		// 				break;
		// 		}
		// 		i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
		// 	}
		// });
		if (ferror) return false;
		else var str = $(this).serialize();
		var action = $(this).attr('action');
		if (!action) {
			action = '../mail.php';
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$('.form_thx').removeClass('form_thx-hide');
				$('.form_thx').addClass('form_thx-active');
				setTimeout(function () {
					// Done Functions
					$('.form_thx').addClass('form_thx-hide');
					$('.form_thx').removeClass('form_thx-active');
					th.trigger("reset");
				}, 1500);
			});
			return false;
		}
		// $.ajax({
		// 	type: "POST",
		// 	url: action,
		// 	data: str,
		// 	success: function (msg) {
		// 		// alert(msg);
		// 		if (msg == 'OK') {
		// 			$("#sendmessage").addClass("show");
		// 			$("#errormessage").removeClass("show");
		// 			$('.contactForm').find("input, textarea").val("");
		// 		} else {
		// 			$("#sendmessage").removeClass("show");
		// 			$("#errormessage").addClass("show");
		// 			$('#errormessage').html(msg);
		// 		}
		// 	}
		// });

	});
});



