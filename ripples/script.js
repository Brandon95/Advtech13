//rippeling click activity
//languages offer other useful events that onclick
document.onmousemove=
function(evt){
		makeOneCircle(evt);
}

function makeOneCircle(evt){
	evt = (evt || event)//makes all browsers understand
	//make a new circle
	var newc = document.createElement("div");
	newc.style.height="50px";
	newc.style.width="50px";
	newc.style.opacity="1";
	newc.style.borderRadius="75px";
	newc.style.border="solid #009 2px";
	newc.style.transition="width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
	newc.style.transitionTransition="width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
	newc.style.position="absolute";
	//set location of the new div to where the mouse is
	newc.style.left = evt.clientX+"px";
	newc.style.top = evt.clientY+"px";
	document.body.appendChild(newc);
	//setTimeOut() causes a function to happen after a number of milliseconds
	setTimeout( function(){
			newc.style.height="150px";
			newc.style.width="150px";
			newc.style.opacity="0"; 
		} ,0);	
}