<template>
	<view class="cu-clock" v-if="seconds!==-1">
		<view class="clock">
			<view class="show-clock">
				<view class="point" v-for="item,index in 6" :key="index"></view>
			</view>
			<view class="hide-clock">
				<view class="num num12">
					12
				</view>
				<view class="num num3">
					3
				</view>
				<view class="num num6">
					6
				</view>
				<view class="num num9">
					9
				</view>
			</view>
			<view class="rotate-main-sec" :style="'rotate:'+(6*seconds-90)+'deg;'">
			</view>
			<view class="rotate-main-min" :style="'rotate:'+(6*minutes-90)+'deg;'">
			</view>
			<view class="rotate-main-hour" :style="'rotate:'+(30*hours-90)+'deg;'">
			</view>
			<view class="circle-small"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cu-clock',
		data() {
			return {
				hours: -1,
				minutes: -1,
				seconds: -1,
				interval: null
			}
		},
		mounted() {
			this.interval = setInterval(() => {
				let now = new Date(new Date().getTime() + 500) // 加500ms延时
				this.seconds = now.getSeconds()
				this.minutes = now.getMinutes()
				this.hours = now.getHours() + this.minutes / 60
			}, 1000)
		},
		destroyed() {
			clearInterval(this.interval)
			this.interval = null
		}
	}
</script>

<style lang="scss" scoped>
	.cu-clock {
		display: flex;
		justify-content: center;
		height: 100%;
		.clock {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: #e8f2ff;
			box-shadow: -4rpx -4rpx 16rpx rgba(255, 255, 255, 1), -4rpx -4rpx 24rpx rgba(255, 255, 255, 0.5), inset 4rpx 4rpx 8rpx rgba(255, 255, 255, 0.1), 4rpx 4rpx 16rpx rgba(0, 0, 0, 0.15);
			position: relative;
	
			.show-clock {
				width: 90%;
				height: 90%;
				border-radius: 50%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 2;
				border: 2rpx solid #d9e3f1;
				background-color: #dce6f4;
	
				.point {
					width: 96%;
					height: 4rpx;
					position: absolute;
					left: 2%;
					top: 50%;
					background-color: #b1bbca;
					transform-origin: center;
	
					&:nth-of-type(1) {
						rotate: 0deg;
					}
	
					&:nth-of-type(2) {
						rotate: 30deg;
					}
	
					&:nth-of-type(3) {
						rotate: 60deg;
					}
	
					&:nth-of-type(4) {
						rotate: 90deg;
					}
	
					&:nth-of-type(5) {
						rotate: 120deg;
					}
	
					&:nth-of-type(6) {
						rotate: 150deg;
					}
				}
			}
	
			.hide-clock {
				width: 76%;
				height: 76%;
				border-radius: 50%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 3;
				background-color: #dce6f4;
	
				.num {
					color: #2f2f51;
					font-size: 28rpx;
					font-weight: bold;
				}
	
				.num12 {
					position: absolute;
					top: 2%;
					left: 50%;
					transform: translateX(-50%);
				}
	
				.num3 {
					position: absolute;
					right: 2%;
					top: 50%;
					transform: translateY(-50%);
				}
	
				.num6 {
					position: absolute;
					bottom: 2%;
					left: 50%;
					transform: translateX(-50%);
				}
	
				.num9 {
					position: absolute;
					left: 2%;
					top: 50%;
					transform: translateY(-50%);
				}
			}
	
			.rotate-main-sec {
				width: 30%;
				height: 4rpx;
				background-color: #c54b62;
				position: absolute;
				left: 50%;
				top: 50%;
				border-radius: 4rpx;
				z-index: 3;
				transform-origin: left center;
			}
	
			.rotate-main-min {
				width: 24%;
				height: 6rpx;
				background-color: #3f4f66;
				position: absolute;
				left: 50%;
				top: 50%;
				border-radius: 6rpx;
				z-index: 4;
				transform-origin: left center;
			}
	
			.rotate-main-hour {
				width: 18%;
				height: 8rpx;
				background-color: #3f4f66;
				position: absolute;
				left: 50%;
				top: 50%;
				border-radius: 8rpx;
				z-index: 5;
				transform-origin: left center;
			}
			.circle-small{
				width: 5%;
				height: 5%;
				background-color: #3f4f66;
				position: absolute;
				left: 50.5%;
				top: 50.5%;
				z-index: 5;
				border-radius: 50%;
				transform: translate(-50%,-50%);
			}
		}
	}
	
</style>
