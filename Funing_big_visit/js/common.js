window.onload = function() {
	/*第一页选择单位*/
	$('.ftPicker').change(function() {
		var dtindex = $('.ftPicker').find('option').not(function() {
			return !this.selected
		}).index(); //获取所选分团的索引
		$(".x-select-input").val($('.ftPicker option').eq(dtindex).val()); //使iput有值
		$(".x-select-input-1").parent().css({ //恢复边框颜色
			"border": "1px solid #dddddd",
		})
		$('.x-fp-input-dw select').hide();
		$('.x-fp-input-dw select').attr("disabled", "disabled"); //使所有select不可选
		$('.x-input-unit-' + dtindex).removeAttr("disabled"); //使当前select可选,便于后台取值
		$('.x-input-unit-' + dtindex).show(); //根据索引是对应的select出现
	})
	$(".x-select-no-p").click(function() {
		alert("请先选择分团!");
	})
	$(".x-select-no-2-p").click(function() {
		alert("请先选择所在村庄!");
	})

	/*第二页*/
	/*走访服务对象类型*/
	$("#typePicker").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker x-btn-dx">确定</button>\
	  <h1 class="title">选择走访服务对象类型</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['城乡群众', '工商企业', '基层单位']
		}]
	});
	/*判断走访服务对象类型*/
	var i = 0;
	$(document).on('click', '.x-btn-dx', function() {
		/*切换服务对象类型时重新初始化*/
		$(".x-fp-form-2").hide();
		$(".x-input-sq").hide();
		$(".x-fp-form-2 input,.x-fp-form-2 textarea").val(""); //清空val值
		$(".x-error-hint").hide();
		$(".x-fp-input,textarea").css({
			"border": "1px solid #dddddd",
		})
		if($("#typePicker").val() == "城乡群众") {
			$('.x-fp-form-cxqz').show();
			i = 0;
		}
		if($("#typePicker").val() == "工商企业") {
			$('.x-fp-form-gsqy').show();
			i = 1;
		}
		if($("#typePicker").val() == "基层单位") {
			$('.x-fp-form-jcdw').show();
			i = 2;
		}
		/*更改上下页按钮位置*/
		$(".x-bottom").show();
		$(".x-bottom-1").hide();
	})

	/*城乡群众页面输入*/
	/*所在镇区村*/
	$("#zjcPicker1").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker">确定</button>\
	  <h1 class="title">请选择所在镇区</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['阜城街道办', '吴滩街道办', '沟墩镇', '陈良镇', '三灶镇', '新沟镇', '陈集镇', '羊寨镇', '芦蒲镇', '板湖镇', '东沟镇', '益林镇', '古河镇', '罗桥镇', '花园街道办开发区', '郭墅镇澳洋工业园', '金沙湖街道办', '现代服务园', '公兴社区', '硕集社区']
		}]
	});
	$("#zjcPicker2").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker">确定</button>\
	  <h1 class="title">请选择所在村庄</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['阜城街道办', '吴滩街道办', '沟墩镇', '陈良镇', '三灶镇', '新沟镇', '陈集镇', '羊寨镇', '芦蒲镇', '板湖镇', '东沟镇', '益林镇', '古河镇', '罗桥镇', '花园街道办开发区', '郭墅镇澳洋工业园', '金沙湖街道办', '现代服务园', '公兴社区', '硕集社区']
		}]
	});

	/*所在生产组*/
	$("#sczPicker").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker">确定</button>\
	  <h1 class="title">请选择走访城乡群众所在生产组</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
		}]
	});
	/*诉求*/
	$("#sqPicker").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker x-sq-btn">确定</button>\
	  <h1 class="title">请选择诉求情况</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['有', '无']
		}]
	});
	/*判断是否弹出诉求情况输入框*/
	$(document).on('click', ".x-sq-btn", function() {
		if($("#sqPicker").val() == "有") {
			$(".x-input-sq").show();
		} else {
			$(".x-input-sq").hide();
		}
	})

	/*工商企业页面输入*/
	/*诉求*/
	$("#sqPicker2").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker x-sq-btn-2">确定</button>\
	  <h1 class="title">请选择诉求情况</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['有', '无']
		}]
	});
	/*判断是否弹出诉求情况输入框*/
	$(document).on('click', ".x-sq-btn-2", function() {
		if($("#sqPicker2").val() == "有") {
			$(".x-input-sq").show();
		} else {
			$(".x-input-sq").hide();
		}
	})

	/*基层单位页面输入*/
	/*诉求*/
	$("#sqPicker3").picker({
		toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker x-sq-btn-3">确定</button>\
	  <h1 class="title">请选择诉求情况</h1>\
	  </header>',
		cols: [{
			textAlign: 'center',
			values: ['有', '无']
		}]
	});
	/*判断是否弹出诉求情况输入框*/
	$(document).on('click', ".x-sq-btn-3", function() {
		if($("#sqPicker3").val() == "有") {
			$(".x-input-sq").show();
		} else {
			$(".x-input-sq").hide();
		}
	})

	/*点击登录*/
	var oLoginDl = 1; //假设登录条件符合,给个状态
	if(oLoginDl == 1) {
		$(".x-i-submit-btn-dl").click(function() {
			window.open('button.html') //打开按钮页
		})
	}
	/*第一页验证*/
	$(".x-fp-next").click(function() {
		/*正则判断*/
		var fpName = new RegExp(/[\u4e00-\u9fa5]/);
		var fpNameVal = $('.x-fp-name').val();
		var fpNumber = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
		var fpNumberVal = $('.x-fp-Number').val();
		if(fpName.test(fpNameVal) && fpNumber.test(fpNumberVal) && $(".x-fp-input input").val() !== "") { //当符合下一步的要求时执行代码    
			　　
			window.open('second_page.html') //打开第二页
		}
		if(!fpName.test(fpNameVal)) { //验证姓名
			$('.x-fp-name').next(".x-error-hint").show();
			$('.x-fp-name').parent().css({
				"border": "1px solid #e94a4a",
			})
		}
		if(!fpNumber.test(fpNumberVal)) { //验证手机号码
			$('.x-fp-Number').next(".x-error-hint").show();
			$('.x-fp-Number').parent().css({
				"border": "1px solid #e94a4a",
			})
		}
		$(".x-fp-input").each(function() {
			if($(this).children("input").val() === "") {
				$(this).css({
					"border": "1px solid #e94a4a",
				})
			}
		})
	})
	/*返回第一页*/
	$(".x-sp-prev").click(function() {
		window.open('first_page.html') //返回第一页
	})
	/*第二页验证*/
	$(".x-sp-next-1").click(function() {
		if($('#typePicker').val() === '') {
			$('#typePicker').parent().css({
				"border": "1px solid #e94a4a",
			})
		}
	})

	$(".x-sp-next").click(function() { //点击下一页时
		if($('input').val() === '') {
			$('#typePicker').parent().css({
				"border": "1px solid #e94a4a",
			})
		}
		$(".x-fp-input").each(function() {
			if($(this).children("input").val() === "") {
				$(this).css({
					"border": "1px solid #e94a4a",
				})
			}
		})
		$('textarea').each(function() {
			if($(this).val() === "") {
				$(this).css({
					"border": "1px solid #e94a4a",
				})
			}
		})
		var aa = 0,
			bb = 0; //分别用来记录input和textarea的个数
		$(".x-fp-form-2").eq(i).find(".x-fp-input input").each(function() {
			if($(this).val() !== '') { //当input不为空时值加1
				aa++;
			} else {
				aa--;
			}
		})
		$(".x-fp-form-2").eq(i).find("textarea").each(function() {
			if($(this).val() !== '') { //当textarea不为空时值加1
				bb++;
			} else {
				bb--;
			}
		})

		if(i == 0) { //当在城乡群众页面时
			/*正则判断*/
			var spName = new RegExp(/[\u4e00-\u9fa5]/);
			var spNameVal = $('.x-sp-name').val();
			var spNumber = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
			var spNumberVal = $('.x-sp-Number').val();
			var spAge = new RegExp(/^[0-9]*[1-9][0-9]*$/);
			var spAgeVal = $('.x-sp-age').val();
			var spMembers = new RegExp(/^[0-9]*[1-9][0-9]*$/);
			var spMembersVal = $('.x-sp-members').val();
			if($(".x-fp-form-2").eq(i).find('.x-input-sq').css("display") == "none") { //当无诉求情况时
				if(spName.test(spNameVal) && spNumber.test(spNumberVal) && spAge.test(spAgeVal) && spMembers.test(spMembersVal) && aa === $(".x-fp-form-2").eq(i).find(".x-fp-input input").length && $(".x-fp-form-2").eq(i).find('.x-ts-textarea').val() !== '') { //当符合下一步的要求时执行代码    
					window.open('third_page.html') //打开第三页
				}
			} else if(spName.test(spNameVal) && spNumber.test(spNumberVal) && spAge.test(spAgeVal) && spMembers.test(spMembersVal) && aa === $(".x-fp-form-2").eq(i).find(".x-fp-input input").length && bb === $(".x-fp-form-2").eq(i).find("textarea").length) { //当有诉求情况时     
				　　
				window.open('third_page.html') //打开第三页
			}

			if(!spName.test(spNameVal)) { //验证姓名
				$('.x-sp-name').next(".x-error-hint").show();
				$('.x-sp-name').parent().css({
					"border": "1px solid #e94a4a",
				})
			}
			if(!spNumber.test(spNumberVal)) { //验证手机号码
				$('.x-sp-Number').next(".x-error-hint").show();
				$('.x-sp-Number').parent().css({
					"border": "1px solid #e94a4a",
				})
			}
			if(!spAge.test(spAgeVal)) { //验证年龄
				$('.x-sp-age').next(".x-error-hint").show();
				$('.x-sp-age').parent().css({
					"border": "1px solid #e94a4a",
				})
			}
			if(!spMembers.test(spMembersVal)) { //验证家庭人口
				$('.x-sp-members').next(".x-error-hint").show();
				$('.x-sp-members').parent().css({
					"border": "1px solid #e94a4a",
				})
			}
		} else { //当在其余两个页面时
			if($(".x-fp-form-2").eq(i).find('.x-input-sq').css("display") == "none") { //当无诉求情况时
				if(aa === $(".x-fp-form-2").eq(i).find(".x-fp-input input").length && $(".x-fp-form-2").eq(i).find('.x-ts-textarea').val() !== '') { //当符合下一步的要求时执行代码    
					window.open('third_page.html') //打开第三页
				}
			} else if(aa === $(".x-fp-form-2").eq(i).find(".x-fp-input input").length && bb === $(".x-fp-form-2").eq(i).find("textarea").length) { //当有诉求情况时
				window.open('third_page.html') //打开第三页
			}
		}
	})

	$('.x-fp-input input').focus(function() {
		$(this).next(".x-error-hint").hide();
		$(this).parent().css({
			"box-shadow": "0 0 10px #007AFF"
		})
	})
	$('textarea').focus(function() {
		$(this).next(".x-error-hint").hide();
		$(this).css({
			"box-shadow": "0 0 10px #007AFF"
		})
	})
	$('input').blur(function() {
		$(this).parent().css({
			"box-shadow": "none"
		})
	})
	$('textarea').blur(function() {
		$(this).css({
			"box-shadow": "none"
		})
	})
	$(".x-fp-input,textarea").click(function() {
		$(this).css({
			"border": "1px solid #dddddd",
		})
	})
	/*第三页*/
	$(".x-btn-hui").click(function() { //点击上一页
		window.open('second_page.html'); //返回第二页
	})
	$(".x-tp-submit").click(function() {
		var oSucceed = 1;
		if(oSucceed === 1) {
			$(".x-popup-succeed").css({
				"visibility": "visible",
			});
			$('.x-zhezhao').show();
		} else {
			$(".x-popup-lose").css({
				"visibility": "visible",
			});
			$('.x-zhezhao').show();
		}
		/*设置弹窗位置*/
		$(".x-popup").css({
			"margin-top": -$(".x-popup").height() / 2 + "px",
		})
	})
	$('.x-popup-btn').click(function() {
		$(".x-popup").css({
			"visibility": "hidden",
		});
		$('.x-zhezhao').hide();
	})
	/*首页*/
	$(".x-cloce-ico").click(function() {
		$(".x-popup").css({
			"visibility": "hidden",
		});
		$('.x-zhezhao').hide();
	})
	$(".x-forgetPassword a").click(function() {
		$(".x-popup").css({
			"visibility": "visible",
		});
		$('.x-zhezhao').show();
		/*设置弹窗位置*/
		$(".x-popup").css({
			"margin-top": -$(".x-popup").height() / 2 + "px",
		})
	})
	
	/*按钮页面代码*/
	$('.x-Survey-btn').click(function () { //点击问卷调查
		window.open("first_page.html"); //打开问卷调查页面
	})
}