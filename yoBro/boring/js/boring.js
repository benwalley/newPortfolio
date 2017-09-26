var bottom = document.getElementById("bottom");
var top = document.getElementById("top");
var timeoutID;
var i = 0
var h1 = document.getElementById("test")
var h5 = document.getElementById("test2")
var checkx = false

h1.style.color = "green"

console.log("This page sure is boring!");
console.log("Or is it.....?")
console.log("Click the top right corner, and then the bottom left corner, within two seconds. Once you do that, the nonboringness will be activated!");
console.log("Hover over the main text to see coolness");
console.log("pretty boring huh?");
var check1 = false
var check2 = false
var check = false
var font = 10



	var intervalID = window.setInterval(function(){
		if(check == true){
			h1.style.fontSize = "700%"
			if(i%2 == 0){
			
			h1.style.color = "yellow"
			h1.style.fontSize = "50"
			}else{
			h1.style.color = "blue"
			}
		}else if(check == false){
			h1.style.fontSize = "5vw"
			h1.style.color = "darkred"
		}

		if(check2 == true){
			h5.style.fontSize = "700%"
			if(i%2 == 0){
			h5.style.color = "white"
			
			}else{
			h5.style.color = "green"
			}
		}else if(check2 == false){
			h5.style.color = "black"
			h5.style.fontSize = "2vw"
		}
		i+=1
		
	}, 50);

top.addEventListener("click", function(){
	i = 0
})






bottom.addEventListener("click", function(){
	if(i<40){
		check1 = true
		checkx = true
	}else{

	}
})


h1.addEventListener("mouseover", function(){
	if (check1 == true){
		check = true
	}
})

h1.addEventListener("mouseout", function(){
	
		check =false

})

h5.addEventListener("mouseover", function(){
	if (checkx == true){
		check2 = true
	}
})

h5.addEventListener("mouseout", function(){
	
		check2 =false

})







function myCallback() {
  // Your code here
  console.log("hello")
}
