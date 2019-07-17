<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>排行榜</h1>
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
		<mt-navbar v-model="selected" id="rank">
		  <mt-tab-item id="1">热销榜</mt-tab-item>
		  <mt-tab-item id="2">新书榜</mt-tab-item>
		  <mt-tab-item id="3">完本榜</mt-tab-item>
		  <mt-tab-item id="4">点击榜</mt-tab-item>
		  <mt-tab-item id="5">周推荐榜</mt-tab-item>
		  <mt-tab-item id="6">更新榜</mt-tab-item>
		  <mt-tab-item id="7">红袖风云榜</mt-tab-item>
		  <mt-tab-item id="8">礼物榜</mt-tab-item>
		  <mt-tab-item id="9">收藏榜</mt-tab-item>
		  <mt-tab-item id="10">阅文风云榜</mt-tab-item>
		  <mt-tab-item id="11">签约作者新书榜</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected" id="rankList">
		  <mt-tab-container-item id="1">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[1].hotDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[2].newDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[3].endDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[4].clickDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="5">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[5].introDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="6">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[6].updateDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="7">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[7].cloudDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="8">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[8].giftDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="9">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[9].loveDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="10">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[10].readDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="11">
		  	<ul class="essayBookList">
				<li v-for="(item,index) in rankList[11].writerDetails">
					<router-link to="/details">
						<span class="top-number">{{index+1}}</span>
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
									<li class="mount">{{item.mount}}</li>
								</ul>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		  </mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>

<style scoped>
	header{
		width: 100%;
		position: fixed;
		z-index: 15;
	}
	.navbar{
		position: fixed;
		z-index: 15;
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
	#rankList{
		overflow: auto;
		position: static;
	}
	#rank{
		width: 22%;
		height: 100%;
		display: block;
		position: fixed;
		left: 0;
		padding-top: 8vh;
	}
	#rank .mint-tab-item{
		color: #808080;
		box-sizing: border-box;
		text-align: center;
		position: relative;
	}
	#rank>.mint-tab-item.is-selected{
		margin: 0;
		border: 0;
		color: #F01742;
		padding: 2vh 2%;
	}
	#rank .mint-tab-item.is-selected:after{
		content: '';
		display: block;
		border-left: 2px solid #F01742;
		margin-right: 10px;
		position: absolute;
		top: 11px;
		left: 0;
		height: 23px;
	}
	>>>#rank .mint-tab-item-label{
		font-size: 1.8vh;
	}
	>>>#rank>.mint-tab-item.is-selected .mint-tab-item-label{
		font-size: 2vh;
	}
	.essayBookList{
		position: absolute;
		top: 46px;
		left: 22%;
		width: 78%;
	}
	.essayBookList>li{
		border: 0;
		border-left: 1px solid #F0F1F2;
		padding: 5.6% 5%;
	}
	.picBox{
		width: 5rem;
		margin-right: 3%;
	}
	.hotBookText{
		width: 72%;
	}
	.hotBookText h4{
		margin-bottom: .5rem;
	}
	.hotBookText p{
		-webkit-line-clamp: 1;
		font-size: 1.2rem;
	}
	.book-meta{
		margin-top: 1rem;
	}
	.essayBookList>li>a:after{
		content: '';
		display: block;
		border-bottom: 1px solid #F0F1F2;
		position: relative;
		top: 22px;
	}
	.top-number{
		display: block;
		position: absolute;
		background: #F01742;
		color: white;
		width: 15px;
		height: 15px;
		text-align: center;
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
            rankList:[],
            tabDetails:[],
            selected:"1",
        }
    },
    
    mounted(){
//  	this.change()
    	this.$http.get('./data/rank.json')
    	.then((res)=>{
    		this.rankList = res.data.rankList
    		this.tabDetails = this.rankList[1].hotDetails
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
        		a.target.parentNode.previousElementSibling.style.paddingLeft = '35.5vw'
        	}
        	down(a,this.flag);
        	this.show = !this.show
        }
    }
}
</script>