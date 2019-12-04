<template>
  <div class="comeback">
		<div class="back-wrap">
			<div class="leftm" @click="goback">&lt;</div>
			<div>{{title}}</div>
			<div class="right">{{rightinfo}}</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "comeback",
	props: {
		'title': {
			type: String,
			default: '评论'
		},
		'rightinfo': {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			
		}
	},
	methods: {
		goback() {
			this.$router.go(-1)
		}
	}
};
</script>

<style scoped lang="scss">
	.comeback {
		height: 100%;
		font-size: px2rem(20);
		font-family: '微软雅黑';
		.back-wrap {
			display: flex;
			// justify-content: space-around;
			justify-content: space-between;
			align-items: center;
			height: px2rem(60);
			background-color: #0086B3;
			color: whitesmoke;
				font-size: px2rem(30);
			.leftm {
				padding-left: px2rem(15);
			}
			.right {
				padding-right: px2rem(15);
			}
		}
	}
</style>
