"use strict";

// navbarDropdown
if (window.innerWidth < 992) {
	const dropdownToggles = document.querySelectorAll(
		".navigation .dropdown-toggle"
	);
	dropdownToggles.forEach((toggle) => {
		toggle.addEventListener("click", function () {
			const dropdownMenu = this.nextElementSibling;
			dropdownMenu.style.height =
				dropdownMenu.style.height === "0px" ? "auto" : "0px";
		});
	});
}

// scroll to top button
window.addEventListener("scroll", function () {
	const backtop = document.querySelector(".backtop");
	if (window.pageYOffset > 70) {
		backtop.classList.add("reveal");
	} else {
		backtop.classList.remove("reveal");
	}
});

// scroll-to-top
const scrollTopTo = document.querySelector(".scroll-top-to");
scrollTopTo.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// portfolio-single-slider, clients-logo, testimonial-wrap, and testimonial-wrap-2 sliders (Using Vanilla JS)
const slickSliders = document.querySelectorAll(".slick");
slickSliders.forEach((slider) => {
	const settings = {
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	if (slider.classList.contains("clients-logo")) {
		settings.slidesToShow = 6;
		settings.slidesToScroll = 6;
		settings.responsive = [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		];
	} else if (slider.classList.contains("testimonial-wrap")) {
		settings.slidesToShow = 1;
		settings.slidesToScroll = 1;
		settings.vertical = true;
		settings.verticalSwiping = true;
		settings.responsive = [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		];
	} else if (slider.classList.contains("testimonial-wrap-2")) {
		settings.slidesToShow = 2;
		settings.slidesToScroll = 2;
		settings.responsive = [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		];
	}
	new Slider(slider, settings);
});

// counter
function counter() {
	const counters = document.querySelectorAll(".counter");
	const windowTop = window.pageYOffset + window.innerHeight;
	counters.forEach((counter) => {
		if (windowTop > counter.offsetTop) {
			const countTo = parseInt(counter.getAttribute("data-count"), 10);
			let countNum = 0;
			const counterInterval = setInterval(() => {
				countNum++;
				counter.textContent = Math.floor(countNum);
				if (countNum >= countTo) {
					clearInterval(counterInterval);
				}
			}, 500 / countTo);
		}
	});
}
window.addEventListener("scroll", counter);

// Shuffle js filter and masonry
const shuffleWrapper = document.querySelector(".shuffle-wrapper");
if (shuffleWrapper) {
	const Shuffle = window.Shuffle;
	const inputFilters = document.querySelectorAll(
		'input[name="shuffle-filter"]'
	);
	const myShuffle = new Shuffle(shuffleWrapper, {
		itemSelector: ".shuffle-item",
		buffer: 1,
	});

	inputFilters.forEach((input) => {
		input.addEventListener("change", function (evt) {
			if (evt.currentTarget.checked) {
				myShuffle.filter(evt.currentTarget.value);
			}
		});
	});
}
