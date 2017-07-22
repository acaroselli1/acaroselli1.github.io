/*window.onload = init;

function init(){
    var label= document.getElementById("alex");
    label.onclick = funMotion;
}

function funMotion(){
     var label= document.getElementById("alex");
     label.setAttribute("class","animated shake");
}
*/

jQuery(document).ready(function($){
	


var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var animation = "animated zoomOutUp";

	$(".special-effects").on("mouseover", function(){
     
		$(".special-effects").addClass(animation).one(animationEnd, function(){
                   
                     $(".special-effects").removeClass(animation);

             });
    });
            
});
