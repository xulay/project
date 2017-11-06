window.onload=function () {
	/*判断如果是ie8 14寸屏幕执行的代码*/
	 if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){ 
		oChangeSize();
		$(window).resize(function () {
			oChangeSize();
		}) 
	} 
	/*判断是否是ie*/
	if (!!window.ActiveXObject || "ActiveXObject" in window)  
		{
		    $('.xl_nav .spbq').removeClass("btn")
		    $('.xl_nav .spbq').removeClass("btn-1")
		$(".biankuang").show();
		
		        	
	} 
	/*判断是否谷歌,左下角版权信息字体判断*/
    if(navigator.userAgent.toLowerCase().indexOf("chrome") !== -1){
    	$(".xl_copyright span").hide();
        $(".xl_copyright img").show();
    }else{
    	$(".xl_copyright img").hide();
   		$(".xl_copyright span").show();
    }
	function oChangeSize() {
		var oHeight=$(document).height();
		$('.xl_nav li').css("margin-top",oHeight/70);
		$('.xl_nav li').css("margin-bottom",oHeight/70);
		if ($(document).height()<810||$(document).width()<1367) {
			$('.xl_nav').css("margin-top","20px");
			$('.xl_nav li a').css({
				"width":"140px",
			});
			$('.xl_nav li').css({
				"margin-top":"5px",
				"margin-bottom":"5px",
			});
			$(".xl_copyright").css("margin-bottom","10px"); 
			$(".xl_tel").css("margin-bottom","3px");
			$(".xl_lianxius ul").css("margin-bottom","8px");
			$(".xl_index,.xl_tel,.xl_lianxius ul,.xl_aboutus_left,.xl_aboutus_ryzz_parent,.xl_aboutus_qyfc_parent,.xl_aboutus_fzlc,.xl_news,.xl_hr_job_parent,.xl_hr_find,.xl_tzz_zzjg,.xl_connact").css({
				"-webkit-transform":"scale(0.8)",
				"-moz-transform":"scale(0.8)", 
				"-o-transform":"scale(0.8)",
				"-ms-transform":"scale(0.8)",
			})
			$(".xl_logo .xl_span_1").css({
				'top':'15px',
				'width': '80px',
				'height': '80px',
				'margin-left': '-40px',
			})
			$(".xl_logo .xl_span_2").css({
				'top': '95px',
			})
			$(".xl_tzz_zzjg img").css({
				'margin-left': '-20px',
				'margin-top': '-110px',
			})
			$(".xl_tzz .xl_aboutus_qyfc_parent").css({
				'position': 'relative',
				'top': '-80px',
			})
			$(".xl_tzz .xl_aboutus_qyfc_parent .xl_aboutus_ryzz_btn").css({
				'position': 'absolute',
				'bottom': '50px',
			})
			$(".xl_hr_job_parent").css({
				'position': 'absolute',
				'top': '50%',
			})
			$(".xl_left").css("width","200px");
			$(".xl_left .xl_logo").css("height","200px");
			$(".xl_left .xl_logo .xl_img").css("height","200px");
			$(".xl_right_parent").css("margin-left","-200px");
			$(".xl_right").css("margin-left","200px");
			$(".xl_friendlink").css({
				"bottom":"25px",
				"right":"50px",
			})
			$(".xl_aboutus_qygk").css({
				"margin-top":"70px",
				"margin-left":"-110px",
//				"width":"100%",
				"position": "relative",
				"top": "50px",
			});
			$(".pagination_parent").css({
//				"right":"10%",
				"top":"20%",
			});
			$(".xl_nav_fu_right li").css({
				"margin-left":"20px",
				"margin-right":"20px",
			})
			$(".xl_aboutus_right").css({
				"margin-left":"-35px",
//				"line-height":"22px",
			})
			$(".xl_aboutus_left").css({
				"margin-top":"-30px",
			})
			$(".xl_ul4").css("font-size","18px");
			$(".xl_aboutus_fzlc").css({
				"margin-left":"-100px",
				"margin-top":"100px",
			})
			$(".xl_aboutus_ryzz_parent,.xl_aboutus_qyfc_parent").css({
				"top":"-50px",
				"left":"-50px",
			})
			$(".xl_aboutus_body").css({
				"left":"100px",
				"top":"70px",
			})
			$(".xl_aboutus_qygk .pagination_parent").css({
				"right":"150px",
			})
			$(".xl_aboutus_xxk").css({
				"margin-left":"-50px",
				"margin-top":"-20px",
			})
			$(".xl_nav_fu").css({
				"margin-top":"-50px",
			})
			$(".xl_news").css({
				"left":"-110px",
				"margin-top":"-85px",
			})
			$(".xl_aboutus_ryzz_btn").css({
				"-webkit-transform":"scale(1.1)",
				"-moz-transform":"scale(1.1)", 
				"-o-transform":"scale(1.1)",
				"-ms-transform":"scale(1.1)",
				"bottom":"10px",
			})
			$(".xl_news .xl_aboutus_ryzz_btn").css({
				"bottom":"40px",
			})
			$(".xl_tzz_tdfc_xq").css({
				"margin-top":"-180px",
			})
			$(".xl_tzz_zzjg").css({
				"margin-top":"-550px",
				"margin-left":"-100px",
			})
			$('.xl_connact').css({
				"margin-top":"0px",
				"margin-left":"-50px",
			})
			$(".xl_tzz_tdfc").css({
				"margin-top":"50px",
			})
		} else{
			$('.xl_nav').css("margin-top","15%");
			$('.xl_nav li').css({
				"margin-top":"15px",
				"margin-bottom":"15px",
			});
			$(".xl_copyright").css("margin-bottom","35px");
			$(".xl_tel").css("margin-bottom","6px");
			$(".xl_lianxius ul").css("margin-bottom","15px");
			$(".xl_index,.xl_tel,.xl_lianxius ul,.xl_aboutus_left,.xl_aboutus_ryzz_parent,.xl_aboutus_qyfc_parent,.xl_aboutus_fzlc,.xl_news,.xl_hr_job_parent,.xl_hr_job_parent,.xl_hr_find,.xl_tzz_zzjg,.xl_connact").css({
				"-webkit-transform":"scale(1)",
				"-moz-transform":"scale(1)", 
				"-o-transform":"scale(1)",
				"-ms-transform":"scale(1)",
			})
			$(".xl_left").css("width","250px");
			$(".xl_left .xl_logo").css("height","240px");
			$(".xl_left .xl_logo .xl_img").css("height","240px");
			$(".xl_right_parent").css("margin-left","-250px");
			$(".xl_right").css("margin-left","250px");
			$(".xl_friendlink").css({
				"bottom":"37px",
				"right":"67px",
			})
			$(".xl_aboutus_qygk").css({
				"margin-top":"120px",
				"margin-left":"0px",
				"position": "relative",
				"top": "100px",
				
			});
			$(".pagination_parent").css("right","0");
			$(".xl_nav_fu_right li").css({
				"margin":"0 50px",
			})
			$(".xl_aboutus_right").css({
				"margin-left":"45px",
			})
			$(".xl_aboutus_left").css({
				"margin-top":"0px",
			})
			$(".xl_ul4").css("font-size","14px");
			$(".xl_aboutus_fzlc").css({
				"margin-left":"-30px",
				"margin-top":"171px",
			})
			$(".xl_aboutus_ryzz_parent,.xl_aboutus_qyfc_parent").css({
				"top":"0",
				"left":"0",
			})
			$(".xl_aboutus_body").css({
				"left":"170px",
				"top":"150px",
			})
			$(".xl_aboutus_qygk .pagination_parent").css({
				"right":"0",
			})
			$(".xl_aboutus_xxk").css({
				"margin-left":"0px",
				"margin-top":"0px",
			})
			$(".xl_nav_fu").css({
				"margin-top":"0px",
			})
			$(".xl_news").css({
				"left":"0px",
				"margin-top":"0px",
			})
			$(".xl_aboutus_ryzz_btn").css({
				"-webkit-transform":"scale(1)",
				"-moz-transform":"scale(1)", 
				"-o-transform":"scale(1)",
				"-ms-transform":"scale(1)",
				"bottom":"1px",
			})
			$(".xl_news .xl_aboutus_ryzz_btn").css({
				"bottom":"1px",
			})
			$(".xl_tzz").css({
				"margin-left":"22px",
			})
			$(".xl_tzz_tdfc_xq").css({
				"margin-top":"-150px",
			})
			$(".xl_tzz_zzjg").css({
				"margin-top":"5px",
				"margin-left":"0px",
			})
			$('.xl_connact').css({
				"margin-top":"27px",
				"margin-left":"80px",
			})
			$(".xl_tzz_tdfc").css({
				"margin-top":"0px",
			})
			$(".xl_logo .xl_span_1").css({
				'top':'24px',
				'width': '87px',
				'height': '87px',
				'margin-left': '-43px',
			})
			$(".xl_logo .xl_span_2").css({
				'top': '114px',
			})
			$(".xl_tzz_zzjg img").css({
				'margin-left': '0px',
				'margin-top': '0px',
			})
			$(".xl_tzz .xl_aboutus_qyfc_parent").css({
				'position': 'relative',
				'top': '0px',
			})
			$(".xl_tzz .xl_aboutus_qyfc_parent .xl_aboutus_ryzz_btn").css({
				'position': 'absolute',
				'bottom': '1px',
			})
			$(".xl_hr_job_parent").css({
				'position': 'absolute',
				'top': '55%',
			})
		}
		
	}

	
	
	
	
	/*首页下载鼠标移入移除*/
	$(".xl_download .xl_download_left div").hover(function () {
		$(this).children(".xl_span_1").hide();
		$(this).children(".xl_span_2").show();
	},function () {
		$(this).children(".xl_span_2").hide();
		$(this).children(".xl_span_1").show();
	})
	
	
	
	/*走进维恩荟页面*/
	/*轮播图*/
	var mySwiper = new Swiper('.xl_aboutus_qygk .swiper-container',{
		autoplay : 5000,//可选选项，自动滑动
		loop : true,//可选选项，开启循环
		pagination : '.pagination', //分页器
		paginationClickable :true,
		mode : 'vertical',
		direction: 'vertical',
		grabCursor : true,
		mousewheelControl : true,
	})
	
	/*选项卡*/
	$(".xl_nav_fu_right li").click(function(){
        $(".xl_nav_fu_right li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_aboutus_xxk").hide().eq($(this).index()).show();
		return false;
    });
	
	
	/*发展历程*/
	/*首尾去掉空隙*/
	$(".xl_aboutus_fzlc ul li:first-child").css("margin-left","0");
	$(".xl_aboutus_fzlc .xl_ul1 li:last").css("margin-right","0");
	$(".xl_aboutus_fzlc .xl_ul2 li:last").css("margin-right","0");
	$(".xl_aboutus_fzlc .xl_ul3 li:last").css("margin-right","0");
	
	/*箭头动画*/
	setInterval(function () {
		$(".xl_aboutus_fzlc_jt_2").animate({
			"right":"-20px",
		},1000,function () {
			$(".xl_aboutus_fzlc_jt_2").css("right","-5px");
		})
	},0)
	setInterval(function () {
		$(".xl_aboutus_fzlc_jt_left").animate({
			"left":"-25px",
		},1000,function () {
			$(".xl_aboutus_fzlc_jt_left").css("left","-5px");
		})
	},0)
	/*点击圆圈*/
	$(".xl_aboutus_fzlc .xl_ul1 li,.xl_aboutus_fzlc .xl_ul3 li,.xl_aboutus_fzlc .xl_ul2 li").mouseover(function () {
		$(".xl_aboutus_fzlc .xl_ul2 .xl_qiu_1").show();
		$(".xl_aboutus_fzlc .xl_ul2 .xl_qiu_2").hide();
		$(".xl_aboutus_fzlc .xl_ul2 li").eq($(this).index()).children(".xl_qiu_1").hide();
		$(".xl_aboutus_fzlc .xl_ul2 li").eq($(this).index()).children(".xl_qiu_1").siblings("span").show();
		$(".xl_aboutus_fzlc .xl_ul1 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_aboutus_fzlc .xl_ul2 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_aboutus_fzlc .xl_ul3 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		/*年份对应的事件*/
		$(".xl_aboutus_fzlc .xl_ul4 li").hide().eq($(this).index()).show();
	})
	$(".xl_aboutus_fzlc .xl_ul2 li").click(function () {
		$(".xl_aboutus_fzlc .xl_ul2 .xl_qiu_1").show();
		$(".xl_aboutus_fzlc .xl_ul2 .xl_qiu_2").hide();
		$(this).children(".xl_qiu_1").hide();
		$(this).children(".xl_qiu_1").siblings("span").show();
		$(".xl_aboutus_fzlc .xl_ul1 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_aboutus_fzlc .xl_ul2 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".xl_aboutus_fzlc .xl_ul3 li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		/*年份对应的事件*/
		$(".xl_aboutus_fzlc .xl_ul4 li").hide().eq($(this).index()).show();
		return false;
	})
	var timer_year_right;
	$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").hover(function () {
		timer_year_right=setInterval(function () {
			if (num_year<$(".xl_aboutus_fzlc .xl_ul1 li").length-12) {
				num_year++;
				$(".xl_aboutus_fzlc .xl_aboutus_ul").animate({"margin-left":(-$(".xl_ul1 li:eq(4)").width()-11)*num_year},2000,"linear",function () {
					$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").show();
					if(num_year==$(".xl_aboutus_fzlc .xl_ul1 li").length-12){
						$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").hide()
					}
				})
			}
		},2000)
	},function () {
		clearInterval(timer_year_right)
	})
	var timer_year_left;
	$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").hover(function () {
		timer_year_left=setInterval(function () {
			if (num_year>0) {
				num_year--;
				$(".xl_aboutus_fzlc .xl_aboutus_ul").animate({"margin-left":(-$(".xl_ul1 li:eq(4)").width()-11)*num_year},2000,"linear",function () {
					if(num_year==0){
						$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").hide()
					}
				})
				$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").show();
			}
		},2000)
	},function () {
		clearInterval(timer_year_left)
	})
	/*年份箭头点击滑动年份*/
	var num_year=0;
	$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").click(function () {
		/*判断是否到头了*/
		if (num_year<$(".xl_aboutus_fzlc .xl_ul1 li").length-12) {
			num_year++;
			$(".xl_aboutus_fzlc .xl_aboutus_ul").animate({"margin-left":(-$(".xl_ul1 li:eq(4)").width()-11)*num_year},function () {
				$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").show();
				if(num_year==$(".xl_aboutus_fzlc .xl_ul1 li").length-12){
					$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").hide()
				}
			})
		}
		clearInterval(timer_year_right)
		return false;
	})
	$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").click(function () {
		/*判断是否到头了*/
		if (num_year>0) {
			num_year--;
			$(".xl_aboutus_fzlc .xl_aboutus_ul").animate({"margin-left":(-$(".xl_ul1 li:eq(4)").width()-11)*num_year},function () {
				if(num_year==0){
					$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_left").hide()
				}
			})
			$(".xl_aboutus_fzlc .xl_aboutus_fzlc_jt_2").show()
		}
		clearInterval(timer_year_left)
		return false;
	})
	/*荣誉资质*/
	/*上一页下一页*/
	var num_ryzz=0;
	$(".xl_ryzz_btn_down").click(function () {
		if (num_ryzz<$(".xl_aboutus_ryzz li").length/8-1) {
			num_ryzz++;
			$(".xl_aboutus_ryzz ul").animate({
				"margin-top":-600*num_ryzz,
			})
		}
		return false;
	})
	$(".xl_ryzz_btn_up").click(function () {
		if (num_ryzz>0){
			num_ryzz--;
			$(".xl_aboutus_ryzz ul").animate({
				"margin-top":-600*num_ryzz,
			})
		}
		return false;
	})
	/*企业风采*/
	/*上一页下一页*/
	var num_qyfc=0;
	$(".xl_qyfc_btn_down").click(function () {
		if (num_qyfc<$(".xl_aboutus_qyfc li").length/8-1) {
			num_qyfc++;
			$(".xl_aboutus_qyfc ul").animate({
				"margin-top":-528*num_qyfc,
			})
		}
		return false;
	})
	$(".xl_qyfc_btn_up").click(function () {
		if (num_qyfc>0){
			num_qyfc--;
			$(".xl_aboutus_qyfc ul").animate({
				"margin-top":-528*num_qyfc,
			})
		}
		return false;
	})
	/*鼠标移入出现文字*/
	$(".xl_aboutus_qyfc ul li").hover(function () {
		$(this).children(".xl_qyfc_zhezhao,.xl_qyfc_txt").stop().animate({"bottom":"0"});
	},function () {
		$(this).children(".xl_qyfc_zhezhao,.xl_qyfc_txt").stop().animate({"bottom":"-53px"});
	})
	
	/*新闻媒体页面代码*/
	/*新闻列表上下页*/
	var num_newlist=0;
	$(".xl_newslist_btn_down").click(function () {
		if (num_newlist<$(".xl_news_list li").length/3-1) {
			num_newlist++;
			$(".xl_news_list ul").animate({
				"margin-top":-570*num_newlist,
			})
		}
		return false;
	})
	$(".xl_newslist_btn_up").click(function () {
		if (num_newlist>0){
			num_newlist--;
			$(".xl_news_list ul").animate({
				"margin-top":-570*num_newlist,
			})
		}
		return false;
	})
	/*新闻列表选项卡*/
	$(".xl_news_list li").click(function(){
		$(".xl_news_details li").hide().eq($(this).index()).show();
		$(".xl_news_details").show()
		$(".xl_news_list").hide();
		num_newdetails=$(this).index();
		return false;
    });
	/*新闻详情上下页*/
	var num_newdetails=0;
	$(".xl_newsdetails_btn_down").click(function () {
		$(".xl_news_details li").show();
		if (num_newdetails<$(".xl_news_details li").length-1) {
			num_newdetails++;
			$(".xl_news_details ul").css({
				"margin-top":-600*num_newdetails,
			})
		}
		return false;
	})
	$(".xl_newsdetails_btn_up").click(function () {
		$(".xl_news_details li").show();
		if (num_newdetails>0){
			num_newdetails--;
			$(".xl_news_details ul").css({
				"margin-top":-600*num_newdetails,
			})
		}
		return false;
	})
	/*人力资源页面代码*/
	$(".xl_hr_dengguang").animate({
			"opacity":"1",
		},2000,function () {
			$(".xl_hr_dengguang").animate({
				"opacity":"0",
			},6000)
		})
	setInterval(function () {
		$(".xl_hr_dengguang").animate({
			"opacity":"1",
		},2000,function () {
			$(".xl_hr_dengguang").animate({
				"opacity":"0",
			},6000)
		})
	},8000)
	setTimeout(function () {
		$(".xl_hr_find .FL img").eq(0).addClass("bounceIn");
		$(".xl_hr_find .FL img").eq(0).animate({
			"-webkit-animation-duration":"5s",
        	"moz-animation-duration": "5s",
			"moz-animation-duration": "5s",
			"animation-duration": "5s",
		})
		    
	},2000)
	setTimeout(function () {
		$(".xl_hr_find .FR .xl_span_1 .xl_span_1_img").animate({
			"bottom":"-40px",
			"right":"-40px",
		},1000,'linear',function () {
			$(".xl_hr_find .FR .xl_span_1 .xl_span_1_img").addClass("active");
			setInterval(function () {
				$(".xl_hr_find .FR .xl_span_1 .xl_span_1_img").animate({
					"bottom":"-18px",
					"right":"-15px",
				},1000,'linear')
			},3000)
		})
	},3000)
	$('.xl_hr_find .xl_p_1').animate({
		"opacity":"1",
	},2000,function () {
		$('.xl_hr_find .xl_p_2').css({
			"animation":"hrfindright 1s",
			"-moz-animation":"hrfindright 2s",
			"-webkit-animation":"hrfindright 2s",
			"-o-animation":"hrfindright 2s",
			"-ms-transform":"hrfindright 2s",
			});
		$('.xl_hr_find .xl_p_2').animate({
			"opacity":"1",
		},1500,function () {
			$('.xl_hr_find .xl_p_3').css({
				"animation":"hrfindright 2s",
				"-moz-animation":"hrfindright 2s",
				"-webkit-animation":"hrfindright 2s",
				"-o-animation":"hrfindright 2s",
				"-ms-transform":"hrfindright 2s",
			});
			$('.xl_hr_find .xl_p_3').animate({
				"opacity":"1",
			},1500,function () {
				$('.xl_hr_find .xl_span_1').css({
					"animation":"hrfindright 2s",
					"-moz-animation":"hrfindright 2s",
					"-webkit-animation":"hrfindright 2s",
					"-o-animation":"hrfindright 2s",
					"-ms-transform":"hrfindright 2s",
				});
				$('.xl_hr_find .xl_span_1').animate({
					"opacity":"1",
				},1500)
			})
		})
	})
	/*点击查看招聘信息*/
	$(".xl_hr_find .FR .xl_span_1").click(function () {
		$(".xl_hr_find").hide();
		$(".xl_hr_job_parent").show();
		return false;
	})
	/*职位信息查看详情*/
	$(".xl_hr_job ul li").click(function () {
		if ($(this).next().css("display")=="none") {
			$(this).parent("ul").children(".xl_hr_job li").next().slideUp();
			$(this).next().slideDown();
			$(this).parent("ul").children(".xl_hr_job li").find(".xl_span_1_img").show();
			$(this).parent("ul").children(".xl_hr_job li").find(".xl_span_2_img").hide();
			$(this).find(".xl_span_1_img").hide();
			$(this).find(".xl_span_2_img").show();
		}
		return false;
	})
	/*招聘详情上下页*/
	var num_hrzp=0;
	$(".xl_hr_zp_btn_down").click(function () {
		if (num_hrzp<$(".xl_hr_job ul").length-1) {
			num_hrzp++;
			$(".xl_hr_job_ul_parent").animate({
				"margin-top":-566*num_hrzp,
			})
		}
		return false;
	})
	$(".xl_hr_zp_btn_up").click(function () {
		if (num_hrzp>0){
			num_hrzp--;
			$(".xl_hr_job_ul_parent").animate({
				"margin-top":-566*num_hrzp,
			})
		}
		return false;
	})
	/*我要应聘弹窗*/
	$(".xl_hr_job .xl_hr_btn").click(function () {
		$(".xl_tdfc_zhezhao").fadeIn();
		$(".xl_tzz_tdfc_xq.xl_zp_tc").eq(($(this).parent(".xl_hr_job_xq").index()/2+0.5)+$(this).parents("ul").index()*3-1).show();
		/*对应的弹窗显示出来*/
		$(".xl_tzz_tdfc_xq.xl_zp_tc").eq(($(this).parent(".xl_hr_job_xq").index()/2+0.5)+$(this).parents("ul").index()*3-1).addClass("flipInX")
		$(".xl_tzz_tdfc_xq.xl_zp_tc").eq(($(this).parent(".xl_hr_job_xq").index()/2+0.5)+$(this).parents("ul").index()*3-1).removeClass("flipOutX")
	})
	$(".xl_tzz_tdfc_xq.xl_zp_tc .xl_tzz_tdfc_xq_close").click(function () {
		$(".xl_tdfc_zhezhao").fadeOut();
		$(this).parent(".xl_tzz_tdfc_xq.xl_zp_tc").removeClass("flipInX")
		$(this).parent(".xl_tzz_tdfc_xq.xl_zp_tc").addClass("flipOutX")
		setTimeout(function () {
			$(".xl_tzz_tdfc_xq.xl_zp_tc .txt").val("");
		},500)
	})
	$(".xl_tzz_tdfc_xq.xl_zp_tc .xl_hr_btn").click(function () {
		$(".xl_tdfc_zhezhao").fadeOut();
		$(".xl_tzz_tdfc_xq.xl_zp_tc").removeClass("flipInX")
		$(".xl_tzz_tdfc_xq.xl_zp_tc").addClass("flipOutX")
		setTimeout(function () {
			$(".xl_tzz_tdfc_xq.xl_zp_tc .txt").val("");
		},500)
	})
	/*投资者关系页面*/
	/*团队风采上下页*/
	var num_tdfc=0;
	$(".xl_tdfc_btn_down").click(function () {
		if (num_tdfc<$(".xl_tzz_tdfc li").length/6-1) {
			num_tdfc++;
			$(".xl_tzz_tdfc ul").animate({
				"margin-top":-528*num_tdfc,
			})
		}
		return false;
	})
	$(".xl_tdfc_btn_up").click(function () {
		if (num_tdfc>0){
			num_tdfc--;
			$(".xl_tzz_tdfc ul").animate({
				"margin-top":-528*num_tdfc,
			})
		}
		return false;
	})
	
	/*团队风采弹窗*/
	$(".xl_btn").click(function () {
		$(".xl_tzz_tdfc_xq1").eq($(this).parent().parent().index()).show();
		$(".xl_tdfc_zhezhao").fadeIn();
		$(".xl_tzz_tdfc_xq1").eq($(this).parent().parent().index()).removeClass("flipOutX");
		$(".xl_tzz_tdfc_xq1").eq($(this).parent().parent().index()).addClass("flipInX");
		return false;
	})
	$(".xl_tzz_tdfc_xq_close").click(function () {
		$(".xl_tdfc_zhezhao").fadeOut();
		$(this).parent(".xl_tzz_tdfc_xq1").removeClass("flipInX");
		$(this).parent(".xl_tzz_tdfc_xq1").addClass("flipOutX");
		return false;
	})
	
	
	
	
	
	/*首页动画效果*/
    setTimeout(function(){
        $('.xl_download_right').fadeIn(2000);
    }, 1000);
    $(".xl_iphone_down_btn").hover(function () {
    		$('.xl_download_right .xl_iphone_down').show();
    		$('.xl_download_right .xl_android_down').hide();
    		$('.xl_download_right .xl_iphone_down').addClass('fadeInRight');
    	},function () {
    		$('.xl_download_right .xl_iphone_down').removeClass('fadeInRight');
    })
    $(".xl_android_down_btn").hover(function () {
    		$('.xl_download_right .xl_iphone_down').hide();
    		$('.xl_download_right .xl_android_down').show();
    		$('.xl_download_right .xl_android_down').addClass('fadeInRight');
    	},function () {
    		$('.xl_download_right .xl_android_down').removeClass('fadeInRight');
    })
    
    /*二维码显示*/
   	$(".xl_lianxius li").hover(function () {
   		$(this).children(".xl_xl_lianxius_ewm").stop().fadeIn();
   	},function () {
   		$(this).children(".xl_xl_lianxius_ewm").stop().fadeOut();
   	})
	
	
	//边框效果--移入
	function biankuang(obj){
	    $(obj).find('.biankuang_1').stop(true).animate({
	        height:'45px'
	    },300)
	    $(obj).find('.biankuang_2').stop(true).delay(300).animate({
	        width:'200px'
	    },300)
	    $(obj).find('.biankuang_3').stop(true).animate({
	        height:'45px'
	    },300)
	    $(obj).find('.biankuang_4').stop(true).delay(300).animate({
	        width:'200px'
	    },300)
	}
	//边框效果--移出
	function biankuang1(obj){
	
	    $(obj).find('.biankuang_1').stop(true).delay(100).animate({
	        height:'0px'
	    },100)
	    $(obj).find('.biankuang_2').stop(true).animate({
	        width:'0px'
	    },100)
	    $(obj).find('.biankuang_3').stop(true).delay(100).animate({
	        height:'0px'
	    },100)
	    $(obj).find('.biankuang_4').stop(true).animate({
	        width:'0px'
	    },100)
	}
	//触发
	$('.xl_nav .spbq').hover(
		function () {
			if ($(this).parent().hasClass("active")) {
				
			} else{
				var obj = $(this);
				$(obj).find('.text_gobuy').addClass('text_gobuy_show');
				$(obj).find('.search_y').animate({left:'150',opacity:1},300);
				biankuang(obj);
			}
		},
		function () {
		  	var obj = $(this);
			$(obj).find('.text_gobuy').removeClass('text_gobuy_show');
			$(obj).find('.search_y').animate({left:'100',opacity:0},300);
			biankuang1(obj);
		}
	);
	//边框效果--移入
	function biankuang2(obj){
	    $(obj).find('.biankuang_1').stop(true).animate({
	        height:'200px'
	    },300)
	    $(obj).find('.biankuang_2').stop(true).delay(300).animate({
	        width:'930px'
	    },300)
	    $(obj).find('.biankuang_3').stop(true).animate({
	        height:'200px'
	    },300)
	    $(obj).find('.biankuang_4').stop(true).delay(300).animate({
	        width:'930px'
	    },300)
	}
	//边框效果--移出
	function biankuang2_1(obj){
	
	    $(obj).find('.biankuang_1').stop(true).delay(100).animate({
	        height:'0px'
	    },100)
	    $(obj).find('.biankuang_2').stop(true).animate({
	        width:'0px'
	    },100)
	    $(obj).find('.biankuang_3').stop(true).delay(100).animate({
	        height:'0px'
	    },100)
	    $(obj).find('.biankuang_4').stop(true).animate({
	        width:'0px'
	    },100)
	}
	//触发
	$('.xl_news_list .spbq').hover(
		function () {
			if ($(this).parent().hasClass("active")) {
				
			} else{
				var obj = $(this);
				$(obj).find('.text_gobuy').addClass('text_gobuy_show');
				$(obj).find('.search_y').animate({left:'150',opacity:1},300);
				biankuang2(obj);
			}
		},
		function () {
		  	var obj = $(this);
			$(obj).find('.text_gobuy').removeClass('text_gobuy_show');
			$(obj).find('.search_y').animate({left:'100',opacity:0},300);
			biankuang2_1(obj);
		}
	);
	
	
	
	
	
	
}