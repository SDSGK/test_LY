<template>
  <div class="homeinfo">
		<comeback title="评论"/>
		<news  :arr="arrs"/>
		<hr>
  </div>
</template>

<script>
	import news from "../components/News.vue"
	import comeback from "../components/Comeback.vue"
export default {
  name: "homeinfo",
	data() {
		return {
			arrs: [],
			
		}
	},
	components: {
		news,
		comeback
	},
	mounted() {
		this.arrs.push(JSON.parse(localStorage.getItem('homeinfo')))
	}
};
</script>

<style scoped lang="scss">
	.homeinfo {
		
		width: 100%;
	}
</style>
