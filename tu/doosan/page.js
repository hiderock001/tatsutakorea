// JavaScript Document

$(document).ready(function(){
		
	$(".page:first").prependTo(".slide2");
	$(".slide2").css("margin-left","-0px");
	$(".next").click(function(){
		$(".slide2").animate({
			marginLeft:parseInt($(".slide2").css("margin-left"))-100+"%"	
		},0,"swing",function(){
			$(".slide2").css("margin-left","-100%");
			$(".page:first").appendTo(".slide2");
			});
		return false
		});
		
	$(".prev").click(function(){
			$(".slide2").animate({
				marginLeft:parseInt($(".slide2").css("margin-left"))+100+"%"	
			},0,"swing",function(){
				$(".slide2").css("margin-left","-100%");
				$(".page:last").prependTo(".slide2");
			});	
		return false	
		});
	$("nav").css("display","none");
	$(".toggle").toggle(function(){
		$("nav").show(300);
		},
		function(){
		$("nav").hide(300);
	
		});
	
	$(".sub_gnb").hide();
	$(".gnb > li > a").toggle(function(){
		$(".gnb > li > a").removeClass("close");
		$(".sub_gnb").hide();
		$(this).addClass("close");
		$(this).next().slideDown(500);	
	},function(){
		$(".sub_gnb").slideUp(500);
		$(this).removeClass("close");
		$(this).addClass(".gnb > li >a");
	});
});