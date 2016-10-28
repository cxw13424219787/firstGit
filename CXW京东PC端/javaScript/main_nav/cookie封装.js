//封装一个cookie,直接调用来设置
function setCookie(mKey,mValue,mExpires){
	var cookieStr = "";
	//字符串不为空,为真,成立
	if (mKey && mValue) {
		//将中文字符进行编码,如果是英文字符也不会影响
		cookieStr = cookieStr + encodeURIComponent(mKey) 
		+ "=" + encodeURIComponent(mValue);
	}
	//数据类型的判断
	//mExpires必须是Date时间类型
	if (mExpires instanceof Date) {
		cookieStr = cookieStr + ";expires="+ mExpires;
	}
	
//	设置cookie
	document.cookie = cookieStr;
	//这里返回的是一个编码过的mKey和mValue
	//如果mKey和mValue是英文的话不会影响,是中文的话就一定要转码了
	return document.cookie;
}
//function setCookie(mKey,mValue,mExpires){
//	var coookieStr = 
//}
//提供一个key就去现有的的Cookie中寻找与key对应的value并且返回
function getCookieWithKey(mKey){
	if(document.cookie.len == 0){
		return "";
	}
	var arr = document.cookie.split("; ");
	for (var i = 0;i < arr.length;i++) {
		var subArr = arr[i].split("=");
		//找到cookie中与mKey对应的value则返回
		//此时这里的subArr可能是中文,可能是英文,所以要先解码,在进行判断
		if (mKey == decodeURIComponent(subArr[0])) {
			//返回name1的值1
			return decodeURIComponent(subArr[1]);
		}
	}
	return "";
}

//删除cookie
function removeCookie(mKey){
	var d = new Date();
	//删除这个键值对,不在乎value是什么
	var cookies = mKey + "=0" + ";expires=" + d;
	document.cookie = cookies;
}
