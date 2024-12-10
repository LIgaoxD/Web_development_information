var oC=document.getElementById("myCanvas");  //获取元素
var oCtx=oC.getContext("2d");		//准备环境
var x=112;
var y=150;
var words=new Array("你","好","北","北");
for (var i=0;i<4;i++){
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
	
	
}




// oCtx.beginPath();
// oCtx.fillStyle="skyblue";
// oCtx.arc(112,150,50,0,2*Math.PI,false);
// oCtx.fill();
// oCtx.font="30px 楷体";
// oCtx.textAlign="center";  //相对filltext指定的位置112  居中
// oCtx.textBaseline="middle";
// oCtx.fillStyle="white";
// oCtx.fillText("你",112,150);
// oCtx.closePath();

// oCtx.beginPath();
// oCtx.fillStyle="skyblue";
// oCtx.arc(224,150,50,0,2*Math.PI,false);
// oCtx.fill();  //填充颜色
// oCtx.font="30px 楷体";
// oCtx.textAlign="center";   //相对filltext指定的位置224  居中
// oCtx.textBaseline="middle";
// oCtx.fillStyle="white";
// oCtx.fillText("好",224,150);
// oCtx.closePath();

// oCtx.beginPath();
// oCtx.fillStyle="skyblue";
// oCtx.arc(336,150,50,0,2*Math.PI,false);
// oCtx.fill();
// oCtx.font="30px 楷体";
// oCtx.textAlign="center";
// oCtx.textBaseline="middle";
// oCtx.fillStyle="white";
// oCtx.fillText("北",336,150);
// oCtx.closePath();

// oCtx.beginPath();
// oCtx.fillStyle="skyblue";
// oCtx.arc(448,150,50,0,2*Math.PI,false);
// oCtx.fill();
// oCtx.font="30px 楷体";
// oCtx.textAlign="center";
// oCtx.textBaseline="middle";
// oCtx.fillStyle="white";
// oCtx.fillText("北",448,150);
// oCtx.closePath();