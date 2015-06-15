/**
 * Created by ly on 2015/5/1.
 * author：liuyidi
 */

var animating = 0,
    page = 1,
    direction = 1,
    color = ["0da5d6","2ab561","de8910","16ba9d","0da5d6"],
    scrollout = null;

$(document).ready(function(){
    $(".page1").addClass("animatp1");
    animating = 1;
});

$('.pages').on("webkitTransitionEnd",function(){
    animating = 0;
    $('section').each(function(i,n){
        if(i==page-1){
            return;
        }
        if(n.className.indexOf("animat") > 0){
            n.className = 'page'+(i+1)
        }
    });
});

/**
 * 鼠标滚动
 */
$(document).on("mousewheel",function(e){
    if(scrollout){
        return;
    }
    scrollout = setTimeout(function(){
        scrollout = null;
        if(animating){
            return;
        }
        if(!scrollPage(e.originalEvent.wheelDelta)){
            return;
        }
        setMenu(page-1);
        animating = 1;
        $('body').css({"background":"#"+color[page-1]});
        clearTimeout(scrollout);
        scrollout = null;
    },300);
});

/**
 * 页面滚动方向
 */
function scrollPage(direct){
    if(direct<0){
        if(page>=5){
            return false;
        }
        nextPage();
        direction=1;
        page++;
    }else if(page >= 2){
        prvPage();
        direction = -1;
        page--;
    }else{
        return false;
    }
    return true;
}

/**
 * 操作侧边菜单-圆点滚动标签
 */
$('.menu a').click(function(){
    if(this.className == "focus"){
        return;
    }
    var menu = $('.menu a'),
        index = menu.index(this);
    menu.removeClass('focus');
    $(this).addClass('focus');
    animate(1);

    $('.pages').css({"-webkit-transform":"translate(0, -"+index+"00%)"});
    page = index + 1;
    animate(0);
    $('body').css({"background":"#"+color[index]});
})

/**
 * 设置侧边圆点菜单
 */
function setMenu(num){
    var menu = $('.menu a');
    menu.removeClass('focus');
    menu.eq(num).addClass('focus');
}

/**
 * 页面操作 
 */
function nextPage(){
    $('.pages').css({"-webkit-transform":"translate(0, -"+page+"00%"});
    animate(1);
}

function prvPage(){
    $('.pages').css({"-webkit-transform":"translate(0, -"+(page-2)*100+"%)"});
    animate(-1);
}

function animate(num){
    $('.page'+(page+num)).addClass("animatp"+(page+num));
}