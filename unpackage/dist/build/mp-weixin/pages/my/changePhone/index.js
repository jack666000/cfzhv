(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/changePhone/index"],{3540:function(e,n,t){},"634c":function(e,n,t){"use strict";var o=t("3540"),a=t.n(o);a.a},7029:function(e,n,t){"use strict";t.r(n);var o=t("7f10"),a=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a},"7f10":function(e,n,t){"use strict";(function(e){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("2eee")),c=o(t("c973")),r=t("8981"),u=t("6d37"),i={data:function(){return{phone:""}},onShow:function(){this.phone=e.getStorageSync("user").phone},methods:{closePhoneShow:function(){var n=this;this.phoneShow=!1,setTimeout((function(){n.phone=e.getStorageSync("user").phone}),300)},clear:function(){this.nickname=""},intoBind:function(){e.navigateTo({url:"bind"})},handleAuthError:function(e){console.log(e)},getAliPhoneNumber:function(){var n=this;my.getPhoneNumber({success:function(){var t=(0,c.default)(a.default.mark((function t(o){var c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=JSON.parse(o.response),t.next=3,(0,u.getUserPhonenumberByCodeAndLoginType)({code:c.response,platform:"ali_mp",sign:c.sign,appid:r.aliAppid});case 3:o=t.sent,10002===o.code?(e.setStorageSync("token",o.token.access_token),e.setStorageSync("user",o.data),n.phone=o.data.phone,e.showToast({title:"修改成功",icon:"success"})):e.showToast({title:o.message,icon:"none"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fail:function(e){console.log(e),console.log("getPhoneNumber_fail")}})},getPhoneNumber:function(n){var t=this;return(0,c.default)(a.default.mark((function o(){var c;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(!n.detail.code){o.next=6;break}return o.next=3,(0,u.getUserPhonenumberByCodeAndLoginType)({code:n.detail.code,platform:"wx_mp",appid:r.wxAppid});case 3:c=o.sent,console.log("更新后的用户信息",c),10002==c.code&&(e.setStorageSync("token",c.token.access_token),e.setStorageSync("user",c.data),t.phone=c.data.phone,e.showToast({title:"修改成功",icon:"success"}));case 6:case"end":return o.stop()}}),o)})))()}}};n.default=i}).call(this,t("543d")["default"])},"835a":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},a=[]},abf5:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("c530");o(t("66fd"));var a=o(t("d18d"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},d18d:function(e,n,t){"use strict";t.r(n);var o=t("835a"),a=t("7029");for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("634c");var r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports}},[["abf5","common/runtime","common/vendor"]]]);