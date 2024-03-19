// 微信小程序后台配置域名白名单
// request
// https://v0.yiketianqi.com 天气api
// https://apis.map.qq.com 腾讯地图api
// https://v3.cfeng.wang 接口api
// socket wss://wss.cfeng.wang;
// uploadFile https://v3.cfeng.wang;
// webView https://v3.cfeng.wang;

// 才风智慧
const cfeng = {
	//apiHost: "https://v3.cfeng.wang",	//服务器请求地址
	apiHost: "https:192.168.2.23",//
	aliappid: "",	//支付宝小程序 appid
	wxappid: "wx359abe2ba070b13b",	//微信小程序 appid
	qqmapKey: "HI3BZ-FVQKC-Y5B2W-AGKLA-MDXNF-D3BJ3",	//腾讯地图 key （申请地址：https://lbs.qq.com/）
	tianQiAppid: "43266199",	//天气接口 appid （申请地址：https://yiketianqi.com/）
	tianQiAppsecret: "hQ7V4VsT",	//天气接口 密钥 （申请地址：https://yiketianqi.com/）
}

export default cfeng