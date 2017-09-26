var pickButton = $(".pickButton");
var colorPick = $("input");
var reset = $("#reset");
var pickButton = $("#pickButton");
var body = $("body");
var backgroundReset = $(".backgroundReset");



pickButton.on("click", function(){
	var pickedColor = colorPick.val();
	document.body.style.background=(pickedColor);

});

reset.on("click", function(){
	document.body.style.background=("linear-gradient(#ff9955, #D64309)");
});

