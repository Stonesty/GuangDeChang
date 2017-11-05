$(function(){
	var cont = 0;
	var t=null;
	$('.banner>ul>li').each(function(inx){
		$(this).index(inx);
	})
	$('.banner>img').each(function(inx){
		$(this).index(inx);
	})
	$('.banner>ul>li').hover(function(){
		cont = $(this).index();
		clearInterval(t);
		$(this).addClass('on').siblings().removeClass('on');
		$('.banner>img').hide();
		$('.banner>img').eq($(this).index()).show();
	},function(){
		setTime();
	});
	function setTime(){
	t =	setInterval(function(){
			if (cont == $('.banner>img').length) {
				cont=0;
			}
		$('.banner>ul>li').eq(cont).addClass('on').siblings().removeClass('on');
		$('.banner>img').hide();
		$('.banner>img').eq(cont).show();
		cont++;
		},2000);
	}
	setTime();
})