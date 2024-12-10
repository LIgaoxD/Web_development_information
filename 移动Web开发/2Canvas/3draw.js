var oC = document.getElementById("myCanvas");
var oCtx = oC.getContext("2d");
var oBtn = document.getElementById("btn");
var oF = document.getElementById("first");
var oS = document.getElementById("second");
var oT = document.getElementById("third");
var oU = document.getElementById("fourth");
//点击事件

oBtn.onclick = function() {
	var start = 0;
	var end = 0;

//数组颜色
	var colors = new Array("red", "blue", "green", "orange");
//数组
	var pers=new Array(oF.value,oS.value,oT.value,oU.value);
	// alert(oF.value);
	
	//一次生成4个  红色扇形  for 循环
	for (var i = 0; i < 4; i++) {
		//1.处理开始弧度

		p = pers[i]/100*Math.PI * 2; //由用户输入数值
		end = start + p;

		oCtx.beginPath();
		oCtx.fillStyle = colors[i]; //颜色
		oCtx.moveTo(200, 200);
		//圆弧
		oCtx.arc(200, 200, 150, start, end, false); //  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
		oCtx.fill(); //填充
		oCtx.closePath();
		//
		start = end;
	}


	//    四个分开来弄

	// oCtx.beginPath();
	// oCtx.fillStyle="red";  //颜色
	// oCtx.moveTo(200,200);
	// oCtx.arc(200,200,150,0,Math.PI/2,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
	// oCtx.fill(); 
	// oCtx.closePath();

	// oCtx.beginPath();
	// oCtx.fillStyle="blue";  //颜色
	// oCtx.moveTo(200,200);
	// oCtx.arc(200,200,150,Math.PI/2,Math.PI,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
	// oCtx.fill(); 
	// oCtx.closePath();

	// oCtx.beginPath();
	// oCtx.fillStyle="green";  //颜色
	// oCtx.moveTo(200,200);
	// oCtx.arc(200,200,150,Math.PI,Math.PI/2*3,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
	// oCtx.fill(); 
	// oCtx.closePath();

	// oCtx.beginPath();
	// oCtx.fillStyle="darkcyan";  //颜色
	// oCtx.moveTo(200,200);
	// oCtx.arc(200,200,150,Math.PI/2*3,0,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
	// oCtx.fill(); 
	// oCtx.closePath();



}
