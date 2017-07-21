window.onload = init;

function init(){

    var name = document.getElementById("name");
    name.onmouseover = funMotion;
}

function funMotion(){
    var name = document.getElementById("name");
    name += "animated shake";
}
/*
$(document).ready(function(){


	/*$('body').awesomeCursor('hand-grab-o');*/

/*

var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var animation = "animated shake";

	$("#name").on("mouseover", function(){

		$("#name").addClass(animation).one(animationEnd, function(){
                   
                     $("#name").removeClass(animation);

             });
    });
            
});
*/