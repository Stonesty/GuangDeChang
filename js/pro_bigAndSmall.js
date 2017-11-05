$(function(){
	var cont  = 0;
	$('.small_photo>ul').css('width',$('.small_photo>ul')[0].offsetWidth*2+10);
	$('.small_photo>ul')[0].innerHTML +=$('.small_photo>ul').html();	

	$('.small_photo>ul').find('li').eq(Math.floor($('.small_photo>ul>li').length/2/2)).addClass('on');
//	$('.small_photo>ul').find('li').each(function(){
//		if($(this).find('img').attr('src')==$('.left>img').attr('src')){
//			$(this).addClass('on');
//			
//		}
//	});
//	$('.small_photo>ul').find('li').each(function(inx){
//		$(this).index(inx);
//	})
	
	var l = $('.small_photo>ul').css('width');
	var oli = Math.ceil(parseInt($('.small_photo>ul').css('width'))/$('.small_photo>ul').find('li').length);
	
	
	$('.small>a').eq(0).click(function(){
		$('.small_photo>ul').find('li').each(function(inx){
				if ($(this).attr('class')=='on') {
					cont = inx
				}
		})
		if(parseInt($('.small_photo>ul').css('left'))<=-parseInt(l)/2+oli){
			//有问题。。。。。。。。。。。。。。。。。。
			$('.small_photo>ul').css('left','148px');
//			$('.small_photo>ul').css('left','0px');
//有问题。。。。。。。。。。。。。。。。。。。。。。。。。。。。
                cont=0;
		}
		$('.small_photo>ul').css('left',function(){
			return parseInt($(this).css('left'))-109-39+'px';
		});
		$('.small_photo>ul').find('li').removeClass('on');
		$('.small_photo>ul').find('li').eq(cont+1).addClass('on');
		$('.left>img').attr('src',$('.small_photo>ul').find('li').eq(cont+1).find('img').attr('src'));
	})
	
	
	
	$('.small>a').eq(1).click(function(){
		$('.small_photo>ul').find('li').each(function(inx){
				
				if ($(this).attr('class')=='on') {
					cont = inx
				}
		})
		if(parseInt($('.small_photo>ul').css('left'))>=0){
			$('.small_photo>ul').css('left',-parseInt(l)/2-2+'px');
                cont=$('.small_photo>ul').find('li').length-2;
		}
		$('.small_photo>ul').css('left',function(){
			return parseInt($(this).css('left'))+109+39+'px';
		});
		$('.small_photo>ul').find('li').removeClass('on');
		$('.small_photo>ul').find('li').eq(cont-1).addClass('on');
		$('.left>img').attr('src',$('.small_photo>ul').find('li').eq(cont-1).find('img').attr('src'));
	})
})