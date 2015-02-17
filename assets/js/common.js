jQuery(document).ready(function(e) {
 
  // 下拉選單
  if (jQuery('.selectBox')[0]) {
    jQuery('.selectBox select').animate({ opacity: 0 },0).change(function(){
      jQuery(this).parent().find('label').html(jQuery('option:selected', this).attr('title'));
    });
  }
  
});