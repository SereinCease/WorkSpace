<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar foot shadow-none gray-bg">
			<view class="action flex-play" @click="NavChange" data-cur="basics">
				<view class="common-tab" :class="PageCur==='basics'?'active-color':''">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='basics'?'text-new-color':'text-gray'">首页</view>
				</view>
			</view>
			<view class="action flex-play" @click="NavChange" data-cur="component">
				<view class="common-tab" :class="PageCur==='component'?'active-color':''">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='component'?'text-new-color':'text-gray'">水果</view>
				</view>
			</view>
			<view class="action flex-play" @click="NavChange" data-cur="plugin">
				<view class="common-tab" :class="PageCur==='plugin'?'active-color':''">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/about' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='plugin'?'text-new-color':'text-gray'">登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .cu-bar{
		padding: 6rpx 0 !important;
		height: calc(112rpx + env(safe-area-inset-bottom) / 2) !important;
	}
	
	.text-new-color{
		color: #b5a9f7;
	}
	.gray-bg {
		background: #f2f2f2;
	}

	.shadow-none {
		box-shadow: none !important;
	}

	.flex-play {
		display: flex !important;

		.common-tab {
			padding: 6rpx 50rpx;
			background: linear-gradient(145deg, #f1e6ef, #e7e7e7);
			;
			border-radius: 8rpx;
			transition: all .3s;
			box-shadow: 8rpx 8rpx 16rpx #d7d7d7,
				-8rpx -8rpx 16rpx #e9e9e9;
		}
		.active-color {
			background: linear-gradient(145deg, #f5e2ee, #f0f0f0);
			;
			box-shadow: 8rpx 8rpx 24rpx #d7d7d7,
				-8rpx -8rpx 24rpx #e9e9e9;
		}
	}
</style>
