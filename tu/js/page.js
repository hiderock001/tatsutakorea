
	


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
		
		// gnb ���
		dropMenu();
		gnbtabMenu();

		// gnb �̹��� ü����
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

		
		// lnb �޴�
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

		
		// gnb pointer ���� ����
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
		
		// ���̵� �� �޴�
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

		// ��� �޴�
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
		
		// ��� �����̵��
		
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


	// ��� �ϳ��� ũ��.
	var BANNER_WIDTH = 1098;
	var SHOW_DURATION = 1500; 
	var AUTO_PLAY_TIME = 5000;
	// �츮�� �����̰� �� ��� ������ ������Ʈ.
	var $banner_content;
	// ��� ��ü ����.
	var nBannerLength = 0;
	// ���� ȭ�鿡 ���̰� �ִ� ��� �ε��� ��.
	var nCurrentBannerIndex = 0;

	// ��� �޴��� ��ġ�� ǥ���� ������Ʈ�� ��� ����.
	var $banner_dots;

	// �ڵ����� Ÿ�̸� ���̵�.
	var autoTImerID;

	$(document).ready(function(){

		initMenu();
		initEventListener();
		
		startAutoPlay();
	});

	// �޴� ������Ʈ ���� �ʱ�ȭ.
	function initMenu(){
		// ��� ������ ������ ũ�⸦ �������� �÷��ش�.
		$banner_content = $("#banner_content");
		nBannerLength = $banner_content.children("img").length;
		
		// ��� �������� ���̸� ��� �ϳ��� ũ�� * ��� ������ ������ �����ϱ�.
		$banner_content.width(BANNER_WIDTH * nBannerLength);
		
		
		// ��� �޴��� ��ġ�� ǥ���� ������Ʈ�� ��� ����.
		$banner_dots = $("#banner_nav li a");
		// ��� �޴��� ��ġ�� 0��°�� �ʱ�ȭ ��Ŵ.
		showBannerDotAt(0);
		
		// autoPlay�� Ÿ�̸� ID��.
		autoTImerID = 0;
	}

	// �̺�Ʈ ó��.
	function initEventListener(){
		
		// ��� �޴����� ���콺�� �����Ǵ� ���, ������ ��ġ�� �°� ��ʸ� ���̵��� �ϱ�.
		$banner_dots.bind("mouseenter",function(){
			var nIndex = $banner_dots.index(this);
			showBannerAt(nIndex);
		})
		
		var $banner_slider = $(".banner_container");
		// ��ʽ����̴��� ���콺 Ŀ���� ������ ��� �ڵ����� ����� �����.
		$banner_slider.bind("mouseenter",function(){
			stopAutoPlay();	
		});
		// ��ʽ����̴����� ���콺 Ŀ���� ������ ������ ��� �ٽ�, �ڵ����� ��� ����.
		$banner_slider.bind("mouseleave",function(){
			startAutoPlay();	
		});
	}
		

	// ����  ��� ���̱�
	function prevBanner(){
		// �̵��� ���� ��� �ε��� �� ���ϱ�.
		var nIndex = this.nCurrentBannerIndex-1;
		// ���� ������ ���� ��� ������ ��� �ε��� ������ �����ϱ�.
		if(nIndex<0)
			nIndex = this.nBannerLength-1;
			
		// n��° ��� ���̱�.	
		this.showBannerAt(nIndex);			
	}

	// ���� ��� ���̱�
	function nextBanner()
	{
		// �̵��� ���� ��� �ε��� �� ���ϱ�.
		var nIndex = this.nCurrentBannerIndex+1;
		// ���� ������ ���� ���, ù ��° ��� �ε��� ������ �����ϱ�.
		if(nIndex>=nBannerLength)
			nIndex = 0;
		
		// n��° ��� ���̱�.		
		this.showBannerAt(nIndex);	
	}

	// nIndex�� �ش��ϴ� ��� ���̱�.
	function showBannerAt(nIndex){
		if (nIndex != this.nCurrentBannerIndex) {
			//  n��° ��� ��ġ �� ���ϱ�.
			var nPosition = -BANNER_WIDTH * nIndex;
			
			// ��� �޴��� ��ġ ���� ������Ʈ ��Ŵ.
			this.showBannerDotAt(nIndex);
			
			// �����̵� ����.
			$banner_content.stop();
			$banner_content.animate({
				left: nPosition
			}, SHOW_DURATION, "easeOutQuint");
			//���� ��� �ε��� ������Ʈ ��Ű��.
			this.nCurrentBannerIndex = nIndex;
		}
	}


	// ��� �޴��� ��ġ���� ������Ʈ ��Ŵ.
	function showBannerDotAt(nIndex){
		this.$banner_dots.eq(this.nCurrentBannerIndex).removeClass("select");
		this.$banner_dots.eq(nIndex).addClass("select");
	}




	////////////////////////////////////////////////////////
	// �ڵ� ���� ����
	function startAutoPlay(){
		
		if(this.autoTimerID!=0)
			clearInterval(this.autoTimerID);
			
		this.autoTimerID = setInterval(function(){
			nextBanner();
		},this.AUTO_PLAY_TIME);
	}

	// �ڵ����� ����.
	function stopAutoPlay(){
		if(this.autoTimerID!=0)
			clearInterval(this.autoTimerID);
			
		this.autoTimerID = 0;
	}
	
	
	// �ε��� ���̵�
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
	
	