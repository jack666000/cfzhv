(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/scanCode"],{"5a0f":function(e,a,t){"use strict";t.r(a);var r=t("9072"),n=t("8f73");for(var c in n)["default"].indexOf(c)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(c);t("8dea");var i=t("f0c5"),o=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);a["default"]=o.exports},"8dea":function(e,a,t){"use strict";var r=t("900a"),n=t.n(r);n.a},"8f73":function(e,a,t){"use strict";t.r(a);var r=t("951d"),n=t.n(r);for(var c in r)["default"].indexOf(c)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(c);a["default"]=n.a},"900a":function(e,a,t){},9072:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},n=[]},"951d":function(e,a,t){"use strict";(function(e,r){var n=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t("2eee")),i=n(t("c973")),o=t("8981"),s=t("6d37"),u={data:function(){return{code:"",carpark_checkpoint_id:"",chargingStationId:"",portId:"",scanType:"",isLogin:!1,carParkUseLogId:""}},onShow:function(e){this.getCode()},onLoad:function(a){var t=e.getStorageSync("token"),r=decodeURIComponent(a.q);if(r)if(r.includes("electricVehicleCharging")){var n=this.extractIdsFromUrl(r),c=n.chargingStationId,i=n.portId;this.setChargeDetails(c,i,"electricVehicleCharging")}else if(r.includes("bicycleCharging")){var o=this.extractIdsFromUrl(r),s=o.chargingStationId,u=o.portId;this.setChargeDetails(s,u,"bicycleCharging")}else r.includes("/carParkFee/checkPointId/")?(this.scanType="carParkFee",this.carpark_checkpoint_id=r.split("/scene/carParkFee/checkPointId/")[1]):r.includes("/carParkFee/carParkUseLogId/")&&(this.scanType="carParkUseLogId",this.carParkUseLogId=r.split("/scene/carParkFee/carParkUseLogId/")[1]);t?(this.isLogin=!0,"electricVehicleCharging"===this.scanType?this.navigateToChargeDetail("scanCodeElectricVehicleStart"):"bicycleCharging"===this.scanType?this.navigateToChargeDetail("scanCodeBicycleStart"):"carParkFee"===this.scanType?this.showLoadingAndFetchCarParkUseLogId():"carParkUseLogId"===this.scanType&&this.navigateToPaymentPage("carParkUseLogId")):this.isLogin=!1},methods:{setChargeDetails:function(e,a,t){console.log(e,a,t),this.chargingStationId=e,this.portId=a,this.scanType=t},navigateToChargeDetail:function(a){e.reLaunch({url:"/pages/chargeDetail/".concat(a,"?chargeId=").concat(this.chargingStationId,"&portId=").concat(this.portId)})},showLoadingAndFetchCarParkUseLogId:function(){e.showLoading({title:"正在查看账单~"}),this.getCarParkUseLogId()},navigateToPaymentPage:function(a){e.reLaunch({url:"/pages/pay/pay?".concat(a,"=").concat(this.carParkUseLogId)})},extractIdsFromUrl:function(e){var a=e.split("chargingStationId/")[1],t=a.split("-");return{chargingStationId:t[0],portId:t[1]}},getCarParkUseLogId:function(){var a=this;return(0,i.default)(c.default.mark((function t(){var r,n,i;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,s.getLastCarParkUseLogByCheckPointId)({checkPointId:a.carpark_checkpoint_id,limitTime:3e5});case 2:r=t.sent,n=r.data,i=r.code,console.log(n,i),10002==i&&null!=n?e.reLaunch({url:"/pages/pay/pay?carParkUseLogId="+n}):(e.showToast({title:"暂无账单 请手动输入车牌",icon:"none"}),setTimeout((function(){e.reLaunch({url:"/pages/parkPay_input/parkPay_input"})}),1500));case 7:case"end":return t.stop()}}),t)})))()},aliLogin:function(){if(!this.isLogin){var a=this;e.getAuthCode({scopes:["auth_user"],success:function(){var t=(0,i.default)(c.default.mark((function t(r){var n;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.authCode){t.next=24;break}return t.next=3,(0,s.getAliMinBaseUserInfoByCode)({authCode:r.authCode,appid:o.aliAppid});case 3:if(n=t.sent,e.hideLoading(),10002!==n.code){t.next=23;break}e.setStorageSync("user",n.data),e.setStorageSync("token",n.token.access_token),a.isLogin=!0,t.t0=a.scanType,t.next="carParkFee"===t.t0?12:"bicycleCharging"===t.t0?14:"electricVehicleCharging"===t.t0?16:"carParkUseLogId"===t.t0?18:20;break;case 12:return a.getCarParkUseLogId(),t.abrupt("break",21);case 14:return a.navigateToChargeDetail("scanCodeBicycleStart"),t.abrupt("break",21);case 16:return a.navigateToChargeDetail("scanCodeElectricVehicleStart"),t.abrupt("break",21);case 18:return a.navigateToPaymentPage("carParkUseLogId"),t.abrupt("break",21);case 20:return t.abrupt("break",21);case 21:t.next=24;break;case 23:e.showToast({title:"登录出错",icon:"none"});case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}},getCode:function(){var e=this;r.login({success:function(a){console.log(a),e.code=a.code}})},wxLogin:function(a){var t=this;if(!this.isLogin){var r=this;e.getUserProfile({desc:"保存用户数据",success:function(){var a=(0,i.default)(c.default.mark((function a(n){var i,u,d,g;return c.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=n.iv,u=n.encryptedData,d={iv:i,code:t.code,loginType:"mp",encryptedData:u,appid:o.wxAppid},a.next=4,(0,s.wxMpLogin)(d);case 4:if(g=a.sent,console.log("登陆个人信息",g),e.hideLoading(),24017!==g.code){a.next=12;break}e.showToast({title:"code失效 请重试一次",icon:"none"}),r.getCode(),a.next=32;break;case 12:if(10002!=g.code){a.next=30;break}e.setStorageSync("user",g.data),e.setStorageSync("token",g.token.access_token),r.isLogin=!0,a.t0=r.scanType,a.next="carParkFee"===a.t0?19:"bicycleCharging"===a.t0?21:"electricVehicleCharging"===a.t0?23:"carParkUseLogId"===a.t0?25:27;break;case 19:return r.getCarParkUseLogId(),a.abrupt("break",28);case 21:return r.navigateToChargeDetail("scanCodeBicycleStart"),a.abrupt("break",28);case 23:return r.navigateToChargeDetail("scanCodeElectricVehicleStart"),a.abrupt("break",28);case 25:return r.navigateToPaymentPage("carParkUseLogId"),a.abrupt("break",28);case 27:return a.abrupt("break",28);case 28:a.next=32;break;case 30:e.showToast({title:"登陆出错",icon:"none"}),r.getCode();case 32:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()})}}}};a.default=u}).call(this,t("543d")["default"],t("bc2e")["default"])},cea0:function(e,a,t){"use strict";(function(e,a){var r=t("4ea4");t("c530");r(t("66fd"));var n=r(t("5a0f"));e.__webpack_require_UNI_MP_PLUGIN__=t,a(n.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["cea0","common/runtime","common/vendor"]]]);