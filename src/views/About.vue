<template>
  <div class="about">
    <div class="user-info">
			<div class="userImg">
				<img src="https://i1.hdslb.com/bfs/face/05551ff1e54c2654817a0be7a5af80005ef32402.jpg@70w_70h_1c_100q.webp" alt="userImg">
			</div>
			<div class="right-info">
				<div>名字</div>
				<div>等级</div>
			</div>
		</div>
		<detailed />
  </div>
</template>

<script>
	import detailed from '../components/Detailed'
export default {
  name: 'about',
  data () {
    return {

    }
  },
	components: {
		detailed
	}
}
</script>

<style scoped lang="scss">
.about{
	height: 100%;
	width: 100%;
	font-size: px2rem(20);
	font-family: '黑体';
	.user-info {
		display: flex;
		background-color: #99CCCC;
		color: #FFFFFF;
		.userImg {
			width: px2rem(150);
			height: px2rem(150);
			border-radius: 50%;
			overflow: hidden;
			border: 1px solid #eee;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.right-info {
			width: px2rem(200);
			height: px2rem(120);
			font-size: px2rem(25);
			line-height: px2rem(120);
			text-align: center;
			div {
				height: px2rem(35);
				padding-bottom: px2rem(20);
			}
		}
	}
}
</style>