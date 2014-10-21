//rippeling click activity
//languages offer other useful events that onclick
onload=init;
function init(){
		makeOneMover();
}

function makeOneMover(){
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
	newc.style.left = "50px";
	newc.style.top = "50px";
	document.body.appendChild(newc);
	//setInterval() causes a function to repeatedly happen every so many milliseconds
	setInterval( function() {moveABit() },1000/30);	
}
/**
 *move the div a little. When repeated, seems like anim
 */
 function moveABit(){
 	var newc = document.getElementsByTagName("div")[0];
 	console.log(parseInt(newc.style.top));
	newc.style.top= (parseInt(newc.style.top) + 5)+'px';
	//newc.style.left="150px";
	//newc.style.opacity="0.5";
		}//end