//遍历主页左边的li出现右边的内容
//右边的内容用json来代替
$(function(){
		$.ajax({
			url:'json/allGoodsList.json',
			type:'get',
			success:function(res){
				//将所有的地址通过json显示出来
//				第一个标题
				for (var i = 0; i < res.length;i++) {
//					左侧的标题进行遍历
					var mH3 = $('<h3><a href="#none">'+ res[i].firstTitle +'</a></h3>')
					$(".dd_inner .fore"+(i+1)).append(mH3);
					for (var j = 0; j < res[i].firstContent.length;j++) {
						//二级标题的添加
						//dl全是生成的
						//然后将dl附加到指定位置
						var mA = $('<a href="#none">'+res[i].firstContent[j].secondTitle +' <i>&gt;</i> </a>')
//						分别生成dl dt dl 和dd里面的div
						var mDl = $("<dl></dl>");
						var mDt = $("<dt></dt>");
						var mDd = $("<dd></dd>");
						var mDiv = $("<div></div>");
						//三级标题附加到dt
						mDt.append(mA);
						//dt附加到dl
						mDl.append(mDt);
//						内部头部标题的添加
						var mHeader = $('<a href="#none">'+ res[i].header[j] +' <i>&gt;</i></a>')
						$('.fore'+(i+1)+' .fore_sub_top .channels').append(mHeader);
						
	//					console.log(res[0].firstContent.length);
	//						三级标签内容
							for (var k = 0; k < res[i].firstContent[j].secondContent.length;k++) {
	//							内容的长度
	//							console.log(res[0].firstContent[j].secondContent.length);
								var mContent = $('<a href="#none">'+res[i].firstContent[j].secondContent[k] +' </a>')
								mDiv.append(mContent)
								mDd.append(mDiv);
								mDl.append(mDd);
	//							$(".fore_sub_bottom dl").append(mContent);
	//							console.log($(".fore_sub_bottom dl"));
							}
						$('.fore'+(i+1)+' .fore_sub_bottom').append(mDl);
							
					}
				}

			},
			error:function(res){
				alert("请求错误");
			}
		})
//		当鼠标划入列表的时候出现,滑出的时候消失
			$(".dd_content .dd_inner li").mouseenter(function(){
				$(this).children("div").css("display","block");
				$(".all_content_right").css("display","none");
				
			}).mouseleave(function(){
				$(this).children("div").css("display","none");
				$(".all_content_right").css("display","block");
			})

})