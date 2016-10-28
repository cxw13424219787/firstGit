	//第一个参数是要轮播的对象
	//第二个参数是图片的范围
	$(function(){
//				滑动到小点标签的时候,图片进行改变
				//复制多四张照片
				var clone = $(".under_lunbo_right_list li:lt(4)").clone();
				//将复制的四张照片追加到ul后面
				$(".under_lunbo_right_list").append(clone);;
				var liLength = $(".under_lunbo_right_list li").length;
				var liWidth = $(".under_lunbo_right_list li").width();
				var btnIndex = 0;
				//设置定时器,让它自己进行移动
				var timer = setInterval(moveRight,5000);
//				放入停止,不放入自己执行
				$(".under_lunbo_right").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(moveRight,5000);
				})
//				点击有按钮的时候
				$(".list_btn_2").click(function(){
					moveRight();
				})
////			//往左的按钮
				$(".list_btn_1").click(function(){
					moveLeft();
				})
				function moveRight(){
					btnIndex += 4;
					if(btnIndex == liLength){
						$(".under_lunbo_right_list").css("left","0");
						btnIndex = 4;
					}
						$(".under_lunbo_right_list").stop().animate({left:-liWidth*btnIndex});
				}
				function moveLeft(){
					btnIndex -=4;
					if(btnIndex == -4){
						$(".under_lunbo_right_list").css("left",-liWidth*(liLength-4));
						btnIndex = liLength-8;
					}
						$(".under_lunbo_right_list").stop().animate({left:-liWidth*btnIndex});
				}
				
	})
