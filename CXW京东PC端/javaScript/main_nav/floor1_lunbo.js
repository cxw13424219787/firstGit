$(function(){

				$("#floor_1 .slide .LunBoNum span").hover(function(){
					//记录当前点击的坐标
					var spanIndex = $(this).index();
					floorIndex = spanIndex;
					$(this).addClass("CurrentNum").siblings().removeClass();
					
					$("#floor_1 .slide-main").stop().animate({left:-liWidth*spanIndex});
				})
				//设置定时器
				var timer = setInterval(moveRight,4000);
				$("#floor_1 .slide-body").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(moveRight,4000);
				})
				
				//ul#floor_1 .slide-main下的li进行轮播
				var clone = $("#floor_1 .slide-main li").first().clone();
				$("#floor_1 .slide-main").append(clone);;
//				固定为五张照片
				var floorliLength = 5;
				var liWidth = $("#floor_1 .slide-main li").width();
				
				var floorIndex = 0;
				$(".list_btn_2").click(function(){
					moveRight();
				})
////				//往左的按钮
				$(".list_btn_1").click(function(){
					moveLeft();
				})
				function moveRight(){
					floorIndex++;
					if(floorIndex == floorliLength){
						$("#floor_1 .slide-main").css("left","0");
						floorIndex = 1;
					}
						$("#floor_1 .slide-main").stop().animate({left:-liWidth*floorIndex});
					if (floorIndex == floorliLength - 1) {
						$("#floor_1 .slide .LunBoNum span").eq(0).addClass("CurrentNum").siblings().removeClass();
					} else{
						$("#floor_1 .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
					}	
					
				}
				function moveLeft(){
					floorIndex--;
					if(floorIndex == -1){
						$("#floor_1 .slide-main").css("left",-liWidth*(floorliLength-1));
						floorIndex = floorliLength-2;
					}
						$("#floor_1 .slide-main").stop().animate({left:-liWidth*floorIndex});
						$("#floor_1 .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
				}
	})			