/*Loading
==========================*/
$(window).on("load", function () {
	"use strict";
	$(".spinner").fadeOut(function () {
		$(this).parent().fadeOut();
		$("body").css({ "overflow-y": "visible" });
	});
});
/* Theme
=============================*/
$('#theme-toggle').click(function () {
	$(this).toggleClass('switch');

});
document.addEventListener('DOMContentLoaded', () => {
	const themeToggleBtn = document.getElementById('theme-toggle');
	const body = document.body;
	themeToggleBtn.addEventListener('click', () => {
		if (body.classList.contains('light')) {
			body.classList.remove('light');
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
			body.classList.add('light');
		}
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
	$(".drop-link").click(function (e) {
		$(".drop-list").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	$(".drop-link-sec").click(function (e) {
		$(".drop-sec").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	$(".drop-link-thi").click(function (e) {
		$(".drop-thi").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	$(".drop-link-forth").click(function (e) {
		$(".drop-fort").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	$(".drop-link-fifth").click(function (e) {
		$(".drop-fif").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	$(".drop-link-sades").click(function (e) {
		$(".drop-sadess").slideUp(),
			$(this).next().is(":visible") || $(this).next().slideDown(),
			e.stopPropagation();
	});
	
	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	//  Selec 2
	if ($(".select").length > 0) {
		$(".select").select2();
	}
	//  Tag
	if ($(".tags").length > 0) {
		$(".tags").select2();
	}
	// Toggle Button
	$(".toggle-btn").click(function () {
		$("aside").toggleClass("move");
		$(".dashboard_content").toggleClass('move');
		$(".dash_header").toggleClass('move');
	});
	// Date Picker
	if ($(".flatpickr-input").length > 0) {
		$(".flatpickr-input").flatpickr({
			enableTime: false,
			dateFormat: "Y-m-d",
		});
	}
	// Timer
	if ($(".timer_count").length > 0) {
		$(".timer_count").countTo();
	}
	// Data Table
	if ($(".datatable").length > 0) {
		$(".datatable").DataTable({
			fixedHeader: true,
			dom: "Bfrtip",
			buttons: [
				{
					extend: "print",
					text: '<i class="fa fa-print"></i> طباعة',
					titleAttr: "print",
				},
				{
					extend: "excelHtml5",
					text: '<i class="far fa-file-excel"></i> أكسل',
					titleAttr: "Excel",
				},
				{
					extend: "pdfHtml5",
					text: '<i class="far fa-file-pdf"></i> PDF',
					titleAttr: "PDF",
				},
			],
		});
	}
	$('#damg_div').hide(); // Initially hide the damg_div

	$('select[name="student_type"]').change(function () {
		if ($(this).val() === 'damg') {
			$('#damg_div').show();
		} else {
			$('#damg_div').hide();
		}
	});


	
});
document.addEventListener("keydown", function(event) {
  if (event.key === "F11") {
	window.location.href = "add-edit-parents-payment.html";
  }
});