var canvas = document.querySelector('canvas');
var dots = 130;
var dotRad = 1.6;
var lineDist = 90;
var dotArr = [];
var speed = 2;
var col = "rgba(255,255,255,.5)"
var linkDist = 40


canvas.width = window.innerWidth;
canvas.height = window.innerHeight
var width = window.innerWidth;
var height = window.innerHeight;

var links = [
	{name:"ABOUT", x:width/4*3, y:height/4, link:"capture.png"},
	{name:"CONTACT", x:width/1.7, y:height/4*3, link:"capture.png"},
	{name:"MY PROJECTS", x:width/7, y:height/5, link:"capture.png"}
]

var mouse = {
	x: undefined,
	y: undefined
}

var ctx = canvas.getContext('2d');

window.addEventListener("mousemove",function(e){
	mouse.x = event.x;
	mouse.y = event.y;	
})


// SHAPE DRAW CLASSES
// ===================================
function Line(startx, starty, endx, endy, stroke){
	ctx.beginPath();
	ctx.moveTo(startx, starty);
	ctx.lineTo(endx, endy);
	ctx.strokeStyle = "rgba(255,255,255," + stroke + ")"
	ctx.lineWidth = .5;
	ctx.stroke();
}

function Text(text, x, y, size){
	ctx.font=size + "px Source Sans Pro";
	ctx.textAlign = "center";
	ctx.fillText(text, x, y);
}

// start x, start y, controlx, control y, end x, end y.
function Circle(x, y, r, color){
	ctx.beginPath();
	
	this.color = color
	if(this.color != undefined){
		ctx.fillStyle = this.color
	}else{
		ctx.fillStyle=col;
	}
	ctx.arc(x, y,r,0,2*Math.PI);
	ctx.fill();
}

function Square(x, y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	ctx.rect(this.x, this.y, this.width, this.height); 
	ctx.fillStyle="white";
	ctx.fillRect();
}
// =====================================================

function fillArray(){
	// dots
	for (var i = 0; i < dots; i++) {
		var x = Math.random() * width
		var y = Math.random() * height
		var dx = (Math.random() - .5) * speed
		var dy = (Math.random() - .5) * speed
		dotArr.push({x:x,y:y,r:dotRad, dx:dx, dy:dy})
	}
	// link dots
	for (var i = 0; i < links.length; i++) {
		var info = {x:links[i].x, y:links[i].y, r:4, dx:0, dy:0,color:"white", link:true}
		dotArr.push(info)
		
	}
	console.log(dotArr)
}

function drawDots(dotArr){
	for (var i = 0; i < dotArr.length; i++) {
		// if it was given a color
		if(dotArr[i].color){
			var circ = new Circle(dotArr[i].x, dotArr[i].y, dotArr[i].r, dotArr[i].color)
		}else{
			var circ = new Circle(dotArr[i].x, dotArr[i].y, dotArr[i].r)
		}
		// IF IT GOES OUTSIDE THE CANVAS
		if(dotArr[i].x < 0 || dotArr[i].x > width){
			dotArr[i].dx = -dotArr[i].dx
		}
		if(dotArr[i].y < 0 || dotArr[i].y > height){
			dotArr[i].dy = -dotArr[i].dy
		}
		dotArr[i].x += dotArr[i].dx
		dotArr[i].y += dotArr[i].dy
	}
	for (var i = 0; i < links.length; i++) {
		var textx = links[i].x 
		var texty = links[i].y + 20
		text = new Text(links[i].name, textx, texty, 20)
	}

}
function drawLines(dotArr){
	// for each of the dots
	for (var i = 0; i < dotArr.length; i++) {
		// for each of the other dots
		for(var q = 0; q < dotArr.length; q++){
			var betweenx = Math.abs(dotArr[i].x - dotArr[q].x) 
			var betweeny = Math.abs(dotArr[i].y - dotArr[q].y) 
			var average = ((betweenx + betweeny)/2)
			// console.log((betweenx + betweeny)/2)
			
			
			if(average <= lineDist){
				var style = .1
				style = Math.abs(average-lineDist)/(lineDist*2)
				var line = new Line(dotArr[i].x, dotArr[i].y, dotArr[q].x, dotArr[q].y, style)
			}
			
		}
	}
}

function linksLogic(){
	var cover = document.getElementsByClassName('cover')[0]
	for (var i = 0; i < links.length; i++) {
		if(Math.abs(mouse.x - links[i].x) <= linkDist && Math.abs(mouse.y - links[i].y) <= linkDist){
			document.body.style.backgroundImage = "url(" + links[i].link + ")"
			cover.style.background = "rgba(27,27,27,.87)"
			console.log(links[i].link)
			break
		}else{
			cover.style.background = "rgba(27,27,27,1)"
		}
	}
}




fillArray()


function animate(){
	ctx.clearRect(0,0, canvas.width, canvas.height)
	
	ctx.fillStyle="transparent";
	ctx.fillRect(0,0,width,height);

	dotArr[0].x = mouse.x;
	dotArr[0].y = mouse.y;
	dotArr[0].r = 2
	drawDots(dotArr)
	drawLines(dotArr)
	linksLogic()
	// var square = new Square(mouse.x, mouse.y, 1,1)
	window.requestAnimationFrame(animate)
	
	
}

animate()


