<template>
	<view class="main-loading">
		<view class="loader">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'cu-loading',
		data() {
			return {

			}
		}
	}
</script>
<style lang="scss">
	.main-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(15deg, #dec6f3, #a1ede5);
	}

	.loader {
		width: 400rpx;
		height: 400rpx;
		/* 相对定位 */
		position: relative;
	}

	.loader view {
		border-width: 10rpx;
		border-style: solid;
		border-left-color: #fff;
		border-right-color: #fff;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-radius: 50%;
		/* 绝对定位 */
		position: absolute;
		/* 执行动画：动画名 时长 慢速开始然后变快然后慢速结束 无限次播放 */
		animation: spin 2s ease infinite;
	}

	/* 为每一个圆环设置大小、定位、动画延迟时间 */
	.loader view:nth-child(1) {
		width: 100rpx;
		height: 100rpx;
		left: 140rpx;
		top: 140rpx;
	}

	.loader view:nth-child(2) {
		width: 140rpx;
		height: 140rpx;
		left: 120rpx;
		top: 120rpx;
		/* 动画延迟时间 */
		animation-delay: 0.1s;
	}

	.loader view:nth-child(3) {
		width: 180rpx;
		height: 180rpx;
		left: 100rpx;
		top: 100rpx;
		animation-delay: 0.2s;
	}

	.loader view:nth-child(4) {
		width: 220rpx;
		height: 220rpx;
		left: 80rpx;
		top: 80rpx;
		animation-delay: 0.3s;
	}

	/* 定义动画 */
	@keyframes spin {
		50% {
			transform: rotate(180deg);
		}

		100% {
			transform: rotate(0);
		}
	}
</style>
