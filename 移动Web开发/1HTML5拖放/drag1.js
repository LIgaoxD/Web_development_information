// 获取元素
var oImg=document.getElementById("img1");
var oDiv=document.getElementById("div1");
var i=1;  //全局变量声明

// 拖拽元素
// 按下鼠标瞬间的事件
oImg.ondragstart=function(){
	// 边框变红
	this.style.border='1px solid red';

}
// 拖拽图片
oImg.ondrag=function(){
	document.title='ok';
}
// 拖拽结束
oImg.ondragend=function(){
	this.style.border='none';
}
// 目标元素 div
//开始进入div
oDiv.ondragenter=function(){
	this.style.background='skyblue';
}
// 拖动
oDiv.ondragover=function(){
	// var i=1;
	document.title=i++;
	event.preventDefault();	//阻止默认行为
	
}	
//离开
oDiv.ondragleave=function(){
	this.style.background='white';
	// document.title='ok';
}
//释放鼠标
oDiv.ondrop=function(){
	
	alert('success!');
	
}




