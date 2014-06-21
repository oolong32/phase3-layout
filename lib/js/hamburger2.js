$(function(){
	var menuStatus;
	
	// nav = menu
	// .pages/#home = ym-wrapper
	// header/showmenu = hamburger
	// 
	$("#hamburger").click(function(){
		if(menuStatus != true){				
		$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true});
		  return false;
		  } else {
			$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false});
			return false;
		  }
	});

	$('.ym-wrapper').live("swipeleft", function(){
		if (menuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "0px",
		  }, 300, function(){menuStatus = false});
		  }
	});
	
	$('.ym-wrapper').live("swiperight", function(){
		if (!menuStatus){	
		$(".ui-page-active").animate({
			marginLeft: "165px",
		  }, 300, function(){menuStatus = true});
		  }
	});
	
	$("nav ul li a").click(function(){
		var p = $(this).parent();
		if($(p).hasClass('active')){
			$("nav li").removeClass('active');
		} else {
			$("nav li").removeClass('active');
			$(p).addClass('active');
		}
	});
		
});
