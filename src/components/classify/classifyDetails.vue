<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>现代言情</h1>
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
		<!--回到顶部-->
		<div class="backTop" @click="backTop()" v-show="hide">
			<img src="../../assets/img/huidaodingbu.svg"/>
		</div>		
		<section id="container">
			<mt-navbar v-model="selected" class="cdList">
			  <mt-tab-item id="1">综合</mt-tab-item>
			  <mt-tab-item id="2">字数</mt-tab-item>
			  <mt-tab-item id="3">点击</mt-tab-item>
			  <mt-tab-item id="4">时间</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<ul class="BookList">
					<li v-for="(item,index) in limitedList">
						<router-link to="/details">
							<img v-lazy="item.src"/>
							<p>{{item.title}}</p>
							<p>{{item.author}}</p>
						</router-link>
					</li>
				</ul>
			  	<ul class="essayBookList">
					<li v-for="(item,index) in popularList">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>{{item.des}}</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<span>{{item.author}}</span>
									</div>
									<ul class="bookTags">
										<li class="type">{{item.type}}</li>
										<li class="state">{{item.state}}</li>
										<li class="mount">{{item.mount}}</li>
									</ul>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
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
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	<ul class="essayBookList">
					<li v-for="(item,index) in freeList">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>{{item.des}}</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<span>{{item.author}}</span>
									</div>
									<ul class="bookTags">
										<li class="type">{{item.type}}</li>
										<li class="state">{{item.state}}</li>
										<li class="mount">{{item.mount}}</li>
									</ul>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
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
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			  	<ul class="essayBookList">
					<li v-for="(item,index) in popularList">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>{{item.des}}</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<span>{{item.author}}</span>
									</div>
									<ul class="bookTags">
										<li class="type">{{item.type}}</li>
										<li class="state">{{item.state}}</li>
										<li class="mount">{{item.mount}}</li>
									</ul>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
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
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
			  	<ul class="essayBookList">
					<li v-for="(item,index) in freeList">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>{{item.des}}</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<span>{{item.author}}</span>
									</div>
									<ul class="bookTags">
										<li class="type">{{item.type}}</li>
										<li class="state">{{item.state}}</li>
										<li class="mount">{{item.mount}}</li>
									</ul>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
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
			  </mt-tab-container-item>
			</mt-tab-container>
		</section>
	</main>
</template>

<script>
	import {down} from '../../assets/js/commonJS.js'
	export default {
    data() {
        return {
            show:false,
            hide:false,
            selected:"1",
            flag:0,
            iconfont:'iconfont',
            icon:'icon-caidan',
            guide:'',
          	limitedList:[],
            popularList:[],
            freeList:[]
        }
    },
    
    mounted(){
    	window.addEventListener('scroll',this.top)
    	this.$http.get('./data/welfare.json')
    	.then((res)=>{
    		this.limitedList = res.data.limitedList;
    		this.popularList = res.data.popularList;
    		this.freeList = res.data.freeList
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
        		a.target.parentNode.previousElementSibling.style.paddingLeft = '34vw'
        	}
        	down(a,this.flag);
        	this.show = !this.show
        },
        backTop(){
				document.documentElement.scrollTop = 0;
			},
		top(){
			this.scroll = document.documentElement.scrollTop
			if(this.scroll>300){
				this.hide = true;
			}else{
				this.hide = false;
			}
		}
    }
}
</script>

<style>
	#container{
		width: 100%;
		box-sizing: border-box;
		padding: 2% 4%;
	}
	#container .BookList{
		border-bottom: 1px solid #F2F4F5;
	}
	.cdList{
		width: 60%;
		position: static;
	}
	.cdList .mint-tab-item{
		padding-bottom: 2px;
	}
	.cdList .mint-tab-item-label{
		font-size: 1.4rem;
		padding-bottom: .5rem;
	}
	.cdList .mint-tab-item.is-selected{
		margin-bottom: 0;
		color: #F01742;
		border-bottom: 1px solid #F01742;
	}
	#container .BookList>li p:nth-of-type(1){
		font-size: 1.3rem;
	}
	#container .BookList>li p:nth-of-type(2){
		font-size: 1.2rem;
	}
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
	.footerLink>ul>li{
		font-size: 1.35rem;
	}
	.footerLink>ul>li>a{
		font-size: 1.35rem;
	}
</style>