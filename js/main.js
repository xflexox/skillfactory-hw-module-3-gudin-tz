function social_ph_onmouseover(id) {
	id = 'social-photo' + id.substring(id.length-1);
	var el = document.getElementById(id);
	el.style.visibility = 'visible';
}
function social_ph__onmouseout(id) {
	id = 'social-photo' + id.substring(id.length-1);
	var el = document.getElementById(id);
	el.style.visibility = 'hidden';
}
function onclick_button() {
	location.href='index.html#'
}