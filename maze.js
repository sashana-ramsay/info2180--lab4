function eventHandler() {
	var boundary1 = document.getElementById("boundary1");
	var otherBoundaries = document.querySelectorAll(".boundary");

	boundary1.onmouseover=function(){
		boundary1.classList.add("youlose");
	}

	for (var i = 0; i < otherBoundaries.length-1; i++) {
		otherBoundaries[i].onmouseover = function(){
			for (var i = 0; i< otherBoundaries.length-1; i++) {
			otherBoundaries[i].classList.add("youlose");
			}
		}
	}

}
  
window.onload=function(){
	eventHandler();
}