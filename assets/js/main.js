/*Loading
==========================*/
$(window).on("load", function () {
	"use strict";
	$(".spinner").fadeOut(function () {
		$(this).parent().fadeOut();
		$("body").css({ "overflow-y": "visible" });
	});
});

document.getElementById('directionSwitch').addEventListener('click', function () {
	var docDirection = document.documentElement.dir;
	var isRTL = (docDirection === 'rtl');
	document.documentElement.dir = isRTL ? 'ltr' : 'rtl';

});
/* Other
========================*/
$(document).ready(function () {
	"use strict";
	if ($(".select").length > 0) {
		$(".select").select2();
	}
	// Toggle Button
	$(".toggle-btn").click(function () {
		$("aside").toggleClass("move");
		$(".dashboard_content").toggleClass('move');
		$(".dash_header").toggleClass('move');
	});
});