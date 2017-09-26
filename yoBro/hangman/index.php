<!DOCTYPE html>
<html>
<head>
	<title>PLAY HANGMAN!</title>
	<link rel="stylesheet" type="text/css" href="css/gameplay.css">
	<script   src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>



<?php include("../includes/header.html"); ?>


<div class = "topSpacer"></div>
	
<div id = "main">
	<h1>HANGMAN!</h1>

<div id = "gameplay">
		<img src="images/hangman1.jpg">


	</div>
	

	<div id = "remaining">
		
		<span class = "remaining" id = "0">a</span>
		<span class = "remaining" id = "1">b</span>
		<span class = "remaining" id = "2">c</span>
		<span class = "remaining" id = "3">d</span>
		<span class = "remaining" id = "4">e</span>
		<span class = "remaining" id = "5">f</span>
		<span class = "remaining" id = "6">g</span>
		<span class = "remaining" id = "7">h</span>
		<span class = "remaining" id = "8">i</span>
		<span class = "remaining" id = "9">j</span>
		<span class = "remaining" id = "10">k</span>
		<span class = "remaining" id = "11">l</span>
		<span class = "remaining" id = "12">m</span>
		<span class = "remaining" id = "13">n</span>
		<span class = "remaining" id = "14">o</span>
		<span class = "remaining" id = "15">p</span>
		<span class = "remaining" id = "16">q</span>
		<span class = "remaining" id = "17">r</span>
		<span class = "remaining" id = "18">s</span>
		<span class = "remaining" id = "19">t</span>
		<span class = "remaining" id = "20">u</span>
		<span class = "remaining" id = "21">v</span>
		<span class = "remaining" id = "22">w</span>
		<span class = "remaining" id = "23">x</span>
		<span class = "remaining" id = "24">y</span>
		<span class = "remaining" id = "25">z</span>
	</div>

	

	<div id = "guessed">
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<span class = "guessLetter"></span>
		<!-- <button>restart</button> -->
	</div>	

	<div id = "wrong">
		Wrong Guesses:
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		<span class = "wrong">_</span>
		
	</div>
	<button>Restart</button>
</div>

	<script type="text/javascript" src = "js/gameplay.js"></script>
</body>
</html>