var oBox = document.getElementById("box");
var oUl=document.getElementById("ul1");
//进入
oBox.ondragenter = function() {
	this.innerHTML = "可以释放鼠标了~";

}
//离开
oBox.ondragleave = function() {
	this.innerHTML = "将文件拖拽到此区域";

}
oBox.ondragover = function() {

	event.preventDefault(); //阻止默认行为

}
//释放鼠标  放置元素时
oBox.ondrop = function() {
	// alert('ok');
	event.preventDefault();
	var fs = event.dataTransfer.files;
	// alert(fs.length); 3
	for (var i = 0; i < fs.length; i++) {
		//创建
		var fr = new FileReader();
		//读地址
		fr.readAsDataURL(fs[i]);
		//弹出文件名
		fr.onload = function() {
			// alert(this.result);
			// 动态创建li 1)创建li节点 	2)作为字节点添加ul
			var oLi=document.createElement("li");
			// oLi.innerHTML="pic";
			//动态创建img
			var oImg=document.createElement("img");
			oImg.src=this.result;
			oUl.appendChild(oLi);
			oLi.appendChild(oImg);
		}

	}
}
