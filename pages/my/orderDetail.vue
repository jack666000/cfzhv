<template>
	<view>
		<view class="title">{{goodsType[orderDetail.goodsType]}}</view>
		<view class="amount">{{amount}}</view>
		<view class="statusText">{{statusText}}</view>
		<div class="infoBox flex-col">
			<view class="flex">
				<view class="left">商品名称</view>
				<view class="right u-line-1">{{orderDetail.goodsName}}</view>
			</view>
			<view class="flex">
				<view class="left">订单号</view>
				<view class="right">{{orderDetail.id}}</view>
			</view>
			<view class="flex">
				<view class="left">订单时间</view>
				<view class="right">{{orderDetail.createTime | formatTimestamp}}</view>
			</view>
			<!-- 	<view class="flex">
				<view class="left">支付方式</view>
				<view class="right">{{paymentAgencyShortName}}</view>
			</view> -->
			<!-- <view class="moreInfo flex" v-if="orderDetail.goodsType == 5">
				<view class="left">更多信息</view>
				<image class="rightImg" src="../../../static/image/my/left.png"></image>
			</view> -->
		</div>

		<!-- #ifdef MP-WEIXIN -->
		<ad unit-id="adunit-45c6226173a656b5"></ad>
		<!-- #endif -->

	</view>
</template>

<script>
	import {
		formatTimestamp
	} from '../../utils/index.js'
	export default {
		data() {
			return {
				orderDetail: '',
				PaymentAgencyList: [],
				statusTextArr: [
					'待支付',
					'已支付',
					'已发货',
					'已取消',
					'退款中',
					'已退款',
					'退货中',
					'已退货',
					'交易成功',
					'售后中',
					'售后已结束'
				],
				goodsType: ['', '停车', '充值', '洗车', '转账', '停车套餐', '车位预订', '优惠券活动充值', '汽车充电', '提现', '退款', '收款', '电动车充电',
					'用户角色'
				]
			}
		},
		computed: {
			// 订单状态(0-待支付/1-已支付/2-已发货/3-已取消/4-一退款中/5-已退款/6-退货中/7-已退货/8-交易成功/9-售后中/10-售后已结束)
			amount() {
				var orderDetail = this.orderDetail
				return orderDetail.status == 0 ? orderDetail.amountsPayable : orderDetail.amountActuallyPaid
			},
			statusText() {
				return this.statusTextArr[this.orderDetail.status]
			},
		},
		onLoad(e) {
			this.orderDetail = uni.getStorageSync('orderDetail')
		},
		filters: {
			formatTimestamp
		},
		methods: {}
	}
</script>

<style lang="scss">
	page {
		background: #F7F7F7;
	}

	.title {
		width: 750rpx;
		text-align: center;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #323233;
		line-height: 50rpx;
		margin-top: 32rpx;
	}

	.amount {
		width: 750rpx;
		text-align: center;
		height: 64rpx;
		font-size: 64rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #323233;
		line-height: 64rpx;
		margin-top: 8rpx;
	}

	.statusText {
		width: 750rpx;
		text-align: center;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(50, 50, 51, 0.5);
		line-height: 50rpx;
		margin-top: 10rpx;
	}

	.infoBox {
		width: 686rpx;
		min-height: 290rpx;
		background: #FFFFFF;
		border-radius: 12rpx;
		margin: 32rpx;

		.flex {
			margin-top: 48rpx;

			.left {
				width: 112rpx;
				height: 32rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #323233;
				line-height: 32rpx;
				margin-left: 20rpx;
			}

			.right {
				margin-left: 50rpx;
				text-align: right;
				width: 484rpx;
				height: 32rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #323233;
				line-height: 32rpx;
			}
		}

		.moreInfo {
			width: 100%;
			height: 96rpx;
			border-top: 2rpx solid #EAEAEA;
			;
			margin-top: 32rpx;

			.left {
				width: 112rpx;
				height: 32rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #323233;
				line-height: 32rpx;
			}

			.rightImg {
				width: 32rpx;
				height: 32rpx;
				margin-left: 496rpx;
			}
		}
	}
</style>