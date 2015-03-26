(function($) {
  
  var zoomWallpaper = function(element, options) {

    var imgReady = (function() {

      var list = [], intervalId = null,
  
      // 用來執行隊列
      tick = function() {
        var i = 0;
        for (; i < list.length; i++) {
          list[i].end ? list.splice(i--, 1) : list[i]();
        };
        !list.length && stop();
      },
    
      // 停止所有定時器隊列
      stop = function() {
        clearInterval(intervalId);
        intervalId = null;
      };
    
      return function(url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
          img = new Image();
        
        img.src = url;
    
        // 如果圖片被緩存，則直接返回緩存數據
        if (img.complete) {
          ready.call(img);
          load && load.call(img);
          return;
        };
        
        width = img.width;
        height = img.height;
        
        // 加載錯誤後的事件
        img.onerror = function() {
          error && error.call(img);
          onready.end = true;
          img = img.onload = img.onerror = null;
        };
        
        // 圖片尺寸就緒
        onready = function() {
          newWidth = img.width;
          newHeight = img.height;
          if (newWidth !== width || newHeight !== height ||
            // 如果圖片已經在其他地方加載可使用面積檢測
            newWidth * newHeight > 1024
          ) {
            ready.call(img);
            onready.end = true;
          };
        };
        onready();
        
        // 完全加載完畢的事件
        img.onload = function() {
          // onload在定時器時間差范圍內可能比onready快
          // 這裡進行檢查並保證onready優先執行
          !onready.end && onready();
        
          load && load.call(img);
          
          // IE gif動畫會循環執行onload，置空onload即可
          img = img.onload = img.onerror = null;
        };
    
        // 加入隊列中定期執行
        if (!onready.end) {
          list.push(onready);
          // 無論何時只允許出現一個定時器，減少瀏覽器性能損耗
          if (intervalId === null) intervalId = setInterval(tick, 40);
        };
      };
    })();
    
    var $win = $(window), $wEle = $(element);
    
    var settings = $.extend({
        event: 'ele.resize'
      }, options || {});

    // 背景圖隨視窗縮放
    $wEle.on('dragstart', 'img', function(e) {
      e.preventDefault();
    }).on('init', function(e) {
      
      var $iEle = $(this).find('img');
      var rw, cw, rh, ch, cx, cy;

      imgReady($wEle.data('full-picture'), function() {
        var vw = this.width, vh = this.height;
        $iEle.attr('src', this.src);
        $wEle.off(settings.event).on(settings.event, function(e) {
          rw = cw = $wEle.width();
          rh = ch = $wEle.height();
          cx = 0, cy = 0;
          if ((vw > vh && ch != vh) || (vw < vh && cw == vw) || (vw == vh && cw > ch)) {
            var scale = ch / (vh * (cw / vw));
            if (scale > 1) {
              rw = Math.ceil(cw * scale);
              cx = Math.ceil(rw / 2 - cw / 2);
            } else {
              rh = Math.ceil(ch / scale);
              cy = Math.ceil(rh / 2 - ch / 2);
            }
          } else if ((vw < vh && cw != vw) || (vw > vh && ch == vh) || (vw == vh && cw < ch)) {
            var scale = cw / (vw * (ch / vh));
            if (scale > 1) {
              rh = Math.ceil(ch * scale);
              cy = Math.ceil(rh / 2 - ch / 2);
            } else {
              rw = Math.ceil(cw / scale);
              cx = Math.ceil(rw / 2 - cw / 2);
            }
          }
          
          var o = {};
  
          switch (parseInt($wEle.data('direction') || 0)) {
          default:
          case 0:
            o = {width: rw, height: rh, top: -cy, left: -cx, bottom: 'auto', right: 'auto'};
            break;
          case 4:
            o = {width: rw, height: rh, top: -cy, left: 'auto', bottom: 'auto', right: 0};
            break;
          case 8:
            o = {width: rw, height: rh, top: -cy, left:  0, bottom: 'auto', right: 'auto'};
            break;
          case 2:
            o = {width: rw, height: rh, top: 0, left: -cx, bottom: 'auto', right: 'auto'};
            break;
          case 6:
            o = {width: rw, height: rh, top: 'auto', left:  -cx, bottom: 0, right: 'auto'};
            break;
          case 1:
            o = {width: rw, height: rh, top: 0, left: 0, bottom: 'auto', right: 'auto'};
            break;
          case 3:
            o = {width: rw, height: rh, top: 0, left: 'auto', bottom: 'auto', right: 0};
            break;
          case 5:
            o = {width: rw, height: rh, top: 'auto', left: 'auto', bottom: 0, right: 0};
            break;
          case 7:
            o = {width: rw, height: rh, top: 'auto', left:  0, bottom: 0, right: 'auto'};
            break;
          }
          
          $iEle.css(o);
          
        }).filter(':not(:hidden)').trigger(settings.event);
      });
    }).trigger('init');
    
    $win.on('resize', function(e) {
      $wEle.trigger(settings.event);
    });
  };
  
  $.fn.zoomWallpaper = function(options) {
    zoomWallpaper(this, options);
  };

})(jQuery);