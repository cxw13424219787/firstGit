			$(function(){
				//请求送至地址的json文件	
				$.ajax({
						url:'json/floor3.json',
						type:'get',
						success:function(res){
							//将所有的楼层,除去大牌之外,其余的通过json显示出来
							for (var z = 0; z < res.length;z++) {
	//							记录下标,之后保证num1,2,3..可以显示隐藏
								var classIndex = (z+1);
								for (var j = 0; j < res.length;j++) {
									//输出1-8
	//								console.log(res[0].topContent[j].src);
									var src = res[z].topContent[j].src;
									var desc = res[z].topContent[j].desc;
									var price = res[z].topContent[j].price;
									var mLi = $('<li class="fore'+(j+1)+'"></li>');
									var p_img = $('<div class="p-img"><a href="#none"><img src="img/京东全部图片/3F手机通讯/'+src +'"/></a></div>')
									var p_name = $('<div class="p-name"><a href="#none">'+desc +'</a></div>');	
									var p_price = $('<div class="p-price"><a href="#none">'+price+'</a></div>');
									mLi.append(p_img);	
									mLi.append(p_name);	
									mLi.append(p_price);
//									每一部分给若干张照片,通过遍历的方式
									$('#floor_3 .num'+classIndex+' .p-list').append(mLi);
								}
					
							}	
							
						},
						error:function(res){
							alert("请求错误");
						}
					})

					
			})