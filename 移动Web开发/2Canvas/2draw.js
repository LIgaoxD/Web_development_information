// 获取
var oC=document.getElementById("myCanvas");
// 环境
var oCtx=oC.getContext("2d");

// 绘制  三角形
//1 颜色
oCtx.strokeStyle="blue";

//2 粗细
oCtx.lineWidth=3;
// 定起点
oCtx.moveTo(50,50);
// 中间点
oCtx.lineTo(100,150);
oCtx.lineTo(150,100);
// 结束点
oCtx.lineTo(50,50);
//  描边
oCtx.stroke();


//绘制  圆弧

var oC1=document.getElementById("myCanvas1");
var oCtx1=oC1.getContext("2d");
oCtx1.arc(0,200,50,0,Math.PI/2,true)    //  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度
oCtx1.lineWidth=3;
oCtx1.strokeStyle="red";
oCtx1.stroke();

//绘制   圆

var oC2=document.getElementById("myCanvas2");
var oCtx2=oC2.getContext("2d");
// 开始路径
oCtx2.beginPath();

oCtx2.fillStyle="pink";  //颜色
oCtx2.arc(100,100,100,0,2*Math.PI,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
// 结束路径
oCtx2.closePath();
oCtx2.fill();  //填充
		 
//白色小圆弧

oCtx2.beginPath();
oCtx2.arc(100,100,25,Math.PI/6,Math.PI/6*5,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度
oCtx2.strokeStyle="white";
oCtx2.lineWidth="5";
// oCtx2.closePath();
oCtx2.stroke();


//多重圆弧

var oC3=document.getElementById("myCanvas3");
var oCtx3=oC3.getContext("2d");
// oCtx3.beginPath();
oCtx3.lineWidth=3;
oCtx3.strokeStyle="red";

for(var i=0,radius=50;i<8;i++){
	
	oCtx3.arc(0,200,radius,0,Math.PI/2,true);
	radius+=15;
	
}
oCtx3.stroke();
// oCtx3.arc(0,200,50,0,Math.PI/2,true)//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度
// oCtx3.arc(0,200,60,0,Math.PI/2,true)
// oCtx3.arc(0,200,70,0,Math.PI/2,true)
// oCtx3.arc(0,200,80,0,Math.PI/2,true)
// oCtx3.arc(0,200,90,0,Math.PI/2,true)
// oCtx3.closePath();



//倒着的圆弧
var oC4=document.getElementById("myCanvas4");
var oCtx4=oC4.getContext("2d");
oCtx4.arc(100,100,100,Math.PI/12*13,Math.PI/12*23,false);    //  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度
oCtx4.lineWidth=3;
oCtx4.strokeStyle="red";
oCtx4.stroke();


//交叉线

var oC5=document.getElementById("myCanvas5");
var oCtx5=oC5.getContext("2d");

oCtx5.beginPath();
oCtx5.lineWidth=3;
oCtx5.strokeStyle="blue";
oCtx5.moveTo(50,50);
oCtx5.lineTo(150,150);
oCtx5.closePath();
oCtx5.stroke();


oCtx5.beginPath();
oCtx5.lineWidth=5;
oCtx5.strokeStyle="red";
oCtx5.moveTo(150,50);
oCtx5.lineTo(50,160);
oCtx5.closePath();
oCtx5.stroke();

//扇形
var oC6=document.getElementById("myCanvas6");
var oCtx6=oC6.getContext("2d");

oCtx6.fillStyle="red";  //颜色
oCtx6.moveTo(50,50);
oCtx6.arc(50,50,100,0,Math.PI/3,false);//  横   纵坐标  绘制曲线的半径  起始弧度  结束弧度  方向逆t 顺f
oCtx6.closePath();
oCtx6.lineTo(50,50);
// oCtx2.closePath();
oCtx6.fill(); 

// 二次曲线
var oC7=document.getElementById("myCanvas7");
var oCtx7=oC7.getContext("2d");
oCtx7.moveTo(20,20);
//曲线
oCtx7.quadraticCurveTo(20,100,200,20);
oCtx7.stroke();
