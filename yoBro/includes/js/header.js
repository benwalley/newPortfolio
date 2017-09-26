var hamb = $("#hamburger");
var link = $(".smallLink");
var smallNav = $(".navSmall")[0]
var expanded = false
var opened = false
var counter = 0


hamb.click(function(){
	if(!expanded){
		open()
		expanded = true

	}else{
		close()
		expanded = false
	}
	
})

function open(){
	
	var interval = setInterval(function(){
		if(counter < link.length){
			link[counter].style.display = "block"
			counter++		
		}else{
			clearInterval(interval)
		}	
	}, 30);
}

function close(){
	var interval = setInterval(function(){
		if(counter > 0){
			link[counter -1].style.display = "none"
			counter--		
		}else{
			clearInterval(interval)
		}	
	}, 30);
}