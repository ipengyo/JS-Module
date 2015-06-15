

window.onload=function(){
	var username = $('username');
	var msg = $('msg');
	username.onfocus = function(){
		msg.value="onfocus";
	};

	username.onchange = function(){
		msg.value = "输入的是:"+username.value;
		msg.style.backgroundColor = "#aaa";
	};

	/**
	 * 通过ID值获取元素
	 */
	function $(id){
		return document.getElementById(id);
	}
}