<template>
  <div class="shopcar">
    <div class="shoping">
			<div class="title">
				购物车
			</div>
			<div class="edit" @click="listnum">
				编辑
			</div>
		</div>
		<div class="tip" v-show="isshow">
			<div class="shoptip">
				购物车还是空的
			</div>
			<div class="shopbutton">
				<button @click="goshop">去逛逛</button>
			</div>
		</div>
		<div>
			<shoplisttest :game="game" :txtisshow="gwcisnull" :chkisshow="!gwcisnull"/>
		</div>
  </div>
</template>

<script>
	import shoplisttest from '../components/Shoplisttest'
export default {
  name: 'shopcar',
  data () {
    return {
			isshow: true,
			gwcisnull: true,
			game: undefined
    }
  },
	methods: {
		listnum() {
			// console.log('编辑')
				this.gwcisnull = !this.gwcisnull
		},
		goshop() {
			this.$router.push('/finde')
		}
	},
	components: {
		shoplisttest
	},
	mounted() {
		this.game = JSON.parse(localStorage.getItem('addArr'))
		for(let i =0; i<this.game.length; i++) {
			for(let j=i+1; j<this.game.length; j++){
				if(this.game[i]['name'] == this.game[j]['name']) {
					this.game[i].num += this.game[j].num
					this.game.splice(j, 1)
					j--
				}
			}
		}
		if(this.game.length != 0) {
			this.isshow = !this.isshow
		}
	}
}
</script>

<style scoped lang="scss">
.shopcar{
	height: 100%;
	width: 100%;
	font-family: '宋体';
	@mixin textcenter {
		text-align: center;
	}
	.shoping {
		height: px2rem(120);
		align-items: center;
		font-size: px2rem(20);
		display: flex;
		background-color: #99CCCC;
		color: white;	
		.title {
			font-size: px2rem(50);
			width: px2rem(450);
			text-align: right;
		}
		.edit {
			@include textcenter();
			width: px2rem(350);
			font-size: px2rem(35);
		}
	}
	.tip {
		display: flex;
		height: px2rem(80);
		justify-content: center;
		align-items: center;
		.shoptip {
			font-size: px2rem(30);
		}
		.shopbutton {
			width: px2rem(120);
			text-align: right;
			button {
				border: 0px;
				width: px2rem(100);
				height: px2rem(45);
				font-size: px2rem(25);
				color: #fff;
				background-color: sandybrown;
			}
		}
	}
}
</style>
