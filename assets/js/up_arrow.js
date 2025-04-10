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
            mybutton.style.visibility = "visible"; 
        } else {
            mybutton.style.visibility = "hidden";
        }
    }

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	window.topFunction = topFunction;

	console.log("JS loaded");
});
 