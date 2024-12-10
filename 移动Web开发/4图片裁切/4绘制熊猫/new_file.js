var oC=document.getElementById("myCanvas");  //获取元素
var oCtx=oC.getContext("2d");		//准备环境
var count=0;


//绘制背景  1 加图片 

		var bg=new Image();
		bg.src="background.png";
	//2   加载完成绘制 
	
		// bg.onload=function(){
		// 	oCtx.drawImage(bg,0,0);	//  名字   横 纵坐标  宽 高
		// }
		
	//3   绘制panda			
		var sprite=new Image();
		sprite.src="sprite.png";
		//定义
		function draw(){
			oCtx.drawImage(bg,0,0);
			
			switch (count){
				case 0:
				oCtx.drawImage(sprite,0,0,170,172,400,180,170,172);
				count++;
				break;
				case 1:
				oCtx.drawImage(sprite,170.33,0,170,172,400,180,170,172);
				count++;
				break;
				case 2:
				oCtx.drawImage(sprite,340.66,0,170,172,400,180,170,172);
				count++;
				break;
				case 3:
				oCtx.drawImage(sprite,510.99,0,170,172,400,180,170,172);
				count++;
				break;
				case 4:
				oCtx.drawImage(sprite,681.33,0,170,172,400,180,170,172);
				count++;
				break;
				case 5:
				oCtx.drawImage(sprite,851.66,0,170,172,400,180,170,172);
				count++;
				break;
				case 6:
				oCtx.drawImage(sprite,1022,0,170,172,400,180,170,172);
				count++;
				break;
				case 7:
				oCtx.drawImage(sprite,1192.33,0,170,172,400,180,170,172);
				count++;
				break;
				case 8:
				oCtx.drawImage(sprite,1362.66,0,170,172,400,180,170,172);
				count=0;
				break;
				
			}
		}
		
		window.onload=setInterval(draw,180);	
		
		
		
		// window.onload=function(){
		// 	  //绘制背景
		// 	oCtx.drawImage(bg,0,0);
				//裁切  绘制熊猫
			// oCtx.drawImage(sprite,0,0,170,172,400,180,170,172); //前四个值为裁切的位置    横 纵坐标  宽 高
			// oCtx.drawImage(sprite,170.33,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,340.66,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,510.99,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,681.33,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,851.66,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,1022,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,1192.33,0,170,172,400,180,170,172);
			// oCtx.drawImage(sprite,1362.66,0,170,172,400,180,170,172);
		// }
		
		//定时器  draw绘制一张
	
