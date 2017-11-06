window.onload=function () {
	/*首页导航鼠标移入移除*/
	$('.xl_navbody .xl_navul li:not(".active")').hover(function () {
		$('.xl_navbody .xl_navul .active_hover').removeClass("active");
		$('.xl_navbody .xl_navul .active_hover .xl_a_1').css("color","#58b9eb");
		$(this).addClass("active");
	},function () {
		$(this).removeClass("active");
		$('.xl_navbody .xl_navul .active_hover').addClass("active");
		$('.xl_navbody .xl_navul .active_hover .xl_a_1').css("color","#fff");
	})
	
	/*副导航鼠标移入移除*/
	$(".xl_nav_child .xl_navbody .xl_navul li").hover(function () {
		$(this).children(".xl_navul_fu").stop().slideDown()
	},function () {
		$(this).children(".xl_navul_fu").stop().slideUp()
	})
	
	/*公司简介箭头运动*/
	setInterval(function () {
		$(".xl_index_companyDynamic_jt img").animate({
			"margin-right":"-5px",
		},1000,function () {
			$(".xl_index_companyDynamic_jt img").css({
				"margin-right":"5px",
			})
		})
	},0)
	


	
	/*公司动态上下页按钮*/
	var ocompanyDynamicNext=0;
	$(".xl_next").click(function () {
		if (ocompanyDynamicNext<$(".xl_companyDynamic_ul_parent li").length/6-1) {
			ocompanyDynamicNext++;
			$(".xl_yema_body li").eq(ocompanyDynamicNext).addClass("active").siblings().removeClass('active');
			$(".xl_companyDynamic_ul_parent ul").hide().eq(ocompanyDynamicNext).show();
			$("body,html").scrollTop(0)
		}else{
			alert("已经是最后一页了!")
		}
		return false;
	})
	$(".xl_last").click(function () {
		if (ocompanyDynamicNext>0) {
			ocompanyDynamicNext--;
			$(".xl_yema_body li").eq(ocompanyDynamicNext).addClass("active").siblings().removeClass('active');
			$(".xl_companyDynamic_ul_parent ul").hide().eq(ocompanyDynamicNext).show();
			$("body,html").scrollTop(0)
		}else{
			alert("已经是第一页了!")
		}
		return false;
	})
	/*跳转指定页码*/
	$(".xl_yema_body li").click(function () {
		ocompanyDynamicNext=$(this).index();
	    $(".xl_yema_body li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_companyDynamic_ul_parent ul").hide().eq($(this).index()).show();
		$("body,html").scrollTop(0)
		return ocompanyDynamicNext;
	})
	/*跳转到首页*/
	$('.xl_top').click(function () {
		ocompanyDynamicNext=0;
		$(".xl_yema_body li").eq(ocompanyDynamicNext).addClass("active").siblings().removeClass('active');
		$(".xl_companyDynamic_ul_parent ul").hide().eq(ocompanyDynamicNext).show();
		$("body,html").scrollTop(0)
		return false;
	})
	/*跳转到末页*/
	$('.xl_end').click(function () {
		ocompanyDynamicNext=Math.ceil($(".xl_companyDynamic_ul_parent li").length/6)-1;
		$(".xl_yema_body li").eq(ocompanyDynamicNext).addClass("active").siblings().removeClass('active');
		$(".xl_companyDynamic_ul_parent ul").hide().eq(ocompanyDynamicNext).show();
		$("body,html").scrollTop(0)
		return false;
	})
	
	/*返回顶部*/
	/*定位*/
	var oWidth=($("body").width()-1200)/2+1200+176;
	if ($("body").width()<1700) {
		oWidth=($("body").width()-1200)/2+1200+176;
		$(".xl_returnTop").css({
			"left":oWidth-176,
		})
	} else{
		$(".xl_returnTop").css({
			"left":oWidth,
		})
	}
	$(window).resize(function () {
		oWidth=($("body").width()-1200)/2+1200+176;
		if ($("body").width()<1700) {
			oWidth=($("body").width()-1200)/2+1200+176;
			$(".xl_returnTop").css({
				"left":oWidth-176,
			})
		} else{
			$(".xl_returnTop").css({
				"left":oWidth,
			})
		}
	})
	function  returnTop() {
		if ($(window).scrollTop()>0) {
			$(".xl_returnTop").addClass("fadeInRight");
			$(".xl_returnTop").show();
		} else{
			$(".xl_returnTop").removeClass("fadeInRight");
			$(".xl_returnTop").hide()
		}
		/*判断返回顶部按钮是否被底部黑色给遮盖了*/
		if($(window).scrollTop()-$('.xl_index_footer').outerHeight()+$('.xl_copyright').outerHeight()+$(window).height()-$('.xl_index_footer').offset().top>40) {
			$(".xl_returnTop").css({
				"bottom":"300px",
			})
		} else{
			$(".xl_returnTop").css({
				"bottom":"180px",
			})
		}
	}
	returnTop()
	$(window).scroll(function () {
		returnTop();
	})
	$(".xl_returnTop").click(function () {
	    var speed=500;//滑动的速度
	    $("html,body").animate({ scrollTop: 0 }, speed);
	    return false;
	});
	var aboutIndex_1=0;
	/*点击列表进去文章详情页*/
	var oUllength=0;
	$(".xl_companyDynamic_ul_parent .xl_btn").click(function () {
		oUllength=6*$(this).parents("ul").index();
		$(".xl_companyDynamic_wenzhang_body li").eq($(this).parents("li").index()+oUllength).addClass("active");
		$(".xl_companyDynamic_body").hide();
		$(".xl_companyDynamic_h2_xingqing").show();
		$(".xl_companyDynamic_h2_list").hide();
		$(".xl_companyDynamic_wenzhang").show();
		$(".xl_companyDynamic_wenzhang_body li").eq($(this).parents("li").index()+1+oUllength).show()
		
		aboutIndex_1=$(this).parents("li").index()+oUllength+1
		$(".xl_companyDynamic_wenzhang_btn_next span").text($(".xl_companyDynamic_wenzhang_body .active").next().next().find(".xl_h2").text())
		$(".xl_companyDynamic_wenzhang_btn_last span").text($(".xl_companyDynamic_wenzhang_body .active").find(".xl_h2").text())
		$(".xl_companyDynamic_h2_body span").text($(".xl_companyDynamic_wenzhang_body .active").next().find(".xl_h2").text())
		if (aboutIndex_1-1==0) {
			$(".xl_companyDynamic_wenzhang_btn_last span").text("没有了")
		}
		$("body,html").scrollTop(0)
		return aboutIndex_1;
	})
	/*公司动态文章*/
	var aboutIndex_2=0;
	/*下一篇按钮*/
	$(".xl_companyDynamic_wenzhang_btn_next span").click(function () {
		aboutIndex_2++;
		$(".xl_companyDynamic_wenzhang_btn_next span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2+1).find(".xl_h2").text())
		$(".xl_companyDynamic_wenzhang_btn_last span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2-1).find(".xl_h2").text())
		$(".xl_companyDynamic_h2_body span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2).find(".xl_h2").text())
		$(".xl_companyDynamic_wenzhang_body li").hide();
		$(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2).show();
		/*有问题  需要改*/
		if (aboutIndex_1+aboutIndex_2==$(".xl_companyDynamic_wenzhang_body li").length-1) {
			$(".xl_companyDynamic_wenzhang_btn_next span").text("没有了")
		}
		
	})
	/*上一篇按钮*/
	$(".xl_companyDynamic_wenzhang_btn_last span").click(function () {
		if (aboutIndex_2+aboutIndex_1>1) {
			aboutIndex_2--;
			$(".xl_companyDynamic_wenzhang_btn_next span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2+1).find(".xl_h2").text())
			$(".xl_companyDynamic_wenzhang_btn_last span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2-1).find(".xl_h2").text())
			$(".xl_companyDynamic_h2_body span").text($(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2).find(".xl_h2").text())
			$(".xl_companyDynamic_wenzhang_body li").hide();
			$(".xl_companyDynamic_wenzhang_body li").eq(aboutIndex_1+aboutIndex_2).show();
		}
		if (aboutIndex_1+aboutIndex_2==1) {
			$(".xl_companyDynamic_wenzhang_btn_last span").text("没有了")
		}
	})
	/*鼠标移入上一篇下一篇按钮*/
	$(".xl_companyDynamic_wenzhang_body .xl_btn span").hover(function () {
		$(this).parent(".xl_btn").css({
			"border-bottom":"1px solid #154e91",
			"color": "#154e91",
		})
	},function () {
		$(this).parent(".xl_btn").css({
			"border-bottom":"0",
			"color": "#333333",
		})
	})
	
	
	
	/*加入我们页面代码*/
	$(".xl_joinus_body_right li").click(function () {
		if ($(this).hasClass("active")) {
			
		} else{
			$(".xl_joinus_body_right li").removeClass("active")
			$(this).addClass("active");
			$(".xl_joinus_body_right li").next().slideUp();
			$(this).next().slideDown();
		}
	})
	
	/*里程碑页面设置高度*/
	$(".xl_milestone_body").css("height",$(".xl_milestone_body_child").height()-170)
	
}