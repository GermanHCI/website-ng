document.addEventListener("DOMContentLoaded", function () {
	let mybutton = document.getElementById("topBtn");

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// Make topFunction globally accessible
	window.topFunction = topFunction;

	console.log("JS loaded");
});
