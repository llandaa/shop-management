$(function() {
		//时间设置
		function currentTime() {
			var d = new Date(),
				str = '';
			str += d.getFullYear() + '年';
			str += d.getMonth() + 1 + '月';
			str += d.getDate() + '日';
			str += d.getHours() + '时';
			str += d.getMinutes() + '分';
			str += d.getSeconds() + '秒';
			return str;
		}
		setInterval(function() {
			$('#time').html(currentTime)
		}, 1000);
		setInterval(function() {
			$('.time').html(currentTime)
		}, 1000);
		//折叠菜单
		$('.collapse').collapse()
		var collapseKey = true;
		$('.collapse-conner').on('click', function() {
				if(collapseKey) {
					$(this).html("&laquo;")
					$('.col-sm-2').removeClass('col-sm-2').addClass('col-sm-1');
					$('.col-sm-10').removeClass('col-sm-10').addClass('col-sm-11');
					$('.left-menu-title').find("a").hide()
					$('.left-menu-title').find("span").show()
					$('.panel-heading').find("a").hide();
					$('.panel-heading').find(".glyphicon").css({
						"font-size": "28px",
						"margin-top": "-2px",
						"left": "50%",
						"margin-left": "-14px",
					})
					collapseKey = false;
				} else {
					$(this).html("&raquo;")
					$('.col-sm-1').removeClass('col-sm-1').addClass('col-sm-2');
					$('.col-sm-11').removeClass('col-sm-11').addClass('col-sm-10');
					$('.left-menu-title').find("span").hide()
					$('.left-menu-title').find("a").show()
					$('.panel-heading').find("a").show();
					$('.panel-heading').find(".glyphicon").css({
						"font-size": "18px",
						"margin-top": "2px",
						"left": "0",
						"margin-left": "0px",

					})
					collapseKey = true;
				}
			})
			/*****关闭info-box***/
		$('.info-close').on('click', function() {
				$('.info-box').hide()
			})
			/*****tree****/
		$(function() {
			// 6 create an instance when the DOM is ready
			$('#jstree').jstree();
			// 7 bind to events triggered on the tree
			$('#jstree').on("changed.jstree", function(e, data) {
				console.log(data.selected);
			});
			$('#jstree').jstree(true).select_node('child_node_1');
			$('#jstree').jstree('select_node', 'child_node_1');
			$.jstree.reference('#jstree').select_node('child_node_1');

		});
		/*****全选****/
		$("#blankCheckbox").click(function() {
			$('.xuan').attr("checked", this.checked);
		});
		var $xuan = $(".xuan");
		$xuan.click(function() {
			$("#blankCheckbox").attr("checked", $xuan.length == $("input[class='xuan']:checked").length ? true : false);
		});
		/*****品牌管理全选****/
		$("#brand-quanxuan").click(function() {
			$('.ace').attr("checked", this.checked);
		});
		var $ace = $(".ace");
		$ace.click(function() {
			$("#brand-quanxuan").attr("checked", $ace.length == $("input[class='ace']:checked").length ? true : false);
		});
		/*******批量删除******/
		$("#piliang").click(function() {
				var $ace = $(".ace");
				if($ace.length == $("input[class='ace']:checked").length){
					var tableHeader = $('<tr class="table-header"><th width="25px"><input type="checkbox" class="ace" id="brand-quanxuan"></th><th width="80px">ID</th><th width="120px">品牌LOGO</th><th width="120px">品牌名称</th><th width="130px">所属地区/国家</th><th width="350px">描述</th><th width="180px">加入时间</th><th width="200px">操作</th></tr>')
					$('.brand-table').find('table').append(tableHeader)
					$(":checked").parent().parent().remove();
				}else{
					$(":checked").parent().parent().remove();
				}
				
			})
			/******品牌管理的删除******/
		function brandDelete(obj) {
			obj.on('click'),
				function() {
					obj.attr('data-toggle', 'modal');
					obj.attr('data-target', '#myModal')
					$('.shanchu').on('click', function() {
						$(".brand-delete[data-toggle]").parentsUntil('tr').parent().remove()
					})
				}
		}
		/*********品牌管理的添加********/
		$(".add").on('click', function() {
				var addTr = $('<tr><td width="25px"><input type="checkbox" class="ace"></td><td width="80px"></td><td><img  width="150" height="100"/></td><td width="50px"><h2></h2></td><td></td><td class="text-l"></td><td></td><td class="td-manage"><button class="btn btn-info brand-revise" style="margin-right:5px" onclick="brandRevise(this)">修改</button><button class="btn btn-danger brand-delete" onclick="brandDelete(this)">删除</button></td></tr>')
				$('.brand-table').find('table').append(addTr)
				var addId = $('#myModaltianjia').find('#ID').val()
				var addImg = $('#myModaltianjia').find('#imghead2').attr('src')
				var addName = $('#myModaltianjia').find('#name').val()
				var addRegion = $('#myModaltianjia').find('#region').val()
				var addDate = $('#myModaltianjia').find('#date').val()
				var addDesrip = $('#myModaltianjia').find('#talkTopic3').val()
				$('.brand-table').find('table tr:last-child').children().eq(1).text(addId)
				$('.brand-table').find('table tr:last-child').children().eq(2).find('img').attr('src',addImg)
				$('.brand-table').find('table tr:last-child').children().eq(3).text(addName)
				$('.brand-table').find('table tr:last-child').children().eq(4).text(addRegion)
				$('.brand-table').find('table tr:last-child').children().eq(5).text(addDesrip)
				$('.brand-table').find('table tr:last-child').children().eq(6).text(addDate)
				$('#myModaltianjia').find('#ID').val("")
				$('#myModaltianjia').find('#imghead2').attr('src',"")
				$('#myModaltianjia').find('#name').val("")
				$('#myModaltianjia').find('#region').val("")
				$('#myModaltianjia').find('#date').val("")
				$('#myModaltianjia').find('#talkTopic3').val("")
				
			})
		/********品牌管理搜索*******/
		/******国内******/
		$('.brand-table').find('tr').each(function(i,item){
		$('#china-brand').on('click',function(){
				var searchRegionTd = $(item).find('td').eq(4)
				var seacrchRegion = searchRegionTd.text()
				/*alert(seacrchRegion)*/
				if(seacrchRegion.indexOf("中国") == -1){
					searchRegionTd.parent().hide()
				}else{
					searchRegionTd.parent().show()
				}
			})
		$('#foreign-brand').on('click',function(){
				var searchRegionTd = $(item).find('td').eq(4)
				var seacrchRegion = searchRegionTd.text()
				/*alert(seacrchRegion)*/
				if(seacrchRegion.indexOf("中国") == -1){
					searchRegionTd.parent().show()
				}else{
					searchRegionTd.parent().hide()
				}
			})
		
		})
		
		
		/********删除****/
		$(".glyphicon-trash").on('click', function() {
			$(this).attr('data-toggle', 'modal');
			$(this).attr('data-target', '#myModal')
			$('.shanchu').on('click', function() {
				$(".glyphicon-trash[data-toggle]").parentsUntil('tr').parent().remove()
			})
		})
		$(".glyphicon-ok").on('click', function() {
				$(this).attr('data-toggle', 'modal');
				$(this).attr('data-target', '#myModalting')
				$('.tingyong').on('click', function() {
					$(".glyphicon-ok[data-toggle]").parent().parent().prev().text("已停用");
					$(".glyphicon-ok[data-toggle]").parent().addClass('disabled');
					$(".glyphicon-ok[data-toggle]").parent().parent().prev().addClass('disabled')
				})
				var textarealength = $('textarea').val().length()
				$('.textarea-length').text(textarealength)
			})
			/******添加商品***/
		$('.glyphicon-plus').on('click', function() {
			var breadcrumbChild = $('<li class="active chuanjian"><a href="#" class="chuanjian">添加商品</a></li>')
			$('.leibiao').removeClass('active')
			$('.breadcrumb').append(breadcrumbChild)
			$('.formtwo').hide()
			$('.tianjiaobox').hide()
			$('.tianjiaxinxi').height(500)
			$('.tianjiaxinxi').css({
				"margin-top": "0px"
			})
			$('.big-box').height(500)
			$('.table-hide-one').hide()
			$('.table-hide-two').hide()
			$('.table-box').hide()
			$('.tianjia-bigbox').show()
		})
		$('.tijiao').on('click', function() {
			$('.chuanjian').hide()
			$('.leibiao').addClass('active')

			$('.formtwo').show()
			$('.tianjiaobox').show()
			$('.tianjiaxinxi').height(300)
			$('.tianjiaxinxi').css({
				"margin-top": "20px"
			})
			$('.big-box').height(300)
			$('.table-hide-one').show()
			$('.table-hide-two').show()
			$('.table-box').show()
			$('.tianjia-bigbox').hide()
		})
	})
	/*******exit****/
	/*$('#Exit_system').on('click', function(){
      confirm('是否确定退出系统？', {
     btn: ['是','否'] ,//按钮
	 icon:2,
    }, 
	function(){
	  location.href="login.html";  
    });
});*/
	/*****textarea***/
function checkLength() {
	var value = document.getElementById("talkTopic").value;
	if(value.length > 300) {
		document.getElementById("talkTopic").value = document.getElementById("talkTopic").value.substr(0, 300);
	} else {
		document.getElementById("validNum").innerHTML = 300 - value.length;
	}
}

/*******brand-textarea*******/
function checkLengthB() {
	var value = document.getElementById("talkTopic2").value;
	if(value.length > 100) {
		document.getElementById("talkTopic2").value = document.getElementById("talkTopic2").value.substr(0, 100);
	} else {
		document.getElementById("validNum2").innerHTML = 100 - value.length;
	}
}
/*******brand-textarea*******/
function checkLengthA() {
	var value = document.getElementById("talkTopic3").value;
	if(value.length > 100) {
		document.getElementById("talkTopic3").value = document.getElementById("talkTopic3").value.substr(0, 100);
	} else {
		document.getElementById("validNum3").innerHTML = 100 - value.length;
	}
}
/*********折线图*****/
var myChart = echarts.init(document.getElementById('main'));
option = {
	title: {
		text: '月购买订单交易记录',
		subtext: '实时获取用户购买量信息'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['所有订单', '待付款', '已付款', '代发货']
	},
	toolbox: {
		show: true,
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
			name: '所有订单',
			type: 'bar',
			data: [120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 164, 133],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}, {
			name: '待付款',
			type: 'bar',
			data: [26, 59, 30, 84, 27, 77, 176, 1182, 487, 188, 60, 23],
			markPoint: {
				data: [{
					name: '年最高',
					value: 1182,
					xAxis: 7,
					yAxis: 183
				}, {
					name: '年最低',
					value: 23,
					xAxis: 11,
					yAxis: 3
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}, {
			name: '已付款',
			type: 'bar',
			data: [26, 59, 60, 264, 287, 77, 176, 122, 247, 148, 60, 23],
			markPoint: {
				data: [{
					name: '年最高',
					value: 264,
					xAxis: 7,
					yAxis: 183
				}, {
					name: '年最低',
					value: 23,
					xAxis: 11,
					yAxis: 3
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}, {
			name: '代发货',
			type: 'bar',
			data: [26, 59, 80, 24, 87, 70, 175, 1072, 48, 18, 69, 63],
			markPoint: {
				data: [{
					name: '年最高',
					value: 182.2,
					xAxis: 7,
					yAxis: 183
				}, {
					name: '年最低',
					value: 2.3,
					xAxis: 11,
					yAxis: 3
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}

	]
};
myChart.setOption(option);

/*****table翻页****/
var tableButton = document.querySelectorAll('.table-button');
var tableContent = document.querySelectorAll('.table-responsive');
var qian = document.querySelector('.qian');
var hou = document.querySelector('.hou');
var start = document.querySelector('.start');
var end = document.querySelector('.end');
$('.qian').text(1)
var lastchildnum = $('.table-box .table-responsive:last-child').find('tr').length - 1
var total = $('.table-box').find('tr').length
var totalNum = total - 3
var houNum =(totalNum - lastchildnum )/ 2
$('.hou').text(houNum)
$('.total').text(totalNum)
var meiye = $('.meiye').val()
/*$('select[name=search-sort]').change(function(){
			var meiye = $('.meiye option:selected').text()
			if(meiye == 5){
			$('.table-box').find('.table-responsive').height(290)
			alert(5)
		}
		})*/	
for(var i = 0, len = tableButton.length; i < len; i++) {
	tableButton[i].index = i;
	tableButton[i].addEventListener('click', function() {
		var _index = this.index;
		for(var j = 0; j < len; j++) {
			tableButton[j].classList.remove('active');
			tableContent[j].style.display = "none";
		}
		tableButton[_index].classList.add('active');
		tableContent[_index].style.display = "block";
		var num = $('.table-responsive').eq(_index).find('tr').length - 1
		if(_index == tableButton.length - 1) {
			$('.end').addClass('disabled')
			qian.innerHTML = totalNum - lastchildnum + 1
			hou.innerHTML =totalNum - lastchildnum+ 1
		} else {
			$('.end').removeClass('disabled')
			qian.innerHTML = (_index + 1) * num - (num - 1);
			hou.innerHTML = (_index + 1) * num;
		}
		if(_index == 0) {
			$('.start').addClass('disabled')
		} else {
			$('.start').removeClass('disabled')
		}
	}, false)
}
var a = 0
end.addEventListener('click', function() {
	if(a >= 0 && a < tableButton.length - 1) {
		$('.start').removeClass('disabled')
		a++;
		console.log(a)
		for(var j = 0; j < len; j++) {
			tableButton[j].classList.remove('active');
			tableContent[j].style.display = "none";
		}
		tableButton[a].classList.add('active');
		tableContent[a].style.display = "block";
		var num = $('.table-responsive').eq(a).find('tr').length - 1
		if(a == tableButton.length - 1) {
			$('.end').addClass('disabled')
			qian.innerHTML = totalNum - lastchildnum + 1
			hou.innerHTML = totalNum - lastchildnum + 1
		} else {
			qian.innerHTML = (a + 1) * num - (num - 1);
			hou.innerHTML = (a + 1) * num;
		}
	}
}, false)
start.addEventListener('click', function() {
		if(a <= tableButton.length - 1 && a > 0) {
			$('.end').removeClass('disabled')
			a--;
			for(var j = 0; j < len; j++) {
				tableButton[j].classList.remove('active');
				tableContent[j].style.display = "none";
			}
			tableButton[a].classList.add('active');
			tableContent[a].style.display = "block";
			var num = $('.table-responsive').eq(a).find('tr').length - 1
			if(a == 0) {
				$('.start').addClass('disabled')
				qian.innerHTML = 1
				hou.innerHTML = houNum
			} else {
				qian.innerHTML = (a + 1) * num - (num - 1);
				hou.innerHTML = (a + 1) * num;
			}

		}
	}, false)

	/*******上传图片*******/
	//图片上传预览    IE是用了滤镜。
function previewImage(file) {
	var MAXWIDTH = 250;
	var MAXHEIGHT = 100;
	var div = document.getElementById('preview');
	if(file.files && file.files[0]) {
		div.innerHTML = '<img id="imghead" width="200" height="100" />200*100<input type="file" onchange="previewImage(this)" id="picture" style="margin-top: 10px;"/>';
		var img = document.getElementById('imghead');
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
	}
}

function previewImage2(file) {
	var MAXWIDTH = 250;
	var MAXHEIGHT = 100;
	var div = document.getElementById('preview2');
	if(file.files && file.files[0]) {
		var reader = new FileReader();
		reader.onload = function(evt) {
			div.innerHTML = '<img id="imghead2" width="200" height="100" />200*100<input type="file" onchange="previewImage2(this)" id="picture" style="margin-top: 10px;"/>';
			var img = document.getElementById('imghead2');
			//console.log(evt.target.result)
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead2>';
		var img = document.getElementById('imghead2');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
	}
}
/**********表格查询功能********/
/*var oTab = document.querySelector('.brand-tab');
var oTabInp = document.querySelector('#brand-search-box')
var oTabBtn = document.querySelector('.brand-search-btn');
oTabBtn.onclick=function(){
	/*alert(oTab.innerText)
	alert(1)
}*/
/*******查询****/
		var brandSearchBox = document.querySelector('#brand-search-box')
		var BrandTable = document.querySelector('.brand-tab')
		var txt = BrandTable.innerHTML
		brandSearchBox.onchange = function(){
      		var val = this.value;
      		var reg = eval('/'+val+'/g');
      		/*alert(String(txt.match(reg)).split(',')[0])*/
      		BrandTable.innerHTML = txt.replace(reg,'<span style="color:#f00">'+String(txt.match(reg)).split(',')[0]+'</span>')
    	}