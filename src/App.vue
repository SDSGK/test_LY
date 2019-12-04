<template>
  <div id="app">
		<transition :name="transitionName">
			<router-view />
		</transition>
		<div class="myrouter">
			<div v-for="(item, index) in homeArrs" :key='index' @click="homeClick(item.id)">
				{{item.title}}
			</div>
		</div>
  </div>
</template>

<script>
import "./assets/common.css";
export default {
	data() {
		return {
			homeArrs: [
				{
					id: 1,
					title: '首页'
				},
				{
					id: 2,
					title: '发现'
				},
				{
					id: 3,
					title: '购物'
				},
				{
					id: 4,
					title: '档案'
				},
			],
			transitionName:''
		}
	},
	methods: {
		homeClick(id) {
			switch (id){
				case 1:
				// console.log(this.$router.options.routes)
				if(this.$route.meta.index === 1) {
					return
				}
				this.$router.push('./home')
				break;
				
				case 2:
				if(this.$route.meta.index === 2) {
					return
				}
				this.$router.push('./finde')
				break;
				
				case 3:
				if(this.$route.meta.index === 3) {
					return
				}
				this.$router.push('./shopcar')
				break;
				
				case 4:
				if(this.$route.meta.index === 4) {
					return
				}
				this.$router.push('./about')
				break;
				default:
				console.log(id)
					break;
			}
		}
	},
	updated() {
		let myrouter = document.querySelector('.myrouter')
		let divs =document.querySelectorAll('.myrouter div')
		if(this.$route.meta.index < 5) {
			for(let i=0;i<4;i++) {
				divs[i].classList.remove("change")
			}
			myrouter.style.display = 'flex'
			divs[this.$route.meta.index-1].classList.add("change")
		}else{
			myrouter.style.display = 'none'
		}
	},
	watch: {//使用watch 监听$router的变化
	  $route(to, from) {
	    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
	    if(to.meta.index > from.meta.index){
	    //设置动画名称
	      this.transitionName = 'slide-left';
	    }else if(to.meta.index < from.meta.index){
	      this.transitionName = 'slide-right';
	    }else{
	      this.transitionName = ''
	    }
	  }
	},
};
</script>
<style lang="scss">
	#app {
		height: 100%;
		.myrouter {
			display: flex;
			justify-content: center;
			font-size: px2rem(30);
			position: fixed;
			z-index: 99;
			bottom: 0;
			height: px2rem(60);
			line-height: px2rem(60);
			text-align: center;
			background-color: #000000;
			width: 100%;
			border-radius: px2rem(15) px2rem(15) 0 0;
			font-family: '宋体';
			div {
				width: px2rem(180);
				color: #E2E2E2;
			}
			.change {
				background-color: #0086B3;
				background-color: #f1f2f6;
				color: #000000;
				border-radius: px2rem(15) px2rem(15) 0 0;
			}
		}
		
	}
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
	  // will-change: transform;
	  transition: transform .5s;
	  position: absolute;
	}
	.slide-right-enter {
	  opacity: 0;
	  // transform: translate3d(-100%, 0, 0);
	  transform:translateX(-100%)
	}
	.slide-right-leave-active {
	  opacity: 0;
	  // transform: translate3d(100%, 0, 0);
	  transform:translateX(100%)
	}
	.slide-left-enter {
	  opacity: 0;
	  // transform: translate3d(100%, 0, 0);
	  transform:translateX(100%)
	}
	.slide-left-leave-active {
	  opacity: 0;
	  // transform: translate3d(-100%, 0, 0);
	  transform:translateX(-100%)
	}
</style>
