//follow mouse activity
//languages offer other useful events that onclick

//store how far it should move to get partway to the mouse
	var dis_per_frame = 0;
	//make a counter for how many times it has done moveABit so we can stop it
	var timer_counter=0;
	//set up a name for our move timer so it can clear one function in another
	var movetimer;

onload=init;
function init(){
		makeOneMover();//puts a single circle on the screen
		//when user clicks anywhere, start moving toward that point
		document.onclick = function(evt){
			causeTrip(evt);

		}
}
/**
* start circle moving toward point where mouse is
*
*@param evt The mouse event (gives us mouse coordanates)
*/
function causeTrip(evt){
	evt = (evt || event); //for certain browsers
	// var to store the high/low position of the mouse
	var destination_y = evt.clientY;
	//store the overall distance to get circle where mouse is
	var y_distance = destination_y - parseInt(document.getElementsByTagName("div")[0].style.top)
	//store how far it should move to get partway to the mouse
	dist_per_frame = y_distance/30;
	//stop the timer & reset the counter
	clearInterval(movetimer);
	timer_counter=0;
	//setInterval() causes a function to repeatedly happen every so many milliseconds
	movetimer = setInterval( function() {moveABit() },1000/30);
}//closes causeTrip

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
		
}
/**
 *move the div a little. When repeated, seems like anim
 */
 function moveABit(){
 	var newc = document.getElementsByTagName("div")[0];
 	//console.log(parseInt(newc.style.top));
	newc.style.top= (parseInt(newc.style.top) + dist_per_frame)+'px';
	timer_counter++;//count that moveABit ran again
	//if it has done moveABit 30 times, clear the interval
	if (timer_counter > 30){
		//stop the timer & reset the counter
		clearInterval(movetimer);
		timer_counter=0;
	}
}//end