import VueRouter from 'vue-router'

import index from '../../components/index/index.vue'
import classify from '../../components/index/classify.vue'
import rank from '../../components/index/rank.vue'
import welfare from '../../components/index/welfare.vue'
import newBook from '../../components/index/newBook.vue'
import endBook from '../../components/index/endBook.vue'
import personal from '../../components/index/personal.vue'
import bookshelf from '../../components/index/bookshelf.vue'
import search from '../../components/index/search.vue'
import details from '../../components/index/details.vue'
import classifyDetails from '../../components/classify/classifyDetails.vue'
import login from '../../components/login/login.vue'
import register from '../../components/login/register.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:index,
			redirect:'/index'
		},
		{
			path:'/index',component:index
		},
		{
			path:'/classify',component:classify
		},
		{
			path:'/rank',component:rank
		},
		{
			path:'/welfare',component:welfare
		},
		{
			path:'/newBook',component:newBook
		},
		{
			path:'/endBook',component:endBook
		},
		{
			path:'/personal',component:personal
		},
		{
			path:'/bookshelf',component:bookshelf
		},
		{
			path:'/search',component:search
		},
		{
			path:'/details',component:details
		},
		{
			path:'/classifyDetails',component:classifyDetails
		},
		{
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		},
		
		{
			path:'/*',redirect:'/index'
		}		
	]
})