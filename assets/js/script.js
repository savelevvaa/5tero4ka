//menu.onclock = function myFuntion() {
//	var x = document.getElementById("myTopnav");
//
//	if(x.className === "topnav") {
//		x.className += "responsive";
//	} else {
//		x.className = "topnav";
//	}
//}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var closeButton = document.getElementById("closeButton");

btn.onclick = function () {
	modal.style.display = "block";
	document.body.style.overflow = 'hidden';
}

closeButton.onclick = function () {
	modal.style.display = "none";
	document.body.style.overflow = 'auto';
	location.replace('index.html');
}
/*

span.onclick = function () {
	modal.style.display = "none";
	document.body.style.overflow = 'auto';
	location.replace('index.html');

}
*/

window.onclick = function () {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflow = 'auto';
	}
}