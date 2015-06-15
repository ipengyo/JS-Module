

window.onload=function(){
	/**
	 * 导入图片数据
	 *
	var images = document.getElementsByTagName('img');   
    for(var i=0; i<images.length; i++){
    	images[i].src="images/"+i+".jpg";
    }
    /
    /**
     *
     */
    
    var dataInt={
    	"data":[  {"src":"0.jpg"},
    	          {"src":"1.jpg"},
    	          {"src":"2.jpg"},
    	          {"src":"3.jpg"},
    	          {"src":"4.jpg"},
    	          {"src":"5.jpg"},
    	          {"src":"6.jpg"},
    	          {"src":"7.jpg"},
    	          {"src":"8.jpg"}
    	       ]  
    }
    window.onscroll=function(){
    	if(checkScrollSlide){
    		var oParent=document.getElementById('main');
    		// 将数据渲染到当前页面的尾部
    		for(var i=0; i<dataInt.data.length; i++){
    			var oBox=document.createElement("div");
    			oBox.className="box";
    			oParent.appendChild(oBox);
    			var oPic=document.createElement("div");
    			oPic.className="pic";
    			oBox.appendChild(oPic);
    			var oImg=document.createElement('img');
    			oImg.src="images/"+dataInt.data[i].src;
    			oPic.appendChild(oImg);
    		}
    		waterfall('main','box');
    	}
    }
}

/**
 * 瀑布流主函数
 */
function waterfall(parent,box){
	// 将main下面所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//console.log(oBoxs.length);
	//计算整个页面显示的列数(页面宽/box的宽)
	var oBoxWidth=oBoxs[0].offsetWidth; //console.log(oBoxWidth); 262px
	var cols=document.documentElement.clientWidth/oBoxWidth;  
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxWidth*cols+"px;margin:0 auto"; 
	//console.log(cols);
	//存放的是竖直方向的高
	var hArr = [];
	for(var i=0; i<oBoxs.length; i++){
		if(i<cols.toFixed(0)){  //toFixed(0); 求整,去掉小数点后面的数
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);  //求hArr数组中的最小值
			var index=getMinhIndex(hArr,minH);   //求到了最小值的索引
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			//上面等价于 oBoxWidth*index+'px';		
			hArr[index] += oBoxs[i].offsetHeight;  //把高度最小的图片加上紧跟其下的图片的高；
		}
	}

}

/**
 * 获取父元素下的所有元素Class为box的元素
 */
function getByClass(parent,clsName){
	var boxArr = [],  //用来存储获取到的所有class为box的元素
	    aElements=parent.getElementsByTagName("*");  //获取parent元素下所有的元素

	for(var i=0; i<aElements.length; i++){
		if(aElements[i].className==clsName){
			boxArr.push(aElements[i]);
		}
	}
	return boxArr;
}
/**
 * 获取一个数组中的某个值的索引
 */
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}

/**
 * 判断是否具备了滚动条加载数据库的条件
 */
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	var clientH=document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH<scrollTop+clientH)?true:false;
}