<template>
  <div class="news">
    <div class="bgc"  v-for="(item, index) in arr" :key="index" @click="goinfo(item)">
			<div class="wrap">
				<div class="newsLeft">
				{{item.diyitiao}}
				</div>
				<div class="newsRight">
					<img :src="item.image" alt="">
				</div>
			</div>
			<div class="buttonWrap">
				<div class="author">
					{{item.fbzz}}
				</div>
				<div class="information">
					<div>{{item.gk}}观看</div>
					<div>{{item.pl}}评论</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'news',
	props: {
		arr: {
			type: Array,
			default: null
		}
	},
  data () {
    return {
			
    }
  },
	methods: {
		goinfo(item) {
			if(this.$router.history.current.fullPath == '/homeinfo/'){
				return
			}else {
				localStorage.setItem('homeinfo',JSON.stringify(item))
				this.$router.push('/homeinfo/')
			}
		}
	}
}
</script>

<style scoped lang="scss">
	@mixin widthAll {
		width: px2rem(300);
		margin-top: px2rem(10);
	}
.news {
	height: 100%;
	width: 100%;
	margin-bottom: px2rem(60);
	.bgc {
		background-color: #fff;
		font-size: px2rem(22);
		border-radius: px2rem(15);
		font-family: '微软雅黑';
		.wrap {
			margin-top: 10px;
			display: flex;
			justify-content: space-around;	
			height: px2rem(180);
			.newsLeft ,.newsRight {
				@include widthAll();
			}
			.newsLeft {
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				height: px2rem(80);
				padding-top: px2rem(40);
				font-size: px2rem(22);
				line-height: 170%;
			}
			.newsRight {
				height: px2rem(150);
			}
			.newsRight img{
				display: block;
				height: 100%;
				width: 100%;
				border: 1px solid #eee;
				border-radius: px2rem(15);
			}
		}
		.buttonWrap {
			display: flex;
			justify-content: space-around;
			margin-top: px2rem(20);
			height: px2rem(50);
			.author {
				width: px2rem(300);
			}
			.information {
				width: px2rem(300);
				display: flex;
				justify-content: space-around;
			}
		}
	}
}
</style>
