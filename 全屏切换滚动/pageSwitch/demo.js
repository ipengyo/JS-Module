(function($){
	var defaults = {
		'container' : '#container', //容器
		'sections'  : '.section',  //子容器
		'easing'    : 'ease',      //特效方式, ease-in,ease-out,linear
		'duration'  : 1000,       //每次动画执行的时间
		'pagination': true,       //是否显示分页
		'loop'      : false,      //是否循环
		'keyboard'  : true,       //是否支持键盘
		'direction' : 'vertical'  //滑动的方向 horizontal横屏,vertical竖屏
		'onpageSwitch': function(pagenum){}
	};
	var win = $(window),
	    container,sections;

	var opts = {},
	    canScroll = true;

	var iIndex = 0;
	var arrElement = [];
	var SP = $.fn.switchPage = function(options){

	}

	//滚轮向上滑动事件
	SP.moveSectionUp = function(){
		if(iIndex < (arrElement.length - 1)){
			iIndex++;
		}else if(opts.loop){
			iIndex = 0;
		}
		scrollPage(arrElement[iIndex]);
	};
	//滚轮向下滑动事件
	SP.moveSectionDown = function(){

	};


	//私有方法
	//页面滚动事件
	function scrollPage(element){
		var dest = element.position();
		if(typeof dest === 'undefined'){
			return ;
		}
		initEffects(dest,element);
	}
	//重写鼠标滑动事件
	$(document).on("mousewheel DOMM",MouseWheelHandler);
	function MouseWheelHandler(e){

	}

	//横向布局初始化
	function initLayout(){

	}

	//初始化分页
	function initPagination(){

	}
	//分页事件
	function paginationHandler(){

	}

	//是否支持css的某个属性
	function isSupportCss(property){

	}

	//渲染效果
	function initEffects(dest,element){

	}

	//窗口Resize
	var resizeId;
	win.resize(function(){

	});

	function reBuild(){

	}

	//绑定键盘事件
	function keyDown(){

	}

	$.fn.pageSwitch = function(options){
		return this.each(function(){

		});
	}

})(jQuery);