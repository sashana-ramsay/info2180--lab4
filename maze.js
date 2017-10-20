function eventHandler() {
	var boundary1 = document.getElementById("boundary1");
	var otherBoundaries = document.querySelectorAll(".boundary");
	var end = document.getElementById("end");

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

	end.onmouseover=function(){
		if (boundary1.getAttribute("class")=="boundary youlose") {
			alert("YOU LOSE!");
		} else {
			alert("YOU WIN!");
		}
	}
}
  
window.onload=function(){
	eventHandler();
}