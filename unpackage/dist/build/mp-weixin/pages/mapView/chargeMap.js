(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mapView/chargeMap"],{"0b5a":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},3316:function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("c530");a(e("66fd"));var i=a(e("bdb6"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"4cb2":function(t,n,e){"use strict";var a=e("5789"),i=e.n(a);i.a},5789:function(t,n,e){},a398:function(t,n,e){"use strict";(function(t,a){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("2eee")),r=i(e("c973")),c=e("6d37"),u=e("8981"),l=e("3d6f"),s=new l({key:u.qqmapKey}),d={data:function(){return{locationInfo:{longitude:"",latitude:""},insideChargingStation:[],externalChargingStation:[],chargingMarkers:[],currently:{name:"",address:"",freeTime:0,parkingSpaceNumber:0,usedParkingSpaceNumber:0,currentPrice:0,distance:0},isInternal:!1,scale:14,stationType:""}},onLoad:function(t){this.stationType=t.stationType,this.getLocation()},methods:{controltap:function(n){var e=t.createMapContext("map");e.moveToLocation()},markertap:function(t){console.log(t);var n=t.detail.markerId;this.isInternal&&(this.currently=this.insideChargingStation[n])},intoParkingLotDetail:function(t){a.navigateTo({url:"/pages/chargeDetail/index?id="+this.currently.id})},distance:function(t){return t<1e3?t+"m ":t/1e3+"km "},getLocation:function(){var t=this;a.getLocation({type:"wgs84",success:function(n){console.log("当前位置的经度："+n.longitude),console.log("当前位置的纬度："+n.latitude),t.locationInfo.longitude=n.longitude,t.locationInfo.latitude=n.latitude,t.getCfChargeList()}})},getCfChargeList:function(){var t=this;return(0,r.default)(o.default.mark((function n(){var e,a,i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,c.cfChargingStationGet)({positionX:t.locationInfo.longitude,positionY:t.locationInfo.latitude,distance:1e3,page:1,size:100,stationType:t.stationType});case 2:e=n.sent,a=e.data,i=e.code,console.log(a,i),10002==i?(t.isInternal=!0,t.currently=a[0],t.insideChargingStation=a,t.refreshMarkers(a,"cf")):t.getOtherChargingStation();case 7:case"end":return n.stop()}}),n)})))()},getOtherChargingStation:function(){var t=this;s.search({keyword:"充电站",location:"".concat(this.locationInfo.latitude,",").concat(this.locationInfo.longitude),success:function(n){0===n.status&&(t.externalChargingStation=n.data,t.refreshMarkers(n.data,"tx"))},fail:function(t){console.log(t)}})},refreshMarkers:function(t,n){var e=[];"cf"===n?(t.forEach((function(t,n){e.push({id:n,latitude:t.positionY,longitude:t.positionX,title:t.stationName,iconPath:"http://file.cfeng.wang/charge.png",width:"32",height:"32",callout:{content:t.stationName,color:"#FFFFFF",fontSize:12,bgColor:"#301819",padding:10,borderRadius:20}})})),this.chargingMarkers=e):"tx"===n&&(t.forEach((function(t,n){e.push({id:n,latitude:t.location.lat,longitude:t.location.lng,title:t.title,iconPath:"http://file.cfeng.wang/charge.png",width:"32",height:"32",callout:{content:t.title,color:"#FFFFFF",fontSize:12,bgColor:"#301819",padding:10,borderRadius:20}})})),this.chargingMarkers=e)}}};n.default=d}).call(this,e("bc2e")["default"],e("543d")["default"])},bdb6:function(t,n,e){"use strict";e.r(n);var a=e("0b5a"),i=e("db43");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("4cb2");var r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports},db43:function(t,n,e){"use strict";e.r(n);var a=e("a398"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}},[["3316","common/runtime","common/vendor"]]]);