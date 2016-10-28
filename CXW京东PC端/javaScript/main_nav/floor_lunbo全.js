	//第一个参数是要轮播的对象
	//第二个参数是图片的范围
//	function changePic(obj,mImg){
	
		onload = function floorLunbo(objt){
				var obj = document.getElementById(objt);
				console.log(obj);

//				第二层
//				$("obj .slide .LunBoNum span").hover(function(){
//					//记录当前点击的坐标
//					var spanIndex = $(this).index();
//					floorIndex = spanIndex;
//					$(this).addClass("CurrentNum").siblings().removeClass();
//					$("obj .slide-main").stop().animate({left:-liWidth*spanIndex});
//				})
				//设置定时器
				var timer = setInterval(moveRight,4000);
				$("obj .slide-body").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(moveRight,4000);
				})
				
				//ul#floor2 .slide-main下的li进行轮播
				var clone = $("obj .slide-main li").first().clone();
				$("obj .slide-main").append(clone);;
//				固定为五张照片
				var floorliLength = 5;
				var liWidth = $("obj .slide-main li").width();
				
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
						$("obj .slide-main").css("left","0");
						floorIndex = 1;
					}
					console.log("");
						$(''+obj+' .slide-main').stop().animate({left:-liWidth*floorIndex});
					if (floorIndex == floorliLength - 1) {
						$("obj .slide .LunBoNum span").eq(0).addClass("CurrentNum").siblings().removeClass();
					} else{
						$("obj .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
					}	
					
				}
				function moveLeft(){
					floorIndex--;
					if(floorIndex == -1){
						$("obj .slide-main").css("left",-liWidth*(floorliLength-1));
						floorIndex = floorliLength-2;
					}
						$("obj .slide-main").stop().animate({left:-liWidth*floorIndex});
						$("obj .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
				}
		}

//实现无缝轮播的原理：
//做四张图片的轮播
//	 * 从左到右：
//	 * 		利用变量i，当i=size(即克隆第1张)时,再次点击 时 css设置left:0,迅速跳转到第一张，再将i的值设置为1，马上动画到第二张图片(i=1);
//	 * 		解释：当轮播到第5张(克隆的第一张)时，再次点击时，利用css('left','0px')直接跳到第一张(css比较迅速)，然后马上再动画到第二张
//	 * 从右到左：
//	 * 		获取size就是img的张数
//	 * 		当轮播到第一张的时候，点击时此时i=-1，迅速移动到第5张(left:size-1);动画到第四张：i=size-2
//	 * 圆点：
//	 * 		i = $(this).index() 此时i的值变成了保存移到哪个圆点的index； index是从0 开始，跟i是同步的
//	 * 		移到哪个点的时候，比如移到第二个点，表示第二张图片，动画到 i(此时为1)* imglength，就移动了一张图片的距离，图片变成了2个
//	 *计时器   
//	 * 		左移和右移写成函数，定时器直接调用函数	
				//通过ajax实现轮播图片
//				滑动到小点标签的时候,图片进行改变
		floorLunbo("floor_2");
//三楼
//				$("#floor_3 .slide .LunBoNum span").hover(function(){
//					//记录当前点击的坐标
//					var spanIndex = $(this).index();
//					floorIndex = spanIndex;
//					$(this).addClass("CurrentNum").siblings().removeClass();
//					$("#floor_3 .slide-main").stop().animate({left:-liWidth*spanIndex});
//				})
//				//设置定时器
//				var timer = setInterval(moveRight,4000);
//				$("#floor_3 .slide-body").hover(function(){
//					clearInterval(timer);
//				},function(){
//					timer = setInterval(moveRight,4000);
//				})
//				
//				//ul#floor_3 .slide-main下的li进行轮播
//				var clone = $("#floor_3 .slide-main li").first().clone();
//				$("#floor_3 .slide-main").append(clone);;
////				固定为五张照片
//				var floorliLength = 5;
//				var liWidth = $("#floor_3 .slide-main li").width();
//				
//				var floorIndex = 0;
//				$(".list_btn_2").click(function(){
//					moveRight();
//				})
//////				//往左的按钮
//				$(".list_btn_1").click(function(){
//					moveLeft();
//				})
//				function moveRight(){
//					floorIndex++;
//					if(floorIndex == floorliLength){
//						$("#floor_3 .slide-main").css("left","0");
//						floorIndex = 1;
//					}
//						$("#floor_3 .slide-main").stop().animate({left:-liWidth*floorIndex});
//					if (floorIndex == floorliLength - 1) {
//						$("#floor_3 .slide .LunBoNum span").eq(0).addClass("CurrentNum").siblings().removeClass();
//					} else{
//						$("#floor_3 .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
//					}	
//					
//				}
//				function moveLeft(){
//					floorIndex--;
//					if(floorIndex == -1){
//						$("#floor_3 .slide-main").css("left",-liWidth*(floorliLength-1));
//						floorIndex = floorliLength-2;
//					}
//						$("#floor_3 .slide-main").stop().animate({left:-liWidth*floorIndex});
//						$("#floor_3 .slide .LunBoNum span").eq(floorIndex).addClass("CurrentNum").siblings().removeClass();
//				}
		</script>

