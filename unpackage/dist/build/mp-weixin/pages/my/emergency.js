(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/emergency"],{"0122":function(e,n,t){},"23a9":function(e,n,t){"use strict";var a=t("0122"),o=t.n(a);o.a},"4f49":function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("2eee")),i=a(t("c973")),c=t("8981"),r=t("6d37"),u={data:function(){return{show:!1,selector:[],pickerIndex:0,payCodeImage:"",payCarNumber:""}},onLoad:function(){this.getList()},computed:{list:function(){return this.selector.map((function(e){return e.name}))}},methods:{popupChange:function(e){e.show||(this.payCarNumber="",this.payCodeImage="")},bindPickerChange:function(e){this.pickerIndex=Number(e.detail.value)+1},getList:function(){var n=this;e.getLocation({success:function(){var t=(0,i.default)(o.default.mark((function t(a){var i,c,u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(a),i=a.latitude,c=a.longitude,t.next=4,(0,r.cfCheckPointGetListByQuery)({page:1,size:20,distance:1e3,positionX:c,positionY:i});case 4:u=t.sent,console.log(u),10002==u.code?(n.pickerIndex=1,n.selector=u.data):e.showToast({title:u.message,icon:"none"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})},takeapicture:function(){var n=this;e.chooseImage({count:1,sourceType:["camera"],sizeType:["original"],success:function(){var t=(0,i.default)(o.default.mark((function t(a){var i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(a),i={image:a.tempFilePaths[0]},e.showLoading({title:"请稍等",icon:"none"}),console.log({checkPointId:n.list[n.pickerIndex-1],file:i.image}),e.uploadFile({url:"".concat(c.baseUrl,"/internetOfThingsAdmin/cfCheckPoint/parkingDataReporting"),filePath:i.image,name:"file",formData:{checkPointId:n.selector[n.pickerIndex-1].id,file:i.image},header:{Authorization:e.getStorageSync("token")},success:function(t){e.hideLoading(),console.log(JSON.parse(t.data));var a=JSON.parse(t.data);10002==a.code?a.data.feeQrcode?(n.$refs.popup.open("bottom"),n.payCodeImage=a.data.feeQrcode,n.payCarNumber=a.data.numberPlate):e.showToast({title:"二维码为空",icon:"none"}):e.showToast({title:a.message,icon:"none"})}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fail:function(e){console.log(e)}})}}};n.default=u}).call(this,t("543d")["default"])},"4f57":function(e,n,t){"use strict";t.r(n);var a=t("4f49"),o=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},"5a55":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var a={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"1081"))}},o=function(){var e=this.$createElement;this._self._c},i=[]},"764a":function(e,n,t){"use strict";t.r(n);var a=t("5a55"),o=t("4f57");for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("23a9");var c=t("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=r.exports},"9a14":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("c530");a(t("66fd"));var o=a(t("764a"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["9a14","common/runtime","common/vendor"]]]);