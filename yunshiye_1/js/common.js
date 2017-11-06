window.onload = function() {
	/*首页代码*/
	var mySwiper = new Swiper('.swiper-container.m-banner', {
		loop: true,
		effect: 'fade',
		// 如果需要分页器
		pagination: '.m-banner .swiper-pagination',
		autoplay: 3000,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
	})
	var mySwiper1 = new Swiper('.swiper-container.m-ourClients-banner', {
		loop: true,
		slidesPerView: 5,
		// 如果需要分页器
		pagination: '.m-ourClients-banner .swiper-pagination',
		autoplay: 3000,
		paginationClickable: true,
		// 如果需要前进后退按钮
		nextButton: '.m-ourClients-banner-p-p .swiper-button-next',
		prevButton: '.m-ourClients-banner-p-p .swiper-button-prev',
		// 如果需要滚动条
		scrollbar: '.swiper-scrollbar',
		autoplayDisableOnInteraction: false,
	})
	/*在线咨询弹出框的定位*/
	$(".u-onlineConsultant").css({
		"margin-top": -$(".u-onlineConsultant").outerHeight() / 2,
	})
	setTimeout(function() {
		$(".u-onlineConsultant").show();
	}, 1000)
	/*点击在线咨询弹出框*/
	$(".u-oc-top").click(function() {
		$(".m-message").show();
		$(".m-message-small").hide();
		$(".m-message").css({
			"bottom": "50%",
			"right": "50%",
			"margin-bottom": -$(".m-message").outerHeight() / 2,
			"margin-right": -$(".m-message").outerWidth() / 2,
		})
	})
	/*请你留言点击*/
	$(".u-mess-suo").click(function() {
		$(".m-message").hide();
		$(".m-message-small").show();
	})
	$(".u-mess-fang").click(function() {
		$(".m-message").show();
		$(".m-message-small").hide();
		$(".m-message").css({
			"bottom": "0",
			"right": "0",
			"margin-bottom": 0,
			"margin-right": 0,
		})
	})

	/*关于我们页面代码*/
	var mySwiper = new Swiper('.swiper-container.m-cp-banner-c', {
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		autoplay: 3000,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
	})

	/*解决方案页面*/

	/*左侧固定导航定位*/
	var leftNavHeight = $('.m-s-leftNav').height();
	$('.m-s-leftNav').css({
		'margin-top': -leftNavHeight / 2,
	})

	/*判断左侧固定导航显示隐藏函数*/
	function leftNavShow() {
		if($(window).scrollTop() > 100) {
			$('.m-s-leftNav').show();
		} else {
			$('.m-s-leftNav').hide();
		}
	}

	leftNavShow();

	/*左侧固定导航显示隐藏*/
	$(window).scroll(function() {
		leftNavShow();
	})


	/*微信开发*/
	/*二维码位置*/
	var qrHeight = -$(".u-QRcode span").height() / 2;
	var qrwidth = -$(".u-QRcode span").width() / 2;
	$(".u-QRcode span").css({
		'margin-top': qrHeight,
		'margin-left': qrwidth,
	})
	/*悬浮曾动画*/
	function qrAdmin() {
		$(".u-QRcode").animate({
			"margin-top": 0,
		})
	}
	/*鼠标移入移出*/
	$(".m-ca-ul-big .u-img").hover(function() {
		$(this).find(".u-QRcode").stop().animate({
			"top": 0,
		})
	}, function() {
		$(this).find(".u-QRcode").stop().animate({
			"top": '100%',
		})
	})

	/*定位底部*/
	if ($('body').height()+$('.g-ft').outerHeight()>$(window).height()) {
		$('.g-ft').css({
			'position':'absolute',
			'display':'block',
		})
		$('body').css({
			'padding-bottom': $('.g-ft').outerHeight(),
		})
	}else {
		$('.g-ft').css({
			'display':'block',
		})
	}
}