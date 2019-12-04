<template>
	<div class="shoplist">
		<div class="listwrap" v-for="(games, index) in game" :key="index">
			<div class="listimg">
				<img :src="games.image" alt="">
			</div>
			<div class="listtext">
				<div class="text1">
					{{games.name}}
				</div>
				<div class="text2">
					价格：{{games.jiage}}
				</div>
			</div>
			<div class="listbutton">
				<div @click="add(games)">添加</div>
			</div>
		</div>
	</div>
</template>

<script>
import {Indicator, Toast} from "mint-ui"
export default {
	name: 'shoplist',
	props: {
		'game': {
			type: Array,
			default: null
		}
	},
	data() {
		return {
			addArr: [],
		};
	},
	methods: {
		add(games) {
			Indicator.open('加载中')
			setTimeout(()=>{
				Indicator.close()
			this.addArr.push(games)
			}, 500)
		}
	},
	mounted() {
		if(JSON.parse(localStorage.getItem('addArr')) != null) {
			this.addArr = JSON.parse(localStorage.getItem('addArr'))
		}
	},
	beforeDestroy() {
		if(this.addArr.length != 0) {
			localStorage.setItem('addArr', JSON.stringify(this.addArr))
		}
	}
};
</script>

<style scoped lang="scss">
	.shoplist{
		font-size: px2rem(22);
		height: 100%;
		margin-top: px2rem(20);
		.listwrap{
			display: flex;
			justify-content: space-around;
			margin-top: px2rem(20);
			background-color: #fff;
			border-radius: px2rem(15);
			height: px2rem(160);
			.listimg{
				width: px2rem(160);
				height: px2rem(140);
				padding-top: px2rem(10);
				img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.listtext{
				width: px2rem(150);
				padding-top: px2rem(15);
				.text1, .text2{
					font-size: px2rem(27);
					height: px2rem(30);
					line-height: px2rem(30);
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					padding-top: px2rem(20);
				}
			}
			.listbutton{
				padding-top: px2rem(35);
				div{
					width: px2rem(160);
					height: px2rem(70);
					font-size: px2rem(35);
					border: 1px solid #eee;
					background-color: sandybrown;
					border-radius: px2rem(10);
					color: #fff;
					line-height: px2rem(70);
					text-align: center;
				}
			}
		}
	}
</style>
