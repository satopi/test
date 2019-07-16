<template>
	<main class="container">
		<router-view></router-view>
		<!--头部-->
		<header>
			<router-link to="/index"><img src="../../assets/img/logo-hongxium.svg" class="logo"/></router-link>
			<ul>
				<li>
					<router-link to="/bookshelf"><img src="../../assets/img/bookshelf.svg" id="bookshelf"/></router-link>
				</li>
				<li>
					<router-link to="/personal"><img src="../../assets/img/person.png" class="personal"/></router-link>
				</li>
			</ul>
		</header>
		<!--轮播-->
		<mt-swipe :auto="2000" @change="handleChange">
		  <mt-swipe-item v-for="(item,index) in indexList[11].lunboList">
		  	<img :src="item"/>
		  </mt-swipe-item>
		</mt-swipe>
		<!--查询框-->
		<p id="searchBox">
			<router-link to="/search" class="search">
				<img src="../../assets/img/search.svg" class="search-pic"/>
				<span>傲气如我</span>
			</router-link>
		</p>
		<!--菜单栏-->		
		<ul id="nav">
	      <li>
	          <router-link to="/classify">
	          	<i class="h_icon icon-sort"></i>
	          	<h4>分类</h4>
	          </router-link>
	      </li>
	      <li>
	      	<router-link to="/rank">
	      		<i class="h_icon icon-rank"></i>
	      		<h4>排行榜</h4>
	      	</router-link>
	      </li>
	      <li>
	      	<router-link to="/welfare">
	      		<i class="h_icon icon-welfare">
	      			<i class="h_icon icon-money"></i>
	      		</i>
	      		<h4>福利</h4>
	      	</router-link>
	      </li>
	      <li>
	      	<router-link to="/newBook">
	      		<i class="h_icon icon-new"></i>
	      		<h4>新书</h4>
	      	</router-link>
	      </li>
	      <li>
	      	<router-link to="/endBook">
	      		<i class="h_icon icon-end"></i>
	      		<h4>完本</h4>
	      	</router-link>
	      </li>
	    </ul>
		<!--广告栏-->
		<div class="advert">
			<router-link to="/details">
				<img v-lazy="advert1" class="advert"/>
			</router-link>
		</div>
		<!--回到顶部-->
		<div class="backTop" @click="backTop()" v-show="show">
			<img src="../../assets/img/huidaodingbu.svg"/>
		</div>
		<!--热门小说-->
		<section id="hot" class="containerBox">
			<div class="Title">
				<h3>
					<i class="hot-icon titleIcon"></i>
					热门小说
				</h3>
			</div>
			<div class="hotBook" v-for="(item,index) in indexList[0].hotTitle">
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
			</div>
			<ul class="hotBookList">
				<li v-for="(item,index) in indexList[1].hotList">
					<router-link to="/details">
						<img v-lazy="item.src"/>
						<div class="hotBookListText">
							<h5>{{item.title}}</h5>
							<p>{{item.author}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--一品红文-->
		<section id="essay" class="containerBox">
			<div class="Title">
				<h3>
					<i class="essay-icon titleIcon"></i>
					一品红文
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
				<p class="essay-details">每日甄选精品好文</p>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in indexList[2].essayList">
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
		<!--主编推荐-->
		<section id="intro" class="containerBox">
			<div class="Title">
				<h3>
					<i class="intro-icon titleIcon"></i>
					主编推荐
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="BookList">
				<li v-for="(item,index) in indexList[3].introList">
					<router-link to="/details">
						<img v-lazy="item.src"/>
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<!--排行榜-->
		<section id="rank" class="containerBox">
			<div class="Title">
				<h3>
					<i class="rank-icon titleIcon"></i>
					排行榜
					<router-link to="/rank">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<div class="divider">
				<span class="line">
					<img src="../../assets/img/hotsale.svg"/>
				</span>
			</div>
			<ul class="BookList">
				<li v-for="(item,index) in indexList[4].rankList1">
					<router-link to="/details">
						<img v-lazy="item.src"/>
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
					</router-link>
				</li>
			</ul>
			<div class="divider">
				<span class="line">
					<img src="../../assets/img/newBook.svg"/>
				</span>
			</div>
			<ul class="BookList">
				<li v-for="(item,index) in indexList[5].rankList2">
					<router-link to="/details">
						<img v-lazy="item.src"/>
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
					</router-link>
				</li>
			</ul>
			<ul class="rank-button">
				<li>
					<router-link to="/rank" class="rank-mouth">
						月票榜
					</router-link>
				</li>
				<li>
					<router-link to="/rank" class="rank-intro">
						推荐榜
					</router-link>
				</li>
				<li>
					<router-link to="/rank" class="rank-gift">
						礼物榜
					</router-link>
				</li>
				<li>
					<router-link to="/rank" class="rank-click">
						点击榜
					</router-link>
				</li>
			</ul>
		</section>
		<!--免费读书-->
		<section id="free" class="containerBox">
			<div class="Title">
				<h3>
					<i class="free-icon titleIcon"></i>
					免费读书
					<router-link to="/welfare">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="BookList">
				<li v-for="(item,index) in indexList[6].freeList">
					<router-link to="/details">
						<img v-lazy="item.src"/>
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<!--广告栏-->
		<div class="advert">
			<router-link to="/details">
				<img v-lazy="advert2" class="advert"/>
			</router-link>
		</div>
		<!--分类推荐-->
		<section id="classify" class="containerBox">
			<div class="Title">
				<h3>
					<i class="classify-icon titleIcon"></i>
					分类推荐
					<router-link to="/classify">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="classifyList">
				<li v-for="(item,index) in indexList[12].classifyList">
					<div class="textBox1">
						<router-link to="/classifyDetails">
							<div class="classifyTitle">{{item.title}}</div>
							<div class="classifyPic">
								<ul>
									<li><img v-lazy="item.src1"/></li>
									<li><img v-lazy="item.src2"/></li>
									<li><img v-lazy="item.src3"/></li>
								</ul>
							</div>
						</router-link>
					</div>
					<ol>
						<li>
							<router-link to="/details">
								<p>{{item.des1}}</p>
								<img src="../../assets/img/right.png"/>
							</router-link>
						</li>
						<li>
							<router-link to="/details">
								<p>{{item.des2}}</p>
								<img src="../../assets/img/right.png"/>
							</router-link>
						</li>
						<li>
							<router-link to="/details">
								<p>{{item.des3}}</p>
								<img src="../../assets/img/right.png"/>
							</router-link>
						</li>
						<li>
							<router-link to="/details">
								<p>{{item.des4}}</p>
								<img src="../../assets/img/right.png"/>
							</router-link>
						</li>
						<li>
							<router-link to="/details">
								<p>{{item.des5}}</p>
								<img src="../../assets/img/right.png"/>
							</router-link>
						</li>
						<li>
							<router-link to="/details">
								<p>查看更多</p>
							</router-link>
						</li>
					</ol>
				</li>
			</ul>
		</section>
		<!--新书抢先-->
		<section id="new" class="containerBox">
			<div class="Title">
				<h3>
					<i class="new-icon titleIcon"></i>
					新书抢先
					<router-link to="/newBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in indexList[7].newList">
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
		<!--完本专区-->
		<section id="end" class="containerBox">
			<div class="Title">
				<h3>
					<i class="end-icon titleIcon"></i>
					完本专区
					<router-link to="/endBook">
						<span>更多
							<img src="../../assets/img/right.png"/>
						</span>
					</router-link>
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in indexList[8].endList">
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
		<!--更新好书-->
		<section id="update" class="containerBox">
			<div class="Title">
				<h3>
					<i class="update-icon titleIcon"></i>
					更新好书
				</h3>
			</div>
			<ul class="essayBookList">
				<li v-for="(item,index) in indexList[9].updateList">
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
	header{
		background-image: url(../../assets/img/navbar.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 100%;
		padding: 1.5%;
		padding-left: 0px;
		padding-right: 0px;
		overflow: hidden;
		box-sizing: border-box;
	}
	header>a{
		float: left;
	}
	.logo{
		width: 16vh;
		margin-left: 15px;
	}
	header ul{
		margin-right: 8px;
		float: right;
		box-sizing: border-box;
		padding-top: 0.5%;
	}
	header ul li{
		float: right;
		margin-top: 5px;
		margin-right: 18px;
	}
	.personal{
		width: 3vh;
		height: 3vh;
	}
	#bookshelf{
		width: 3vh;
		height: 3vh;
	}
	.mint-swipe{
		width: 100%;
	}
	>>>.mint-swipe-items-wrap{
		width: 100%;
		padding-bottom: 35%;
	}
	.mint-swipe-items-wrap img{
		width: 100%;
	}
	.mint-swipe-items{
		width: 100%;
	}
	>>>.mint-swipe-indicators{
		bottom: 2px;
	}
	>>>.mint-swipe-indicator {
	    width: 5px;
	    height: 5px;
	    opacity: 1;
	    background: #f7f7f7;
    }
    .search{
    	display: block;
    	color: #808080;
    	text-align: center;
    	line-height: 2rem;
    	padding: 3px;
    	overflow: hidden;
    	background-color: #F2F4F5;
    	margin: .75rem;
    	margin-top: .8rem;
    	border-radius: 1rem;
    	position: relative;
    }
    .search-pic{
    	vertical-align: middle;
    }
    .h_icon{
    	display: block;
    	width: 48px;
    	height: 48px;
    	margin: 0 auto;
    	margin-bottom: .5rem;
    	background-image: url(../../assets/img/icon.png);
    }
    .icon-sort{
    	background-position: -52px 0px;
    }
    .icon-rank{
    	background-position: 0px -52px;
    }
    .icon-welfare{
    	background-position: -104px -52px;
    }
    .icon-money{
    	margin-bottom: 0;
    	width: 30px;
    	height: 18px;
    	background-position: 0 -188px;
    	float: right;
    	margin-right: -17px;
    	margin-top: -6px;
    }
    .icon-new{
    	background-position: -52px -52px;
    }
    .icon-end{
    	background-position: 0px -104px;
    }
    #nav{
    	width: 100%;
    	overflow: hidden;
    	margin-top: 1.75rem;
    }
    #nav>li{
    	float: left;
    	width: 20%;
    	box-sizing: border-box;
    	padding: 0.75em 0.625rem 0em 0.625rem;
    	margin-bottom: 1.5rem;
    }
    #nav h4{
    	text-align: center;
    	color: black;
    	font-size: 1.3rem;
    }
    .advert{
    	width: 100%;
    }
    .advert{
    	display: block;
    	width: 100%;
    	overflow: hidden;
    	position: relative;
    }
    .advert:after{
    	content: '广告';
    	border: 1px solid;
    	padding-top: 7px;
    	padding-bottom: 7px;
    	color: white;
    	background-color: rgba(0,0,0,.3);
    	opacity: .6;
    	font-size: 12px;
    	line-height: 1px;
    	position: absolute;
    	bottom: 6px;
    	right: 6px;
    }
    
    .hotBook>a{
    	display: block;
    	width: 100%;
    	overflow: hidden;
    }
    .Title>h3{
    	font-size: 1.8rem;
    }
    .titleIcon{
    	display: inline-block;
    	width: 15px;
    	height: 16px;
    	margin-right: .3rem;
    	background-image: url(../../assets/img/icon.png);
    }
    .hot-icon{
    	background-position: -171px -188px;
    }
    .essay-icon{
    	background-position: -114px -188px;
    }
    .intro-icon{
    	background-position: -133px -188px;
    }
    .rank-icon{
    	background-position: -152px -188px;
    }
    .free-icon{
    	width: 16px;
    	background-position: -74px -188px;
    }
    .classify-icon{
    	width: 16px;
    	background-position: -34px -188px;
    }
    .new-icon{
    	width: 16px;
    	background-position: -54px -188px;
    }
    .end-icon{
    	width: 16px;
    	background-position: -209px -188px;
    }
    .update-icon{
    	width: 16px;
    	background-position: -94px -188px;
    }
    .containerBox{
    	width: 100%;
    	padding: 4% 5%;
    	box-sizing: border-box;
    }
    .hotBook{
    	margin-top: 3%;
    }
    .hotBook>a{
    	overflow: hidden;
    }
    .hotBook:after{
    	content: '';
    	display: block;
    	border-bottom: 1px solid #f0f1f2;
    	margin-top: 1.5rem;
    	margin-bottom: 1.5rem;
    }
    #hot{
    	overflow: hidden;
    }
    .hotBookList{
    	width: 100%;
    	overflow: hidden;
    }
    .hotBookList li{
    	width: 50%;
    	margin-bottom: 10px;
    	float: left;
    	box-sizing: border-box;
    	padding-right: 1rem;
    }
    .hotBookList img{
    	width: 6rem;
    	float: left;
    	box-shadow: 0 4px 8px 0 rgba(51, 55, 61, 0.1);
    	border-radius: 2px;
    	margin-right: .5rem;
    }
    .hotBookList a{
    	width: 100%;
    	display: block;
    	overflow: hidden;
    	color: black;
    }
    .hotBookListText{
    	margin-left: .8rem;
    }
    .hotBookList h5{
    	font-size: 1.4rem;
    	margin-bottom: 1rem;
    	color: #33373D;
    }
    .hotBookList p{
    	font-size: 1.2rem;
    	color: #808080;
    }
    #essay{
    	overflow: hidden;
    }
    .Title span{
    	color: #808080;
    	font-size: 1.2rem;
    	font-weight: normal;
    	display: inline-block;
    	margin-top: 1%;
    	float: right;
    }
    .Title span>img{
    	width: 1rem;
    	margin-left: -0.5%;
    }
    .essayBookList>li:last-child{
    	border: none;
    }   
    .divider{
    	margin-top: 3%;
    }
    .divider>.line{
    	width: 100%;
    	height: 1px;
    	display: inline-block;
    	background: #E2E3E5;
    }
    .divider>.line>img{
    	display: inline-block;
    	float: left;
    	background: white;
    	padding: 0 0.5rem;
    	margin-top: -1.2%;
    	margin-left: 43%;
    }
    .rank-button{
    	overflow: hidden;
    }
    .rank-button>li{
    	margin-top: 3%;
    	width: 20%;
    	margin-right: 2.5%;
    	margin-left: 2.5%;
    	box-sizing: border-box;
    	text-align: center;
    	font-weight: 500;
    	border-radius: 0.125rem;
    	float: left;
    }
    .rank-button>li:nth-child(4){
    	margin-right: 0;
    }
    .rank-button>li>a{
    	width: 100%;
    	padding: 15% 0;
    	display: inline-block;
    	color: white;
    	font-size: 1.3rem;
    	background-size: 100% 100%;
    	background-repeat: no-repeat;
    }
    .rank-mouth{
    	background-image: url(../../assets/img/rankButton01.png);
    }
    .rank-intro{
    	background-image: url(../../assets/img/rankButton02.png);
    }
    .rank-gift{
    	background-image: url(../../assets/img/rankButton03.png);
    }
    .rank-click{
    	background-image: url(../../assets/img/rankButton04.png);
    }
    .rank-button>li:after{
    	content: '';
    	display: block;
    	width: 2rem;
    	height: 0.125rem;
    	background: rgba(255,255,255,.5);
    	position: relative;
    	left: 6.5vw;
    	top: -1.3vh;
    }
    .classifyList{
    	width: 100%;
    	overflow: hidden;
    }
    .classifyList>li{
    	width: 46%;
    	border: 1px solid #EBECED;
    	float: left;
    	margin-top: 5%;
    	margin-right: 6%;
    }
    .classifyList>li:nth-child(2){
    	margin-right: 0;
    }
    .classifyList>li:nth-child(4){
    	margin-right: 0;
    }
    .textBox1{
    	width: 100%;
    	overflow: hidden;
    }
    .textBox1>a{
    	display: block;
    	background: linear-gradient(to bottom, #fff, #EBECED);
    	overflow: hidden;
    	width: 100%;
    }
    .classifyTitle{
    	width: 50%;
    	float: left;
    	text-align: center;
    	color: #33373D;
    	margin-top: 15%;
    	font-size: 1.2rem;
    }
    .classifyPic{
    	width: 50%;
    	float: right;
    }
    .classifyPic img{
    	width: 100%;
    }
    .classifyPic ul{
    	width: 100%;
    	padding-bottom: 69%;
    	position: relative;
    	bottom: 2px;
    }
    .classifyPic>ul>li{
    	width: 50%;
    	position: absolute;
    	bottom: -7%;
    }
    .classifyPic>ul>li:nth-child(1){
    	width: 35%;
    }
    .classifyPic>ul>li:nth-child(2){
    	width: 45%;
    	left: 22%;
    	z-index: 2;
    }
    .classifyPic>ul>li:nth-child(3){
    	width: 35%;
    	left: 52%;
    }
    .classifyList>li>ol{
    	margin-left: 10%;
    }
    .classifyList>li>ol>li{
    	margin-top: 8%;
    }
    .classifyList>li>ol>li:nth-child(6){
    	margin-bottom: 8%;
    }
    .classifyList>li>ol>li>a{
    	color: #33373D;
    }
    .classifyList>li>ol>li>a p{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	box-sizing: border-box;
    	width: 90%;
    	display: inline-block;
    	font-size: 1.2rem;
    }
    .classifyList>li>ol>li:nth-child(6) a{
    	color: #f10742;
    }
    .classifyList>li>ol>li>a img{
     	width: 6.5%;
     	display: inline-block;
    }
</style>

<script>
	export default{
		data(){
			return{
				scroll:'',
				show:false,
				indexList:[],
				advert1:'',
				advert2:''
			}
		},
		
		mounted(){
			//addEventListener('事件',方法)
			window.addEventListener('scroll',this.top)
			this.$http.get('./data/index.json')
			.then((res)=>{
				this.indexList = res.data.indexList
				this.advert1 = res.data.indexList[10].advertList.src1
				this.advert2 = res.data.indexList[10].advertList.src2
			})
			.catch(()=>{
				console.log("请求失败！")
			})
			.finally(()=>{
				console.log("请求结束！")
			})
		},
		
		methods:{
			handleChange(index){
				var circle = document.getElementsByClassName('mint-swipe-indicator');
				for(var i=0;i<circle.length;i++){
					circle[i].style.width = '5px';
					circle[i].style.height = '5px';
					circle[index].style.width = '10px';
					circle[index].style.height = '3px';
				}
			},
			backTop(){
				document.documentElement.scrollTop = 0;
			},
			top(){
				this.scroll = document.documentElement.scrollTop
				if(this.scroll>300){
					this.show = true;
				}else{
					this.show = false;
				}
			}
		}
	}
</script>