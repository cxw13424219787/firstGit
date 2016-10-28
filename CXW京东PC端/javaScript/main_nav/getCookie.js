//获取cookie
$(function(){
		var COOKIE_NAME = 'username1';
		var liLength = $('#shopping_info ul li').length;
//		读取cookie
//		判断不为空
		 if( $.cookie(COOKIE_NAME) ){  
		 	for (var i = 0; i < liLength;i++) {
				console.log($.cookie("username"+(i+1)),$.cookie("userprice"+(i+1)),$.cookie("userImgsrc"+(i+1)));
				//读取cookie,保证每一个li标签里面都添加到信息
		   		$('#shopping_info li.fore'+(i+1)+' .p-info .p-name a').text( $.cookie("username"+(i+1)) );  
		   		var desc = $.cookie("username"+(i+1));
		   		$('#shopping_info li.fore'+(i+1)+' .p-info .p-price a').text( $.cookie("userprice"+(i+1)) );  
		   		var price = $.cookie("userprice"+(i+1));
	//	   		区分好设置图片的src和获取图片的src
				//这里是设置,所以需要两个参数
		   		$('#shopping_info li.fore'+(i+1)+' .p-img').find("img").attr( "src",$.cookie("userImgsrc"+(i+1)) );  

	//	   		读取商品的个数
				$(".nav_shoppingCar_icon .icon_count").text($.cookie("userCount"));
			}	
			$("#shopping_center").css("display","none");
		 } 
	
	
	
})