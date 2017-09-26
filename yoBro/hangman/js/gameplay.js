
var words = "breath mature equal current powder start greasy curvy saw adjoining disturbed vessel copy fierce vague size threatening fasten shut cook song protective school rotten gullible spot cushion succinct periodic girls downtown stupendous puncture quirky duck launch pies wrong play blink hug fold admit level infamous collar unit wren kittens aunt special mourn bright leg satisfying murder outgoing alive train thrill deceive slow exist tax murky furniture belief icky upbeat fetch empty sparkle property twist alert damp habitual expert rate vanish connect utter strengthen room raspy squash faded tangible stereotyped funny chalk trousers handsome strip"
var theWord = "tarantula"
var guessLetter = $(".guessLetter")
var remain = $("#remaining")
var wrong = $(".wrong")
var remain = $("#remaining")
var remaining = $(".remaining")
var input = $("input");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wrongCounter = 0
var guessString = ""
var guessed = ""
var button = $("button");
var wordArray = words.split(" ");
var x = ""

function pickWord(wordArray){
	var num = (Math.floor(Math.random() * 100))
	theWord = wordArray[num]
	console.log("Hello There.");
}








button.click(function(){
	start()
})

image = $("img")

function start(){
	wrongCounter = 0

	for(var i = 0; i < wrong.length ; i++){
		wrong[i].innerHTML = "_"
	}
	
	pickWord(wordArray);
	for(var i = 0; i < 16; i++){
		guessLetter[i].innerHTML = ""
	}
	for(var i = 0; i < theWord.length; i++){
		guessLetter[i].innerHTML = "_"
	}
	for(var i = 0; i<alphabet.length; i++){
		remaining[i].innerHTML = alphabet[i]
	}
	image.attr("src", "images/hangman1.jpg")
	guessed = ""
}

start()

function deleteRemaining(input){
	// replaces the guessed letter with a dash
	
	var index = alphabet.indexOf(input)	
	remaining[index].innerHTML = "_"
}

// function everyGuess

function ifRight(guess){
	// if a right Letter is guessed
	// fill in the guess blanks
	for(var i = 0; i < theWord.length;i++){
        if (theWord[i]==guess){
        	guessLetter[i].innerHTML = guess
        }
    }
    // check if you won.
    guessString = ""
	for (var i = 0; i < theWord.length; i++) {
		guessString += guessLetter[i].innerHTML
	};
	// if won, alert, you win!
	if(guessString == theWord){
		alert("you win!!!")
		start()
	}
}


function ifWrong(guess){
	// if wrong letter is guessed
	wrong[wrongCounter].innerHTML = guess
	wrongCounter +=1
	
	if(wrongCounter === 1){
		image.attr("src", "images/hangman 2.jpg")
	}else if(wrongCounter === 2){
		image.attr("src", "images/hangman 3.jpg")
	}else if(wrongCounter === 3){
		image.attr("src", "images/hangman 4.jpg")
	}else if(wrongCounter === 4){
		image.attr("src", "images/hangman 5.jpg")
	}else if(wrongCounter === 5){
		image.attr("src", "images/hangman 6.jpg")
	}else if(wrongCounter === 6){
		image.attr("src", "images/hangman 7v2.jpg")
	}else if(wrongCounter === 7){
		image.attr("src", "images/hangman 8.jpg")
		alert("you loose! The word was supposed to be: " + theWord)
		start()
	}	
}


for(var i = 0; i < alphabet.length ; i++){
	remaining[i].addEventListener("click", function(){
    var x = (this.innerHTML)
       

        if (guessed.indexOf(x) != -1){
        	
		}
		else{
        guessed = (guessed + x)

        deleteRemaining(x)

        if(theWord.indexOf(x) == -1){
        	ifWrong(x)
        }
        else{
        	ifRight(x)	
        }
		}
	});
}