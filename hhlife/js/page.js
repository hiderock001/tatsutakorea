

$(function(){
	$(".gnb-1depth li a").on("mouseenter focus",function(){
		$(".gnb-2depth").slideDown(300);	
	});	
	$(".header").mouseleave(function(){
		$(".gnb-2depth:not(:animated)").slideUp(300);	
	});	

	$(".category-list > li a").on("click",function(){
		if($(this).hasClass("on")){
			$(".category-list > li a").removeClass("on");
			$(this).removeClass("on");
			$(this).next("ul").hide();
		}else{
			$(".category-list > li ul").hide();
			$(".category-list > li a").removeClass("on");
			$(this).addClass("on");
			$(this).next("ul").show();
		}
	});
	$(".category-list li ul a").on("click",function(){
		var text = $(this).text();
		$(this).parent().parent().prev().text(text);
	});
});