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

btn.onclick = function () {
	modal.style.display = "block";
	document.body.style.overflow = 'hidden';
}
span.onclick = function () {
	modal.style.display = "none";
	document.body.style.overflow = 'auto';	
}

window.onclick = function () {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflow = 'auto';
	}
}