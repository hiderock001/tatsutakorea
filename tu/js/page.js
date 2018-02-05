
	


	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 0){
			$("#header").css("position","fixed").css("z-index","9999");
			
		}else if(scroll == 0){
			$("#header").css("position","relative").css("z-index","9999");
			$(".h_bottom").slideUp(300);
		}
	});

	function dropMenu(){
		var con = $("#contents");
		var gnb = $(".gnb li");
		var headerBottom = $(".h_bottom");
		var header = $("#header");
		
		$(headerBottom).hide();

		$(gnb).on("click",function(){
			$(".h_bottom").slideToggle(function(){
				$(".all_menu").removeClass("all_on");
				$(".all_box").hide();	
			});	
			return false;
		});
			
	}

	function gnbtabMenu(){
		$(".gnb li").mouseenter(function(evt) {
			var li_idx = $(this).index();
			$(".h_bottom_inner div").hide();
			$(".h_bottom_inner div").eq(li_idx).show();
		});
	}

	$(document).ready(function(){
		$(".h_bottom").hide();	
		
		// gnb 드랍
		dropMenu();
		gnbtabMenu();

		// gnb 이미지 체인지
		var ing_gnb = "";

			$(".gnb li").mouseenter(function(){	
				var img_src = $(this).children().attr("src").split("_on");
				if( img_src.length == 1) {
					$(this).children().attr( "src", $(this).children().attr("src").replace(".png","_on.png") );
				} else {
					ing_gnb = $(this).children().attr("src");
				}
			});
			$(".gnb li").mouseleave(function(){
				var img_src = $(this).children().attr("src").split("_on");
				if( img_src.length == 2) {
					if( ing_gnb == "" ) {
						$(this).children().attr( "src", $(this).children().attr("src").replace("_on.png",".png") );
					} else {
						ing_gnb = "";
					}
				}
			});

		
		// lnb 메뉴
		$(".lnb_list li > ul").hide();
		$(".lnb_list > li > a").click(function(){
			if($(this).parent().hasClass("minus_1")){
				$(this).next(".lnb_2_list").hide();
				$(this).parent().removeClass("minus_1");
			}else{
				$(".lnb_list ul").hide();
				$(".lnb_2_list li").removeClass("minus_2");
				$(".lnb_list > li > a").parent().removeClass("minus_1");
				$(this).next(".lnb_2_list").show();
				$(this).parent().addClass("minus_1");
			}
			return false;
		});

		$(".lnb_2_list > li > a").click(function(){
			if($(this).parent().hasClass("minus_2")){
				$(this).next(".lnb_3_list").hide();
				$(this).parent().removeClass("minus_2");
			}else{
				$(".lnb_2_list ul").hide();
				$(".lnb_2_list > li > a").parent().removeClass("minus_2");
				$(this).next(".lnb_3_list").show();
				$(this).parent().addClass("minus_2");
			}
			return false;
		});	

		

		 var subHeight = $(".sub_contents").height();
		 $("#lnb").css("height",subHeight);

		
		// gnb pointer 따라 가기
		var pointer = $(".pointer");

		$(pointer).hide();
		
		$(".gnb_wrap").hover(function(){
			$(pointer).show();
		},function(){
			$(pointer).hide();
		});
			
		
		$(".gnb1").mouseover(function(){
			$(pointer).stop().animate({
				left : 130
			},300,"easeInOutQuad");	
		});
		$(".gnb2").mouseover(function(){
			$(pointer).stop().animate({
				left : 403
			},300,"easeInOutQuad");	
		});
		$(".gnb3").mouseover(function(){
			$(pointer).stop().animate({
				left : 680
			},300,"easeInOutQuad");	
		});
		$(".gnb4").mouseover(function(){
			$(pointer).stop().animate({
				left : 957
			},300,"easeInOutQuad");	
		});
		
		// 사이드 퀵 메뉴
		var defaultTop=parseInt($("#sideMenu").css("top"));
		
		$(window).on("scroll",function(){
			var scv=$(window).scrollTop();
			$("#sideMenu").stop().animate({top:scv+defaultTop+"px"},500,"swing");
		});

		$(".data_table tr td:first-child").css("font-weight","bold").css("text-align","left").css("padding-left","20px");
		

		$(".lnb_list li > a").hover(function(){
			$(this).css("background","#f1f1f1");	
		},function(){
			$(this).css("background","#fafafa");	
		});
		
		$(".search_box").hide();
		$(".search_img").on("click",function(){
			$(".search_box").toggle();	
		});
		
		$(".search_img").click(function(){
			if($(this).hasClass("search_on")){
				$(this).removeClass("search_on");
			}
			else{
				$(this).addClass("search_on");
			}
			
		});

		// 모든 메뉴
		$(".all_box").hide();
		$(".all_menu").click(function(){
			if($(this).hasClass("all_on")){
				$(".all_box").hide();
				$(this).removeClass("all_on");
			}
			else{
				$(this).addClass("all_on");
				$(".all_box").show();
			}
			
		});
		
		// 배너 슬라이드업
		
		$(".banner_more").on("click",function(){
			if($(".eco_wrap").hasClass("eco_open")){
				$(".banner_more img").attr("src","img/banner_open.png");
				$(".eco_wrap").slideUp(300);
				$(".eco_wrap").removeClass("eco_open");	
			}else{
				$(".banner_more img").attr("src","img/banner_close.png");
				$(".eco_wrap").addClass("eco_open");
				$(".eco_wrap").slideDown(300);
				
			}
		});
		

		/*
		setInterval(function(){
			$(".banner_more").animate({
				opacity : 0.1	
			},800,"swing",function(){
					$(this).animate({
						opacity : 1	
					},800,"swing");	
			});
		},2000);
		*/

});


	// 배너 하나의 크기.
	var BANNER_WIDTH = 1098;
	var SHOW_DURATION = 1500; 
	var AUTO_PLAY_TIME = 5000;
	// 우리가 움직이게 될 배너 컨텐츠 엘리먼트.
	var $banner_content;
	// 배너 전체 개수.
	var nBannerLength = 0;
	// 현재 화면에 보이고 있는 배너 인덱스 값.
	var nCurrentBannerIndex = 0;

	// 배너 메뉴의 위치를 표시할 엘리먼트가 담길 변수.
	var $banner_dots;

	// 자동실행 타이머 아이디.
	var autoTImerID;

	$(document).ready(function(){

		initMenu();
		initEventListener();
		
		startAutoPlay();
	});

	// 메뉴 엘리먼트 관련 초기화.
	function initMenu(){
		// 배너 컨텐츠 영역의 크기를 동적으로 늘려준다.
		$banner_content = $("#banner_content");
		nBannerLength = $banner_content.children("img").length;
		
		// 배너 컨텐츠의 넓이를 배너 하나의 크기 * 배너 개수의 값으로 설정하기.
		$banner_content.width(BANNER_WIDTH * nBannerLength);
		
		
		// 배너 메뉴의 위치를 표시할 엘리먼트가 담길 변수.
		$banner_dots = $("#banner_nav li a");
		// 배너 메뉴의 위치를 0번째로 초기화 시킴.
		showBannerDotAt(0);
		
		// autoPlay의 타이머 ID값.
		autoTImerID = 0;
	}

	// 이벤트 처리.
	function initEventListener(){
		
		// 배너 메뉴에서 마우스가 오버되는 경우, 오버된 위치에 맞게 배너를 보이도록 하기.
		$banner_dots.bind("mouseenter",function(){
			var nIndex = $banner_dots.index(this);
			showBannerAt(nIndex);
		})
		
		var $banner_slider = $(".banner_container");
		// 배너슬라이더에 마우스 커서가 들어오는 경우 자동실행 기능을 멈춘다.
		$banner_slider.bind("mouseenter",function(){
			stopAutoPlay();	
		});
		// 배너슬라이더에서 마우스 커서가 밖으로 나가는 경우 다시, 자동실행 기능 시작.
		$banner_slider.bind("mouseleave",function(){
			startAutoPlay();	
		});
	}
		

	// 이전  배너 보이기
	function prevBanner(){
		// 이동할 이전 배너 인덱스 값 구하기.
		var nIndex = this.nCurrentBannerIndex-1;
		// 이전 내용이 없는 경우 마지막 배너 인덱스 값으로 설정하기.
		if(nIndex<0)
			nIndex = this.nBannerLength-1;
			
		// n번째 배너 보이기.	
		this.showBannerAt(nIndex);			
	}

	// 다음 배너 보이기
	function nextBanner()
	{
		// 이동할 이전 배너 인덱스 값 구하기.
		var nIndex = this.nCurrentBannerIndex+1;
		// 다음 내용이 없는 경우, 첫 번째 배너 인덱스 값으로 설정하기.
		if(nIndex>=nBannerLength)
			nIndex = 0;
		
		// n번째 배너 보이기.		
		this.showBannerAt(nIndex);	
	}

	// nIndex에 해당하는 배너 보이기.
	function showBannerAt(nIndex){
		if (nIndex != this.nCurrentBannerIndex) {
			//  n번째 배너 위치 값 구하기.
			var nPosition = -BANNER_WIDTH * nIndex;
			
			// 배너 메뉴의 위치 값을 업데이트 시킴.
			this.showBannerDotAt(nIndex);
			
			// 슬라이드 시작.
			$banner_content.stop();
			$banner_content.animate({
				left: nPosition
			}, SHOW_DURATION, "easeOutQuint");
			//현재 배너 인덱스 업데이트 시키기.
			this.nCurrentBannerIndex = nIndex;
		}
	}


	// 배너 메뉴의 위치값을 업데이트 시킴.
	function showBannerDotAt(nIndex){
		this.$banner_dots.eq(this.nCurrentBannerIndex).removeClass("select");
		this.$banner_dots.eq(nIndex).addClass("select");
	}




	////////////////////////////////////////////////////////
	// 자동 실행 시작
	function startAutoPlay(){
		
		if(this.autoTimerID!=0)
			clearInterval(this.autoTimerID);
			
		this.autoTimerID = setInterval(function(){
			nextBanner();
		},this.AUTO_PLAY_TIME);
	}

	// 자동실행 멈춤.
	function stopAutoPlay(){
		if(this.autoTimerID!=0)
			clearInterval(this.autoTimerID);
			
		this.autoTimerID = 0;
	}
	
	
	// 인덱스 페이드
	$(function(){
	$(".list_div").css("opacity",".75");
		$(".list_div").hide();
	jQuery(".in_menu_list li, .in_menu_list2 li").each(function(q){
		jQuery(this).hover(function(){
			jQuery(this).children(".p_box").hide();
			jQuery(this).children(".list_div").stop(true, true).fadeIn(500);
		}, function(){
			jQuery(this).children(".p_box").show();
			jQuery(this).find(".list_div").stop(true, true).fadeOut(500);
			})
		})
	})
	
	