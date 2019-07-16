<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>新书</h1>
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
		<!--大神新书-->
		<section class="container">
			<div class="Title">
				<h3>
					<i class="essay-icon titleIcon"></i>
					大神新书
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in godList">
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
		</section>
		<div class="diveder"></div>
		<!--最新上架-->
		<section class="container">
			<div class="Title">
				<h3>
					<i class="essay-icon titleIcon"></i>
					最新上架
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in addList">
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
		</section>
		<div class="diveder"></div>		
		<!--畅销新书-->
		<section class="container">
			<div class="Title">
				<h3>
					<i class="essay-icon titleIcon"></i>
					畅销新书
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in bestList">
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
		</section>
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
		padding: 4% 5%;
    	padding-bottom: 0;
    }
    .container h3{
    	width: 100%;
    	font-size: 1.4rem;
    	color: #33373D;
    	overflow: hidden;
    }
	
	h3 span{
    	color: #808080;
    	font-size: 1.2rem;
    	font-weight: normal;
    	display: inline-block;
    	margin-top: 1%;
    	float: right;
    }
    h3 span>img{
    	width: .9rem;
    	margin-left: -0.5%;
    }   
    .diveder{
		width: 100%;
		height: 13px;
		background: #f6f7f9;
	}
</style>

<script>
	import {down} from '../../assets/js/commonJS.js'
	export default {
    data() {
        return {
            show:false,
            hide:false,
            flag:0,
            iconfont:'iconfont',
            icon:'icon-caidan',
            guide:'',
            godList:[],
            addList:[],
            bestList:[]
        }
    },
    
    mounted(){
    	window.addEventListener('scroll',this.top)
    	this.$http.get('./data/newBooks.json')
    	.then((res)=>{
    		this.godList = res.data.godList,
    		this.addList = res.data.addList,
    		this.bestList = res.data.bestList
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