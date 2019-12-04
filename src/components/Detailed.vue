<template>
  <div class="detailed">
		<div class="detailed-wrap" v-for="item in detaileds" :key="item.id">
			<div class="detailed-img">
				<img :src="item.src" />
			</div>
			<div class="my-wrap">
				<div>{{item.title}}</div>
				<div v-if="item.id< 4">{{item.kuohao}}</div>
				<div v-if="item.id >=4"><mt-switch v-model="value">开关</mt-switch></div>
			</div>
		</div>
  </div>
</template>

<script>
	import { Switch } from 'mint-ui';
export default {
  name: 'detailed',
  data () {
    return {
			value: false,
			detaileds: [
				{
					id: 1,
					src: require('../assets/img/tiezi.png'),
					title: '我的评论',
					kuohao: '>'
				},
				{
					id: 2,
					src: require('../assets/img/gouwuche.png'),
					title: '购买记录',
					kuohao: '>'
				},
				{
					id: 3,
					src: require('../assets/img/xiaoxi.png'),
					title: '总共支出',
					kuohao: '>'
				},
				{
					id: 4,
					src: require('../assets/img/yueliang.png'),
					title: '夜间模式',
					kuohao: '>'
				}
			],
    }
  },
	updated() {
		// if(this.value) {
		// 	document.body.style.backgroundColor = '#000000'
		// 	document.body.style.color = '#fff'
		// }else {
		// 	document.body.style.backgroundColor = ''
		// 	document.body.style.color = ''
		// }
	},
	mounted() {
		// let a;
		// a = this.value == localStorage.getItem('lineDrak')
		// console.log(!a)
		// this.value = a
	},
	beforeDestroy() {
		// localStorage.setItem('lineDrak', this.value)
	}
}
</script>

<style  lang="scss" scoped>
.detailed {
	font-size: px2rem(20);
	font-family: '微软雅黑';
	.detailed-wrap {
		display: flex;
		font-size: px2rem(25);
		margin: px2rem(20) auto 0 auto;
		align-items: center;
		width: px2rem(600);
		text-align: center;
		.detailed-img {
			width: px2rem(60);
			height: px2rem(60);
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.my-wrap {
		border-bottom: 2px solid #000;
		width: px2rem(500);
			display: flex;
		justify-content: space-between;
			height: px2rem(90);
			line-height: px2rem(90);
		}
	}
	// .detailed-wrap::before {
	// 	content: url(../assets/img/gouwuche.png);
	// 	width: px2rem(90);
	// 	height: px2rem(90);
	// 	position: absolute;
	// 	left: px2rem(-100);
	// }
}
</style>
