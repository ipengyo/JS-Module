
/**
 * 创建一个函数
 */
function openMask(){
	//获取页面高度和宽度
	var sHeight=document.documentElement.scrollHeight;
	var sWidth=document.documentElement.scrollWidth;
    //可视区域的高度和宽度
    //如果页面时一个竖向的页面,那么可视区域的宽度和页面宽度是一样的.
    var wHeight=document.documentElement.clientHeight;
    var wWidth=document.documentElement.clientWidth;
    //创建一个节点div,实现遮罩
	var oMask=document.createElement("div");
	    oMask.id="mask";
	    oMask.style.height=sHeight+"px";
	    oMask.style.width=sWidth+"px";
	    document.body.appendChild(oMask);
	//创建登录框节点
	var oLogin=document.createElement("div");
	    oLogin.id="login";
	    oLogin.innerHTML="<div class='loginCon'><div id='close'></div></div>";
	    document.body.appendChild(oLogin);
	//获取登录框的高度和宽度
	    var dHeight=oLogin.offsetHeight;
	    var dWidth=oLogin.offsetWidth;
		
		oLogin.style.left=(sWidth-dWidth)/2+"px";
		oLogin.style.top=(wHeight-dHeight)/2+"px";
    //获取关闭按钮,点击遮罩和关闭按钮关闭
	var oClose=document.getElementById("close");
	oClose.onclick=oMask.onclick=function(){
    	document.body.removeChild(oMask);
    	document.body.removeChild(oLogin);
    }
}

window.onload=function(){
	var oBtn=document.getElementById("btnLogin");
    oBtn.onclick=function(){
    	openMask();
    }
}