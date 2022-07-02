<template>
	<view class="mainBox bg-white">
		<view class="text-xxl" style="height: 486rpx; position: relative;">
			<image src='https://cdn.zhoukaiwen.com/login_top2.jpg' mode='widthFix' class='png' style='width:100%;height:486rpx'></image>
			<view class="logoName text-white text-bold text-xl">果蔬识别系统 </view>
		</view>
		
		<view class="padding text-center margin-top-xl">
			<view class="padding-xl radius shadow-warp bg-white margin-top">
				<view class="text-bold text-black text-xl">欢迎登陆</view>
				<view class="describe margin-top-sm">登录后可以对蔬菜水果进行识别</view>
				<button class="margin-top-lg bg-gradual-blue" type="primary" lang="zh_CN" @click="getUserInfo()">授权登录</button>
			</view>
		</view>
		
			
		
		<view class="bottom_bg">
			<image src="https://cdn.zhoukaiwen.com/login_bottom_bg.jpg" mode="widthFix"></image>
		</view>
		
	</view>
</template>

<script>
	// import request from '@/common/request.js';
	// import QQMapWX from "@/common/qqmap-wx-jssdk.js";
	export default {
		data() {
			return {
				encryptedData: '',
				phoneIv: '',
				userInfo: {},
				username:'',
				islogin: false,
				useravatar:''
			};
		},
		onLoad() {
		},
		methods:{
			getUserInfo() {
				const that = this
				uni.getUserProfile({
					desc: 'weixin',
					success(e) {
						console.log(e.userInfo)
						uni.setStorageSync('userInfo', e.userInfo)
						that.userInfo = e.userInfo
						that.useravatar = e.userInfo.avatarUrl
						that.username = e.userInfo.nickName
						uni.request({
							url: 'https://www.rainlotus.cc:5000/login',
							method: "POST",
							data: JSON.stringify({
								"username": that.username,
								"avatar": that.useravatar
							}),
							success(res) {
								if (res.data.code === '200') {
									uni.setStorageSync('token', res.data.user)
									that.islogin = true
									
									uni.navigateTo({
										url: "/pages/test/test"
									})
								} else {
									uni.showToast({
										title: 'oops,error'
									})
									that.islogin = false
									that.userInfo = ''
									// that.src = ''
									that.username = ''
								}
							},
							fail() {
								that.islogin = false
								that.userInfo = ''
								
								that.username = ''
								uni.showToast({
									title: 'oops,error'
								})
							}
						})
					},
					fail() {
						
					}
				})
			
			},
			
		},
		
		
		mounted() {
			const userInfo = uni.getStorageSync('userInfo')
			console.log(userInfo)
			this.islogin = userInfo ? true : false
			this.userInfo = userInfo
			this.src=userInfo.avatarUrl
			const user=uni.getStorageSync('token')
			if(this.login){
				uni.navigateTo({
					url: "/pages/test/test"
				})
			}
			if (user) {
				this.userId=user.id
				this.rightsNum=user.rightsNum
			}
			console.log(this.islogin)
		}
	}
</script>

<style lang="scss" scoped>
	.mainBox{
		height: 100vh;
		.logoImg{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			margin-left: -70rpx;
			top: 170rpx;
			display: block;
		}
		.logoName{
			width: 750rpx;
			position: absolute;
			left: 0;
			top: 340rpx;
			text-align: center;
		}
	}
	
	.bottom_bg{
		width: 750rpx;
		position: fixed;
		bottom: 0;
		image{
			width: 750rpx;
		}
	}
</style>
