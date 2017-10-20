function eventHandler() {
	var boundary1 = document.getElementById("boundary1");

	boundary1.onmouseover=function(){
		boundary1.classList.add("youlose");
	}
}
  
window.onload=function(){
	eventHandler();
}