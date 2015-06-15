/*
 * animatedHeader.js
 * @http://tympanus.net/Blueprints/AnimatedHeader/js/cbpAnimatedHeader.min.js
 */
var animatedHeader = (function(){
	var header = document.querySelector('.navbar-fixed-animate');
    var doScroll = false;
    var changeHeaderOn = 400;

    /**
	 * 对原生js的DOM扩充  addClass removeClass
	 */
	function hasClass(obj, cls){
		return obj.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}

	function addClass(obj, cls){
		if(!hasClass(obj, cls)){
			obj.className += ' '+cls;
		}
	}

	function removeClass(obj, cls){
		if(hasClass(obj, cls)){
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			obj.className = obj.className.replace(reg, ' ');
		}
	}


	function init(){
		window.addEventListener('scroll', function(scrollY){
			if(!doScroll){
				doScroll = true;
				setTimeout( scrollPage, 250);
			}
		}, false);
	}

	function scrollPage(){
		var scrollY =  window.pageYOffset || document.documentElement.scrollTop ;
		if( scrollY >= changeHeaderOn ){
			addClass(header, 'navbar-shrink');
		}else{
			removeClass(header, 'navbar-shrink');
		}
		doScroll = false;
	}




	init();
})();