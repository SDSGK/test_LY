<template>
	<div class="finde">
		<div class="search" @click="insearch">在此处输入您想搜索的内容</div>
		<div class="list-wrap">
			<div v-for="(games, index) in gameArr" :key="index" @click="select(games)">{{ games }}</div>
		</div>
		<shoplist :game="pusharr" />
	</div>
</template>

<script>
import shoplist from '../components/Shoplist';
// import '../lib/myTouch'
export default {
	name: 'finde',
	data() {
		return {
			gameArr: ['游戏', '资源', '精品', '影视'],
			pusharr: null,
			thegamearr: [
				{
					name: 'bt手游，快乐就完事了',
					jiage: '300',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0513/1557728134399417.png',
					num: 1
				},
				{
					name: '三国传奇，也快乐',
					jiage: '500',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0515/1557909634724937.jpg',
					num: 1
				},
				{
					name: '天下，Wdnmd',
					jiage: '100',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0312/1552356606324859.png',
					num: 1
				},
				{
					name: '流星蝴蝶剑',
					jiage: '40',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2018/0510/1525955030436665.jpg',
					num: 1
				},
				{
					name: '崩崩崩！！！',
					jiage: '999',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0417/1555493804589290.png',
					num: 1
				},
				{
					name: '快乐农药',
					jiage: '999',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0327/1490621219368371.png',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				}
			],

			theresourcesarr: [
				{
					name: 'Adobe Dreamweaver',
					jiage: '989',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/15164/cut-20180130144855-1726951617_jpg_309_247_10641.jpg/300',
					num: 1
				},
				{
					name: 'Visual Studio Code',
					jiage: '95.9',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/12404/20150504103247-1393601284.jpg/300',
					num: 1
				},
				{
					name: 'Adobe Premiere',
					jiage: '1850',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/53/cut-20180918212423-1554488235_jpg_216_173_3469.jpg/300',
					num: 1
				},
				{
					name: 'Adobe Photoshop',
					jiage: '1024',
					image: 'https://img02.sogoucdn.com/app/a/100520061/f327529eb9fb2cecf67629a6499ca1cb',
					num: 1
				},
				{
					name: 'Hbuilder',
					jiage: '261',
					image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://7.pic.pc6.com/up/2015-2/201525162649.jpg',
					num: 1
				},
				{
					name: '微信小程序',
					jiage: '88',
					image: 'https://res.wx.qq.com/wxdoc/dist/assets/img/main.01aed00c.png',
					num: 1
				},
				{
					name: 'Notepad++',
					jiage: '3.8',
					image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://pc3.gtimg.com/softmgr/logo/48/23026_48_1474946616.png',
					num: 1
				}
			],
			
			thehotarr: [
				{
					name: 'bt手游，快乐就完事了',
					jiage: '300',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0513/1557728134399417.png',
					num: 1
				},
				{
					name: '三国传奇，也快乐',
					jiage: '500',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0515/1557909634724937.jpg',
					num: 1
				},
				{
					name: '天下，Wdnmd',
					jiage: '100',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0312/1552356606324859.png',
					num: 1
				},
				{
					name: '流星蝴蝶剑',
					jiage: '40',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2018/0510/1525955030436665.jpg',
					num: 1
				},
				{
					name: '崩崩崩！！！',
					jiage: '999',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2019/0417/1555493804589290.png',
					num: 1
				},
				{
					name: '快乐农药',
					jiage: '999',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0327/1490621219368371.png',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				},
				{
					name: '来自路飞的快乐头像',
					jiage: '10',
					image: 'https://shouyou.3dmgame.com/uploadimg/ico/2017/0518/1495071854921465.jpg',
					num: 1
				}
			],
			
			themoviarr: [
				{
					name: 'Adobe Dreamweaver',
					jiage: '989',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/15164/cut-20180130144855-1726951617_jpg_309_247_10641.jpg/300',
					num: 1
				},
				{
					name: 'Visual Studio Code',
					jiage: '95.9',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/12404/20150504103247-1393601284.jpg/300',
					num: 1
				},
				{
					name: 'Adobe Premiere',
					jiage: '1850',
					image: 'http://pic.baike.soso.com/ugc/baikepic2/53/cut-20180918212423-1554488235_jpg_216_173_3469.jpg/300',
					num: 1
				},
				{
					name: 'Adobe Photoshop',
					jiage: '1024',
					image: 'https://img02.sogoucdn.com/app/a/100520061/f327529eb9fb2cecf67629a6499ca1cb',
					num: 1
				},
				{
					name: 'Hbuilder',
					jiage: '261',
					image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://7.pic.pc6.com/up/2015-2/201525162649.jpg',
					num: 1
				},
				{
					name: '微信小程序',
					jiage: '88',
					image: 'https://res.wx.qq.com/wxdoc/dist/assets/img/main.01aed00c.png',
					num: 1
				},
				{
					name: 'Notepad++',
					jiage: '3.8',
					image: 'https://img02.sogoucdn.com/v2/thumb/retype/ext/jpg/cls/imagick?appid=200504&url=http://pc3.gtimg.com/softmgr/logo/48/23026_48_1474946616.png',
					num: 1
				}
			]
		};
	},
	components: {
		shoplist
	},
	methods: {
		insearch() {
			this.$router.push('/search');
		},
		select(games) {
			switch (games) {
				case '游戏':
					this.pusharr = this.thegamearr;
					break;
				case '资源':
					this.pusharr = this.theresourcesarr;
					break;
				case '精品':
					this.pusharr = this.thehotarr;
					break;
				case '影视':
					this.pusharr = this.themoviarr;
					break;
				default:
					break;
			}
		}
	},
	mounted() {
		this.pusharr = this.thegamearr
	}
};
</script>

<style scoped lang="scss">
.finde {
	height: 100%;
	width: 100%;
	margin-bottom: px2rem(60);
	.search {
		width: 90%;
		text-align: center;
		height: px2rem(55);
		line-height: px2rem(55);
		margin: px2rem(10) auto 0 auto;
		font-family: '微软雅黑';
		font-size: px2rem(25);
		letter-spacing: 2px;
		background-color: rgba(100, 100, 100, 0.2);
		border: 1px solid #fafafa;
		border-radius: px2rem(8);
		color: white;
	}
	.list-wrap {
		display: flex;
		justify-content: space-around;
		height: px2rem(90);
		line-height: px2rem(90);
		margin-top: px2rem(10);
		div {
			text-align: center;
			width: 20%;
			border-radius: px2rem(10);
			font-size: px2rem(35);
			color: whitesmoke;
		}
		div:nth-of-type(1) {
			background-color: rgba(255, 0, 0, 0.562);
		}
		div:nth-of-type(2) {
			background-color: skyblue;
		}
		div:nth-of-type(3) {
			background-color: sandybrown;
		}
		div:nth-of-type(4) {
			background-color: slateblue;
		}
	}
}
</style>
