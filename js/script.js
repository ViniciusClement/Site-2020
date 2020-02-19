var menu_bar = document.querySelector(".container .menu-bar");

var nav = document.querySelector(".container .nav");

var back = document.querySelector(" .menu-background");

menu_bar.onclick = function () {
	menu_bar.classList.toggle("transformMenu");
	nav.classList.toggle("transformMenu");
	back.classList.toggle("transformBack");
}
