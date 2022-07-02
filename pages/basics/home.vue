<template>
	<view class="common-page">
		<view class="u-demo-block mb20">
			<u-swiper :list="swiperList" height=200 previousMargin="30" nextMargin="30" circular :autoplay="true"
				@click="getDetails" radius="5" bgColor="#ffffff"></u-swiper>
		</view>
		<view class="veg-name" style="animation: show 1.2s 1">
			蔬菜类
		</view>
		<view class="nav-list" v-if="vegetables.length>0">
			<navigator hover-class='none' :url="'/pages/home-details/home-details?keyName=' + item.title+',vegetables'"
				class="nav-li" navigateTo :class="'bg-'+item.color"
				:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in vegetables"
				:key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text :class="'cuIcon-' + item.cuIcon"></text>
			</navigator>
		</view>

		<view class="fru-name" style="animation: show 3.2s 1">
			水果类
		</view>
		<view class="nav-list" v-if="fruits.length>0">
			<navigator hover-class='none' :url="'/pages/home-details/home-details?keyName=' + item.title+',fruits'"
				class="nav-li" navigateTo :class="'bg-'+item.color"
				:style="[{animation: 'show ' + ((index+10)*0.2+1) + 's 1'}]" v-for="(item,index) in fruits"
				:key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text :class="'cuIcon-' + item.cuIcon"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/swiper1.jpeg',
					'https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/swiper2.jpeg',
					'https://cdn.jsdelivr.net/gh/rainlotus97/images/data/2022-06-28/swiper4.jpeg',
				],
				vegetables: [],
				fruits: []
			};
		},
		mounted() {
			this.vegetables = [{
					title: '根菜类',
					name: '胡萝卜、白萝卜等',
					color: 'purple',
					cuIcon: 'vipcard'
				},
				{
					title: '白菜类',
					name: '白菜、芥菜等',
					color: 'mauve',
					cuIcon: 'formfill'
				},
				{
					title: '绿叶蔬菜类',
					name: '菠菜、苋菜等',
					color: 'pink',
					cuIcon: 'list'
				},
				{
					title: '茄果类',
					name: '番茄、辣椒等',
					color: 'brown',
					cuIcon: 'newsfill'
				},
				{
					title: '瓜类',
					name: '南瓜、冬瓜等',
					color: 'red',
					cuIcon: 'formfill'
				},
				{
					title: '豆类',
					name: '豌豆、扁豆等',
					color: 'orange',
					cuIcon: 'timefill'
				},
				{
					title: '薯芋类',
					name: '马铃薯、芋头等',
					color: 'green',
					cuIcon: 'messagefill'
				},
				{
					title: '水生蔬菜类',
					name: '藕、茭白等',
					color: 'olive',
					cuIcon: 'album'
				},
				{
					title: '食用菌类',
					name: '香菇、金针菇等',
					color: 'cyan',
					cuIcon: 'album'
				},
			];
			this.fruits = [{
					title: '浆果类',
					name: '葡萄、圣女果等',
					color: 'grey',
					cuIcon: 'squarecheckfill'
				},
				{
					title: '瓜果类',
					name: '西瓜、哈密瓜等',
					color: 'black',
					cuIcon: 'roundcheckfill'
				},
				{
					title: '柑橘类',
					name: '柳橙、柚子等',
					color: 'orange',
					cuIcon: 'timefill'
				},
				{
					title: '核果类',
					name: '桃子、枣等',
					color: 'green',
					cuIcon: 'messagefill'
				},
				{
					title: '仁果类',
					name: '苹果、梨子等',
					color: 'olive',
					cuIcon: 'album'
				},
			]

		},
		methods: {
			getDetails(ev) {
				console.log(ev);
			}
		}
	}
</script>

<style lang="scss">
	.common-page {
		.mb20 {
			margin-bottom: 40rpx;
		}

		.veg-name,
		.fru-name {
			font-size: 46rpx;
			font-weight: 600;
			border-radius: 8rpx;
			width: 440rpx;
			margin: 0 auto;
			margin-bottom: 40rpx;
			padding: 0 40rpx;
			display: flex;
			justify-content: center;
		}

		.veg-name {
			color: #6739b6;
			box-shadow: 4rpx 4rpx 16rpx #6739b6, -4rpx -4rpx 16rpx #e9e9e9;
		}

		.fru-name {
			color: #8799a3;
			box-shadow: 4rpx 4rpx 16rpx #8799a3, -4rpx -4rpx 16rpx #e9e9e9;
		}
	}
</style>
