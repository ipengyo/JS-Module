
/**
 * 基于jquery的焦点图 demo.js
 * http://demo.jq22.com/xunlei-150427162416/
 *@author: liuyidi
 * 2015-05-13 22:10
 */
(function($){
	var initHeight = $(window).height() - 60 ,
		$colorList = $('#color_list').find('.bgs_box'),
		$txtList = $('#txt_list').find('.item_txt'),
		$switchList = $('#switch_box').find('span'),
		timer = null,
		key = 1;

	$('#content').css('min-height', initHeight + 'px');
	/**
	 * 视窗改变时
	 */
	$(window).resize(function(){
		initHeight = $(window).height() - 60;
		$('#content').css('min-height', initHeight + 'px');
		if($(window).height() > 866){
			$('#ft_area').addClass('pst_ft');
		}else{
			$('#ft_area').removeClass('pst_ft');

		}
	})

	loadFinish();

	/**
	 * 当点击下面按钮时切换;
	 * 当放在按钮上时页面不动
	 */
	$('#switch_box').on('click', 'span', function(){
		var stepIndex = $switchList.index($(this));
		actFn(stepIndex);
	}).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			actFn(key);
		}, 7000)
	})

	/**
	 * 当点击左右侧边时
	 */
	$('.s_arr').on('click', 'a', function(){
		var step = $('.s_arr').find('a').index($(this));
		$('#switch_box').find('span').each(function(i){
			var css = $(this).hasClass("on");
			if(css){
				if(step == 0){
					if(i==0){
						step = 2;
					}else{
						step = i-1;
					}
				}else{
					if(i == 2){
						step = 0;
					}else{
						step = i+1;
					}
				}
			}
		});
		actFn(step);
	}).hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			actFn(key);
		}, 7000)
	})

	/**
	 * 轮播函数
	 */
	function actFn(stepIndex){
		var stepIndex = stepIndex;
		$switchList.eq(stepIndex).addClass('on').siblings().removeClass('on');
		$colorList.stop().eq(stepIndex).animate({opacity:1},800).css({flter: "Alpha(Opacity=100)"}).siblings().animate({opacity:0},800);
		$txtList.eq(stepIndex).addClass('on').siblings().removeClass('on');
		key = stepIndex;
	}

	/**
	 * 预加载banner动画背景图
	 */
	function preloadImages(){
		var arrImage = [];
		var parLen = arguments.length;
		var cur = 0;
		for(var i = 0; i < parLen; i++){
			arrImage[i] = new Image();
			arrImage[i].onload = function(){
				if(cur == parLen-1){
					loadFinish();
				}
				cur++;
			};
			arrImage[i].src = arguments[i];
		}
	}

	/**
	 * 自动播放
	 */
	function loadFinish(){
		$txtList.eq(0).addClass('item_txt_css3');
		$colorList.eq(0).find('.img_area').addClass('item_img_css3');
		//自动轮播
		timer = setInterval(function(){
			actFn(key);
		}, 7000);
	}
})(jQuery);