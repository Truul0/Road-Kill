$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var map = createObjectPic("Images/map.png")
	var car1 = createObjectPic("Images/car1.png")
	var car2 = createObjectPic("Images/car2.png")
	var car3 = createObjectPic("Images/car3.png")
	var car4 = createObjectPic("Images/car5.png")
	var egg1 = createObjectPic("Images/egg1.png")
	var egg2 = createObjectPic("Images/egg1.png")
	var egg3 = createObjectPic("Images/egg1.png")
	var egg4 = createObjectPic("Images/egg1.png")
	var egg6 = createObjectPic("Images/egg1.png")
	var egg7 = createObjectPic("Images/egg1.png")
	
	var aispeed
	var enemy = createObjectPic("Images/coon.png")
	var chicken = createObjectPic("Images/chicken.png")
	var square = createObjectPic("Images/square.png")
	var grass = createObjectPic("Images/coonarea.png")
	var grass2 = createObjectPic("Images/grass.png")
	var grass3 = createObjectPic("Images/grass.png")
	var grass4 = createObjectPic("Images/grass.png")
	var grass5 = createObjectPic("Images/grass.png")
	var grass6 = createObjectPic("Images/grass.png")
	var grass7 = createObjectPic("Images/grass.png")
	var grass8 = createObjectPic("Images/grass.png")
	var grass9 = createObjectPic("Images/grass.png")
	var grass10 = createObjectPic("Images/grass.png")
	var death = createObjectPic("Images/death.png")
	var death2 = createObjectPic("Images/deathscreen2.png")
	var hole1 = createObjectPic("Images/hole1.png")
	var win = createObjectPic("Images/win.png")
	var text1 = createObjectPic("Images/text1.png")
	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	
	
	
	
	var button1 =createButton (190,200,300,100,null, "Instructions");
	button1.colour = 'grey'
	button1.textCol = 'black'
	button1.job = function(){ 
	alert("Read pls");
	screen = 6
	
	
	}
	
	
	var button =createButton (190,50,300,100,null, "Play");
	button.colour = 'grey'
	button.textCol = 'black'
	button.job = function(){ 
	alert("Get ready");
	screen = 2
	map.x = 0;
	map.y = 4; 
	map.scale = .79
	
	car1.x = 15
	car1.y = 17
	car1.scale = .1
	
	car2.x = 90
	car2.y = 300
	car2.scale = .2
	
	car3.x = 573
	car3.y = 400
	car3.scale = .1
	
	car4.x =  700
	car4.y = 370
	car4.scale = .17
	
	egg1.x = 25
	egg1.y = 3
	egg1.scale = .03
	
	egg2.x = 50
	egg2.y = 420
	egg2.scale = .03 
	
	egg3.x = 300
	egg3.y = 410
	egg3.scale = .03
	
	egg4.x = 300
	egg4.y = 200
	egg4.scale = .03

	egg6.x = 300
	egg6.y = 3
	egg6.scale = .03
	
	egg7.x = 630
	egg7.y = 200
	egg7.scale = .03
	
	
	
	chicken.x = 1
	chicken.y = 100
	chicken.scale = .3
	chicken.speedx = 5
	
	
	enemy.x = 300
	enemy.y = 190
	enemy.scale = .5
	
	aispeed = 2
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	map.x = 0;
	map.y = 4; 
	map.scale = .79
	
	car1.x = 5
	car1.y = 17
	car1.scale = .1
	
	car2.x = 70
	car2.y = 300
	car2.scale = .2
	
	car3.x = 573
	car3.y = 400
	car3.scale = .1
	
	car4.x =  600
	car4.y = 370
	car4.scale = .17
	
	chicken.x = 
	chicken.y 
	chicken.scale = .3
	chicken.speedx = 5
	
	grass.x = 129
	grass.y = 63
	grass.scale = .79
	
	grass2.x = -348                                                                                                                                                        
	grass2.y = 411
	grass2.scale = .79
	
	grass3.x = -348                                                                                                                                                        
	grass3.y = -278
	grass3.scale = .79
	
	grass4.x = -348                                                                                                                                                        
	grass4.x = -348                                                                                                                                                        
	grass4.y = 63
	grass4.scale = .79
	
	grass5.x = 129                                                                                                                                                     
	grass5.y = 600
	grass5.scale = .79
	
	grass6.x = 129
	grass6.y = 410
	grass6.scale = .79
	
	grass7.y = -278
	grass7.x = 129
	grass7.scale = .79
	
	grass8.y = -278
	grass8.x = 620
	grass8.scale = .79
	
		
	grass9.x = 620
	grass9.y = 60
	grass9.scale = .79
	
	grass10.x = 620
	grass10.y = 410
	grass10.scale = .79
	
	
	
	win.y = 1
	win.x = 
	win.scale = 1.5
	
	
	
	death.x = 200 
	death.y = 100 
	death.scale = 1
	
	
//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		button.draw();
		button1.draw();
		
		
			
		
			
		
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
		car1.x = car1.x +6
		car2.y = car2.y -6
		car3.y = car3.y -6
		car4.x = car4.x -6
		
		if(chicken.collideObject (car1)){
		//alert ("You Lose")
		screen = 3
		}
		
		if(chicken.collideObject (car2)){
		//alert ("You Lose")
		screen = 3
		}  
		
		if(chicken.collideObject (car3)){
		//alert ("You Lose")
		screen = 3
		}
		
		if(chicken.collideObject (car4)){
		//alert ("You Lose")
		screen = 3
		}
		
		if(car1.x > 640){
		car1.x = -80
		}
		
		if(car2.y < -80){
		car2.y = 480
		}
		
		if(car3.y < -80){
		car3.y = 480
		}
		
		if(car4.x < -80){
		car4.x = 700
		}
		
		
	
		if(egg1.x > 10000){
		screen = 5
		}
		
		if(egg2.x > 10000){
		screen = 5   
		}
		
		if(enemy.x>chicken.x){
			enemy.x-=aispeed 
		};
		
			if(enemy.x<chicken.x){
			enemy.x+=aispeed 
		};
		
			if(enemy.y>chicken.y){
			enemy.y-=aispeed   
		};  
		
			if(enemy.y<chicken.y){
			enemy.y+=aispeed   
		};
		
		if(chicken.collideObject (grass)){ 
		chicken = chicken
		
		
		
		
		
		}else if(chicken.collideObject (egg1)){ 
		egg1.scale = 0.01 
		egg1.x = 10000  
		
		}else if(chicken.collideObject (egg2)){ 
		egg2.scale = 0.01 
		egg2.x = 10000  
		
		
		}else if(chicken.collideObject (egg3)){ 
		egg3.scale = 0.01 
		egg3.x = 10000  
		
		}else if(chicken.collideObject (egg4)){ 
		egg4.scale = 0.01 
		egg4.x = 10000 
		
		
		}else if(chicken.collideObject (egg6)){ 
		egg6.scale = 0.01 
		egg6.x = 10000  
		
		
		}else if(chicken.collideObject (egg7)){ 
		egg7.scale = 0.01 
		egg7.x = 10000  
		
		}
		
		
		if(egg1.x > 1000 && egg2.x > 1000 && egg3.x > 1000 && egg4.x > 1000 && egg6.x > 1000 && egg7.x > 1000){
		screen = 5
		}
		
		
		
		
		
		
		if(enemy.collideObject (chicken)){  
		screen = 4
		}
		if(enemy.x <129) enemy.x = 129
		if(enemy.x >480) enemy.x = 480
		
		
		if(enemy.y <63) enemy.y = 63
		if(enemy.y >280) enemy.y = 280
		
		
		if(chicken.collideObject (enemy)){
		screen = 4
		
		
		}
		
	
	    hole1.draw();
		map.draw();	
		grass.draw();
		grass2.draw();
		grass3.draw();
		grass4.draw();
		grass5.draw();
		grass6.draw();
		grass7.draw();
		grass8.draw();
		grass9.draw();
		grass10.draw();
		car1.draw();
		car2.draw();
		car3.draw();
		car4.draw();
		enemy.draw();
		chicken.draw();
		egg1.draw();
		egg2.draw();
		egg3.draw();
		egg4.draw();
		egg6.draw(); 
		egg7.draw();
		
		}else if(screen == 3){
		//another game screen
		
		ctx.fillStyle = "Black"
		ctx.fillText("You have failed your mission",300,100)
		death.draw();
		
		}else if(screen == 4){
	
		ctx.fillStyle = "White" 
		ctx.fillText("You have been eaten by the raccoon",300,300)
		death2.draw();


        

		}else if(screen == 5){
		////////////////////
		//	GAME SCREEN 5
		
		ctx.fillStyle = "White"
		ctx.fillText("You have won",300,300) 
		ctx.fillText("Two more levels will be developed in a while!",300,400)
		win.draw();
		
	

		}else if(screen == 6){
		// game screen 6
		ctx.fillStyle = "Black"
		text1.draw();
		
		}
		
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		
		}else if (screen == 1){
		if(button.isMouseOver()) button.job()
		
		}
		
	   if (screen == 1){
		if(button1.isMouseOver()) button1.job()
		   
		   
		   
		   
		   
		 
	   }
		
		
	   
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
		
		
		
		
		
		
		
		
		
		if (key == 82){ 
		screen = 1
	
		}else if(key==37){//left
		chicken.x -= chicken.speedx 
		if(chicken.x < 1) chicken.x = 3
		chicken.rotation = -90
		
	
		}else if (key == 38){//up
		chicken.y -= chicken.speedx; 
		if(chicken.y < 0) chicken.y = 0
		chicken.rotation = 0
		
		}else if (key == 39){//right
		chicken.x += chicken.speedx;
		if(chicken.x > 625) chicken.x = 624
		chicken.rotation = 90
		
		}else if (key == 40){//down
		chicken.y += chicken.speedx
		if(chicken.y > 410) chicken.y = 405
	
		chicken.rotation = 180
		
		}else if (key == 82){//Restart
		screen = 1
		
		}
		
	}, false); //End the event listener

	

	

})

