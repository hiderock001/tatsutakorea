
// 메인 배너

$(document).ready(function(){
	$(".rolling_page:last").prependTo(".rolling");
	$(".rolling").css("margin-left","-942px");
	
	setInterval(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))-942+"px"	
		},400,"easeOutBack",function(){
			$(".rolling").css("margin-left","-942px");
			$(".rolling_page:first").appendTo(".rolling");	
		});
	},3000);
		// next event
	$(".slide_next").click(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))-942+"px"	
		},400,"easeOutBack",function(){
			$(".rolling").css("margin-left","-942px");
			$(".rolling_page:first").appendTo(".rolling");	
		});
		
	});	
		
	$(".slide_prev").click(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))+942+"px"	
		},400,"easeOutBack",function(){
			$(".rolling").css("margin-left","-942px");
			$(".rolling_page:last").prependTo(".rolling");	
		});	
	});
	
	// GNB 이미지 체인지
	
	var ing_gnb = "";

		$('.gnb > li > a ').mouseenter(function(){	
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 1) {
				$(this).children().attr( "src", $(this).children().attr("src").replace(".png","_on.png") );
			} else {
				ing_gnb = $(this).children().attr("src");
			}
		});
		$('.gnb > li > a').mouseleave(function(){
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 2) {
				if( ing_gnb == "" ) {
					$(this).children().attr( "src", $(this).children().attr("src").replace("_on.png",".png") );
				} else {
					ing_gnb = "";
				}
			}
		});

		
	$(".qna_table_wrap > div:not(:first)").hide();
	$(".qna_cate_list > li ").click(function(evt) {
		var li_idx = $(this).index();
		$(".qna_table_wrap > div").hide();
		$(".qna_table_wrap > div").eq(li_idx).show();
	});
	


});