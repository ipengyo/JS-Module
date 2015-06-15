window.onload=function(){
	var oBtn = document.getElementById("gotop");

	window.onscroll = function(){
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		var clientHeight = document.documentElement.clientHeight;
		if(oTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}

	}

	oBtn.onclick=function(){
		gotop('top',50);		
	}
}

function gotop(direction,timer){
	if(direction != "top"){
		return false;
	}
	timer = setInterval(function(){
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		var iSpeed = Math.floor(-oTop / 5);
		document.documentElement.scrollTop = document.body.scrollTop = oTop + iSpeed;

		if(oTop == 0){
			clearInterval(timer);
		}
	},timer);
}