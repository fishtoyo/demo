/* ==========================================
 * @ Subject    Multi-line Ellipsis
 * @ Last Edit  Fish
 * @ Date       2014.12.12
========================================== */

;(function($) {
  $.fn.ellipsis = function(options) {
    var setting = {
          height: 40 // maxHeight
        },
        obj = $.extend(setting, options);

    $(this).each(function() {
        var ele = $(this), divH = obj.height;

        if(ele.css("overflow") == "hidden") {
          var text = ele.html(),
              multiline = ele.hasClass('multiline');

          var copyDiv = $(this.cloneNode(true))
            .hide()
            .css({
              'position': 'absolute',
              'overflow': 'visible',
              'width': multiline ? ele.width() : 'auto',
              'height': multiline ? 'auto' : divH
            });

          ele.after(copyDiv);
          
          function height() { return copyDiv.height() > divH; };
          function width() { return copyDiv.width() > ele.width(); };

          var ratio = multiline ? height : width;

          while (text.length > 0 && ratio()) {
            text = text.substr(0, text.length - 1);
            copyDiv.html(text + "...");
          }

          ele.html(copyDiv.html());
          copyDiv.remove();
        }
      });

    return this;
  };
})(jQuery);