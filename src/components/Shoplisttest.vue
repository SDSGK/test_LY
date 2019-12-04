<template>
	<div class="shoplist">
		<div class="listwrap" v-for="(games, index) in game" :key="index">
			<div class="listimg"><img :src="games.image" alt=""/></div>
			<div class="listtext">
				<div class="text1">{{ games.name }}</div>
				<div class="text2">单价：{{ games.jiage }}</div>
			</div>
			<div class="listbutton">
				<div class="listnum">
				<span>
					数量:
					<span class="num">{{ games.num }}</span>
				</span>
				</div>
				<div @click="remove((type = 'one'), index)" class="remove" v-show="txtisshow">删除</div>
				<div class="check" v-show="chkisshow"><input  @click="checkd" type="checkbox" :thisindex="index"/>
				</div>
			</div>
		</div>
		<div class="dele" v-show="chkisshow">
			<div class="all">
				<span>{{ quanxuan }}:</span>
				<input type="checkbox" @click="ischeck($event)" class='checkAll'/>
			</div>
			<div class="rmb">
				价格：
				<span>{{ rmb }}</span>
			</div>
			<div class="del" @click="delall">删除</div>
			<div class="pus">购买</div>
		</div>
	</div>
</template>

<script>
	import {Indicator, Toast} from 'mint-ui';
	
	export default {
		name: 'shoplist',
		props: {
			game: {
				type: Array,
				default: null
			},
			txtisshow: {
				default: true
			},
			chkisshow: {
				default: false
			}
		},
		data() {
			return {
				rmb: 0,
				quanxuan: '全选',
				bool: false
			};
		},
		methods: {
			remove(type, index) {
				if (type != 'all') {  //如果传入的类型不是全部， 那么就是删除数量
					Indicator.open('请求中'); //弹窗加载， 防止用户多次点击
					setTimeout(() => {
						this.game[index].num -= 1;
						if (this.game[index].num <= 0) {//如果数量大于1 则减1， 如果数量等于零则删除该数组
							this.game.splice(index, 1);
						}
						localStorage.setItem('addArr', JSON.stringify(this.game));
						Indicator.close();// 弹窗加载关闭
						if (this.game.length < 1) {//如果数组长度少于1了， 也就是没有了， 那么页面会刷新
							location.reload();
						}
					}, 500);
				} else { //如果传入的是全部的话， 直接进行删除数组， 然后存放到loaclStorage
					Indicator.open('删除中。。');//弹窗加载， 防止用户多次点击
					setTimeout(() => {
						this.game.splice(index, 1); //删除数组
						this.rmb = 0 //价格归零
						localStorage.setItem('addArr', JSON.stringify(this.game));
						Indicator.close();// 弹窗加载关闭
						if (this.game.length < 1) {
							location.reload(); //页面刷新
						}
					}, 500);
				}
			},
			checkd() { //计算价格
				this.rmb = 0 //无论何时， 初始化价格
				let checkall = document.querySelectorAll('.check>input');
				let cont = 0
				for (let i in Array.from(checkall))  {
					if(checkall[i].checked) {//判断复选框是否选中
						this.rmb += parseFloat(this.game[i].jiage * this.game[i].num);//当我是选中时就将价格添加
						cont ++
						if (cont ==  Array.from(checkall).length) {
							this.quanxuan = '全不选';
							document.querySelector('.checkAll').checked = true
							this.bool = true
							// this.ischeck()
						}else {
							// this.bool = falses
						}
					}else {
						//接下来要解决的问题时如何单个全部选中时， 下面全选要进行变化， 但是当我点击下面全选的时候， 上面的单个复选框也要进行变化，
						this.quanxuan = '全选';
						document.querySelector('.checkAll').checked = false
					}
				}
			},
			ischeck() {  //全选和全部选
				this.bool = !this.bool
				this.rmb = 0; //初始化价格
				// console.log(this.bool);
				let checkall = document.querySelectorAll('.check>input');
				for (let i in Array.from(checkall)) {
					checkall[i].checked = this.bool;
					//复选框变成true
					// this.checkd(checkall[i].attributes.thisindex.value, this.bool);
					this.checkd()
					//调用计算价格
				}
				if (this.bool) { //当用户点击全选和全部选的操作
					this.quanxuan = '全不选';
				} else {
					this.quanxuan = '全选';
					this.rmb = 0;
				}
			},
			delall() {
				let checkall = document.querySelectorAll('.check>input');
				let type = 'all'; //定义好类型
				for (let i = Array.from(checkall).length - 1; i >= 0; i--) { //这里必须得反向删除， 不然复选框会继承下来， 导致下面这个删除不了， 研究了一晚上终于解决这个问题，
					if (checkall[i].checked) {
						//当我点击删除的时候，判断复选框是否时选中状态
						this.remove(type, checkall[i].attributes.thisindex.value);
						//获取复选框当中的自定义属性
					}
				};
				for (let j in Array.from(checkall)) {// 当上面执行完毕后， 将所有的继承下来的勾取消掉， 防止二次删除
					checkall[j].checked = false
				}
			}
		},
		mounted() {
		},
		computed: {},
		updated() {
			this.rmb = Math.round(this.rmb * 100) / 100; //为了不让小数点出bug
		}
	};
</script>

<style scoped lang="scss">
	.shoplist {
		@mixin divbutton {
			width: px2rem(80);
			text-align: center;
			height: px2rem(60);
			line-height: px2rem(60);
		}
		@mixin borderradius {
			border-radius: px2rem(15);
		}
		font-size: px2rem(22);
		height: 100%;
		margin-top: px2rem(20);
		margin-bottom: px2rem(130);
		
		.listwrap {
			display: flex;
			justify-content: space-around;
			margin-top: px2rem(20);
			background-color: #fff;
			border-radius: px2rem(15);
			height: px2rem(160);
			
			.listimg {
				width: px2rem(160);
				height: px2rem(140);
				padding-top: px2rem(10);
				
				img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			
			.listtext {
				width: px2rem(150);
				padding-top: px2rem(15);
				
				.text1,
				.text2 {
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
			
			.listbutton {
				padding-top: px2rem(35);
				
				.listnum {
					display: flex;
					height: 30px;
					text-align: center;
					margin: 0 0 px2rem(10) px2rem(30);
				}
				
				.num {
					color: red;
				}
				
				.remove {
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
				
				.check {
					width: px2rem(160);
					height: px2rem(70);
					font-size: px2rem(35);
					line-height: px2rem(70);
					text-align: center;
					border: 1px solid transparent;
					
					input[type='checkbox'] {
						width: px2rem(50);
						height: px2rem(50);
						margin-top: px2rem(10);
					}
				}
			}
		}
		
		.dele {
			background-color: white;
			height: px2rem(70);
			width: 100%;
			position: fixed;
			z-index: 99;
			bottom: px2rem(60);
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: px2rem(30);
			@include borderradius();
			
			.all {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				input[type='checkbox'] {
					width: px2rem(50);
					height: px2rem(50);
				}
			}
			
			.rmb {
				span {
					color: red;
				}
			}
			
			.del {
				@include divbutton();
				@include borderradius();
				background-color: #bd2c00;
				color: white;
			}
			
			.pus {
				@include divbutton();
				@include borderradius();
				background-color: #63a35c;
				color: white;
			}
		}
	}
</style>
