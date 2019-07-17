<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>个人中心</h1>
				<div class="personNav">
					<i :class="[iconfont,icon]" @click="handleDown($event)"></i>
				</div>
				<router-link to="/search">
					<i class="iconfont icon-chazhao"></i>
				</router-link>
			</div>
			<img src="../../assets/img/person.png"/>
			<p>
				书友20190704204254193
				<i class="iconfont icon-xiugai"></i>
			</p>
		</header>
		<!--navbar-->
		<i :class="guide" @click="shrink($event)"></i>
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
		<div class="book-li">
			<ul class="btns">
				<li>
					<p>0</p>
					<p>
						月票 <span>＞</span>
					</p>
				</li>
				<li>
					<p>0</p>
					<p>
						推荐票 <span>＞</span>
					</p>
				</li>
				<li>
					<p>0</p>
					<p>
						限免券
					</p>
				</li>
			</ul>
		</div>
		<div class="invest">
			<p class="invest-title">15
				<span>红袖币＞</span>
			</p>
			<div class="invest-pic">充值</div>
		</div>
		<div class="diveder"></div>
		<ul class="container">
			<li>
				<h3>
					<i class="personIcon vip-icon"></i>
					<span>会员中心</span>
				</h3>
				<i class="iconfont icon-you-"></i>
			</li>
			<li>
				<h3>
					<i class="personIcon medal-icon"></i>
					<span>勋章</span>
				</h3>
				<i class="iconfont icon-you-"></i>
			</li>
		</ul>
		<div class="diveder"></div>
		<ul id="lastNav" class="container">
				<li>
					<h3>
						<i class="personIcon info-icon"></i>
						<span>消息中心</span>
					</h3>
					<i class="iconfont icon-you-"></i>
				</li>
				<li>
					<h3>
						<i class="personIcon safe-icon"></i>
						<span>安全中心</span>
					</h3>
					<i class="iconfont icon-you-"></i>
				</li>
				<li>
					<h3>
						<i class="personIcon help-icon"></i>
						<span>帮助中心</span>
					</h3>
					<i class="iconfont icon-you-"></i>
				</li>
				<li>
					<h3>
						<i class="personIcon writer-icon"></i>
						<span>成为作家</span>
					</h3>
					<i class="iconfont icon-you-"></i>
				</li>
				<li>
					<h3>
						<i class="personIcon tips-icon"></i>
						<span>问题反馈</span>
					</h3>
					<i class="iconfont icon-you-"></i>
				</li>
			</ul>
		<div class="diveder"></div>
		<div class="loginOut">
			<router-link to="/login">
				退出登录
			</router-link>
		</div>
		<div class="diveder"></div>
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
	#screen{
		width: 100%;
	}
	.guide{
		display: block;
		float: left;
		width: 100%;
		height: 100%;
		background: black;
		transition: opacity .25s;
		opacity: .6;
		position: fixed;
		top: 0;
		z-index: 8;
	}
	.navbar{
		width: 100%;
		position: absolute;
		z-index: 10;
		background: white;
		top: 5.2vh;
		border-bottom-left-radius: 12px;
    	border-bottom-right-radius: 12px;
    	border-top: 1px solid rgba(253,152,75,.5);
    	overflow: hidden;
	}
	.navbar>ul{
		width: 100%;
		overflow: hidden;
	}
	.navbar>ul>li{
		width: 33%;
		box-sizing: border-box;
		padding: 0 10%;
		padding-top: 6%;
		float: left;
		text-align: center;
	}
	.navbar>ul>li>a{
		color: #33373D;
		font-size: 2.1vh;
	}
	.p-icon{
		background-image: url(../../assets/img/icon.png);
		background-size: 234px 206px;
		display: block;
		width: 48px;
		height: 48px;
		margin: 0 auto;
	}
	.p_indexIcon{
		background-position: -104px 0px;
	}
	.p_sortIcon{
		background-position: -52px 0px;
	}
	.p_rankIcon{
		background-position: 0px -52px;
	}
	.p_welfareIcon{
		background-position: -104px -52px;
	}
	.p_endBookIcon{
		background-position: 0px -104px;
	}
	.p_personalIcon{
		background-position: 0px 0px;
	}
	.bookshelf{
		text-align: center;
		width: 80%;
		padding: 2% 0;
		margin: 4% auto;
		border: 1px solid #F01742;
    	border-radius: 27px;
	}
	.bookshelf>a{
		color: #F01742;
		font-size: 2.1vh;
	}
	.headerInfo{
		width: 100%;
		position: relative;
		z-index: 9;
		background: transparent;
		overflow: hidden;
		padding: 1% 0;
		padding-bottom: 1%;
		transition: background-color 100ms;
	}
	.headerInfo>h1{
		color: white;
		display: inline-block;
		font-weight: 500;
		font-size: 2vh;
		padding-top: 2%;
	}
	.headerInfo>a:nth-of-type(1){
		display: inline-block;
		margin-top: 1.5%;
		margin-left: 2%;
		margin-right: 1%;
		float: left;
	}
	.personNav{
		float: right;
		margin-top: 2%;
		margin-right: 4%;
	}
	.headerInfo>a:nth-of-type(2){
		display: inline-block;
		float: right;
		margin-top: 2%;
		margin-right: 3%;
	}
	.icon-zuo{
		font-size: 3.5vh;
		color: white;
		font-weight: bold;
	}
	.icon-chazhao{
		color: white;
		font-size: 3vh;
	}
	.icon-caidan{
		color: white;
		font-size: 3vh;
	}
	.icon-Delete{
		color: #F01742;
		display: inline-block;
		margin-top: 2%;
		font-size: 2.6vh;
	}
	header{
		width: 100%;
		background-image: url(../../assets/img/personal-header.png);
		background-size: cover;
	}
	header>img{
		display: block;
		margin: 0 auto;
		width: 15%;
		border: 1px solid rgba(255,255,255,0.4);
		border-radius: 47%;
		margin-top: 3rem;
	}
	header>p{
		color: white;
		font-size: 1.3rem;
		text-align: center;
		margin-top: 1%;
		padding-bottom: 12%;
	}
	.icon-xiugai{
		font-size: 17px;
	}
	.btns{
		margin-top: 5%;
		overflow: hidden;
		width: 100%;
		padding-bottom: 3%;
	}
	.btns>li{
		float: left;
		width: 25%;
		padding: 0 4%;
		text-align: center;
	}
	.btns>li>p:nth-child(1){
		font-size: 1.6rem;
		color: #33373D;
		margin-bottom: 3%;
	}
	.btns>li>p:nth-child(2){
		font-size: 0.975rem;
		color: #808080;
		line-height: 1rem;
	}
	.btns>li>p>span{
		font-size: 1.1rem;
	}
	.book-li:after{
		content: '';
		border-bottom: 1px solid #f0f1f2;
		margin-left: 1rem;
		display: block;
	}
	.invest{
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		padding: 5% 4%;
		padding-bottom: 3%;
	}
	.invest-title{
		float: left;
		color: #33373D;
		font-size: 1.6rem;
		font-weight: bold;
	}
	.invest-title>span{
		color: #808080;
		font-size: 1.3rem;
	}
	.invest-pic{
		float: right;
		color: white;
		background: #F01742;
		text-align: center;
		border-radius: 99px;
		padding: 0.8% 4.5%;
		font-size: 1.5rem;
	}
	.diveder{
		width: 100%;
		height: 13px;
		background: #f6f7f9;
	}
	.container{
		box-sizing: border-box;
		padding: 4%;
		padding-top: 1%;
		padding-right: 0;
		overflow: hidden;
	}
	.container li{
		width: 100%;
		float: left;
		padding-bottom: 5%;
		margin-top: 5%;
		border-bottom: 1px solid #f0f1f2;
	}
	.container li:nth-child(2){
		padding-bottom: 0;
		border: 0;
	}
	#lastNav>li:nth-child(2){
		padding-bottom: 5%;
		border-bottom: 1px solid #f0f1f2;
	}
	#lastNav>li:nth-child(5){
		padding-bottom: 0;
		border: 0;
	}
	.container>li>h3{
		float: left;
		width: 50%;
		color: #33373D;
	}
	.container li>h3>span{
		display: inline-block;
		float: left;
		margin-left: 6%;
		margin-top: 1%;
		font-size: 1.5rem;
	}
	.icon-you-{
		font-size: 20px;
		display: block;
		float: right;
		color: #33373D;
		font-weight: 300;
		margin-right: 4%;
	}
	.personIcon{
		display: inline-block;
		float: left;
		background-image: url(../../assets/img/personIcon.png);
		background-size: 140px 129px;
	}
	.vip-icon{
		width: 20px;
		height: 19px;
		background-position: 0px -86px;
	}
	.medal-icon{
		width: 17px;
		height: 20px;
		background-position: -122px -48px;
	}
	.info-icon{
		width: 20px;
		height: 16px;
		background-position: -71px -86px;
	}
	.safe-icon{
		width: 18px;
		height: 20px;
		background-position: -122px -24px;
	}
	.help-icon{
		width: 19px;
		height: 18px;
		background-position: -48px -86px;
	}
	.writer-icon{
		width: 18px;
		height: 20px;
		background-position: -122px 0px;
	}
	.tips-icon{
		width: 20px;
		height: 19px;
		background-position: -24px -86px;
	}
	.loginOut{
		text-align: center;
		width: 100%;
		padding: 3.5% 0;
	}
	.loginOut>a{
		width: 100%;
		display: inline-block;
		color: #F01742;
		font-size: 1.5rem;
	}
</style>

<script>
	import {down} from '../../assets/js/commonJS.js'
	export default {
    data() {
        return {
            show:false,
            iconfont:'iconfont',
            icon:'icon-caidan',
            guide:''
        }
    },
    
   	methods:{
        // 下拉菜单 
         handleDown(a){
        	if(this.icon == 'icon-Delete'){
        		this.icon = 'icon-caidan'
        		this.guide = ''
        		a.target.parentNode.previousElementSibling.style.paddingLeft = ''
        	}else{
        		this.icon = 'icon-Delete'
        		this.guide = 'guide'
        		a.target.parentNode.previousElementSibling.style.paddingLeft = '32vw'
        	}
        	down(a,this.icon);
        	this.show = !this.show
        },
        shrink(a){
        	let b = a.target.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
        	this.icon = 'icon-caidan'
        	this.guide = ''
        	b.parentNode.previousElementSibling.style.paddingLeft = ''
        	b.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = 'white'
			b.parentNode.previousElementSibling.style.color = 'white'
			b.parentNode.nextElementSibling.childNodes[0].style.color = 'white'
			b.parentNode.parentNode.style.background = ''
			this.show = !this.show
        }
    }
}
</script>

