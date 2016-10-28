			$(function(){
				//请求送至地址的json文件	
				$.ajax({
						url:'json/floor2.json',
						type:'get',
						success:function(res){
							//将所有的楼层,除去大牌之外,其余的通过json显示出来
							for (var z = 0; z < res.length;z++) {
	//							记录下标,之后保证num1,2,3..可以显示隐藏
								var classIndex = (z+1);
								for (var j = 0; j < res[z].list.length;j++) {
									//输出1-10
									var src = res[z].list[j].src;
									var desc = res[z].list[j].desc;
									var price = res[z].list[j].price;
									var mLi = $('<li class="fore'+(j+1)+'"></li>');
									var p_img = $('<div class="p-img"><a href="#none"><img src="img/京东全部图片/2F个护美妆/2Ftab/'+src +'"/></a></div>')
									var p_name = $('<div class="p-name"><a href="#none">'+desc +'</a></div>');	
									var p_price = $('<div class="p-price"><a href="#none">'+price+'</a></div>');
									mLi.append(p_img);	
									mLi.append(p_name);	
									mLi.append(p_price);
//									每一部分给若干张照片,通过遍历的方式
//									console.log($('#floor_2 .num'+classIndex+' .p-list'));
									$('#floor_2 .num'+classIndex+' .p-list').append(mLi);
								}
					
							}	
							
						},
						error:function(res){
							alert("请求错误");
						}
					})
				//当鼠标划入地址的时候出现下拉框
				$(".floor .tab li").hover(function(){
					var index = $(this).index();
					//当滑到对应的下标时,对应的num出现
					//通过改变num(也就是main)的class来实现
					$(this).closest(".floor").find('.num'+index+'').addClass("main-select").siblings().removeClass("main-select");
//					//判断鼠标移进去时,是否有li标签变红的,如果没有,用默认样式
					

				//当鼠标划出地址的时候下拉框消失
				},function(){
					$(this).removeClass("tab-selected");
				})

					
			})