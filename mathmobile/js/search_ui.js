
//$("#seachcontainer").css("min-height", (windowHeight-$("#seachheader").height()-$("#seachfooter").height()-41)+"px");
function searchUiSizeRefresh(){
	$("#seachheader").animate({"height":+($(".autoCompleteBox").height()+102)+"px"}, 50);
	$(".searchFormbox").animate({"height":+($(".autoCompleteBox").height()+58)+"px"}, 50);		
}

function autoCompleteOpen(){
	if(jQuery("#query").size() > 0 && jQuery("#query").val().trim() == ''){
		var msg = "<li style=\"padding: 7px 0 2px 0;\">현재 검색어 &nbsp;<strong>자동 추천 기능</strong>을 사용하고 있습니다.</li>";
		msg += "<li style=\"padding: 7px 0 2px 0;\">검색어 입력시 자동으로 관련어를 추천합니다.</li>";
		jQuery(".txtRecommend").html("<ul>"+msg+"</ul>");
		$("#seachheader").animate({"height":+($(".autoCompleteBox").height()+102)+"px"}, 50);
		$(".searchFormbox").animate({"height":+($(".autoCompleteBox").height()+58)+"px"}, 50);		
	}
	$(".autoCompleteBox").show().addClass("on");

//	$(window).resize(function(){
//		if(jQuery(".autoCompleteBox").is(":visible")){
//			autoCompleteOpen();
//		}
//	});
	

};

function autoCompleteClose(){
	$("#seachheader").animate({"height":"88px"}, 50, function(){
		$(".autoCompleteBox").hide().removeClass("on");
		$(".searchFormbox").css("height","44px");
	});
}

/*
	var tabletTopmenu = {
		auto: false,
		circular: false,
		speed: 0,
		visible:7,
		pause: false,
		autoWidth:true,
		scroll:0,
		swipe:false,
		autoCSS: true
	};

	var mobileTopmenu = {
		auto: false,
		circular: false,
		speed: 400,
		visible:5,'
		'
		     
		pause: false,
		autoWidth:true,
		scroll:1,
		autoCSS: true,
		responsive: true,
		btnPrev: function(){return $('.portrait .btn_topmenu_prev')},
		btnNext: function(){return $('.portrait .btn_topmenu_next')},
		first:function(){
			$(".btn_topmenu_next").show();
			$(".btn_topmenu_prev").hide();
		},
		last:function(opts, $lis){
			$('.btn_topmenu_next').hide();
			$('.btn_topmenu_prev').show();
		},
		afterEnd:function($lis, direction){
			if (direction == true){
				if ($lis.index() == 1){
					$(".btn_topmenu_prev").show();
				}
			}else{
				if ($lis.index() == 1){
					$(".btn_topmenu_next").show();
				}
			}
		}
	};

	$('.mobile .topmenu').jCarouselLite(mobileTopmenu);
	$('.tablet .topmenu').jCarouselLite(tabletTopmenu);

	window.onorientationchange = function(){
		if(Math.abs(window.orientation) == 90){
			$('.topmenu').trigger('endCarousel');
			$('.topmenu').jCarouselLite(tabletTopmenu);
		}else if(Math.abs(window.orientation) == -90){
			$('.topmenu').trigger('endCarousel');
			$('.topmenu').jCarouselLite(tabletTopmenu);
		}else{
			$('.topmenu').trigger('endCarousel');
			$('.topmenu').jCarouselLite(mobileTopmenu);
		}
	}
*/
$(window).load(function(){
	$(".bestRanklist .hiddenbox").touchSlider({
		flexible : true,
		view : 1,
		counter : function (e) {
			$(".bestRanklist .navi em").removeClass("on").eq(e.current-1).addClass("on");
			if (e.current == 3){
				$(".bestRanklist .tabbox span.on").removeClass("on");
				$(".bestRanklist .tabbox span.week").addClass("on");
				jQuery("#popword .navi span.date").hide();
			}else if (e.current == 1){
				$(".bestRanklist .tabbox span.on").removeClass("on");
				$(".bestRanklist .tabbox span.daily").addClass("on");
				jQuery("#popword .navi span.date").show();
			}
		},
		initComplete : function (e) {
			$(".bestRanklist .tabbox span").bind("click", function (e) {
				var tabName = $(this).attr("class");
				if (tabName == "week"){
					$(".bestRanklist .hiddenbox").get(0).go_page(2);
					$(".bestRanklist .tabbox span").removeClass("on");
					$(".bestRanklist .tabbox span.week").addClass("on");
					$(".bestRanklist .navi em").removeClass("active");
					$(".bestRanklist .navi em:eq(2)").addClass("active");
					jQuery("#popword .navi span.date").hide();
				}else if (tabName == "daily"){
					$(".bestRanklist .hiddenbox").get(0).go_page(0);
					$(".bestRanklist .tabbox span").removeClass("on");
					$(".bestRanklist .tabbox span.daily").addClass("on");
					$(".bestRanklist .navi em").removeClass("active");
					$(".bestRanklist .navi em:eq(0)").addClass("active");
					jQuery("#popword .navi span.date").show();
				}
				return false;
			});
		}
	});
});

function relativeTxtMoreView(){
	if ($("dl.relativeTxtbox").hasClass("on") == false){
		$("dl.relativeTxtbox").addClass("on");
//		$("dl.relativeTxtbox dd.off").slideDown();
	}else{
		$("dl.relativeTxtbox").removeClass("on");
//		$("dl.relativeTxtbox dd.off").slideUp();
	}
}

function chkCtgMoreView(){
	if ($(".checkingCtgbox").hasClass("on") == false){
		$('input[name=off]').val('on');
		$(".checkingCtgbox").addClass("on");
		$(".checkingCtgbox dl.off").slideDown(200);
	}else{
		$('input[name=off]').val('');
		$(".checkingCtgbox").removeClass("on");
		$(".checkingCtgbox dl.off").slideUp(200);
	}
}



