//Version 5

	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////					READ THIS STUFF AT YOUR OWN RISK, ITS GR12 STUFF		////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	var ctx;
	var mx
	var my
	
	function updateMouse(a,b){
		mx = a;
		my = b;
	}
	
	function initializeLib(c){
		ctx = c;
	}
	
	var numObjects = 0;
	var numObjectsLoaded =0;
	function loadObjects(){
		numObjectsLoaded++;
	}
	
	//Input: path string of picture file location
	function makePicture(path){
		var newPic = new Image();
		newPic.src= path;
		newPic.onload = loadObjects;
		
		numObjects++;
		
		return newPic;
	}
	
	//Input: image path
	/*
	Usage: addFrames(newImage) will add an animation frame using a string path
			setWidth(new size) will scale the width to new value, same for height
			setHeight(new size) see above.
			
	
	
	*/
	
	
	/*Make sound*/
	
	function addSound(path, loop){
		var sv = new Audio(path);
		
		numObjects++;
	
		sv.addEventListener('canplaythrough', loadObjects, false);
		if(loop){
		sv.addEventListener('ended', function (){
			this.currentTime = 0;
			this.play();
			}, false);
		}else{
			sv.addEventListener('ended', function (){
				this.currentTime = 0;
				this.pause();
			}, false);
		
		}
		
		var result = {
			soundVar:sv,
			play:function(){this.soundVar.play();},
			pause:function(){this.soundVar.pause();},
			setVolume:function(v){this.soundVar.volume = v;},
			stop:function(){
				this.soundVar.pause();
				this.soundVar.currentTime = 0;
			}
		
		}
		
		return result;
	
	}
	
	
	
	
	
	
	
	
	function createWall(x,y,wi,he, im){
	
		var newObject = {
			x:x,
			y:y,
			speedx:0,
			speedy:0,
			width:wi,
			height:he,
			rotation:0,//to be used later
			setWidth:function(i){
				this.width = i;
			},
			setHeight:function(i){
				this.height = i;
			},
			collideObject:function(obj){
				var result = false;
			
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width<= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				
				if(obj.collideObject(this)) result = true;
				return result;
			},
			collidePoint:function(x,y){
				var result = false;
		
				if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){

					result = true;
				}
				return result;
			},
			visible:true,
			colour:'red',
			image:null,
			giveImage:function(path){
				this.image = makePicture(path);
				//this.setHeight (this.image.height);
				//this.setWidth (this.image.width);
			},
			draw:function(){
				if(this.visible){
					if(this.image == null){
					var oc = ctx.fillStyle;
					ctx.fillStyle = this.colour
					ctx.fillRect(this.x,this.y, this.width, this.height);

					ctx.fillStyle = oc;
					}else ctx.drawImage(this.image, this.x,this.y, this.width, this.height);
				}
			}
			
		}
		
		if(im!= null){
			newObject.giveImage(im);
		}
		
		//blocks.push(newObject);
		return newObject;
	}
	
	function createWallWithPic(x,y,wi,he, path){
	
		var newObject = {
			x:x,
			y:y,
			width:wi,
			height:he,
			rotation:0,//to be used later
			setWidth:function(i){
				this.width = i;
			},
			setHeight:function(i){
				this.height = i;
			},
			collideObject:function(obj){
				var result = false;
			
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width<= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				if(obj.collideObject(this)) result = true;
			
				return result;
			},
			collidePoint:function(x,y){
				var result = false;
		
				if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){

					result = true;
				}
				return result;
			},
			visible:true,
			colour:'red',
			image:null,
			giveImage:function(path){
				this.image = makePicture(path);
				//this.setHeight (this.image.height);
				//this.setWidth (this.image.width);
			},
			draw:function(){
				if(this.visible){
					if(this.image == null){
					var oc = ctx.fillStyle;
					ctx.fillStyle = this.colour
					ctx.fillRect(this.x,this.y, this.width, this.height);

					ctx.fillStyle = oc;
					}else {
						ctx.drawImage(this.image, this.x,this.y, this.width, this.height);
						this.setHeight (this.image.height);
						this.setWidth (this.image.width);
					}
				}
			}
			
		}
		
		newObject.giveImage(path);
		//blocks.push(newObject);
		
		return newObject;
	}
	
	function degRad(angle){
		return angle / 180 * Math.PI;
	
	}

	
	
	function createObjectPic(path){
		var im= makePicture(path);
	
		var aniFrames = [];
		aniFrames.push(im);
	
		var newObject = {
			x:0,
			y:0,
			speedx:0,
			speedy:0,
			width:im.width,
			height:im.height,
			rotation:0,//to be used later
			scale:1,
			setWidth:function(i){
				this.width = i;
			},
			setHeight:function(i){
				this.height = i;
			},
			collideObject:function(obj){
				var result = false;
			
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width <= this.x + this.width && obj.y >= this.y && obj.y <= this.y + this.height) result = true;
				
				if(obj.x >= this.x && obj.x <= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				
				if(obj.x + obj.width>= this.x && obj.x + obj.width<= this.x + this.width && obj.y + obj.height>= this.y && obj.y + obj.height <= this.y + this.height) result = true;
				
			
				//if other object hit this object
				if(obj.collidePoint(this.x, this.y)) result = true;
				if(obj.collidePoint(this.x + this.width, this.y)) result = true;
				if(obj.collidePoint(this.x, this.y + this.height)) result = true;
				if(obj.collidePoint(this.x + this.width, this.y + this.height)) result = true;
				
				
				//if srtadling other object
				if(this.x > obj.x && this.x + this.width < obj.x + obj.width){
					if(this.y < obj.y && this.y + this.height > obj.y + obj.height){
						result = true
					}
				}
				
				return result;
			},
			collidePoint:function(x,y){
				var result = false;
				//var objData = this.images[this.frameNumber].data;
			/*	var objData;
				
				var tempCanvas= document.createElement('canvas');
//var context = tempCanvas.getContext('2d');
//var img = document.getElementById('myimg');

				var imgCtx =  tempCanvas.getContext('2d');
				imgCtx.drawImage(zombie, 0, 0 );
				
				var zData = imgCtx.getImageData(0,0,zombie.width, zombie.height);
				*/
				
				if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){
					/*objData = zData.data[(x-this.x + ((y-this.y) * zombie.width)) * 4];
					
					if(objData != 0) result = true;*/
					
					result = true;
				}
				return result;
			},
			visible:true,
			colour:'red',
			images:aniFrames,
			addFrames:function(newFramePath){				
				this.images.push(makePicture(newFramePath));
			},
			frameNumber:0,
			animationDelay:5,
			animationCount:0,
			draw:function(){
				
				
				if(this.visible){
					//ctx.drawImage(this.images[this.frameNumber], this.x,this.y, this.width, this.height);
					ctx.save();
					ctx.translate(this.x + this.width/2, this.y + this.height/2);
					ctx.rotate(degRad(this.rotation));
				
					ctx.drawImage(this.images[this.frameNumber],this.width/(-2), this.height/(-2), this.width, this.height);
					ctx.restore();
					
					this.setWidth(this.images[this.frameNumber].width* this.scale);
					this.setHeight(this.images[this.frameNumber].height* this.scale);
				
					this.animationCount--;
				
					if(this.animationCount <= 0){
						this.animationCount = this.animationDelay;
						this.frameNumber++;
					
						if(this.frameNumber >= this.images.length) this.frameNumber = 0;
					
					}
				
				}
			}
			
		}

		return newObject;
	}


function createButton(x,y,wi,he, im, t){
	
		var newObject = {
			x:x,
			y:y,
			width:wi,
			height:he,
			text:t,
			textCol:'blue',
			rotation:0,//to be used later
			setWidth:function(i){
				this.width = i;
			},
			setHeight:function(i){
				this.height = i;
			},
			isMouseOver:function(){
				return mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height
			},
			collidePoint:function(x,y){
				var result = false;
		
				if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){

					result = true;
				}
				return result;
			},
			visible:true,
			colour:'red',
			image:null,
			giveImage:function(path){
				this.image = makePicture(path);
			},
			job:function(){
				alert("This button currently has no job, give it one!");
			},
			draw:function(){
				if(this.visible){
					if(this.image == null){
						var oc = ctx.fillStyle;
						var of = ctx.font;
						ctx.fillStyle = this.colour
						ctx.fillRect(this.x,this.y, this.width, this.height);

						ctx.fillStyle = this.textCol;
						ctx.font = '10pt Arial'
						ctx.fillText(this.text, this.x + this.width/2 - ctx.measureText(this.text).width/2, this.y + this.height/2 - 5);
						
						ctx.fillStyle = oc;
						ctx.font = of;
					}else ctx.drawImage(this.image, this.x,this.y, this.width, this.height);
				}
			}
			
		}
		
		if(im!= null){
			newObject.giveImage(im);
		}
		
		
		return newObject;
	}

