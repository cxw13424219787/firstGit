			$(function(){
				//请求送至地址的json文件	
				$.ajax({
					url:'json/address.json',
					type:'get',
					success:function(res){
						//将所有的地址通过json显示出来
						for (var i = 0; i < res.length;i++) {
							var mLi = $('<li><a href="#none">'+ res[i]+'</a></li>')
							$(".header_address_list").append(mLi);
						}
						//当鼠标划入地址的时候出现下拉框
						$(".header div.address").mouseenter(function(){
							$(this).css("background","white");
							$(this).children("ul").css("display","block");
							//判断鼠标移进去时,是否有a标签变红的,如果没有,用默认样式
							if (!$(".header_address_list li a").hasClass("active")) {
								$(".header_address_list li:first a").addClass("active");
							}

						//当鼠标划出地址的时候下拉框消失
						}).mouseleave(function(){
							$(this).css("background","#f1f1f1");
							$(this).children("ul").css("display","none");
							
						})
						//当鼠标划入地址里面的时候显示
//						$(".header_address_list").mouseenter(function(){
//							$(this).css("display","block");
//						//当鼠标划出地址里面的时候消失
//						}).mouseleave(function(){
//							$(this).css("display","none");
//						})
						//点击事件,变红
						$(".header_address_list li a").mousedown(function(){
							$(this).addClass("active").parent().siblings().children("a").removeClass();
							var txt = $(this).text();
							$(".header div.address i").text(txt);
						})
						
					},
					error:function(res){
						alert("请求错误");
					}
				})
				//在头部保证每一个li标签鼠标划入的时候,只有滑出它的父元素或者子元素的时候,子元素才消失
				$(".header_list li").mouseenter(function(){
					$(this).css("background","white");
					$(this).children("div").css("display","block");
				})
				$(".header_list li").mouseleave(function(){
					$(this).children("div").css("display","none");
					$(this).css("background","#f1f1f1");
				})
				
//				获取导航栏中的webNav
			//webNav的第一部分特色主题
					$.ajax({
						url:'json/web_nav_theme.json',
						type:'get',
						success:function(res){
							//将所有的地址通过json显示出来
							for (var i = 0; i < res.length;i++) {
								var mDiv = $('<div><a href="#none">'+ res[i].name+'</a></div>')
								$(".webNav_first dl dd").append(mDiv);
							}
							
						},
						error:function(res){
							alert("请求错误");
						}
					})

			
				//webNav的第二部分行业频道
					$.ajax({
						url:'json/web_nav_industry.json',
						type:'get',
						success:function(res){
							//将所有的地址通过json显示出来
							for (var i = 0; i < res.length;i++) {
								var mDiv = $('<div><a href="#none">'+ res[i].name+'</a></div>')
								$(".webNav_secend dl dd").append(mDiv);
							}
							
						},
						error:function(res){
							alert("请求错误");
						}
					})
	
				//webNav的第三部分生活服务
					$.ajax({
						url:'json/web_nav_life.json',
						type:'get',
						success:function(res){
							//将所有的地址通过json显示出来
							for (var i = 0; i < res.length;i++) {
								var mDiv = $('<div><a href="#none">'+ res[i].name+'</a></div>')
								$(".webNav_third dl dd").append(mDiv);
							}
							
						},
						error:function(res){
							alert("请求错误");
						}
					})
	
				//webNav的第四部分更多精选
					$.ajax({
						url:'json/web_nav_more.json',
						type:'get',
						success:function(res){
							//将所有的地址通过json显示出来
							for (var i = 0; i < res.length;i++) {
								var mDiv = $('<div><a href="#none">'+ res[i].name+'</a></div>')
								$(".webNav_forth dl dd").append(mDiv);
							}
							
						},
						error:function(res){
							alert("请求错误");
						}
					})
					
//				鼠标移入头部的购物车,购物车里面的内容出现消失
				$(".nav_shoppingCar").mouseenter(function(){
					$(this).children(".shoppingCar_dorpdown_layer").css("display","block");
				}).mouseleave(function(){
					$(this).children(".shoppingCar_dorpdown_layer").css("display","none");
				})
					
			})