<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>分类</h1>
				<div class="personNav">
					<i :class="[iconfont,icon]" @click="handleDown($event)"></i>
				</div>
				<router-link to="/search">
					<i class="iconfont icon-chazhao"></i>
				</router-link>
			</div>
		</header>
		<!--navbar-->
		<i :class="guide"></i>
		<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
			<div class="navbar" v-show="show" style="animation-duration:100ms">
				<ul>
					<li>
						<router-link to="/index">
							<i class="p-icon p_indexIcon"></i>
							<span>首页</span>
						</router-link>
					</li>
					<li>
						<router-link to="/classify">
							<i class="p-icon p_sortIcon"></i>
							<span>分类</span>
						</router-link>
					</li>
					<li>
						<router-link to="/rank">
							<i class="p-icon p_rankIcon"></i>
							<span>排行榜</span>
						</router-link>
					</li>
					<li>
						<router-link to="/welfare">
							<i class="p-icon p_welfareIcon"></i>
							<span>福利</span>
						</router-link>
					</li>
					<li>
						<router-link to="/endBook">
							<i class="p-icon p_endBookIcon"></i>
							<span>完本</span>
						</router-link>
					</li>
					<li>
						<router-link to="/personal">
							<i class="p-icon p_personalIcon"></i>
							<span>账户</span>
						</router-link>
					</li>
				</ul>
				<div class="bookshelf">
					<router-link to="/bookshelf">
						我的书架
					</router-link>
				</div>
			</div>
		</transition>
		<!--内容-->
		<div class="container">
			<p class="list-title">女生频道</p>
			<ul class="girls">
				<li v-for="(item,index) in classifyList[0].girlsList">
					<router-link to="/classifyDetails">
						<img v-lazy="item.src"/>
						<div class="details">
							<h4>{{item.title}}</h4>
							<p>{{item.mount}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="container">
			<p class="list-title">男生频道</p>
			<ul class="boys">
				<li v-for="(item,index) in classifyList[1].boysList">
					<router-link to="/classifyDetails">
						<img v-lazy="item.src"/>
						<div class="details">
							<h4>{{item.title}}</h4>
							<p>{{item.mount}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!--尾部-->
		<footer>
			<div class="footerLink">
				<ul>
					<li>
						<router-link to="/bookshelf">书架</router-link>
					</li>
					<li>充值</li>
					<li>帮助</li>
					<li>客户端</li>
				</ul>
			</div>
			<div class="footerInfo">
				<router-link to="/index">hongxiu.com ©2019</router-link>
			</div>
		</footer>
	</main>
</template>

<style scoped>
	.iconfont{
		color: white;
		font-size: 3vh;
	}
	.icon-Delete{
		color: #F01742;
		display: inline-block;
		margin-top: 2%;
		font-size: 2.6vh;
	}	
	.container{
		width: 100%;
	}
	.list-title{
		width: 100%;
		box-sizing: border-box;
		padding: 4% 5%;
		font-size: 2vh;
		font-weight: bold;
		color: #33373D;
		padding-bottom: 2%;
	}
	.container ul{
		width: 100%;
		overflow: hidden;
	}
	.container ul>li{
		width: 50%;
		float: left;
		box-sizing: border-box;
		padding: 2.5% 5%;
		font-size: 1.2vh;
	}
	.container ul>li img{
		width: 30%;
		float: left;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	.details{
		float: left;
		margin-top: 8%;
		margin-left: 8%;
	}
	.container ul>li a{
		width: 100%;
		display: inline-block;
		overflow: hidden;
	}
	.container ul>li h4{
		color: #33373D;
		font-size: 2vh;
		margin-bottom: 2%;
	}
	.container ul>li p{
		color: #808080;
		padding-top: 9%;
	}
	/*.pink{
		background: #FFF5FA;
	}*/
	.girls>li:nth-child(1){
		background: #FFF5FA;
	}
	.girls>li:nth-child(2){
		background: #FFF5FA;
	}
	.girls>li:nth-child(5){
		background: #FFF5FA;
	}
	.girls>li:nth-child(6){
		background: #FFF5FA;
	}
	.girls>li:nth-child(9){
		background: #FFF5FA;
	}
	.girls>li:nth-child(10){
		background: #FFF5FA;
	}
	.boys>li:nth-child(1){
		background: #F1FAFF;
	}
	.boys>li:nth-child(2){
		background: #F1FAFF;
	}
	.boys>li:nth-child(5){
		background: #F1FAFF;
	}
	.boys>li:nth-child(6){
		background: #F1FAFF;
	}
	.boys>li:nth-child(9){
		background: #F1FAFF;
	}
	.boys>li:nth-child(10){
		background: #F1FAFF;
	}
	.boys>li:nth-child(13){
		background: #F1FAFF;
	}
	.boys>li:nth-child(14){
		background: #F1FAFF;
	}
</style>

<script>
	import {down} from '../../assets/js/commonJS.js'
	export default {
    data() {
        return {
            show:false,
            flag:0,
            iconfont:'iconfont',
            icon:'icon-caidan',
            guide:'',
            classifyList:[]
        }
    },
    mounted(){
    	this.$http.get('./data/classify.json')
    	.then((res)=>{
    		this.classifyList = res.data.classifyList
    	})
    	.catch(()=>{
    		console.log("请求失败！")
    	})
    	.finally(()=>{
    		console.log("请求结束！")
    	})
    },
   	methods:{
        // 下拉菜单 
        handleDown(a){
        	this.flag++;
        	if(this.flag%2==0){
        		this.icon = 'icon-caidan'
        		this.guide = ''
        		a.target.parentNode.previousElementSibling.style.paddingLeft = ''
        	}else{
        		this.icon = 'icon-Delete'
        		this.guide = 'guide'
        		a.target.parentNode.previousElementSibling.style.paddingLeft = '37.5vw'
        	}
        	down(a,this.flag);
        	this.show = !this.show
        }
    }
}
</script>