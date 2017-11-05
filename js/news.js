$(function(){
	$('.main').find('.content').find('ol').find('li').hover(function(){
		$(this).attr('class','on');
		$(this).find('.ds').css('display','block');
	},function(){
		$(this).removeClass('on');
		$(this).find('.ds').css('display','none');
	})
	
})