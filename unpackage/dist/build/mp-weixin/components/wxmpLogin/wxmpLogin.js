(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wxmpLogin/wxmpLogin"],{"0516":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},a=[]},7707:function(e,n,t){"use strict";t.r(n);var o=t("fa12"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},a8b2:function(e,n,t){"use strict";t.r(n);var o=t("0516"),a=t("7707");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);var c=t("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},fa12:function(e,n,t){"use strict";(function(e,o){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("2eee")),c=a(t("c973")),u=t("8981"),s=t("6d37"),r={name:"wxmpLogin",data:function(){return{isLogin:!1,codeValue:""}},created:function(){this.getCode(),e.getStorageSync("token")?this.isLogin=!0:this.isLogin=!1},methods:{getCode:function(){var e=this;o.login({success:function(n){console.log(123,n),e.codeValue=n.code}})},wxLogin:function(n){var t=this;e.showLoading({title:"请稍等"}),console.log(123),console.log(this.codeValue),e.getUserProfile({desc:"保存用户数据",success:function(){var n=(0,c.default)(i.default.mark((function n(o){var a,c,r,l;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=o.iv,c=o.encryptedData,r={iv:a,code:t.codeValue,loginType:"mp",encryptedData:c,appid:u.wxAppid},n.next=4,(0,s.wxMpLogin)(r);case 4:l=n.sent,console.log("登陆个人信息",l),e.hideLoading(),10002==l.code?(e.setStorageSync("token",l.token.access_token),e.setStorageSync("user",l.data),t.$emit("changeLoginStatus",!0)):(t.$emit("changeLoginStatus",!1),e.showToast({title:l.message,icon:"none"}),t.getCode());case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fail:function(e){console.log("获取用户信息失败",e)}})}}};n.default=r}).call(this,t("543d")["default"],t("bc2e")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wxmpLogin/wxmpLogin-create-component',
    {
        'components/wxmpLogin/wxmpLogin-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a8b2"))
        })
    },
    [['components/wxmpLogin/wxmpLogin-create-component']]
]);