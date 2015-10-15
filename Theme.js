var changeStyle = function(text,background,textBackground) {
	document.getElementsByClassName("Name")[0].style.backgroundColor = textBackground;
	document.getElementsByTagName("body")[0].style.backgroundColor = background;
	document.getElementsByClassName("Name")[0].style.color = text;
}
