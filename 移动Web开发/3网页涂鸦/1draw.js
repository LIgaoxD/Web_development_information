var oC = document.getElementById("myCanvas");
var oCtx = oC.getContext("2d");
//按下鼠标
oC.onmousedown = function() {
	// alert(event.clientX);
	// alert(event.clientY);
	var x = event.clientX;
	var y = event.clientY;
	//起点
	oCtx.moveTo(x, y);
	oCtx.lineWidth = 3;
	oCtx.strokeStyle = "orange";
	//鼠标被移动
	oC.onmousemove = function() {
		var x = event.clientX;
		var y = event.clientY;
		//终点
		oCtx.lineTo(x, y);
		//画线
		oCtx.stroke();

	}
	//鼠标按键松开
	oC.onmouseup = function() {

		oC.onmousemove = null;
		oC.onmouseup = null;
	}

}
//鼠标从某元素移开
// oC.onmouseout=function(){

// }
