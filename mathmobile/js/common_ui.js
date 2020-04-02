$(window).ready(function(){

	allMenuCtrl(); // 전체 메뉴, 상단 검색 메뉴 제어

	/* 전역변수 */
	var ua = navigator.userAgent;
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var conHeight = windowHeight - 200;

	if(ua.match(/iPhone|iPod|LG|Android|SAMSUNG|Samsung/i) != null){
		$("body").addClass("mobile");
		switch(window.orientation){
			case -90:
			$("body").removeClass("portrait").addClass("landscape");
			break;
			case 90:
			$("body").removeClass("portrait").addClass("landscape");
			break;
			case 0:
			$("body").removeClass("landscape").addClass("portrait");
			break;
		}

		window.onorientationchange = function(){
			if(Math.abs(window.orientation) == 90){
				$("body").removeClass("portrait").addClass("landscape");
			}else if(Math.abs(window.orientation) == -90){
				$("body").removeClass("portrait").addClass("landscape");
			}else{
				$("body").removeClass("landscape").addClass("portrait");
			}
		}
	}else if (ua.match(/iPad/i) != null){
		$("body").addClass("tablet").addClass("ipad");
	}else if (ua.match(/GallaxyTab/i) != null){
		$("body").addClass("tablet").addClass("gallaxytab");
	}

	if (windowWidth > 1025){
		$("body").removeClass().addClass("pc");
	}else if (windowWidth <= 1024 && windowWidth > 800){
		$("body").removeClass().addClass("tablet").addClass("landscape");
	}else if (windowWidth <= 800 && windowWidth > 639){
		$("body").removeClass().addClass("tablet").addClass("portrait");
	}else if (windowWidth <= 639 && windowWidth > 480){
		$("body").removeClass().addClass("mobile").addClass("landscape");
	}else if (windowWidth <= 480){
		$("body").removeClass().addClass("mobile").addClass("portrait");
	}

	/* 컨텐츠 높이 조절 */
	//$('.mainpage').css('height',windowHeight - 113);
	$('.prepage').css('height',windowHeight);
	$('.pm_info').css('height',windowHeight);
	$('.error_page').css('height',windowHeight - 113);
	$('.qna_list_con').css('min-height',conHeight - 150);
	$('.notice_list_con').css('min-height',conHeight - 150);
	$('.nodata .box_list_con').css('height',conHeight);
	$('.nodata .no_result').css('height',conHeight - 100);
	$(".pop-videocon .videolist").css("height",windowHeight - 160);
	$(".pop-subjcon .gradenav").css("height",windowHeight - 160);
	if(windowWidth > windowHeight){
		$('.nodata .no_result').css('height',windowHeight);
	}

	$(".selfMaking_layer .scoring_bottom .slide_bt").click(function(){
		var s=$(this).next();
		if(s.css("display") == "none"){
			$(this).addClass("off");
		}else{
			$(this).removeClass("off");
		}
		s.slideToggle();
	});

	/**/
	if($('.video_explain').is(":visible") && $('.detail .mark').is(":visible")){
		$('.detail .mark').removeClass('line');
	}else{
		$('.detail .mark').addClass('line');
	}

	/* 문제카드 채점 고정 */
	var jbOffset=$('.pyeongga_wrap').offset();
	$(window).scroll(function(){
		if(jbOffset!=null){
			if($(document).scrollTop() >= jbOffset.top){
				$('.tools').addClass('fix').fadeIn(300);
			}
			else{
				$('.tools').removeClass('fix');
			}
		}
	});

	$(window).resize(function(){

		if($("#allMenu").size() > 0) {
			gnbCtrl();
		}

		windowWidth = $(window).width();
		windowHeight = $(window).height();
		conHeight = windowHeight - 200;

		if (windowWidth > 1025){
			$("body").removeClass().addClass("pc");
		}else if (windowWidth <= 1024 && windowWidth > 800){
			$("body").removeClass().addClass("tablet").addClass("landscape");
		}else if (windowWidth <= 800 && windowWidth > 639){
			$("body").removeClass().addClass("tablet").addClass("portrait");
		}else if (windowWidth <= 639 && windowWidth > 480){
			$("body").removeClass().addClass("mobile").addClass("landscape");
		}else if (windowWidth <= 480){
			$("body").removeClass().addClass("mobile").addClass("portrait");
		}

		/* 컨텐츠 높이 조절 */
		//$('.mainpage').css('height',windowHeight - 113);
		$('.prepage').css('height',windowHeight);
		$('.pm_info').css('height',windowHeight);
		$('.error_page').css('height',windowHeight - 113);
		$('.qna_list_con').css('min-height',conHeight - 150);
		$('.notice_list_con').css('min-height',conHeight - 150);
		$('.nodata .box_list_con').css('height',conHeight);
		$('.nodata .no_result').css('height',conHeight - 100);
		$('.pyeongga_con [name="divExplanation"]').css('width',windowWidth - 20);
		$(".pop-videocon .videolist").css("height",windowHeight - 160);
		$(".pop-subjcon .gradenav").css("height",windowHeight - 160);
		if(windowWidth > windowHeight){
			$('.nodata .no_result').css('height',windowHeight);
		}
		openPop('cardmore'); /*2019-12-24 추가*/

	}).resize();

	$('.share_con a').bind('click', function(){
			$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('#sharepop .closebtn').bind('click', function(){
			$("body").unbind('touchmove');
	});

	/*
	$('.btn-hint').bind('click', function(){
			$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('.hint_layer .cbtn').bind('click', function(){
			$("body").unbind('touchmove');
	});
	*/

	$('.popupwrap .dimpop').bind('click', function(){
			$("body").unbind('touchmove');
	});
	$('#layer .bg').bind('click', function(){
			$("body").unbind('touchmove');
	});

});


/* 전체 메뉴 제어 */
function allMenuCtrl(){
	var $body = $("body"),
		$contWrap = $("#wrap"),
		$gnbdim = $(".gnbdim");

	$("body").width($(window).width());

	// 전체 메뉴 활성화
	$(".btnMenu").click(function() {

		$("#allMenu").animate({
			left: "0"
		}, 200, function() {
		});
		$gnbdim.fadeIn(300);

	});

	$gnbdim.on('touchmove click', function() {

		$("#allMenu").animate({
			left: "-100%"
		}, 0, function() {
		});
		$gnbdim.fadeOut(300);

	});

	$(".close_panel").click(function() {

		$("#allMenu").animate({
			left: "-100%"
		}, 0, function() {
		});
		$gnbdim.fadeOut(300);

	});

	$(window).resize(function() {
		$("body").width( $(window).width() );

	});
}

function gnbCtrl(){
	$("#allMenu").css({height:$(window).height()});
	var myScroll;
	function loaded(){
		myScroll = new iScroll('allMenu',{
			hScrollbar:false,
			vScrollbar:false,
			checkDOMChanges:true,
			bounce:false,
			hideScrollbar:true
		});
		setTimeout(function(){
			myScroll.refresh();
		}, 100);

	}
	window.addEventListener('load', loaded, false);
}

function popNav(){

	$("#subjpop").toggle(0, function(){
		if($(this).is(":visible")){
			$("#subjpop").show();
		}else{
			$("#subjpop").hide();
		}
		popNavCtrl();
	});

}

/* 교과보기 */
function popNavCtrl(){
	// Side Menu
	var gradenav = $('div.gradenav');
	var sItem = gradenav.find('>ul>li');
	var ssItem = gradenav.find('>ul>li>ul>li');
	var lastEvent = null;

	sItem.find('>ul').css('display','none');
	gradenav.find('>ul>li>ul>li[class=open2]').parents('li').attr('class','open1');
	gradenav.find('>ul>li[class=open1]').find('>ul').css('display','block');

	function gradenavToggle(event){
		var t = $(this);
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 0);

		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(0);
			t.next('ul').slideDown(0);
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(0);
		} else {
			t.next('ul').slideUp(0);
		}

		if (t.parent('li').hasClass('open1')){
			t.parent('li').removeClass('open1');
		} else {
			sItem.removeClass('open1');
			t.parent('li').addClass('open1');
		}
	}
	sItem.find('>a').click(gradenavToggle).focus(gradenavToggle);

	function subMenuActive(){
		//ssItem.removeClass('open2').children('ul').hide();
		$(this).parent(ssItem).addClass('open2').children('ul').show();
	};
	ssItem.find('>a').click(subMenuActive).focus(subMenuActive);
}

/* 컨텐츠 페이징(ex.초5,6 리스트) */
function conPaging(){
	var $tab = $('.tab-chasi'),
		$tabs = $tab.find('li'),
		arr = [],
		swiper,
		scrollDuration = 150,
		position = $('#wrap').offset(),
		mheight = $(window).height() - 45 - ($('.headings').height() + 20) - 46;

	$('.swiper-slide').css('min-height',mheight);
	$(window).resize(function() {
		$('.swiper-slide').css('min-height',mheight);
	});


	function init() {
		$tabs.each(function() {
			arr.push($(this).offset().left);
		}).on('click', 'a', function(e) {
			e.preventDefault();
			var index = $(this).parent().index();

			swiper.slideTo(index);
			$tabs.eq(index).addClass('active')
				.siblings().removeClass('active');
			showList();
		});

		swiper = new Swiper('.swiper-container', {
			hashnav: true,
			onInit: sliderCallback,
			onSlideChangeEnd: sliderCallback
		});

	}

	function sliderCallback(s) {
		var index = s.activeIndex;

		$tab.animate({
			'scrollLeft': arr[index]
		}, scrollDuration);

		$('html, body').animate({scrollTop : position.top}, 500);

		$tabs.eq(index).addClass('active')
			.siblings().removeClass('active');
	}

	init();
}

$(function (){
	$(".category_view .view_btn").bind("click", function (){
		if(!$(this).is(".on")){
			$(".category_view .sub_txt").css({display:"block"});
			$(".category_view .info_con").css({display:"block"});
			$(this).addClass("on");
		}
		else{
			$(".category_view .sub_txt").css({display:"none"});
			$(".category_view .info_con").css({display:"none"});
			$(this).removeClass("on");
		}
	});
});


function goTop(){
	$(window).scrollTop(0, 0);
}

/* 검색페이지 슬라이더 */
function searchSlider(){
	var searchScroll;
	searchScroll = new iScroll( document.getElementById("topmenu") , {scrollX:true, scrollY:false, hScrollbar: false, vScrollbar: false});	

	$(".topmenu li").each(function ( i ){
		$(this).attr("xx", $(this).position().left);
		$(this).bind("click", function ( e ){
			moveNaviScroll($(this), 500);
		});
	});

	moveNaviScroll($(".topmenu li.on"), 0);

	function moveNaviScroll( target, speed )
	{
		$(".topmenu li").removeClass("on");
		target.addClass("on");
	}
}

/* 전체교과보기 슬라이더 */
function allmenuSlider(){
	var allmenuScroll;
	allmenuScroll = new iScroll( document.getElementById("tabMenu") , {scrollX:true, scrollY:false, hScrollbar: false, vScrollbar: false});	

	$(".tabMenu li").each(function ( i ){
		$(this).attr("xx", $(this).position().left);
		$(this).bind("click", function ( e ){
			moveNaviScroll($(this), 500);
		});
	});

	moveNaviScroll($(".tabMenu li.on"), 0);

	function moveNaviScroll( target, speed )
	{
		$(".tabMenu li").removeClass("on");
		target.addClass("on");
	}
}

/*2019-03-04 메인메뉴 슬라이더 추가*/
function mainGnbSlider(){
	var maingnbScroll;
	maingnbScroll = new iScroll( document.getElementById("mainTabMenu") , {scrollX:true, scrollY:false, hScrollbar: false, vScrollbar: false, 
		onBeforeScrollStart : function(e) { 
			 var target = e.target;
			 if(target.tagname == "A") { target.focus()}
			  e.preventDefault();
		}
	});

	 //2019-12-26 추가
	var tabs = $('#mainTabMenu .tabNavi').find("li");
	var windowWidth = $(window).width();

	/*전체메뉴*/
	$(tabs).each(function() {
		if ($(this).hasClass("active")) {
			var tabs_W = $(this).width();
			var tabs_L =  $(this).offset().left + tabs_W;
			if(tabs_L > windowWidth) {
				tabposL = (windowWidth - tabs_W) * (-1);
				maingnbScroll.scrollTo(tabposL,0,100)
			}
		}	
	});
}

/* 2019-12-24 팝업 중앙 오픈 수정*/
function openPop(popid, idx) {
	var popid = "#" + popid;
	var aW  =  $(window).width() /2;
	var aH  =  $(window).height() /2;

	if(idx != null) {
		$(popid).addClass("open").show();
	}
	var pLeft = aW  - ($(popid).find(".pop-cardmore").width() / 2);
	var pTop = aH  - ($(popid).find(".pop-cardmore").height() / 2);

	if($(popid).hasClass("open")) {
		$(popid).css({'left':pLeft,'top':pTop});
	}
}
/*2019-12-24 추가*/
function closePop(popid) {
	var popid = "#" + popid;
	$(popid).removeClass("open").hide();
}