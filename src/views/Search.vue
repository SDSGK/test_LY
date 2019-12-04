<template>
  <div class="search">
    <comeback title="搜索"/>
  </div>
</template>

<script>
	import comeback from '../components/Comeback.vue'
export default {
  name: 'search',
  data () {
    return {

    }
  },
	mounted() {
		console.log(this.jixuan)
	},
	components: {
		comeback
	}
}
</script>

<style scoped lang="scss">
.search {
	height: 100%;
	width: 100%;
}
</style>
