<!-- 薪资排行 -->
<template>
	<view>
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="top_bg">
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<image class="huangguan2" src="https://s2.loli.net/2022/07/01/hfwXyCAGFO5B1RP.png"></image>
							<image class="top3_head" :src="userList[1].avatar"></image>
							
							<view class="top_name">{{userList[1].username}}</view>
							<view class="top_sy">识别次数{{userList[1].uploadNum}}</span></view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<image class="huangguan1" src="https://s2.loli.net/2022/07/01/jVPAJ3oOGZNgubq.png"></image>
							<image class="top3_head" :src="userList[0].avatar"></image>
							
							<view class="top_name text-bold" style="font-size: 30rpx;">{{userList[0].username}}</view>
							<view class="top_sy">识别次数{{userList[0].uploadNum}}</span></view>
						</view>
					</view>

					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<image class="huangguan2" src="https://s2.loli.net/2022/07/01/27MOYIiEShz3nt8.png"></image>
							<image class="top3_head" :src="userList[2].avatar"></image>
							<view class="top_name">{{userList[2].username}}</view>
							<view class="top_sy">识别次数{{userList[2].uploadNum}}</span></view>
						</view>
					</view>
				</view>


				<view class="number_sy_box">
					<view class="number_sy_box_title">
						<text>宅家学·统计</text>
						<text style="position: absolute; right: 20rpx;z-index: 9999; font-size: 24rpx;color: #c3c3c3;">
							截止：{{nowTime}}
						</text>
					</view>
					<view class="number_sy_main">
						<view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
							<view class="number_num1">{{avarage}}</view>
							<view class="danwei">平均识别</view>
						</view>
						<view style="width: 50%; text-align: center; z-index: 9999;">
							<view class="number_num2">99.9%</view>
							<view class="danwei">识别率</view>
						</view>

						<!-- <image mode="widthFix" class="xiaoding_bg" src=""></image> -->
					</view>
				</view>
			</view>

			<view class="rankList_box">
				<view class=""  v-for="(item,index) in userList" :key="index">
					<view class="rankItem" v-if="index > 2">
							<view class="rankIndex">
								<text>{{ index + 1 }}</text>
							</view>
							<view class="HeardBox">
								
							</view>
					
							
								<view class="NameBox" v-if="index > 2">
									<!-- <view class="userName">{{item.name}}</view> -->
									<view class="userName text-bold" >{{item.username}}</view>
									<view class="userPost text-gray">{{item.uploadNum}}</view>
									<!-- <view class="color_ccc">{{}} ｜ <text class="text-blue">{{}}</text>元/月</view> -->
								</view>
							
							<view class="download_box">
								
							</view>
							
						</view>
					
				</view>
				</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nowTime: '',
				avarage: 0,
				userList: [],
			
				
			}
		},
		onLoad() {
			this.getTime();
		},
		methods: {
			getTime: function() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
				this.nowTime = timer
				console.log(this.nowTime);
			},
			getRank(){
				const that= this
				uni.request({
					url:"https://www.rainlotus.cc:5000/sort",
					success(res) {
						
						that.userList = res.data.user;
						const sum=that.userList.reduce((prev,next)=>prev+next.uploadNum,0)
						that.avarage=Math.round(sum/that.userList.length)
					},
					fail() {
						
					}
				
				})
			}
		},
		mounted() {
			this.getRank()
		},
		filters: {

		}
	}
</script>

<style lang="scss">
	.top_bg {
		width: 750rpx;
		height: 650rpx;
		background: url(http://cdn.zhoukaiwen.com/rank_bg.png) no-repeat;
		background-size: 750rpx;
		position: relative;
	}

	.one_box {
		width: 750rpx;
		height: 260rpx;
		position: absolute;
		left: 0;
		bottom: 110rpx;
		display: flex;
		justify-content: space-around;
	}

	.one_box .top3 {
		width: 210rpx;
		height: 280rpx;
	}

	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy span {
		font-size: 20rpx !important;
	}

	.num_one {
		position: relative;
	}

	.huangguan1 {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -10rpx;
		top: -18*2rpx;
	}

	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}

	.num_two {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}

	.num_three {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}

	// 第二块
	.number_sy_box {
		width: 700rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 25rpx;
		border-radius: 20rpx;
		bottom: -115rpx;
		z-index: 999;
		padding: 22rpx;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}

	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}

	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}

	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}

	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}

	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #c9c9c9;
	}

	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 130rpx;
	}

	.rankItem:last-child {
		border: none;
	}

	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}

	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}

	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}

	.HeardBox image {
		width: 100%;
		height: 100%;
	}

	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}

	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}

	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}

	.download_box {
		width: 80rpx;
		height: 140rpx;
		// background-color: red;
		float: right;

	}

	.download_box image {
		width: 45rpx;
		margin: 50rpx auto;
		display: block;
	}
</style>

