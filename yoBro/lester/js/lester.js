var ask = $("#ask");
var answer = $("#answer");
var button = $("button");
var asked = ""
var answered = "Hi. My name is Lester. I tell jokes!"
var age = false
var name = false
var blonde = [11,16]
var god = [7,9]
var science = [1,1]
var music = [6,6]
var heaven = [20,21]
var num = ""
var button = $("button")

var knockKnock = []

knockKnock.push(["Knock knock", "A broken pencil", "nevermind, it's pointless"])
knockKnock.push(["Knock knock", "To", "to whom."])
knockKnock.push(["Knock knock", "Hanna", "Hanna partrige in a pear tree."])
knockKnock.push(["Why did Lucy fall of the swing? because she had no arms. Knock knock", "not Lucy",])


button.on("click", function(){
	num = Math.floor(Math.random() * jokesArray.length)
	answered = jokesArray[num]
	fillAnswer(answered)
})


// also do the same if they press enter
$(document).keypress(function(e) {
    if(e.which == 13) {
    	// variable asked is whatever they typed in the ask box
       asked = ask.val()
		// clear the ask text input
		ask.val("")
		findAnswer()
    }
});
// prints out answer
function fillAnswer(answered){
	answer.val(answered)
}
// function to figure out what to say, and then call the fillAnswer function to print the answer
function findAnswer(){
	if(asked == "hello"){
		answered = "Oh, Hello"
	}else if(asked.includes("tell me a joke") == true ){
		num = Math.floor(Math.random() * jokesArray.length)
		answered = jokesArray[num]
	}else if(asked.includes("political joke" || "political jokes") == true){
		answered = "I don't approve of political jokes. I've seen too many of them get elected!"
	}else if(asked.includes("blonde joke" || "blonde jokes") == true){
		num = Math.floor(Math.random() * (blonde[1] - blonde[0])) + blonde[0]
		answered = jokesArray[num]
	}else if(asked.includes("god joke" || "god jokes") == true){
		num = Math.floor(Math.random() * (god[1] - god[0])) + god[0]
		answered = jokesArray[num]
	}else if(asked.includes("science joke" || "science jokes") == true){
		// num = Math.floor(Math.random() * (science[1] - science[0])) + science[0]
		answered = jokesArray[0]
	}else if(asked.includes("music joke" || "music jokes") == true){
		num = Math.floor(Math.random() * (music[1] - music[0])) + music[0]
		answered = jokesArray[num]
	}else if(asked.includes("heaven joke" || "heaven jokes") == true){
		num = Math.floor(Math.random() * (heaven[1] - heaven[0])) + heaven[0]
		answered = jokesArray[num]
	}else if(asked.includes("why did the chicken cross the road") == true){
		var number = Math.floor(Math.random() * chicken.length)
		answered = chicken[number]
	}else if(asked.includes("why don't you have any friends"  || "why dont you have any friends") == true){
		answered = "because i'm not a real person! :("
	}else if(asked.includes("time is it" || "time it is") == true){
		answered = "You know, it's the weirdest thing, I have been asking that question all day, and each time I get a different answer. "
	}else if(asked == ("did the chicken cross the road")){
		answered = "Yes of course, but perhaps you should be asking, why, did the chicken cross the road?"
	}else if(asked.includes("joke") == true ){
		num = Math.floor(Math.random() * jokesArray.length)
		answered = jokesArray[num]

	}else{
		answered = "I am not sure what you mean by that"
	}

	fillAnswer(answered)
}



var jokesArray = [];
// science joke
jokesArray.push('Heisenberg, Schrodinger and Ohm are in a car. They get pulled over. Heisenberg is driving and the cop asks him "Do you know how fast you were going?" "No, but I know exactly where I am" Heisenberg replies. The cop says "You were doing 55 in a 35." Heisenberg throws up his hands and shouts "Great! Now Im lost!" The cop thinks this is suspicious and orders him to pop open the trunk. He checks it out and says "Do you know you have a dead cat back here?" "We do now, asshole!" shouts Schrodinger. The cop moves to arrest them. Ohm resists.');
jokesArray.push("A computer scientist's wife asks him, 'would you pick up a loaf of bread at the store, and if they have eggs get a dozen?' He gets home, throws 12 loaves of bread on the counter, and says 'they had eggs'.")
jokesArray.push("You know why you never see elephants hiding up in trees? Because they're really good at it.")
jokesArray.push('What did one orphan say to the other?  "Robin, get in the Batmobile."')
jokesArray.push("An engineer dies and goes to hell. He's hot and miserable, so he decides to take action. The A/C has been busted for a long time, so he fixes it. Things cool down quickly. The moving walkway motor jammed, so he unjams it. People can get from place to place more easily. The TV was grainy and unclear, so he fixes the connection to the Satellite dish and now they get hundreds of high def channels, although they still cannot watch Breaking Bad on AMC. One day, God decides to look down on Hell to see how his grand design is working out and notices that everyone is happy and enjoying umbrella drinks. He asks the Devil what's up? The Devil says, 'things are great down here since you sent us an engineer.' 'What?' says God. 'An engineer? I didn't send you one of those. That must have been a mistake. Send him upstairs immediately. 'The Devil responds, 'No way. We want to keep our engineer. We like him.'God demands, 'If you don't send him to me immediately, I'll sue!' The Devil laughs. 'Where are You going to get a lawyer?' ");
jokesArray.push('the waiter comes up to a guy and says, "And how did you find your steak, sir?" "I just moved my potato and there it was!"');
// music joke
jokesArray.push("C, E-flat and G go into a bar. The bartender says, \"Sorry, we don't serve minors,\" and E-flat leaves. C and G have an open fifth between them. After a few drinks, the fifth is diminished and G is out flat. F comes in and tries to augment the situation, but is not sharp enough. D comes into the bar and heads straight for the bathroom saying, \"Excuse me, I'll just be a second.\" A comes into the bar, but the bartender is not convinced that this relative of C is not a minor and sends him out. Then the bartender notices a B-flat hiding at the end of the bar and shouts, \"Get out now. You're the seventh minor I've found in this bar tonight.\" Next night, E-flat, not easily deflated, comes into the bar in a 3-piece suit with nicely shined shoes. The bartender says: \"You're looking pretty sharp tonight. Come on in. This could be a major development.\" Sure enough, E-flat takes off his suit and everything else and stands there au naturel. Eventually, C, who had passed out under the bar the night before, begins to sober up and realizes in horror that he's under a rest. So, C goes to trial, is convicted of contributing to the diminution of a minor and sentenced to 10 years of DS without Coda at an up scale correctional facility. The conviction is overturned on appeal, however, and C is found innocent of any wrongdoing, even accidental, and that all accusations to the contrary are bassless. The bartender decides, however, that since he's only had tenor so patrons, the soprano out in the bathroom and everything has become alto much treble, he needs a rest and closes the bar.");
// God jokes
jokesArray.push("And God said to John, come forth and you shall be granted eternal life. But John came fifth and won a toaster");
jokesArray.push("Jesus, Moses, and an old man are playing golf. They step up to a par 3. Jesus is up first. He drives the ball short, into the water trap in front of the green. So Jesus, being Jesus, walks on the water, chips the ball onto the green and putts for par. Moses is next. He drives the ball into the same water trap. So Moses, being Moses, parts the water, chips the ball onto the green, and putts for par. The old man is up. He drives the ball and it's heading for the water trap. Before the ball lands in the water, a fish jumps out and catches the ball in its mouth. Before the fish lands back in the water, a bird swoops down, snags the fish, and begins to fly away. As it's circling over the green, a bolt of lighting strikes the bird, causing it to drop the fish onto the green. The ball pops out of the fish's mouth, and rolls into the hole for a hole-in-one. Jesus turns to the old man and says, \"Dad, if you don't stop fooling around we're not gonna bring you next time.\"")
jokesArray.push("One day, a pastor decides to skip church and go play golf. God and Jesus are sitting up in Heaven watching this happen. God turns to Jesus and says \"Watch this.\" He twirls his finger, and the pastor hits a very difficult hole-in one. Jesus is upset and asks God, \"why did you do that?\" God grins and says \"who's he gonna tell?\"")
jokesArray.push("A teenage boy is getting ready to take his girlfriend to the prom. First he goes to rent a tux, but there's a long tux line at the shop and it takes forever. Next, he has to get some flowers, so he heads over to the florist and there's a huge flower line there. He waits forever but eventually gets the flowers. Then he heads out to rent a limo. Unfortunately, there's a large limo line at the rental office, but he's patient and gets the job done. Finally, the day of the prom comes. The two are dancing happily and his girlfriend is having a great time. When the song is over, she asks him to get her some punch, so he heads over to the punch table and there's no punchline.")
// blonde joke
jokesArray.push('There was a blonde who found herself sitting next to a lawyer on an airplane. The lawyer just kept bugging the blonde, wanting her to play a game of intelligence. Finally, the lawyer offered her 10 to 1 odds, and said every time the blonde could not answer one of his questions, she would owe him $5, but every time he could not answer hers, he would give her $50.00. The lawyer figured he could not lose, and the blonde reluctantly accepted. The lawyer first asked, "What is the distance between the Earth and the nearest star?" Without saying a word the blonde handed him $5. Then, the blonde asked, "What goes up a hill with three legs and comes back down the hill with four legs?" Well, the lawyer looked puzzled. He took several hours, looking up everything he could on his laptop and even placing numerous air-to-ground phone calls trying to find the answer. Finally, angry and frustrated, he gave up and paid the blonde $50.00. The blonde put the $50 into her purse without comment, but the lawyer insisted, "What is the answer to your question?" Without saying a word, the blonde handed him $5.')
jokesArray.push("Blonde walks into a doctors office and says: \"Doctor, what’s the problem with me?  When I touch my arm, ouch! It hurts...  When I touch my leg, ouch! it hurts...  When I touch my head, ouch! It hurts...  When I touch my chest, ouch! it really hurts!\" The Doctor replies: \"Your finger is broken.\"")
jokesArray.push("A blonde walked into an electronics store and said to the salesmen: \"I want that tv.\"  The salesperson shook his head and said, \"No, we don't sell to blondes.\"  So the blonde left and came back with her hair dyed brown and said: \"I'll take that tv.\"  Again the salesman said: \"No, we don't sell to blondes.\"  So she left again and came back with her hair dyed black and said: \"I want that tv.\"  But the salesman still said: \"No, we don't sell to blondes.\"  Finally the blonde got fed up and said, \"That's it! How'd you know I was a blonde?!\" she asked.  The salesman answered: \"Cause that's a microwave.\"")
jokesArray.push("So a blonde, redhead and a brunnette die and St Peter at the gates of heaven said \"If you want to get to heaven you have to pass the 100 steps of jokes without laughing.\" So the redhead gets to the 24th step and laughs so she goes to hell. The brunnette gets to the 66th step and laughs (and goes to hell) So the blonde gets to the 99th step and laughs St Peter then says \"This was the worst joke and you were so close why did you laugh?\" And the blonde says \"I just got the first joke!\" ")
jokesArray.push("A blonde and her husband were watching the evening news together. The newsreader said \"In international news, a disaster near Rio de Janeiro today. Five Brazilian men died in a skydiving accident \"The blonde burst into tears, and her husband couldn't comfort her. \"They were participating on a risky sport, and they knew the dangers,\" he said. Through her tears, the blonde woman said \"But that's just so terrible! How many is a Brazilian?\"")
jokesArray.push("Three blondes were walking throught the woods, when they came across some tracks. \"look\" says the first. \"moose tracks!\" \"No, silly\", the second said. \" those are bear tracks.\" The third blonde replied, \"You are both wrong. they are wolf tracks\". They were still arguing about it, when they were hit by the train");
jokesArray.push("Three sons left home, went out on their own and prospered. Getting back together, they discussed the gifts they were able to give their elderly mother. The first said, \"I built a big house for our mother.\" The second said, \"I sent her a Mercedes with a driver.\" The third smiled and said, \"I've got you both beat. Remember how mom enjoyed reading the Bible? And you know she can't see very well. I sent her a remarkable parrot that recites the entire Bible. It took elders in the church  12 years to teach him. He's one of a kind. Mama just has to name the chapter and verse, and the parrot recites it. \"Soon thereafter, mom sent a letter to each son. \"Milton,\" she wrote one son,  \"the house you built is so huge. I live in only one room, but I have to clean the  whole house.\" \"Gerald,\" she wrote to another, \"I am too old to travel. I stay most of th time at home, so I rarely use the Mercedes. And the driver is so rude!\" \"Dearest Donald,\" she wrote to her third son, \"you have the good sense to know what your mother likes. The chicken was delicious.\"")
jokesArray.push("A fat man and a thin man met in a lobby. the fat man said to the thin man \"by the looks oy you, there may have been a famine.\" The thin man replies' \"By the looks of you, you may have caused it!\"");
jokesArray.push('A duck walks into a bar and asks, "Do you have any grapes?" The bartender says, "No, I am sorry, we have cherries and olives but no grapes." "Oh," says the duck and leaves. Ten minutes later the duck returns and asks the same bartender, "Do you have any grapes?" "Like I said before, we have cherries and olives, but we dont have grapes!" says the bartender. "Oh," says the duck and leaves. Ten minutes later the duck returns and again, asks, "Do you have any grapes?" "Look, beak lips," screams the bartender. "We have no grapes! We will never have grapes! And if you ask me again, I am going to nail your web-by little feet to the floor!" "Oh," says the duck and leaves. Ten minutes later, the door swings open and the duck returns. The bartender is furious. He slams a bottle of beer down on the bar, stares menacingly at the duck and screams, "What?" "Uh . . . uh . . . do you have any . . . nails?" the duck asks. "Nails? Nails? No, we dont have nails," answers the bartender. "Mmmm," says the duck. "So, do you have any grapes?"')
// heaven jokes
jokesArray.push("A very wealthy man decided to prove the quote, \"You can't take it with you\", wrong. Before he died he requested that his gold be buried with him. Sure enough after his death he found himself in heaven along with his gold. He was so excited that he had actually taken it with him. He went up to St. Peter to enter the gates and exclaimed \"Look at this, you can take it with you.\" Peter looked at the gold in the mans hand and exclaimed, \"You brought pavemant!!\"")
jokesArray.push("Tragically, three friends die in a car crash, and they find themselves at the gates of heaven. Before entering, they are each asked a question by St. Peter. \"When you are in your casket and friends and family are mourning upon you, what would you like to hear them say about you?\", asks St. Peter. The first guy says, \"I would like to hear them say that I was a great doctor of my time, and a great family man.\" The second guy says, \"I would like to hear that I was a wonderful husband and school teacher who made a huge difference in our children of tomorrow.\" The last guy replies, \"I would like to hear them say...... LOOK!!! HE'S MOVING!!!!!\"")
jokesArray.push("Several churches in the South decided to hold union services. The leader was a Baptist and proud of his denomination. \"How many Baptists are here?\" he asked on the first night of the revival? All except one little old lady raised their hands. \"Lady, what are you?\" asked the leader. \"I'm a Methodist,\" meekly replied the lady. \"Why are you a Methodist?\" queried the leader? \"Well,\" replied the little old lady, \"my grandparents were Methodists, my mother was a Methodist, and my late husband was a Methodist.\" \"Well,\" retorted the leader, \"just supposing all your relatives had been morons, what would that have made you?\" \"Oh, I see. A Baptist, I suppose,\" the lady replied meekly.")
jokesArray.push("The first woman says to the mortician, \"I've got my husband here in his very best blue suit, but what I'd really appreciate is if you could have him in a black suit for the funeral. Here's a blank check, use whatever you need, I just want him in a black suit.\" The mortician agrees and thanks the woman and the first woman leaves. Now the second woman comes in and says, \"I know I've brought my husband wearing a black suit, but I've always really loved him in blue. Is there any way you can have him in a blue suit for his funeral?\" The mortician assures her that it's not a problem and the second woman thanks her and leaves. A few days later the mortician shows up at the first man's funeral and his widow walks up and says, \"Thank you so much for doing this. My husband looks wonderful in the black suit you found him.\" The mortician replies, \"Of course, I was happy to do it. And here's your check back.\" \"No, I really appreciate it and I want to pay you, just take whatever you need.\" \"Oh no really, it didn't cost me anything. You see, right after you came in a woman showed up with her husband in a black suit and she wanted him wearing blue. So in the end all I had to do was switch the heads.\"")
jokesArray.push("three contractors are bidding to fix a broken fence at the whitehouse. The Minnesota contractor takes out a tape measure and does some measuring, then works some figures with a pencil. \"Well,\" he says, \"I figure the job will run about $900. $400 for materials, $400 for my crew, and $100 profit for me.\" The Tennessee contractor also does some measuring and figuring, then says, \"I can do this job for $700. $300 for materials, $300 for my crew, and $100 profit for me.\" The Chicago contractor doesn't measure or figure, but leans over to the White House official and whispers, \"$2,700.\" The official, incredulous, says, \"You didn't even measure like the other guys! How did you come up with such a high figure?\" The Chicago contractor whispers back, \"$1000 for me, $1000 for you, and we hire the guy from Tennessee to fix the fence.\" ")



var chicken = []

chicken.push("To prove to the possum it could actually be done!")
chicken.push("Isac Newton told me it was because, Chickens at rest tend to stay at rest. Chickens in motion tend to cross roads.")
chicken.push("Einstein told me that The chicken did not cross the road. The road passed beneath the chicken.")
chicken.push("Ludwig Boltzmann seemed to think that if you have enough chickens, it is a near certainty that one of them will cross the road.")
chicken.push("Because the armadillo told him it was safe.")
chicken.push("to get to the other side")
chicken.push("perhaps you should be asking, did, the chicken cross the road?")












