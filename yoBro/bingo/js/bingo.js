var going = true;
var speedNum = $("#speedNum")

var speedvar = "3000"
var pickedLetter = ""
var pickedNumber = ""
var letters = ["b","i","n","g","o"];
var numbers =[1,16,31,46,61]
var alreadyPicked = [];
var start = false
var boardNums = [0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60,0,15,30,45,60]
var boards = $(".boards")
var spot = $(".spot")
var Card1 = $("#1Card")
var Card2 = $("#2Card")
var Card3 = $("#3Card")
var Card4 = $("#4Card")
var Card5 = $("#5Card")
var Card6 = $("#6Card")
var topRow = $(".topRow")
var bingo = ["B","I","N","G","O"]
var squares = []
var numDisplay = $("#pickedLetterNumber")
var start = $("#start")
var pause = $("#pause")
var restart = $("#restart")
var picked = "";


// init game by making one card
cards(1)

// make the speed picker work 
$("#range").on("mouseup", function(){
	var value =  $("#range").val()
	console.log(value)
	speedvar = (value*1000)
	restarts();

})

// start the number picking
function go(){
	document.getElementById('pickedLetterNumber').innerHTML = "Start!";
	document.getElementById('instructions').innerHTML = "";
	intervalID = window.setInterval(checkPicked, speedvar);

}

function clearWindow(){
	for(var i = 0; i < spot.length; i++){
		spot[i].classList.remove("square");
		spot[i].innerHTML = "";
		spot[i].classList.remove("red")
	}
	for(var i = 0; i < topRow.length; i++){
		topRow[i].innerHTML = "";
		topRow[i].classList.remove("topSquare");
	}
	for(var i = 0;i<boards.length; i++){
		boards[i].classList.remove("board")
	}
}


// enter the number board you want, and it fills it, and calls the function to make clicked squares red
function cards(boardNum){
	// add class board to correct board
	boards[boardNum-1].classList.add("board")
	// add class square to all correct squares
	for (var i = ((boardNum *25)-25); i < boardNum * 25; i++) {
		spot[i].classList.add("square")
	};
	// make top squares correct
	for(var i = 0;i < 5; i++){
		topRow[i + (boardNum*5)-5].classList.add("topSquare")
		topRow[i + (boardNum*5)-5].innerHTML = bingo[i]
	}
	// make var squares equal all things with class square
	squares = $(".square");
	// make clicked squares red
	redListener()
	// put numbers in board
	loadBoard()
}

function restarts(){
	 alreadyPicked = []
	 for(var i = 0; i < spot.length; i++){
		spot[i].classList.remove("red")
	}
	 	window.clearInterval(intervalID)
	 go();	
}



start.on("click", function(){
	console.log("works..")
	go();
})

pause.on("click", function(){
	window.clearInterval(intervalID)
	document.getElementById('pickedLetterNumber').innerHTML = "Pause";

})

restart.on("click", function(){
		 alreadyPicked = []
	 for(var i = 0; i < spot.length; i++){
		spot[i].classList.remove("red")
	}
	 	window.clearInterval(intervalID)
	 go();	
})

// if card 1 is clicked, clear window, and then write the right amount of cards
Card1.on("click", function(){
	clearWindow()
	cards(1)
	restarts()
})
// if card 2 is clicked, clear window, and then write the right amount of cards
Card2.on("click", function(){
	clearWindow()
	cards(1)
	cards(2)
	restarts()
})
// if card 3 is clicked, clear window, and then write the right amount of cards
Card3.on("click", function(){
	clearWindow()
	cards(1)
	cards(2)
	cards(3)
	restarts()

})
// if card 4 is clicked, clear window, and then write the right amount of cards
Card4.on("click", function(){
	clearWindow()
	cards(1)
	cards(2)
	cards(3)
	cards(4)
	restarts()
})
// if card 5 is clicked, clear window, and then write the right amount of cards
Card5.on("click", function(){
	clearWindow()
	cards(1)
	cards(2)
	cards(3)
	cards(4)
	cards(5)
	restarts()
})


// randomly pick a number, and letter
function pickLetter(){
	var letterNum = (Math.floor(Math.random() * 5))
	pickedLetter = letters[letterNum];
	var num = Math.floor(Math.random()*15)
	pickedNumber = (num + numbers[letterNum])
	
	
}

// make sure the number has not been picked yet
function checkPicked(){
	if(start = true){
		pickLetter()
		while(alreadyPicked.indexOf(pickedNumber) != -1){
			pickLetter()
		}
		var finalNum = (pickedLetter.toUpperCase() + "-" + pickedNumber)
		document.getElementById('pickedLetterNumber').innerHTML = finalNum;
		console.log(pickedLetter.toUpperCase() + "-" + pickedNumber)
		// add the number to array of picked numbers
		alreadyPicked.push(pickedNumber)
		// stop it if all the numbers have been picked
		if(alreadyPicked.length >= 75){
			window.clearInterval(intervalID)
		}
	}

}




// make clicked squares red
function redListener(){
for(var i = 0;i<squares.length ; i++){
	squares[i].addEventListener("click",function(){
		// only be able to click picked numbers
		picked = this.innerHTML
		// if clicked number has already been called
		if(alreadyPicked.indexOf(Number(picked)) != -1){
			// make it red
			this.classList.add("red");			
		}else if(picked == "Free"){
			this.classList.add("red");		
		}
		
	})

}	
}


 //fill the board with numbers
function loadBoard(){
	// array to store all the numbers on the board
	var usedArray = []
	var x = 0;
	for(var i = 0; i<squares.length;i++){
		x++
		if(x>=25){
			usedArray = []
			x=0
		}

		// pick random number between 1 and 15
		var num = Math.floor(Math.random()*15)+1;
		num = (num + boardNums[i]);
		// add the numeber to square i
		squares[i].innerHTML = num
		// if it has already been used, subtract 1 from i, to make it pick another number
		if(usedArray.includes(num) == true){
			i -= 1
		//otherwise add the number to usedArray 
		}else{
			usedArray.push(num)
		}
	}
		// change square 12 to say free
		for(var i = 0; i < $(".board").length;i++){
			squares[12 + (25*i)].innerHTML = "Free"
		}
}


// make a function that checks if Bingo, and if there is,stops game, and says "you win"
function checkBingo(){

	if(spot[2].is("red")){
		alert("you win...")
	}
}