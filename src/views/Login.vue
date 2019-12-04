<template>
  <div class="login">
    <h1>欢迎登录保洁SFA系统</h1>
		<div class="divTopRadius"></div>
		<div class="divContent">
		<!-- 	<img src="../assets/logo.png" alt="login" width="190px" height="190px" class="loginImg"> -->
		<div class="logoWrap">
			<div class="loginImg"></div>
		</div>
		<!-- 表单相关 -->
		<div class="input-group" :class="{active: active === 1}" >
			<label for="cm_code">公司编号：</label>
			<input type="text" id="cm_code" v-model="id" @focus="active = 1"  name="cno"> 
		</div>
		<div class="input-group" :class="{active: active === 2}" >
			<label for="name">员工编号：</label>
			<input type="text" id="name" v-model="name" @focus="active = 2"  name="numb">
		</div>
		<div class="input-group" :class="{active: active === 3 }" >
			<label for="Passwd">用户密码：</label>
			<input type="password" id="Passwd" v-model="pwd" @focus="active = 3"  name="pwd">
		</div>
		<div class="box-row">
			<div class="ckbox-wrap" @click="remembSet" :class="{active:rememb}">
				<i class="iconfont " :class="{ 'icon-check-square':rememb , 'icon-border':!rememb}"></i>
				<span>记住密码</span>
			</div>
			<div class="ckbox-wrap" @click="autoLoginSet" :class="{active:autologin}">
				<i class="iconfont " :class="{ 'icon-check-square':autologin , 'icon-border':!autologin}"></i>
				<span>自动登录</span>
			</div>
		</div>
		</div>
		<div class="button" @click="buttonClick">
			登录
		</div>
  </div>
</template>

<script>
// import "../assets/font/iconfont.css";
// import myAxios from '../service/myAxios'
import axios from "axios" 
// import { mapMutations} from 'vuex'
import {Indicator, Toast} from "mint-ui"
import '../assets/font/iconfont.css';
export default {
  name: "login",
  data() {
    return {
       cm_code: "",
			 PNO: "",
			 Passwd: "",
			 active: 0,
			 rememb: false,
			 autologin: false,
			 id: null,
			 name: null,
			 pwd: null
    };
  },
	mounted() {

		this.PNO = JSON.parse(localStorage.getItem('Login_user'))
		if(this.PNO != null) {
			// console.log('空的')
			// console.log(this.PNO)
			if(this.PNO.Rememb || this.PNO.autologin) {
				this.id = this.PNO.id
				this.name = this.PNO.name 
				this.pwd = this.PNO.pwd 
				this.autologin = this.PNO.autologin
				this.rememb = this.PNO.Rememb
			}
			
		}else {
			// console.log('空的')
		}
	},
	methods: {
		// ...mapMutations(['initUser']),
		autoLoginSet() {
			this.autologin = !this.autologin
			this.autologin && (this.rememb = true)
		},
		remembSet() {
			this.rememb = !this.rememb
			!this.rememb && (this.autologin = false)
		},
		buttonClick() {
			// if(this.id != null && this.name != "" && this.pwd != "") {
				Indicator.open('加载中')
				console.log('add')
					setTimeout(()=>{
						Indicator.close()
						this.$router.push('/about')
					},1000)
			// }
			// console.error('最少4位，最大6-12位')
					// axios.post({
					// 	id : this.id,
					// 	name : this.name,
					// 	pwd: this.pwd
					// }).then(res=>{
					// 	// console.log(res.data.user)
					// 	// console.log(res.data.code === '1') 
					// 	if(res.data.code === "1" ) {
					// 		// console.log('进入存储')
					// 		localStorage.setItem('Login_user', JSON.stringify({
					// 			//填写相关localStorage
					// 			Rememb : this.rememb,
					// 			Autologin: this.autologin,
					// 			id: this.rememb ? this.id : null,
					// 			name: this.rememb ? this.name : null,
					// 			pwd: this.rememb ? this.pwd : null
					// 		}))
							// sessionStorage.setItem('LoginUser', JSON.stringify(res.data.user))
							// this.initUser(res.data.user)
							// this.$router.push('/home')
							
							
					// 		}
					// 		return
					// 	}
					// ).catch(e=>{
					// 	console.log('请求失败',e)
					// 		Indicator.close()
					// })
					// setTimeout(function() {
					// 	Indicator.close()
					// }, 1000);
					// return
		}
	},
	computed: {
		
	}
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
/* 这里scoped是局部的意思 也就是说 这里的样式只在当前组件有效 */
//   @import '../lib/hotcss/px2rem.scss';
	
h1{
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(36);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  line-height: px2rem(36);
  color: white;
  font-family: "微软雅黑";
}
@mixin homeWidth {
		width: px2rem(600);
		background-color: #ffffff;
		margin: 0 auto;
		border-radius: px2rem(20);
}
@mixin rowStyle {
	padding: 0 px2rem(36);
	color: text-color-2;
	width: px2rem(473-72);
}
.login {
	background: #2ade69;
	height: 100%;
	
	.divTopRadius {
		height: px2rem(18);
		width: px2rem(537);
		margin: 0 auto;
		border-radius: px2rem(18) px2rem(18) 0 0;
		background-color: #eeeeee;
	}
	
	.divContent {
		@include homeWidth();
		height: px2rem(836);
		.logoWrap {
			padding: px2rem(80) 0;
		.loginImg {
			background: url(../assets/logo.jpg) no-repeat;
			width: px2rem(190);
			height: px2rem(190);
			margin: 0 auto;
			background-size: cover;
			}
		}
		
		.input-group {
			border: 2px solid #e2e2e2;
			border-radius: px2rem(45);
			font-size: px2rem(28);
			line-height: px2rem(90);
			@include rowStyle();
			margin: 0 auto px2rem(30) auto ;
			input {
				border: 0px;
				font-size: px2rem(28);
				line-height: px2rem(90);
				width: px2rem(230);
				padding-left: 1em;
			}
		}
		.input-group.active {
			border: 2px solid #10903d;
			color: #10903d;
		}
		.input-group.error {
			border: 2px solid red;
			color: red;
		}
		.box-row {
			@include rowStyle();
			display: flex;
			font-size: px2rem(24);
			justify-content: space-around;
			margin: 0 auto;
			// padding-left: px2rem(36);
			.ckbox-wrap {
				font-size: px2rem(28);
				i::before {
					font-size: px2rem(40);
				}
			}
			.ckbox-wrap.active {
				color: #10903d;
			}
		}
	}
	.button {
		@include homeWidth();
		height: px2rem(100);
		color: #10903d;
		margin: px2rem(20) auto 0 auto;
		line-height: px2rem(100);
		text-align: center;
		font-size: px2rem(36);
		font-weight: bold;
		letter-spacing: px2rem(10);
	}
}

/* 最外面的loginbox白色盒子的样式和底部的登录按钮样式类似
  除了高度不一样以外，其他都相同，所以我们可以将它提取出来公用 */

</style>
