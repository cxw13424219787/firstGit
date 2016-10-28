$(function(){
	/*
		懒加载效果
			1）页面载入时请求部分数据
			2）当滚动条滚动到接近底部时，加载更多的数据
			给window绑定scroll事件
	 */
//	点击toTop标签回到顶部
	$("#toTop").hide();
	$("#toTop").click(function(){
		$('html,body').scrollTop(0);
	})
	// 获取页面元素
	//先加载第一个json文件
	var index = 1;
	//一开始直接加载十条,先出现加载的gif图,过一秒后再加载出来
	$('#loading').show();
	setTimeout(function(){
		//延时一秒后调用show,
		ajax();
		//内容出来之后,加载标签隐藏
		$('#loading').hide();
	},1000);
//	每次刷新的时候回到顶部
//	console.log('body的高度是'+$('body').scrollTop());
	//设一个标记

	// 2）当滚动条滚动到接近底部时，加载更多的数据
	$(window).on('scroll',function(){
		// 滚动条高度
		var scrollTop = $(window).scrollTop();
		// 文档内容高度
		var docHeight = $(document).height();
		// 窗口高度
		var winHeight = $(window).height();
		if (scrollTop > docHeight/2) {
			$("#toTop").fadeIn(500);
		} else{
			$("#toTop").hide();
		}
		// dd标签的长度
		var ddlength = $('#guessyoulike .dd-dealcard').length;
		//只有当dd的长度和加载出来的页面相等的时候才能载入下一页面
		//因为只要滚动到最底部的时候index就会++,此时dd还没出来
//		console.log('dd的长度'+ddlength,'index的长度'+index*10);
		if(scrollTop >= docHeight - winHeight && ddlength == index*10){
			index++;
			//这里只有3个json,加载完后就完了,不再加载
			//当等于4的时候不再加载
			if(index >= 4){
				return;
			}
			//到底的时候出现加载标签
			$('#loading').show();
			setTimeout(function(){
//				延时一秒后调用
				ajax();
				$('#loading').hide();
			},1000);
			

		}

	});
	
	function ajax () {
		$.ajax({
				url:'json/product'+index+'.json',
				dataType:'json',
				success:function(res){
					if(index >= 4){
						return;
					}

					var data = res.data;
					//通过json加载dd
					//猜你喜欢的部分
					for (var i = 0;i < data.length;i++) {
						//左边图片部分
						var langren = 'img/img/product/lairen.png';
						var src = 'img/'+data[i].img;
						var nobooking = '<span class="dealcard-nobooking"></span>';
						//给图片一开始加上一张统一的懒人图片,在src
						//给图片加上一个自定义属性data-lazy-img='+src+'
						//这个src是要加载出来的图片
						//disload = "0"
						//加上一个disload标志,判断有没加载过,加载过置为1,否则置为0;
						var mImg = '<div class="dealcard-img"> <img src="'+langren+ ' " data-lazy-img='+src+' disload = "0"> </div>';
			//			//右边文字部分
						var dealcardtitle = '<div class="dealcard-brand single-line">'+data[i].title +'</div>';
						var dealcardbrand = '<div class="title text-block">'+data[i].desc +'</div>';
						//右边文字价格部分
						var price = '<span class="strong">'+data[i].price +'</span><span class="strong-color">元</span>';
						var tag = '<span class="tag">'+data[i].tag +'</span>';
						var rightLine = '<span class="line-right">'+data[i].rightLine +'</span>';
						//包住上面的价格标签
						var dealcardprice = '<div class="price">'+price+tag+rightLine+'</div>';
						//包住上面的文字部分标签
						var Dealcardright = '<div class="dealcard-block-right">'+dealcardtitle+dealcardbrand+dealcardprice+'</div>';
						//图片和文字一起添加
						var mDiv = '<div class="dealcard">'+nobooking+mImg+Dealcardright+'</div>';
						var mDd = '<dd class="dd-dealcard">'+mDiv+'</dd>';
						$("#guessyoulike .list").append(mDd);
						
					}
					showImg();
					//此时index++,加载下一个页面

				}
			});
	}
	
	// 用data-lazy-img属性替换src属性
	function showImg () {
		$('.dealcard-img').each(function (){
			//判断是否加载过
			if ($(this).children('img').attr("disload") == '0') {
				//未加载过,加载了置为1,下次不再重新加载
				$(this).children('img').attr("disload",'1');
				//让懒人图片透明度先变0.3,然后src的内容替换成data-lazy-img的内容,1sg过渡
				$(this).children('img').animate({opacity:0.3}, 500, function() {
					$(this).attr('src', $(this).attr('data-lazy-img')).animate({opacity: 1}, 1000);

				});
			} 
		})
	}
});
