import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Finde = () => import("../views/Finde.vue");
const Shopcar = () => import("../views/Shopcar.vue");
const Search = () => import("../views/Search.vue");
const Login = () => import("../views/Login.vue")
const Homeinfo = () => import("../views/Homeinfo.vue")
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: "/home",
		name: "home",
		meta:{index:1},
		component: Home
	},
	{
		path: "/finde",
		name: "finde",
		meta:{index:2},
		component: Finde
	},
	
	{
		path: "/shopcar",
		name: "shopcar",
		meta:{index:3},
		component: Shopcar
	},
	{
		path: "/about",
		name: "about",
		meta:{index:4},
		component: About
	},
	{
		path: "/search",
		name: "search",
		meta:{index:6},
		component: Search
	},
	{
		path: "/login",
		name: "login",
		meta:{index:5},
		component: Login
	},
	{
		path: "/homeinfo",
		name: "homeinfo",
		meta:{index:6},
		component: Homeinfo
	}
];

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next)=>{

	document.title = to.matched[0].name
	// console.log(to.path)
	if(to.path == '/about') {
		// next('/login')//拦截, 设置登录数据有的话不拦截, 没有则跳转到登录界面
	}
	// if(to.meta.index >= from.meta.index) {
	// 	// console.log('要去下一个地方了')
	// 	document.body.style.transition = "transform .5s"
	// 	document.body.style.transform = "translateX(-100vw)"
	// 	setTimeout(function() {
	// 	document.body.style.transition = null
	// 		document.body.style.transform = null
	// 		next()
	// 	}, 500);
	// }else if(to.meta.index <= from.meta.index){
	// 	document.body.style.transition = "transform .5s"
	// 	document.body.style.transform = "translateX(100vw)"
	// 	setTimeout(function() {
	// 	document.body.style.transition = null
	// 		document.body.style.transform = null
	// 		next()
	// 	}, 500);
	// }else {
	// 	next()
	// }
		next()
})
export default router;
