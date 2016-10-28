			$(function(){
				/*
					思路：
					1）window绑定滚动事件
					2）当滚动到一定距离时，显示楼层导航
					3）当滚动到相应的楼层时，导航"相应位置"显示高亮
					scrollTop,offset().top对比，得出索引值
					4)点击事件触发的时候删除滚动事件,点击滚动事件的时候删除点击事件
				 */
				var isClick = false;//是否是滚动
				$(window).scroll(function(){
					if (isClick) {
						console.log("是点击事件,返回,不触发滚动事件");
						return;
					}
					var scrollTop = $(window).scrollTop();
					var bannerscrollTop = $(".floor_banner").offset().top - 100;
					if (scrollTop >= bannerscrollTop) {
						$("#tooBar_left_LoutiNav").fadeIn();
					} else{
						$("#tooBar_left_LoutiNav").fadeOut();
					}
					var liHeight = $(".floor").eq(0).outerHeight();
					$(".floor").each(function(index){
						if (scrollTop >= $(this).offset().top - liHeight/2 ) {
							$("#tooBar_left_LoutiNav ul li").not(":last").removeClass().eq(index).addClass("hover");
						}
					})
				})
				//点击事件
				$("#tooBar_left_LoutiNav li").click(function(){
					//是点击事件,不会调用滑动事件
					isClick = true;
					$(this).addClass("hover").siblings().not(":last").removeClass();
					if ($(this).hasClass("last")) {
						$(window).scrollTop(0);
						return;
					}
//					除了楼层其余的都归为headerHeight
					var headerHeight = $(".floor_banner").offset().top ;
					var liHeight = $(".floor").eq(0).outerHeight() ;
					var index = $(this).index();
					var changHeight = index*liHeight + headerHeight;
					$('html,body').stop().animate({
						scrollTop:changHeight
					},100,function(){
						//点击完后,让isClick重洗等于false
						//保证点击完后,下次还是可以在点击事件和滚动事件选择
						isClick = false;
					})
				})
				
				
				//点击top回到最顶部
				
				
			})
