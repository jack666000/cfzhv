(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0b30":function(n,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var t={wxmpLogin:function(){return Promise.all([o.e("common/vendor"),o.e("components/wxmpLogin/wxmpLogin")]).then(o.bind(null,"a8b2"))}},a=function(){var n=this.$createElement;this._self._c},i=[]},"2bbc":function(n,e,o){"use strict";o.r(e);var t=o("45c8"),a=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=a.a},"45c8":function(n,e,o){"use strict";(function(n){var t=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(o("2eee")),i=t(o("c973")),c=o("6d37"),r={components:{wxmpLogin:function(){Promise.all([o.e("common/vendor"),o.e("components/wxmpLogin/wxmpLogin")]).then(function(){return resolve(o("a8b2"))}.bind(null,o)).catch(o.oe)},alimpLogin:function(){Promise.all([o.e("common/vendor"),o.e("components/alimpLogin/alimpLogin")]).then(function(){return resolve(o("fafa"))}.bind(null,o)).catch(o.oe)}},data:function(){return{appFunctionsArr:[{icon:"home@2x",label:"我的家庭"},{icon:"parkinglot@2x",label:"车位管理"},{icon:"switchuser@2x",label:"访客记录"},{icon:"home@2x",label:"商户认证"}],CommonlyUsedFunctionsArr:[{icon:"propertysafety@2x",label:"临停缴费"},{icon:"swap@2x",label:"停车记录"},{icon:"thunderbolt@2x",label:"充电账单"},{icon:"car@2x",label:"我的爱车"},{icon:"parkinglot@2x",label:"我的套餐"},{icon:"YUAN@2x",label:"我的钱包"},{icon:"parkinglot@2x",label:"应急出入闸"},{icon:"switchuser@2x",label:"我的订单"},{icon:"setting@2x",label:"系统设置"},{icon:"moneycollect@2x",label:"发券中心"},{icon:"gift@2x",label:"我的优惠券"},{icon:"moneycollect@2x",label:"储值卡"},{icon:"scan",label:"扫码"}],code:"",isLogin:!1,userinfo:{id:"",avatarUrl:"",nickName:"",phone:""}}},onShow:function(){n.getStorageSync("token")?(this.isLogin=!0,this.getMyUserInfo()):this.isLogin=!1},methods:{copyId:function(){n.setClipboardData({data:this.userinfo.id})},getMyUserInfo:function(){var n=this;return(0,i.default)(a.default.mark((function e(){var o,t,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getMyInfo)();case 2:o=e.sent,t=o.data,i=o.code,10002==i&&(n.userinfo.id=t.id,n.userinfo.avatarUrl=t.avatarUrl,n.userinfo.nickName=t.nickName,n.userinfo.phone=t.phone);case 6:case"end":return e.stop()}}),e)})))()},changeLoginStatus:function(n){n?(this.isLogin=!0,this.getMyUserInfo()):this.isLogin=!1},onAppFunction:function(){n.showToast({title:"请前往各大应用市场下载 才风智慧app 体验",icon:"none"})},onCommonlyUsedFunction:function(e){var o=["/pages/parkPay_input/parkPay_input","/pages/parkingRecords/parkingRecords","/pages/chargeDetail/order","/pages/myCar/myCar","/pages/my/monthlyCardPackage","/pages/my/myWallet","/pages/my/emergency","/pages/my/orderList","/pages/my/setMyInfo","/pages/coupon/index","/pages/my/myCoupon","/pages/my/storedValueCard"];e!=this.CommonlyUsedFunctionsArr.length-1?e>=0&&e<o.length?n.navigateTo({url:o[e]}):console.log("Invalid index"):this.onScan()},onScan:function(){n.showActionSheet({itemList:["后台登录扫码"],success:function(e){var o=e.tapIndex;0===o&&(n.showLoading(),n.scanCode({success:function(e){var o=e.errMsg,t=e.result;if(n.hideLoading(),"scanCode:ok"===o){var r=JSON.parse(t);console.log(r),n.showModal({title:"提示",content:"您确认登录吗?",success:function(){var e=(0,i.default)(a.default.mark((function e(o){var t,i,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=o.confirm,!t){e.next=13;break}return e.next=4,(0,c.scanLoginQrCode)({qrCodeId:r.id,randomCode:r.randomCode});case 4:if(i=e.sent,10002!==i.code){e.next=12;break}return e.next=8,(0,c.qrCodeLoginConfirmation)({qrCodeId:i.data.id});case 8:s=e.sent,n.showToast({title:s.message,icon:"none"}),e.next=13;break;case 12:n.showToast({title:i.message,icon:"none"});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})}}}))}})},changeAvatar:function(){n.chooseMedia({count:1,mediaType:["image"],success:function(e){console.log(e),n.editImage({src:e.tempFiles[0].tempFilePath})}})}}};e.default=r}).call(this,o("543d")["default"])},"54ff":function(n,e,o){"use strict";(function(n,e){var t=o("4ea4");o("c530");t(o("66fd"));var a=t(o("5c73"));n.__webpack_require_UNI_MP_PLUGIN__=o,e(a.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},"5c73":function(n,e,o){"use strict";o.r(e);var t=o("0b30"),a=o("2bbc");for(var i in a)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return a[n]}))}(i);o("de1f");var c=o("f0c5"),r=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=r.exports},"86ab":function(n,e,o){},de1f:function(n,e,o){"use strict";var t=o("86ab"),a=o.n(t);a.a}},[["54ff","common/runtime","common/vendor"]]]);