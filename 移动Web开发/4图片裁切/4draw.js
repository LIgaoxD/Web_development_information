var oC=document.getElementById("myCanvas");  //获取元素
var oCtx=oC.getContext("2d");		//准备环境
var x=112;
var y=150;
var i=0;
var words=new Array("你","好","北","北");

//绘制四个圆  定时器

// setInterval(函数,时间);
setInterval(show,100);

function show(){
	if (i<4){
	//圆  1
	oCtx.beginPath();
	oCtx.fillStyle="skyblue";
	//圆心
	oCtx.arc(x,y,50,0,2*Math.PI,false);
	oCtx.fill();
	//文字
	oCtx.font="30px 楷体";
	oCtx.textAlign="center";  //相对filltext指定的位置112  居中
	oCtx.textBaseline="middle";
	oCtx.fillStyle="white";
	oCtx.fillText(words[i],x,y);
	oCtx.closePath();
	x+=112;
	i++;
	} else{
		//清空画布
		oCtx.clearRect(0,0,oC.width,oC.height);
		//恢复  x i
		x=112;
		i=0;
		
	}
	
}




// oCtx.beginPath();
// oCtx.closePath();


