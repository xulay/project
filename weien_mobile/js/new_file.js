window.onload=function () {
	$(".xl_bg_kuai").animate({
		"opacity":"1"
	},3000)
	
//	setTimeout(function () {
//		$(".xl_bg_kuai").show()
//	},2000)
	
	
	
	
	/*导航弹出*/
	$(".xl_option").click(function () {
		$(".xl_nav").css({
			"top":"20%",
		})
		$(".xl_zhezhao").show()
		$(".xl_nav").show()
		$(".xl_content_child,.xl_option,.xl_aboutus_ul,.xl_newMedia,.content").css({
			"-webkit-filter":"blur(10px)"
		})
		$(".xl_nav ul").removeClass("flipOutX")
		$(".xl_nav ul").addClass("flipInX")
		$(".xl_zhezhao").animate({
			"opacity":"0.3"
		})
		$("body").bind("touchmove mousemove",function(e){e.preventDefault();}); 
		$(".xl_bg_kuai").hide();
		$('.xl_BackTop').hide();
	})
	/*导航关闭*/
	$(".xl_nav .xl_close").click(function () {
		$(".xl_zhezhao").animate({
			"opacity":"0"
		})
		setTimeout(function  () {
			$(".xl_zhezhao").hide()
			$(".xl_nav").hide()
		},1000)
		$(".xl_content_child,.xl_option,.xl_aboutus_ul,.xl_newMedia,.content").css({
			"-webkit-filter":"blur(0px)",
		})
		$(".xl_nav ul").removeClass("flipInX")
		$(".xl_nav ul").addClass("flipOutX")
		$("body").unbind("touchmove mousemove"); 
		$(".xl_bg_kuai").show();
		$('.xl_BackTop').show();
	})
	
	/*走进维恩荟页面*/
	$(".xl_aboutus_ul li").click(function() {
	  	$(".xl_aboutus_ul li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	  	$(".xl_aboutus_body").hide().eq($(this).index()).show();
	});
	
	/*发展历程判断年份左右分布*/
//	$(".xl_aboutus_developmentHistory ul li:even").css({
//		"float":"right"
//	})
//	$(".xl_aboutus_developmentHistory ul li:odd").css({
//		"float":"left"
//	})





	//返回顶部动画

//	$(".content").scroll(function () {
//		if($(".content").scrollTop()>100){
//	         $('.xl_BackTop').show();
//	    }else{
//	         $('.xl_BackTop').hide();
//	    }
//	})
	$('.xl_BackTop').click(function(){
		$('.content').scrollTop(0);
	});
	
	
	
	$(".xl_tzz_tdfc_xq.xl_zp_tc").css({
		"margin-top":-$(".xl_tzz_tdfc_xq.xl_zp_tc").outerHeight()/2+"px",
		"margin-left":-$(".xl_tzz_tdfc_xq.xl_zp_tc").outerWidth()/2+"px",
	})
	
//	$(".xl_hr_job_parent").css({
//		"height":$(".xl_ul_1").find("li").eq(0).outerHeight()*3+$(".xl_hr_job_xq").eq(0).outerHeight()+"px"
//	})

	/*走进维恩荟页面处理*/	
	
	$(".xl_aboutus_ul li").eq(3).click(function () {
		setTimeout(function () {
			$(".xl_enterpriseFeatures").removeClass("fadeInLeft");
		},1000)
	})
	$(".xl_aboutus_ul li").eq(2).click(function () {
		setTimeout(function () {
			$(".xl_Honor").removeClass("rotateInDownLeft");
		},1000)
	})
	$(".xl_aboutus_ul li").click(function () {
		$(".xl_Honor").addClass("rotateInDownLeft");
		$(".xl_enterpriseFeatures").addClass("fadeInLeft");
		$('.content').scrollTop(0);
	})
	$(".xl_enterpriseFeatures li").click(function () {
		$(".xl_enterpriseFeatures").removeClass("fadeInLeft");
	})
}