/* 
	动态添加左侧导航栏
	data为json数据，包含了导航栏每个选项的配置信息
 */
function navBar(data){
	var ulHtml = '<ul class="layui-nav layui-nav-tree">';
	// 遍历json数据
	for(var i=0;i<data.length;i++){
		
		if(data[i].spread){
			// 判断是否默认展开
			ulHtml += '<li class="layui-nav-item layui-nav-itemed">';
		}else{
			ulHtml += '<li class="layui-nav-item">';
		}
		
		// 判断是否有二级菜单
		if(data[i].children != undefined && data[i].children.length > 0){
			// 有二级菜单
			ulHtml += '<a href="javascript:;">';
			if(data[i].icon != undefined && data[i].icon != ''){
				if(data[i].icon.indexOf("icon-") != -1){
					ulHtml += '<i class="iconfont '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
				}else{
					ulHtml += '<i class="layui-icon" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
				}
			}
			ulHtml += '<cite>'+data[i].title+'</cite>';
			ulHtml += '<span class="layui-nav-more"></span>';
			ulHtml += '</a>'
			ulHtml += '<dl class="layui-nav-child">';
			// 遍历二级菜单
			for(var j=0;j<data[i].children.length;j++){
				ulHtml += '<dd><a href="javascript:;" data-url="'+data[i].children[j].href+'">';
				if(data[i].children[j].icon != undefined && data[i].children[j].icon != ''){
					if(data[i].children[j].icon.indexOf("icon-") != -1){
						ulHtml += '<i class="iconfont '+data[i].children[j].icon+'" data-icon="'+data[i].children[j].icon+'"></i>';
					}else{
						ulHtml += '<i class="layui-icon" data-icon="'+data[i].children[j].icon+'">'+data[i].children[j].icon+'</i>';
					}
				}
				ulHtml += '<cite>'+data[i].children[j].title+'</cite></a></dd>';
			}
			ulHtml += "</dl>"
		}else{
			// 没有二级菜单
			ulHtml += '<a href="javascript:;" data-url="'+data[i].href+'">';
			if(data[i].icon != undefined && data[i].icon != ''){
				if(data[i].icon.indexOf("icon-") != -1){
					ulHtml += '<i class="iconfont '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
				}else{
					ulHtml += '<i class="layui-icon" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
				}
			}
			ulHtml += '<cite>'+data[i].title+'</cite></a>';
		}
		ulHtml += '</li>'
	}
	ulHtml += '</ul>';
	return ulHtml;
}
