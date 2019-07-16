<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<mt-navbar v-model="selected" id="classify">
				  <mt-tab-item id="1">我的书架</mt-tab-item>
				  <mt-tab-item id="2">最近阅读</mt-tab-item>
				</mt-navbar>
				<div class="personNav">
					<i :class="[iconfont,icon]" @click="handleDown($event)"></i>
				</div>
				<router-link to="/search">
					<i class="iconfont icon-chazhao"></i>
				</router-link>
			</div>
		</header>
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
		<div class="backTop" @click="backTop()" v-show="hide">
			<img src="../../assets/img/huidaodingbu.svg"/>
		</div>		

		<!-- tab-container -->
		<mt-tab-container v-model="selected" id="classifyList">
		  <mt-tab-container-item id="1">
		  	<section class="container">
			  	<p>
			  		<span>共1本</span>
			  		<span>编辑</span>
			  	</p>
			  	<p>我的书单</p>
			  	<div class="booksBox">
			  		<div class="imgBox">
			  			<img v-lazy="advert1"/>
			  			<img v-lazy="advert2"/>
			  			<img v-lazy="advert3"/>
			  		</div>
			  		<div class="textBox">
				  		<h3>书荒了？</h3>
				  		<p>看看这些新书吧！<i class="iconfont icon-you-"></i></p>
				  	</div>
			  	</div>
			  	<ul class="essayBookList">
					<li v-for="(item,index) in bookShelf">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>
									<i class="shelf-icon"></i>
									{{item.author}}
									<span>&nbsp;|&nbsp;</span>
									{{item.state}}
								</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<p>
											<span>更新至</span>
											<span>{{item.caption}}</span>
											<span>{{item.des}}</span>
										</p>
									</div>
								</div>
								<span>立即阅读
									<i class="iconfont icon-you-"></i>
								</span>
								<span>{{item.time}}</span>
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
		  	</section>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		  	<section class="container">
			  	<ul class="essayBookList">
					<li v-for="(item,index) in recently">
						<router-link to="/details">
							<img v-lazy="item.src" class="picBox"/>
							<div class="hotBookText">
								<h4>{{item.title}}</h4>
								<p>
									<i class="shelf-icon"></i>
									{{item.author}}
								</p>
								<div class="book-meta">
									<div class="hotBookAuthor">
										<p>
											<span>读至</span>
											<span>{{item.caption}}</span>
											<span>{{item.des}}</span>
										</p>
									</div>
								</div>
								<span>继续阅读
									<i class="iconfont icon-you-"></i>
								</span>
								<span>{{item.time}}</span>
							</div>
						</router-link>
					</li>
				</ul>
				<p class="record">以上为全部阅读记录</p>
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
		  	</section>
		  </mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>

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
            selected:"1",
            bookShelf:[],
            recently:[],
            book:[],
            advert2:'',
            advert3:'',
            advert1:''
        }
    },
    
    mounted(){
    	window.addEventListener('scroll',this.top)
    	this.$http.get('./data/bookShelf.json')
    	.then((res)=>{
    		this.bookShelf = res.data.bookShelf
    		this.recently = res.data.recently
    		this.advert1 = res.data.books.src1
    		this.advert2 = res.data.books.src2
    		this.advert3 = res.data.books.src3
    	})
    	.catch(()=>{
    		console.log('请求失败！')
    	})
    	.finally(()=>{
    		console.log('请求结束！')
    	})
    },
      
   	methods:{
        // 下拉菜单 
        handleDown(a){
        	this.flag++;
        	down(a,this.flag);
        	if(this.flag%2==0){
        		this.icon = 'icon-caidan'
        		this.guide = ''
        	}else{
        		this.icon = 'icon-Delete'
        		this.guide = 'guide'
        	}
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
	.navbar{
		top: 5.7vh;
	}
	#classifyList .mint-tab-container-item>.container{
		width: 100%;
		padding: 4% 5%;
		box-sizing: border-box;
		min-height: 700px;
	}
	#classify{
		width: 37%;
		float: left;
		margin-left: 23vw;
		background: #de1e49;
		border-radius: 99px;
	}
	#classify .mint-tab-item{
		padding: 1.4vh 0;
		background: #de1e49;
		color: white;
		border-radius: 99px;
	}
	#classify .mint-tab-item.is-selected{
		background: white;
		color: #F01742;
		border: 0;
		margin: 0;
	}
	#classifyList{
		width: 100%;		
	}
	#classifyList .mint-tab-container-item>.container>p{
		display: inline-block;
	}
	#classifyList .mint-tab-container-item>.container>p>span{
		font-size: 1.7rem;
	}
	#classifyList .mint-tab-container-item>.container>p>span:nth-of-type(2){
		color: #5b92e9;
	}
	#classifyList .mint-tab-container-item>.container>p:nth-of-type(2){
		float: right;
		color: #F01742;
		font-size: 1.5rem;
		border: 1px solid #F01742;
		border-radius: 99px;
		padding: 3px 8px;
	}
	.booksBox{
		width: 100%;
		overflow: hidden;
		padding: 2rem 4%;
		box-sizing: border-box;
		padding-bottom: 4rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    	border-radius: 0.3125rem;
    	margin-top: 2rem;
    	margin-bottom: 2rem;
	}
	#classifyList .mint-tab-container-item>.container .imgBox{
    	width: 10rem;
    	box-shadow: none;
    	position: relative;
    }
    #classifyList .mint-tab-container-item>.container .imgBox img{
    	width: 50%;
    	position: absolute;
    	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    #classifyList .mint-tab-container-item>.container .imgBox img:nth-of-type(2){
    	width: 55%;
    	top: -.3rem;
    	left: 2rem;
    }
    #classifyList .mint-tab-container-item>.container .imgBox img:nth-of-type(3){
    	z-index: -1;
    	left: 5rem;
    }
    #classifyList .mint-tab-container-item>.container .textBox{
    	margin-left: 12rem;
    	vertical-align: middle;
    	display: inline-block;
    	width: 60%;
    }
    #classifyList .mint-tab-container-item>.container .textBox>h3{
    	font-size: 1.5rem;
    	margin-bottom: 1.2rem;
    }
    #classifyList .mint-tab-container-item>.container .textBox>p{
    	color: #808080;
    	font-size: 1.5rem;
    }
    #classifyList .mint-tab-container-item>.container .textBox .icon-you-{
    	float: right;
	    color: #808080;
	    font-size: 2rem;
	    font-weight: bold;
    }
    #classifyList .mint-tab-container-item>.container .picBox{
    	width: 6rem;
    }
    #classifyList .mint-tab-container-item>.container .hotBookText{
    	position: relative;
    }
    #classifyList .mint-tab-container-item>.container .hotBookText p{
    	font-size: 1.2rem;
    }
    #classifyList .mint-tab-container-item>.container .hotBookAuthor span{
    	color: black;
	    font-size: 1.2rem;
	    opacity: 1;
    }
    #classifyList .mint-tab-container-item>.container .essayBookList>li{
    	padding-bottom: 3%;
    }
    #classifyList .mint-tab-container-item>.container .hotBookText>span:nth-of-type(1){
    	position: absolute;
    	top: 0;
    	right: 0;
    	font-size: 1.3rem;
    	color: #808080;
    }
    #classifyList .mint-tab-container-item>.container .hotBookText>span>.icon-you-{
    	color: #808080;
    	font-size: 2.2rem;
    	font-weight: bold;
    	display: inline-block;
    	margin-bottom: .4rem;
    	vertical-align: middle;
    }
    #classifyList .mint-tab-container-item>.container .hotBookText>span:nth-of-type(2){
    	position: absolute;
    	bottom: 1rem;
    	right: 0;
    	color: #808080;
    	font-size: 1.3rem;
    }
    .shelf-icon{
    	background-image: url(../../assets/img/user.svg);
    	display: inline-block;
    	width: 12px;
    	height: 12px;
    	background-size: 100% 100%;
    	background-repeat: no-repeat;
    }
    #classifyList .mint-tab-container-item>.container footer{
    	position: absolute;
    	bottom: 0;
    	width: 100%;
    	left: 0;
    }
    #classifyList .mint-tab-container-item>.container>.record{
    	margin-top: 2rem;
    	text-align: center;
    	width: 100%;
    	font-size: 1.4rem;
    	color: #808080;
    }
</style>