/* ==========================================
   配合客戶背景圖片自行上傳

 * @ Author	  Fish
 * @ Date			2014.12.02 
 * @ Version  1.0.2

 * @ color    背景底色
 * @ imgUrl	 	圖片路徑
 * @ position 對齊方式
 * @ repeat   排列方式

 * @ position(對齊方式)
 * @ 0:左上, 1:左下, 2:右上, 3:右下
 * @ 4:水平垂直置中, 5:水平置上, 6:水平置下

 * @ repeat(排列方式)
 * @ 0:重複, 1:不重複, 2:水平延伸, 3:垂直延伸
========================================== */

;(function ($) {
	
	$.fn.resetBackground = function (options) { 
		
		var defaultVal = {
    	color: '#fff',
    	opacity: 'rgba(255,255,255,0)',
			imgUrl: 'none',
			position: 0,
    	repeat: 0
		};

		var obj = $.extend(defaultVal, options);

		// 對齊方式
	  switch (obj.position) {
	  default:
	  case 0:
	    position = '0 0'; //左上
	    break;
	  case 1:
	    position = '0 bottom' //左下
	    break;
	  case 2:
	    position = 'right 0' //右上
	    break;
	  case 3:
	    position = 'right bottom' //右下
	    break;
	  case 4:
	    position = 'center center' //水平垂直置中
	    break;
	  case 5:
	    position = 'center 0' //水平置上
	    break;
	  case 6:
	    position = 'center bottom' //水平置下
	    break;
	  }

	  // 排列方式
	  switch (obj.repeat) {
	  default:
	  case 0:
	    repeat = 'repeat'; //重複
	    break;
	  case 1:
	    repeat = 'no-repeat' //不重複
	    break;
	  case 2:
	    repeat = 'repeat-x' //水平延伸
	    break;
	  case 3:
	    repeat = 'repeat-y' //垂直延伸
	    break;
	  }
		
		var selObject = $(this);
    selObject.css({
    	'backgroundColor': obj.color,
    	'backgroundColor': obj.opacity,
    	'backgroundImage' : obj.imgUrl,
    	'backgroundPosition': position,
    	'backgroundRepeat': repeat
    });

		return this;
	};
	
})(jQuery);