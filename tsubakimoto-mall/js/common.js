// LNB 메뉴	
function LnbMenu() {
	this.subMenu = false;
	this.menuLength = $("#menu li").length;
};


var $sideBar = $("#sideMenu");
var getListheight;

$(document).ready(function() {
	this.getListheight = $("#conWrap_list").css("height");
	loginText($(".loginId"));
	loginText($(".loginPwd"));
	$("#content_lnbWrap").css("height", this.getListheight);

});

// 로그인 페이지 placeholder 효과

function loginText(selector) {
	selector.on("focus", function() {
		$(this).css("background-position", "0 -36px");
	});
	selector.on("focusout", function() {
		var $this = $(this);
		if ($this.val() === "") {
			$this.css("background-position", "0 0");
		}
	});
}
