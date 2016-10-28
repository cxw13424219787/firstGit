			$(function(){
				//请求送至地址的json文件	
				$.ajax({
						url:'json/guessyoulike.json',
						type:'get',
						success:function(res){
//							获取猜你喜欢的图片
							for (var i = 0; i < res.length;i++) {
//								8张图片
								var src = res[i].src;
								var desc = res[i].desc;
								var price = res[i].price;
								var mLi = $('<li class="fore'+(i+1)+'"></li>');
//								图片信息
								var p_img = $('<div class="p-img"><a href="#none"><img src="img/京东全部图片/头部/'+src +'"/></a></div>')
//								p-info包含p-name和p-price
								var p_info = $('<div class="p-info"></div>')
								var p_name = $('<div class="p-name"><a href="#none">'+desc +'</a></div>');	
								var p_price = $('<div class="p-price"><a href="#none"><i>$</i>'+price+'</a></div>');
								p_info.append(p_name);	
								p_info.append(p_price);
//								购物车
								var car_btn = $('<div class="car_btn"> <a href="#none">加入购物车</a> </div>');

//								将img和infor的信息添加进去
								mLi.append(p_img);	
								mLi.append(p_info);	
								mLi.append(car_btn);	
//									每一部分给若干张照片,通过遍历的方式
								$('#guessyoulike .mc ul').append(mLi);
							}
						},
						error:function(res){
							alert("请求错误");
						}
				})

					
			})