/*联系我们页面代码*/
/*地图相关*/
! function() {
	var infoWindow, map, level = 14,
		center = {
			lng: 108.905935,
			lat: 34.220261
		},
		features = [{
			type: "Marker",
			name: "我的位置",
			desc: "",
			color: "red",
			icon: "cir",
			offset: {
				x: -9,
				y: -31
			},
			lnglat: {
				lng: 108.91117,
				lat: 34.215293
			}
		}];

	function loadFeatures() {
		for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
			data = features[i];
			switch(data.type) {
				case "Marker":
					feature = new AMap.Marker({
						map: map,
						position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
						zIndex: 3,
						extData: data,
						offset: new AMap.Pixel(data.offset.x, data.offset.y),
						title: data.name,
						content: '<div class="icon icon-' + data.icon + ' icon-' + data.icon + '-' + data.color + '"></div>'
					});
					break;
				case "Polyline":
					for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
						path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
					}
					feature = new AMap.Polyline({
						map: map,
						path: path,
						extData: data,
						zIndex: 2,
						strokeWeight: data.strokeWeight,
						strokeColor: data.strokeColor,
						strokeOpacity: data.strokeOpacity
					});
					break;
				case "Polygon":
					for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
						path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
					}
					feature = new AMap.Polygon({
						map: map,
						path: path,
						extData: data,
						zIndex: 1,
						strokeWeight: data.strokeWeight,
						strokeColor: data.strokeColor,
						strokeOpacity: data.strokeOpacity,
						fillColor: data.fillColor,
						fillOpacity: data.fillOpacity
					});
					break;
				default:
					feature = null;
			}
			if(feature) {
				AMap.event.addListener(feature, "click", mapFeatureClick);
			}
		}
	}

	function mapFeatureClick(e) {
		if(!infoWindow) {
			infoWindow = new AMap.InfoWindow({
				autoMove: true
			});
		}
		var extData = e.target.getExtData();
		infoWindow.setContent("<h5>" + extData.name + "</h5><div>" + extData.desc + "</div>");
		infoWindow.open(map, e.lnglat);
	}

	map = new AMap.Map("mapContainer", {
		center: new AMap.LngLat(center.lng, center.lat),
		level: level
	});

	loadFeatures();

	map.on('complete', function() {
		map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function() {
			map.addControl(new AMap.ToolBar);
			map.addControl(new AMap.OverView({
				isOpen: true
			}));
			map.addControl(new AMap.Scale);
		});
	})

}();

/*获取用户当前位置信息*/
function getLocation() {
	var options = {
		enableHighAccuracy: true,
		maximumAge: 1000
	}
	if(navigator.geolocation) {
		//浏览器支持geolocation
		navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	} else {
		//浏览器不支持geolocation
		$("#baidu_geo").html("该浏览器暂不支持定位")
	}
}
//失败时
function onError(error) {
	switch(error.code) {
		case 1:
			alert("位置服务被拒绝");
			break;

		case 2:
			alert("暂时获取不到位置信息");
			break;

		case 3:
			alert("获取信息超时");
			break;

		case 4:
			alert("未知错误");
			break;
	}

}

getLocation();
//成功时
function onSuccess(position) {
	var latlon = position.coords.latitude + ',' + position.coords.longitude;
	//baidu   
	var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latlon + "&output=json&pois=0";
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		url: url,
		beforeSend: function() {
			$("#baidu_geo").html('正在定位...');
		},
		success: function(json) {
			if(json.status == 0) {
				$("#baidu_geo").html(json.result.formatted_address);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#baidu_geo").html(latlon + "地址位置获取失败");
		}
	});
};