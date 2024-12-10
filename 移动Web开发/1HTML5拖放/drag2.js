// 获取元素
var oImg = document.getElementById("img1");
var oDiv = document.getElementById("div1");
var i = 1;
// 拖拽元素
// 按下鼠标瞬间的事件
oImg.ondragstart = function() {
	// 边框变红
	this.style.border = '1px solid red';
	//图片名存 
	event.dataTransfer.setData("name", "images/milan.jpg");

}
// 拖拽图片时
oImg.ondrag = function() {
	document.title = 'ok';
}
// 拖拽结束 释放鼠标按键
oImg.ondragend = function() {
	this.style.border = 'none';
}
// 目标元素 div
//开始进入div  移动到目标元素
oDiv.ondragenter = function() {
	this.style.background = 'skyblue';
}
// 拖动  鼠标到目标元素上
oDiv.ondragover = function() {
	// var i=1;
	document.title = i++;
	event.preventDefault(); //阻止默认行为

}
//离开元素
oDiv.ondragleave = function() {
	this.style.background = 'white';
	// document.title='ok';
}
//释放鼠标
oDiv.ondrop = function() {

	// alert('success!');
	// alert(event.dataTransfer.getData("name"));
	//显示到div
	oDiv.innerHTML = (event.dataTransfer.getData("name"));
}
