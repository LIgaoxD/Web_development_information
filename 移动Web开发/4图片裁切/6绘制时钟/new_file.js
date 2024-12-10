var oC = document.getElementById("myCanvas");
var oCtx = oC.getContext("2d");

function show(){
		//获取系统时间
var oDate = new Date();

var hour=oDate.getHours();
var minute=oDate.getMinutes();
var second=oDate.getSeconds();
// alert(hour);
//转化弧度
var oH=(hour*30-90)*Math.PI/180;
var oM=(minute*6-90)*Math.PI/180;
var oS=(second*6-90)*Math.PI/180;

oCtx.beginPath();
for (var i = 0; i < 60; i++) {
	//定起点	
	oCtx.moveTo(200, 200);
	//画
	oCtx.arc(200, 200, 150, Math.PI / 180 * 6 * i, Math.PI / 180 * 6 * (i + 1), false);
	//描边
	oCtx.stroke();

}
oCtx.closePath();


//绘制白色圆盘
//颜色
oCtx.beginPath();
oCtx.fillStyle = "white";
//圆心
oCtx.arc(200, 200, 150 / 20 * 19, 0, 2 * Math.PI, false);
oCtx.fill();
oCtx.closePath();


//大的分割线
oCtx.beginPath();
for (var i = 0; i < 12; i++) {
	//定起点	
	oCtx.moveTo(200, 200);
	oCtx.lineWidth = 3;
	//画
	oCtx.arc(200, 200, 150, Math.PI / 180 * 30 * i, Math.PI / 180 * 30 * (i + 1), false);
	//描边
	oCtx.stroke();

}
//圆盘
oCtx.closePath();

oCtx.beginPath();
oCtx.fillStyle = "white";
//圆心
oCtx.arc(200, 200, 150 / 20 * 18, 0, 2 * Math.PI, false);

oCtx.fill();
oCtx.closePath();

//时针
oCtx.beginPath();
oCtx.lineWidth=5;
oCtx.moveTo(200,200);
oCtx.arc(200,200,150/20*10,oH,oH,false);
oCtx.stroke();
oCtx.closePath();

//分针
oCtx.beginPath();
oCtx.lineWidth=3;
oCtx.moveTo(200,200);
oCtx.arc(200,200,150/20*14,oM,oM,false);
oCtx.stroke();
oCtx.closePath();

//秒针
oCtx.beginPath();
oCtx.lineWidth=1;
oCtx.moveTo(200,200);
oCtx.arc(200,200,150/20*19,oS,oS,false);
oCtx.stroke();
oCtx.closePath();
	
}  //show结尾


//定时器
setInterval(show,1000);
show();