$(function(){
	var nav = $("nav");
	var toggle = $("#toggle");
	var close = $(".close");
	$(nav).css("margin-left","-80%");

	$(toggle).on("click",function(){
		$(nav).animate({
			marginLeft:"0%"	
		},500);	
	});
	$(".snb").css("display","none");
	$(".gnb > li > a").click(function(){
		if($(this).hasClass("on")){
			$(this).next().slideUp();
			$(this).removeClass("on");
		}else{
			$(this).next().slideDown();
			$(this).addClass("on");
		}
	});
	$(close).on("click",function(){
		$(nav).animate({
			marginLeft:"-80%"	
		},500);		
	});
});
	



