<template>
	<view class="common-page">
		<view class="title">
			识别蔬菜水果
		</view>
		<view class="center-clock">
			<view class="tips">
				请珍惜时间
			</view>
			<view class="clock-area">
				<cu-clock></cu-clock>
			</view>
		</view>


		<u-popup :show="show" mode="bottom" @close="close" @open="open" :round="20">
			<view class="container1">
				<view class="item-list">
					<image src="https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/take photos.png" mode=""
						@click="clickMe('camera')" class="left"></image>
					<view class="tis-name">
						Camera
					</view>
				</view>

				<view class="item-list">
					<image src="https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/kedaya.png" mode=""
						@click="clickMe('album')" class="right"></image>
					<view class="tis-name">
						Select a graph
					</view>
				</view>
			</view>
		</u-popup>
		<view class="contain_camera_img" v-if="!imgShow&&!isLoading">
			<image class="camera_img" src="/static/camera.jpeg" @click="show = true"></image>
		</view>
		<view class="camera-loading" v-if="isLoading">
			<cu-loading></cu-loading>
		</view>
		<view class="show-area" v-if="imgShow&&!isLoading">
			<!-- <view class="show-area"> -->
			<view class="showtime-image">
				<img :src="imageSrc" class="camera_img" @click="show = true" alt="" srcset="">
			</view>
			<view class="result-area">
				结果：{{result}}
			</view>
			<view class="show-footer">
				<view class="reset" :class="isClick?'active-shadow':''" @click="clickFocus('isClick')">
					RESET
				</view>
				<view class="again" :class="isClick2?'active-shadow':''" @click="clickFocus('isClick2')">
					AGAIN
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import cuClock from '@/colorui/components/cu-clock.vue'
	export default {
		components: {
			cuClock
		},
		data() {
			return {
				show: false,
				imageSrc: '',
				result: '',
				imgShow: false,
				isLoading: false,
				isClick: false,
				isClick2: false,
				userId:0,
				rightsNum:0,
				username:''
			}
		},
		mounted() {
			this.getRights()
		},
		methods: {
			getRights(){
				const user=uni.getStorageSync('token')
				if (user) {
					this.userId=user.id
					this.rightsNum=user.rightsNum
					this.username=user.username
				}
			},
			clickMe(val) {
				const $that = this
				if (this.userId===0) {
					uni.showToast({
						title:"请登录！",
						duration:1000
					})
					return
				} else if(this.rightsNum===0){
					uni.showToast({
						title:"权益数不足！",
						duration:1000
					})
					return
				}
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: [val],
					success(res) {
						// tempFilePath可以作为img标签的src属性显示图片
						const tempFiles = res.tempFilePaths[0]
						$that.imageSrc = ''
						$that.show = false
						$that.imgShow = false
						$that.isLoading = true
						uni.uploadFile({
							url: 'https://www.rainlotus.cc:5000/upload', //仅为示例，非真实的接口地址
							filePath: tempFiles, //res.tempFilepaths
							header: {
								"Content-Type": "multipart/form-data"
							},
							formData:{
								id:$that.userId
							},
							name: 'file', // 文件对应的key ，默认 为 file
							success(res) {
								const data = JSON.parse(res.data)
								console.log(data);
								if (data.code === '200') {
									$that.imageSrc = data.url
									$that.result = data.result
									$that.imgShow = true
									console.log(data.result);
									uni.request({
										url: 'https://www.rainlotus.cc:5000/login',
										method: "POST",
										data: JSON.stringify({
											"username": $that.username
										}),
										success(resp) {
											if (resp.data.code === '200') {
												uni.setStorageSync('token', resp.data.user)
											} else {
												uni.showToast({
													title: 'oops,error'
												})
											}
										},
										fail() {
											uni.showToast({
												title: 'oops,error'
											})
										}
									})
								} else {
									$that.result = data.msg
									$that.imageSrc =
										'https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/warning.png'
									$that.imgShow = true
									console.log(data.msg)
								}
								$that.isLoading = false
							},
							fail: () => {
								uni.showToast({
									title:"oops,error",
									duration:1000
								})
								$that.isLoading = false
							},
						})
					},
					fail() {
						$that.show = false
					}
				})
			},
			clickFocus(ev) {
				this[ev] = true
				setTimeout(() => {
					this[ev] = false
				}, 200)
				if (ev === 'isClick') {
					setTimeout(() => {
						this.imgShow = false
						this.imageSrc = ''
					}, 250)
				} else {
					this.show = true
				}
				this.getRights()
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.center-clock {
		margin-top: 40rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 60rpx;
		margin-bottom: 40rpx;

		.tips {
			margin-right: 80rpx;
			font-weight: 800;
			font-size: 40rpx;
			font-family: '楷体'
		}

		.clock-area {
			width: 300rpx;
			height: 300rpx;
		}
	}

	.title {
		font-size: 46rpx;
		font-weight: 600;
		width: 440rpx;
		margin: 0 auto;
		padding: 10rpx 40rpx;
		margin-bottom: 40rpx;
		margin-top: 40rpx;
		display: flex;
		border-radius: 8rpx;
		justify-content: center;
		color: #2f2f51 !important;
		box-shadow: 4rpx 4rpx 16rpx #8799a3, -4rpx -4rpx 16rpx #e9e9e9;
	}


	.content {
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.showImg {
		display: flex;
		align-items: center;
		justify-content: center;
	}



	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.container {
		display: flex;
	}

	.text1 {
		position: absolute;
		bottom: 80upx;
		left: 100upx;
		font-size: 20px;
	}

	.text2 {
		position: absolute;
		bottom: 80upx;
		right: 100upx;
		font-size: 20px;
	}

	.contain_camera_img {
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.camera-loading {
		width: 616rpx;
		margin: 0 auto;
		border-radius: 8rpx;
		overflow: hidden;
	}

	.camera_img {
		weight: 680rpx !important;
		border-radius: 8rpx;
		box-shadow: 4rpx 4rpx 16rpx #8799a3, -4rpx -4rpx 16rpx #e9e9e9;
	}

	.show_name {
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.show-area {

		.showtime-image {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.result-area {
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 60rpx;
			font-weight: 800;
			font-family: '楷体';
		}

		.show-footer {
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.reset {
				width: 200rpx;
				font-family: '楷体';
				font-weight: 600;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				letter-spacing: 4rpx;
				padding: 18rpx 20rpx;
				text-decoration: none;
				color: #77c6ff;
				font-size: 40rpx;
				border-radius: 50px;
				box-shadow: -4rpx -4rpx 16rpx rgba(255, 255, 255, 1), -4rpx -4rpx 24rpx rgba(255, 255, 255, 0.5), inset 4rpx 4rpx 8rpx rgba(255, 255, 255, 0.1), 4rpx 4rpx 16rpx rgba(0, 0, 0, 0.15);
			}

			.again {
				width: 200rpx;
				font-family: '楷体';
				font-weight: 600;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				letter-spacing: 4rpx;
				padding: 18rpx 20rpx;
				text-decoration: none;
				color: #fb7a0c;
				margin-left: 80rpx;
				font-size: 40rpx;
				border-radius: 50px;
				box-shadow: -4rpx -4rpx 16rpx rgba(255, 255, 255, 1), -4rpx -4rpx 24rpx rgba(255, 255, 255, 0.5), inset 4rpx 4rpx 8rpx rgba(255, 255, 255, 0.1), 4rpx 4rpx 16rpx rgba(0, 0, 0, 0.15);
			}

			.active-shadow {
				box-shadow: inset -4rpx -4rpx 16rpx rgba(255, 255, 255, 1),
					inset -4rpx -4rpx 24rpx rgba(255, 255, 255, 0.5),
					inset 4rpx 4rpx 4px rgba(255, 255, 255, 0.1),
					inset 4rpx 4rpx 16rpx rgba(0, 0, 0, 0.15);
			}
		}
	}

	.container1 {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 400rpx;

		.item-list {
			display: flex;
			flex-direction: column;
			align-items: center;

			.tis-name {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				font-family: '楷体';
				font-weight: 600;
				margin-top: 20rpx;
			}
		}
	}

	.left {
		height: 160rpx;
		width: 160rpx;
		border-radius: 50%;
	}

	.right {
		height: 160rpx;
		width: 160rpx;
		border-radius: 50%;
	}

	@keyframes clock {
		0% {
			rotate: -90deg;
			// transform: rotate(0deg );
		}

		100% {
			rotate: 270deg;
		}
	}
</style>
