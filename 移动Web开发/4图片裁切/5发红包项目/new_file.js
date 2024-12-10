var oC=document.getElementById("myCanvas");
var oCtx=oC.getContext("2d");
var oR=document.getElementById("reset");
var oS=document.getElementById("show");
var oImg=document.getElementById("blurImg");

var img=new Image();
img.src="pic.jpg";

img.onload=function(){
	
	oCtx.drawImage(img,0,0);
	
}
// 创建圆
oCtx.arc(oC.width*Math.random(),oC.width*Math.random(),50,0,Math.PI*2,false);
// 裁切
oCtx.clip();
// 绘制原图
oCtx.drawImage(img,0,0);
// 清除
oR.onclick=function(){
	oCtx.clearRect(0,0,oC.width,oC.height);
}
//红包 alter
oS.onclick=function(){
	alert("收到红包!");
	oImg.style.filter="none";
}

































