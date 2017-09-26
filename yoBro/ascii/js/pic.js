var pics = document.getElementsByClassName('optionPic');
var text = document.getElementById("text");


// make clicked picture be the one to fill in
for(var i = 0; i < pics.length; i++){
	pics[i].addEventListener("click", function(){
				text.style.backgroundImage = "url("+this.src+")"

	})
}

$("#white").click(function(){
	text.style.backgroundImage = "url(http:red-rhino.com/wp-content/uploads/2016/02/white-bg.png)"
});

$("#useUrl").click(function(){
	var url = $("#url")
	console.log(url.val())
	text.style.backgroundImage = "url("+ url.val() +")"
	document.getElementById("url").value = ""

})

function fontSize(){
	text.style.fontSize = $("#weight").val() + "px"
}

$("#useColor").click(function(){
	text.style.color = $("#color").val()
})