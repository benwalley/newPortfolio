var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// ball x position
var x=50
// ball y position
var y=50
var shot = false
// first tank varialbles
var t1x = 20
var t1y = 100
var t1Angle = 90
// second tank variables
var t2x = 210
var t2y = 100
var t2Angle = 90
// whose turn is it
var turn = 1
var ballColor = "lightblue"
var ballSize = 1
var fire = false
var power = 100
var explode = false
var explodeFrame = 0
var exVar = true
var explodePower =15

// player one stats
var p1Money = 45000
var p1Ammo = [10, 5, 5, 5, 5, 1]
var p1selectedAmmo = 0
var p1Armor = 100
// player Two stats
var p2Money = 45000
var p2Ammo = [10, 5, 5, 5, 5, 1]
var p2selectedAmmo = 0
var p2Armor = 100
var deg = Math.PI/180;
var health1 = p1Armor;
var health2 = p2Armor;
// forces
var gForce = 2
var xForce1 = 0
var yForce1 = 0
var xForce2 = 0
var yForce2 = 0
// buttons
var fire1 = document.getElementById("fire1");
var fire2 = document.getElementById("fire2");

var weaponArray = [
	{name:"cannonball", power:5, price: 300},
	{name:"Lg cannonball", power:8, price: 500},
	{name:"missile", power:12, price: 2000},
	{name:"sm bomb", power:15, price: 3000},
	{name:"lg bomb", power:20, price: 5000},
	{name:"hydrogen bomb", power:40, price: 30000}

]

var option = $("option");


start();

// fire button
fire1.addEventListener('click', function(){
	if(turn == 1){
		if(p1Ammo[weaponNumber] > 0){
			ballSize = 1
			xForce1 = (-(t1Angle -90))
			yForce1 = (-(t1Angle))
			x = (t1x + 10)
			y = (t1y)
			ballColor = "black"
			fire = true
			p1Ammo[weaponNumber] --
		}
	}else if(turn == 2){
		if(p2Ammo[weaponNumber] > 0){
			ballSize = 1
			yForce2 = -((-(t2Angle))+180)
			xForce2 = -(90+yForce2)
			x = (t2x + 10)
			y = (t2y)
			ballColor = "black"
			fire = true
			p2Ammo[weaponNumber] --
		}
	}	
	
});


function drawAll(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

// first tank
	ctx.beginPath();
	ctx.rect(t1x, t1y, 20, 10);
	ctx.fillStyle = "#441111";
	ctx.fill();
	ctx.closePath();

	ctx.save();
    	ctx.translate(t1x+9, t1y+2);
    	ctx.rotate(-(t1Angle) * deg);
    	ctx.fillRect(0,0,15, 2);
	ctx.restore();

// Second tank
	ctx.beginPath();
	ctx.rect(t2x, t2y, 20, 10);
	ctx.fillStyle = "#441111";
	ctx.fill();
	ctx.closePath();

	ctx.save();
    	ctx.translate(t2x+9, t2y+2);
    	ctx.rotate(-(t2Angle) * deg);
    	ctx.fillRect(0,0,15, 2);
	ctx.restore();

	// ball
		ctx.beginPath();
		ctx.arc(x, y, ballSize, 0, Math.PI*2, false);
		ctx.fillStyle = ballColor;
		ctx.fill();
		ctx.closePath();
}

// time/animation maker
var mainInterval = window.setInterval(function(){
	drawAll()
	checkIfHit()
	// move ball
	// if ball was fired
	if(fire == true){
		// if it is player 1 turn
		if(turn == 1){
			x+=xForce1/power

			if(yForce1 < 0){
				y+=yForce1/power
			}else{
				if(power>20){
					y+=yForce1/(power/2)
				}else{
					y+=yForce1/power
				}
			
			}
		
			if(yForce1 < 50){
				yForce1 += gForce			
			}else{

				yForce1 = yForce1
			}
			
		// if it is player 2 turn
		}else if(turn == 2){
			x+=xForce2/power

			if(yForce2 < 0){
				y+=yForce2/power
			}else{
				if(power>20){
					y+=yForce2/(power/2)
				}else{
					y+=yForce2/power
				}
			
			}
		
			if(yForce2 < 50){
				yForce2 += gForce			
			}else{

				yForce2 = yForce2
			}
		}
		}	
	// if ball should explode
	if(explode == true){
		
		if(explodeFrame < explodePower){
			ballColor = "red"
			ballSize += 4
			explodeFrame++
		}else{
			exVar = true
			explode = false
			ballSize = 1
			ballColor = "lightblue"
			explodeFrame = 0
			x = 50
			y = 50
		}	
	}
	if(turn == 1){
		$("#moneyAmount").text("$" + p1Money)
		$("#money").text(p1Money)
		$("#armor").text("armor - " + p1Armor)
	}else if(turn == 2){
		$("#moneyAmount").text("$" + p2Money)
		$("#money").text(p2Money)
		$("#armor").text("armor - " + p2Armor)
	}

}, 30);

// controls for when arrow keys are pressed
document.onkeydown = function(e) {
    switch (e.keyCode) {
    	// left
        case 37:
            if(turn == 1){
            	if(t1x > (0) ){
            	t1x -= 2
            }
            }else if(turn == 2){
            	if(t2x > (canvas.width/2) ){
            	t2x -= 2
            }
            }

            
            break;
        case 38:
        // up
        	if(turn == 1){
        		t1y -= 2

        	}else if(turn == 2){
        		t2y -= 2
        	}
            
            
            break;
        case 39:
        // right
            if(turn == 1){
            	if(t1x < (canvas.width/2 - 25) ){
            	t1x += 2
            }
            }else if(turn == 2){
            	if(t2x < (canvas.width -20) ){
            	t2x += 2
            }
            }
            break;
        case 40:
        // down
        	if(turn == 1){
        		t1y+=2
        	}else if(turn == 2){
        		t2y += 2
        	}
           
            break;
        case 87:
        	// W key
        	if(turn == 1){
            	if(t1Angle<=90){
            		t1Angle +=2
            	}
            }else if(turn == 2){
            	if(t2Angle>=90){
	            	t2Angle -=2            		
            	}

            }
        	console.log("W key pressed")
        	break;
        case 83:
        	// S key
        	 if(turn == 1){
            	if(t1Angle>=1){
            		t1Angle -=2
            	}
            }else if(turn == 2){
            	if(t2Angle<=179){
            		t2Angle +=2            		
            	}
            }
        	console.log("S key pressed")
        	break;
    }
};

// $(".arrows")[1].mousedown(function(){



// update values when slider is changed
function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
	var powerVal = ((-newValue) + 201)/5
	power = powerVal
}

// check if ball hits ground or another tank
function checkIfHit(){

	// if it hits tank 1
	if(x>t1x && x<(t1x + 20) && y>t1y && y<(t1y + 10) && exVar == true){
		console.log("hit tank 1")
		health1 -= explodePower
		explode = true
		fire = false
		p2Money += (explodePower * 1000)
		p1Money += (explodePower * 100)
		switchTurn()
		console.log("switched")
		exVar = false
		ifLoose()
	// if it hits tank 2 
	} else if(x>t2x && x<(t2x + 20) && y>t2y && y<(t2y + 10) && exVar == true) {
		console.log("hit tank 2")
		p1Money += (explodePower * 1000)
		p2Money += (explodePower * 100)
		health2-=explodePower
		explode = true
		fire = false
		switchTurn()
		exVar = false
		ifLoose()
	// if it hits the ground
	}else if(y>canvas.height){
			fire = false
			switchTurn();
			escaped = true
			y = 0
			ballColor = "lightblue"
		
		
		
		
	}

	updateHealth()

}
function updateHealth(){
	document.getElementById("health1").value = health1;
	document.getElementById("health1").max = p1Armor;
	document.getElementById("health2").value = health2;
	document.getElementById("health2").max = p2Armor;

}

updateHealth()

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function switchTurn(){
	if(turn == 1){
		turn =2
		for(var i = 0; i < option.length; i++){
			option[i].innerHTML = p2Ammo[i] + " -  " + weaponArray[i].name
		}
			
		
	}else if(turn == 2){
		turn = 1
		for(var i = 0; i < option.length; i++){
			option[i].innerHTML = p1Ammo[i] + " -  " + weaponArray[i].name
			
		}
	}
	console.log(turn)
	$("#playerNum").text(turn)

}
// check if anyone lost, and alert if they did
function ifLoose(){
	if(health1<=0){
		alert("player Two Wins!!!!")
		start()
		buy()
	}else if(health2 <= 0){
		alert("Player One Wins!!!!")
		start()
		buy()
	}
}

function start(){
	health1 = p1Armor;
	health2 = p2Armor;
	t1x = 20
	t1y = 100
	t1Angle = 90
	// second tank variables
	t2x = 210
	t2y = 100
	t2Angle = 90
	turn= 1
	document.getElementById("health1").max = p1Armor;
	document.getElementById("health2").max = p2Armor;

}

function pickWeapon(){

weapons = document.getElementById("weapons");
weaponNumber = weapons.options[weapons.selectedIndex].value;
explodePower = weaponArray[weaponNumber].power


}

pickWeapon()









// BUY STUFF

var buttons = $(".buying");

	buttons[0].addEventListener("click", function(){
		buy(0)
	})
	buttons[1].addEventListener("click", function(){
		buy(1)
	})
	buttons[2].addEventListener("click", function(){
		buy(2)
	})
	buttons[3].addEventListener("click", function(){
		buy(3)
	})
	buttons[4].addEventListener("click", function(){
		buy(4)
	})
	buttons[5].addEventListener("click", function(){
		buy(5)
	})
	buttons[6].addEventListener("click", function(){
		if(turn == 1){
			if(p1Money >= 10000){
				p1Armor += 10
				p1Money -= 10000
				health1+= 10
				updateHealth()
			}
			
		}else if(turn == 2){
			if(p2Money >= 10000){
				p2Armor += 10
				p2Money -= 10000
				health2+= 10
				updateHealth()
			}
		}
	})
	buttons[7].addEventListener("click", function(){
		if(turn == 1){
			if(p1Money >= 5000){
				health1 += 10
				p1Money -= 5000
			}
		}else if(turn == 2){
			if(p2Money >= 5000){
				health2 += 10
				p2Money -= 5000
			}
		}
	})

function buy(number){
	if(turn == 1){
			if(p1Money >= weaponArray[number].price){
				p1Ammo[number] ++
				for(var i = 0; i < option.length; i++){
					option[i].innerHTML = p1Ammo[i] + " -  " + weaponArray[i].name
				}
				p1Money -= weaponArray[number].price		
			}
		
		}else if(turn == 2){
			if(p2Money >= weaponArray[number].price){
				p2Ammo[number] += 1
				for(var i = 0; i < option.length; i++){
					option[i].innerHTML = p2Ammo[i] + " -  " + weaponArray[i].name
			
				}
				p2Money -= weaponArray[number].price
			}	
		}
	
}


$(".u")[0].addEventListener("click", function(){
	if(turn == 1){
    	t1y -= 5

    }else if(turn == 2){
        t2y -= 5
    }
            
})

$(".l")[0].addEventListener("click", function(){

 if(turn == 1){
 	if(t1x > 0){
 		 t1x -= 5
 	}
   
 }else if(turn == 2){
 	if(t2x > (canvas.width/2) ){
 		t2x -= 5
 	}
    
 }
})

$(".r")[0].addEventListener("click", function(){
 if(turn == 1){
 	if(t1x < (canvas.width/2) ){
    t1x += 5
}
 }else if(turn == 2){
 	if(t2x < (canvas.width - 20) ){
    t2x += 5
}
 }
})

$(".d")[0].addEventListener("click", function(){
 if(turn == 1){
    t1y += 5
 }else if(turn == 2){
    t2y += 5
 }
})

function changeAngle(angle){

	if(turn == 1){
		var angle1 = (-angle + 90)
		t1Angle = angle1
	}else if(turn == 2){
		var angle2 = (Number(angle) + 90) 
		t2Angle = angle2
	}
}

