var aLi = document.getElementsByTagName("li"); //数组  aLi[0]  aLi[3]
var oChar = document.getElementById("cart");
var sum=0;

// alert(aLi.length);
for (var i = 0; i < aLi.length; i++) {
		// 拖拽前触发
	aLi[i].ondragstart = function() {
		// 边框变红
		this.style.border = '1px solid red';
		// 获取拖拽的li里的p内容 存setDate
		var aP = this.getElementsByTagName("p");
		// alert(aP[1].innerHTML);
		event.dataTransfer.setData("name", aP[0].innerHTML);
		event.dataTransfer.setData("money", aP[1].innerHTML);
	}
		// 释放鼠标按钮的时候
	aLi[i].ondragend = function() {
		this.style.border = '2px solid #ccc';
	}
}

		// 移到某个元素的时候触发
oChar.ondragover = function() {
	event.preventDefault();
}
		// 拖动操作结束,getDate获取书名和价格
oChar.ondrop = function() {
	// alert('ok');
	// document.title('ok');
	var name = event.dataTransfer.getData("name");
	var money = event.dataTransfer.getData("money");
	// alert(name+money);
	// oChar.innerHTML = (name + money);
	
	// 动态创建p 1)创建p节点 	2)作为字节点添加到父节点
	var oP=document.createElement("p");
	
	var oSpan_1=document.createElement("span");
	oSpan_1.innerHTML=name;
	oP.appendChild(oSpan_1);
	
	var oSpan_2=document.createElement("span");
	oSpan_2.innerHTML="1";
	oP.appendChild(oSpan_2);
	
	var oSpan_3=document.createElement("span");
	oSpan_3.innerHTML=money;
	oP.appendChild(oSpan_3);
	
	oChar.appendChild(oP);
	
	// 总价计算
	var oMoney   =document.createElement("div");
	sum+=parseInt(money);	
	oMoney.innerHTML=sum+"￥"
	oChar.appendChild(oMoney);

}
