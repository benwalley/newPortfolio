var text = $(".mainText")
var grantedOn = false;
var deniedOn = false;
var paused = false;
var keyCodes = {
	// 32: " " ,65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",
	// 71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",
	// 77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",
	// 83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",
	// 89:"y",90:"z"
}

var hackCode = ["twoStepAuthorisation.bis <br><br> Username: SuperHacker3252463 <br>Password: ***************************** <br><br> Version 2.6.6",
accessSystem,
"<br><br> ADMIN=bgn__init__ALL.exe <br><br> int<=ADMIN_ACCESS<br>  struct_group = False <br> bin -r-a-s *.exe<br><br> cd ../Admin/psswd\xa0"

]
var screenCode = ""
var hackPos = [0,0];
var typeSpeed = 1;
var blinkerInterval = 600



// make cursor <span> blink
function blinker(){
	blinkerInterval = window.setInterval(function(){
		 $(".cursor").toggle();
	}, blinkerInterval);
}
blinker()

// create accesss granted thing
function accessGranted(){
	var granted = $(".granted")[0]
	if(!grantedOn){
		if(deniedOn){
			accessDenied()
		}
		granted.style.display = "block"
		grantedOn = true
	}else{
		granted.style.display = "none"
		grantedOn = false
	}
}

// create the access denied POPUP
function accessDenied(){
	var denied = $(".denied")[0]
	if(!deniedOn){
		if(grantedOn){
			accessGranted()
		}
		denied.style.display = "block"
		deniedOn = true
	}else{
		denied.style.display = "none"
		deniedOn = false
		
	}
}



function type(){
	// if you are at the end of the array, start over
	if(!paused){
		if(hackCode[hackPos[0]] == undefined){
			hackPos[0] = 0
			hackPos[1] = 0
			screenCode += "<br><br><br>"
		}
		// if you are not at the end of an array
		if(hackPos[1] < hackCode[hackPos[0]].length){
			screenCode += hackCode[hackPos[0]].slice(hackPos[1], hackPos[1] + typeSpeed)
			hackPos[1] += typeSpeed
		// if you are at the end
		}else if(hackPos[1] >= hackCode[hackPos[0]].length){
			hackPos[0] ++
			hackPos[1] = 0
			/*if it is a function, call it*/
			if(typeof hackCode[hackPos[0]] === "function"){
				(hackCode[hackPos[0]])()
				hackPos[0] ++

			}
		}
	}
	
}





document.onkeyup = checkKey;
// key listeners (key should call a function)
function checkKey(e) {
    e = e || window.event;
    if(e.keyCode == "16"){
    	accessGranted()
    }else if(e.keyCode == "17"){
    	accessDenied()
    }else{
    	type()
    	text.html(screenCode)
    }
}




// MAKE POPUP WINDOWS
function accessSystem(){
	var wind = $(".accessWindow")[0]
	wind.style.display = "block"
	var windCounter = 0
	
		var interval = setInterval(function(){
		paused = true
		if(windCounter < 50){
			windCounter++
			newStr = ""
			for(var i = 0; i < $(".accessWindow").text().length; i++){
				newStr = newStr + (Math.floor(Math.random() * 9))
			}
			$(".accessWindow").text(newStr)

		}else{
			$(".accessWindow").text("SYSTEM ACCESS GRANTED")
			clearInterval(interval)
			
			var timer = setTimeout(function(){
				paused = false
				$(".accessWindow")[0].style.display = "none"
			},700)
			
		}
	},1000/30)	
}
