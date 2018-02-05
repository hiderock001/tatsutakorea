$(document).ready(function(){

	// 전체 카테고리
	(function(){
		$("#list1").click(function(){
			$("#popMenu").show();	
		});
		$("#closeBtn").click(function(){
			$("#popMenu").hide();	
		});

		$("#content_tbTOP_navi").click(function(){
			if($(this).hasClass("tbTOP_navi_on")){
				$(".s_popMenu").hide();	
				$(this).css("background-position","0px 0px").removeClass("tbTOP_navi_on");
			}else{
				$(".s_popMenu").show();	
				$(this).css("background-position","0px -51px").addClass("tbTOP_navi_on");
			}
		});
	}());


	// 인덱스 신상히트 예감
	var hit = $("#hitList");
	var wi = $("#hitList li").width();
	var maLeft = "margin-left";
	$(".hit_page:last").prependTo(hit);
	$(hit).css("margin-left","-192px");
	(function indexHit(){
		setInterval(function(){
			$(hit).animate({
				marginLeft:parseInt($("#hitList:not(:animated)").css(maLeft))-wi+"px"	
			},300,"swing",function(){
				$(hit).css(maLeft,-wi);
				$(".hit_page:first").appendTo(hit);	
			});
		},3000);
		
		
		$(".prev_btn").click(function(){
			$(hit).stop(indexHit).animate({
				marginLeft:parseInt($("#hitList:not(:animated)").css(maLeft))+wi+"px"	
			},300,"easeOutBack",function(){
				$(hit).css(maLeft,-wi);
				$(".hit_page:last").prependTo(hit);	
			});	
		});
		$(".next2_btn").click(function(){
			$(hit).stop(indexHit).animate({
				marginLeft:parseInt($("#hitList:not(:animated)").css(maLeft))-wi+"px"	
			},300,"easeOutBack",function(){
				$(hit).css(maLeft,-wi);
				$(".hit_page:first").appendTo(hit);	
			});	
		});
	}());
	

	// 인덱스 롤링 버튼 체인지
	(function(){
		var prevBtn = $(".prev_btn");
		var nextBtn = $(".next2_btn");

		$(prevBtn).mouseover(function(){
			$(this).attr("src","img/prev_btn_on.jpg");	
		});
		$(prevBtn).mouseout(function(){
			$(this).attr("src","img/prev_btn.jpg");	
		});
		$(nextBtn).mouseover(function(){
			$(this).attr("src","img/next2_btn_on.jpg");	
		});
		$(nextBtn).mouseout(function(){
			$(this).attr("src","img/next2_btn.jpg");	
		});
	}());
	
	// 고객센터 아코디언 메뉴
	(function(){
		var faqDd = $(".faq_list > dd");
		var faqDt = $(".faq_list > dt");

		 $(faqDd).hide();
		 $(faqDt).click(function(){
			if($(this).hasClass("tab_open")){
				$(this).next().hide();
				$(this).removeClass("tab_open");
			}
			else{
				$(faqDd).hide();
				$(faqDt).removeClass("tab_open");
				$(this).next().show();
				$(this).addClass("tab_open");
			}
		 });
	}());


	// 고객센터 탭 메뉴

	(function(){
		var faqFirst = $(".faq_tab_view_box div:not(:first)");
		var faqDiv = $(".faq_tab_view_box div");
		$(faqFirst).hide();
		$('.faq_tab_wrap ul > li ').click(function(evt) {
			var li_idx = $(this).index();
			$(faqDiv).hide();
			$(faqDiv).eq(li_idx).show();
			
		});
	}());
	
	
	// 고객센터 탭 On
	(function(){
		var faqLi = $(".faq_tab_wrap ul li");
		$(".faq_tab_wrap ul li:first").addClass("faq_tab_on");
			$(faqLi).click(function(){
			$(faqLi).removeClass("faq_tab_on");
				$(this).addClass("faq_tab_on");	
				
		});
	}());
	
	
	
	// 실명인증
	(function(){
		$(".certify_box div:not(:first)").hide();
		$('.certify_list > li ').click(function(evt) {
			var li_idx = $(this).index();
			$('.certify_box div').hide();
			$('.certify_box div').eq(li_idx).show();
		});

		$(".certify_list li:first").addClass("certify_tab_on");
		$(".certify_list li").click(function(){
		$(".certify_list li").removeClass("certify_tab_on");
			$(this).addClass("certify_tab_on");	
		});
	}());

	
	
	// 주소록 설정
	(function(){
		$(".add_mo_table_box").hide();
		$(".mo_add_p img, .mo_small_btn").click(function(){
			$(".add_mo_table_box").show();	
		});

		$(".add_cancel_btn").click(function(){
			$(".add_mo_table_box").hide();	
		});
	}());
	
	

	// 게시판 뷰- 덧글 지우기
	$(".del_dl").click(function(){
		$(this).parent().parent().parent().remove();
		return false;
	});


	// 페이징 클릭 버튼 배경색 넣기
	$(".paging_number").click(function(){
		$(".paging_number").removeClass("paging_on");	
		$(this).addClass("paging_on");
		return false;
	});

	
	// 빠른주문 게시판
	$(".quick_table tr:even td").css("background","#fafafa");
	$(".quick_del").click(function(){
		$(this).parent().parent().remove();	
	});

	


	// 상세페이지 견적내용 지우기
	$(".del_btn").click(function(){
		$(this).parent().parent().parent().remove();	
		return false;
	});


	// 상세페이지 카다로그 슬라이드

	(function(){
		var catal = $(".catal_slide");
		var ci = $(".catal_slide li").width();
		var sLast = $(".catal_slide").children().last();
		var sFirst = $(".catal_slide").children().first();

		$(sLast).prependTo(catal);
		$(catal).css(maLeft,"-398px");

		$(".slide_next").click(function(){
			var sLast = $(".catal_slide").children().last();
			var sFirst = $(".catal_slide").children().first();
			$(catal).stop().animate({
				marginLeft:parseInt($(".catal_slide:not(:animated)").css(maLeft))-ci+"px"	
			},200,function(){
				$(catal).css(maLeft,-ci);
				$(sFirst).appendTo(catal);	
			});	
			
		});
		$(".slide_prev").click(function(){
			var sLast = $(".catal_slide").children().last();
			var sFirst = $(".catal_slide").children().first();
			$(catal).stop().animate({
				marginLeft:parseInt($(".catal_slide:not(:animated)").css(maLeft))+ci+"px"	
			},200,function(){
				$(catal).css(maLeft,-ci);
				$(sLast).prependTo(catal);	
			});	
		});

		
		
	}());
		
		
	// 상세페이지 카다로그 탭 메뉴
	(function(){
		$(".pro_bottom > div:not(:first)").hide();
		$(".tab1_view").click(function(){
			$(".pro_bottom > div").hide()
			$(".probottom_tab1").show();
			return false;	
		});
		$(".tab2_view").click(function(){
			$(".pro_bottom > div").hide()
			$(".probottom_tab2").show();
			return false;	
		});
	}());
		

	// 상세페이지 카다로그 텍스트 칼라
	(function(){
		var tabList = $(".tab_list_btn");
		$("li:first",tabList).addClass("tab_on");
		$(">li",tabList).click(function(){
			$(">li",tabList).removeClass("tab_on");
			$(this).addClass("tab_on");	
		});
	}());
	
	$(".product_btn_list2 li:first").addClass("btn_list_on");
		$(".product_btn_list2 li").click(function(){
		$(".product_btn_list2 li").removeClass("btn_list_on");
		$(this).addClass("btn_list_on");	
	});
	
	// 사이드 메뉴
	(function(){
		var defaultTop=parseInt($("#sideMenu").css("top"));
		$(window).on("scroll",function(){
			var sideScroll = $(window).scrollTop();
			$("#sideMenu").stop().animate({
				top:defaultTop+sideScroll+"px"	
			},500,"swing");
		});
	
		
	}());

	(function(){
		var ss = 0;
		var plus = $(".estimate_plus");
		var minus = $(".estimate_minus");
		var totalSum = $(".sum").text();
		var resultSum = $(".result_won");

		$(".result_won").text(totalSum);
		
		$(plus).click(function(){
			var value = $(this).prev().val();
			var sumText = parseInt($(this).parent().prev().text());
			value++;
			$(this).prev().val(value);
			$(this).parent().next().text(sumText * value);
			
			
		});
		$(minus).click(function(){
			var value = $(this).prev().prev().val();
			var sumText = parseInt($(this).parent().prev().text());
			value--;
			if(value <= 1 )
				value = 1;
			$(this).prev().prev().val(value);
			$(this).parent().next().text(sumText * value);
		});

		
		
		

	}());

	(function(){
		$(".estimate_del").click(function(){
			$(this).parent().parent().remove();
		});
	}());


				
		
});

	
	
		
						
		
		

	