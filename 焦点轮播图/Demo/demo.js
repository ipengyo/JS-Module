
window.onload = function(){
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var aButtons = document.getElementById('list').getElementsByTagName('span');
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var index = 1;
	var animated = false;
	var timer;

	/**
	 * 动画效果Animate
	 */
	function animate(offset){
		animated = true;
		var newLeft = parseInt(list.style.left + offset);
		var time = 300;  //位移总时间
		var interval = 10;  //位移间隔时间
		var speed = offset/(time/interval);  //每次位移量

		function go(){
			if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.lfet) < newLeft)){
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, interval);
			}else{
				animated = false;
				list.style.left = newLeft + "px";		
				if(newLeft > -600){
					list.style.left = -3000 + "px";
				}
				if(newLeft < -3000){
					list.style.left = -600 + "px";
				}
			}
		}
		go();
	}
    
    /**
     * 自动播放 & 停止播放
     */
    function play(){
    	timer = setInterval(function(){
    		next.onclick();
    	}, 3000);
    }

    function stop(){
    	clearInterval(timer);
    }

    /**
     * 按钮展示 
     */
	function showButton(){
		for (var i = 0; i < aButtons.length; i++) {
			if(aButtons[i].className = "on"){
				aButtons[i].className = " ";
				break;
			}
		}
		aButtons[index - 1].className = "on";
	}

	/**
	 * 左右点击事件
	 */
	next.onclick = function(){
		if(index == 5){
			index = 1;
		}else{
			index += 1;
		}

		if(animated == false){
			animate(-600);
		}
		showButton();
	}

	prev.onclick = function(){
		if(index == 1){
			index = 5;
		}else{
			index -= 1;
		}

		if(animated == true){
			animate(600);
		}
		showButton();
	}

	/**
	 * 按钮点击事件
	 */
	for (var i = 0; i < aButtons.length; i++) {
		aButtons[i].onclick = function(){
			if(this.className == 'on'){
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));  //获取自定义的属性
			var offset = -600 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		}
	}

	/**
	 * 容器移入或者移出
	 */
	container.onmouseover = stop;
	container.onmouseout = play;
    
    play();
}