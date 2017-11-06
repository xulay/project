var num = 1;
var a = $('.m-ca-ul-big-1 li').length / 8;
a = Math.ceil(a);
for(var i = 0; i < $('.m-ca-ul-big-1 li').length; i++) {
	if(i < 8) {
		$('.m-ca-ul-big-1 li').eq(i).show();
	}
}

$('.pageTest').page({
	leng: a, //分页总数
	activeClass: 'activP', //active 类样式定义
	clickBack: function(page) {
		num = parseInt(num)
		$('.m-ca-ul-big-1 li').hide()
		for(var i = 0; i < $('.m-ca-ul-big-1 li').length; i++) {
			if(i >= (num - 1) * 4 && i < num * 4) {
				$('.m-ca-ul-big-1 li').eq(i).show();
			}
		}
	}
})


/*上下页切换*/
$(".pagingUl li").click(function() {
	num = $(this).text();
})
$(".last").click(function() {
	num = $(".pagingUl li").length
})
$(".first").click(function() {
	num = 1
})
$(".next").click(function() {
	if(num < $(".pagingUl li").length) {
		num++;
	}
})
$(".prv").click(function() {
	if(num > 1) {
		num--;
	}
})