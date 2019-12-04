<template>
  <div class="swiperDiv">
		<div class="myswiper">
			<ul class="swiper">
				<li v-for="(imgs, index) in swiperImgs" :key='index'>
					<img :src="imgs">
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import mytouch from "../lib/myTouch"
export default {
  name: 'myswiper',
  data () {
    return {
			swiperImgs: ['https://img.3dmgame.com/uploads/images/news/20190611/1560254228_936571.jpg', 'https://img.3dmgame.com/uploads/images/news/20190611/1560254228_936571.jpg', 'https://img.3dmgame.com/uploads/images/news/20190611/1560254228_936571.jpg', 'https://img.3dmgame.com/uploads/images/news/20190611/1560254228_936571.jpg', 'https://img.3dmgame.com/uploads/images/news/20190611/1560254228_936571.jpg'],
			index: 0
    }
  },
	mounted() {
		// mytouch.mytouch();
		if(this.$route.meta.index === 1) {
		this.timeout() 
		}else {
			this.index = 0
		}
	},
	methods: {
		swiper() {
			try{
				const myswiper = document.querySelector('.swiper')
				this.index -= 20
				myswiper.style.transform = "translateX("+this.index+"%)"
				if(this.index <= -80) {
					this.index = 0
				}
				
			}catch(e){
				
			}
		},
		timeout() {
			this.swiper()
			setTimeout(this.timeout,3000)
		},
	},
	beforeDestroy() {
		this.timeout = null
	}
}
</script>

<style scoped lang="scss">
.swiperDiv {
	.myswiper {
		overflow: hidden;
		width: px2rem(750);
		margin: 0 auto;
		.swiper {
			position: relative;
			display: flex;
			width: px2rem(750*5);
			transition: transform .5s;
			li {
				border-radius: px2rem(10);
				border: 1px solid #eee;
				width: px2rem(750);
				height: px2rem(360);
				text-align: center;
				img {
					border: 1px solid #eee;
					border-radius: px2rem(20);
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
