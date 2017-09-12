jQuery(document).ready(function($) {
  	$(window).scroll(function(){
		if( $(document).scrollTop() > 0) {
			$('.footer-sticky').show();
		}  
	  else {
			$('.footer-sticky').hide();
		}
 	 });		
});