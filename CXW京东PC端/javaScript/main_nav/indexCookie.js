//生成cookie
$(function(){
//	点击猜你喜欢部分添加到购物车
	var itemCount = 0;
	$("#guessyoulike li").click(function(){
		itemCount++;
//		记录下每次点击的数据
		var name = $(this).children(".p-info").children(".p-name").children("a").text();
		var price = $(this).children(".p-info").children(".p-price").children("a").text();
		var imgsrc = $(this).children(".p-img").find("img").attr("src");
//		设置cookie值
		//每次点击一下按钮生成一个新的标签来存储
//		第一次生成username1,第二次生成username2,以此类推,其他的也是
	     $.cookie("username"+itemCount, name , {  expires: 7 });  
	     $.cookie("userprice"+itemCount, price , {  expires: 7 });  
	     $.cookie("userImgsrc"+itemCount, imgsrc , {  expires: 7 });  
//	     点击的次数记录下来
	     $.cookie("userCount", itemCount , {  expires: 7 });  
		
//		记录下每次点击的数据
//		console.log($.cookie("username"+itemCount),$.cookie("userprice"+itemCount),$.cookie("userImgsrc"+itemCount));
		console.log("username"+itemCount,$.cookie("username"+itemCount));
		console.log("userprice"+itemCount,$.cookie("userprice"+itemCount));
		console.log("userImgsrc"+itemCount,$.cookie("userImgsrc"+itemCount));
		console.log("userImgsrc"+itemCount,$.cookie("userImgsrc"+itemCount));

	//	获取到至少一个cookie
	
//		每次点击一下购物车,数字会变
		$(".nav_shoppingCar_icon .icon_count").text(itemCount);
	})	
	
	
})