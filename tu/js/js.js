$(document).ready(function(){
	$(".gnb li").mouseenter(function(evt) {
		var li_idx = $(this).index();
		$(".table_tab_wrap > div").hide();
		$('.table_tab_wrap > div').eq(li_idx).show();
	});
});