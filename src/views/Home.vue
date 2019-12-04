<template>
  <div class="home">
    <myswiper />
		<news :arr="arrs"/>
  </div>
</template>

<script>
import Myswiper from "../components/Myswiper.vue";
import News from "../components/News.vue"
export default {
  name: "home",
	data() {
		return {
			arrs: [{
			        diyitiao: '白给的第一天，把把起野牛，三天大地球,day1哈哈哈哈哈哈',
			        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
			        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20190321/1553132423_129751.png',
			        fbzz: '来自：白给少年',
			        gk: '654',
			        pl: '2'
			      },
			      {
			        diyitiao: '白给的第二天，中路来个高闪，秋膏梨，day2哈哈哈哈哈哈',
			        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
			        image: 'https://img.3dmgame.com/uploads/images/thumbnews/20180726/1532569701_351408.jpg',
			        fbzz: '来自：今天你白给了吗',
			        gk: '195',
			        pl: '4'
			      },
			      {
			        diyitiao: '白给的第三天，中路来把狙，我起了一枪秒了，有什么好说的',
			        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
			        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180718/1531896687_811533.jpg',
			        fbzz: '来自：我芦苇没有开挂',
			        gk: '16548',
			        pl: '64'
			      },
			      {
			        diyitiao: '白给的第四天，随便编辑点内容，假装是条消息，就可以了。哈哈哈哈',
			        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
			        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180928/1538099247_494414.jpg',
			        fbzz: '来自：zzzs',
			        gk: '316',
			        pl: '4'
			      },
			      {
			        diyitiao: '白给的第四天，随便编辑点内容，假装是条消息，就可以了。哈哈哈哈',
			        diertiao: 'Wdnmd，真就白给呗，哈哈哈',
			        image: 'https://img.3dmgame.com/uploads/images/thumbkwdfirst/20180928/1538099247_494414.jpg',
			        fbzz: '来自：zzzs',
			        gk: '316',
			        pl: '4'
			      }
			    ],
		}
	},
  components: {
    myswiper: Myswiper,
		news: News
  }
};
</script>
<style scoped lang="scss">
	
</style>
