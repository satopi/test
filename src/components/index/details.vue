<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>今天娶到云小姐了吗</h1>
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
		<!--内容-->	
		<div class="contentBox container">
			<img src="../../../data/img/details/main.jpg"/>
			<div class="textBox">
				<h2>今天娶到云小姐了吗</h2>
				<p>明珠还</p>
				<p>现代言情/都市异能</p>
				<p>4.81万字<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>连载中</p>
			</div>
			<ul class="btnList">
				<li>免费试读</li>
				<li>+ 书架</li>
				<li>下载APP,全场免费读</li>
			</ul>
		</div>
		<p class="introBox container" @click="open($event)">
			<transition enter-active-class="animated rotateIn" leave-active-class="animated rotateOut">
				<img src="../../assets/img/xiala.svg" v-show="close" style="animation-duration:200ms"/>
			</transition>
			秦家那位爷打小双腿残废，面冷心狠，二十多年不近女色，直到某一日——
			那位爷身边忽然多了个不离身的背包。
			</br></br>
			众目睽睽之下，素面朝天脸带稚气的小姑娘，轻车熟路的从背包里摸出了一包姨妈巾，一个暖宝宝，几包小零食……
			</br></br>
			众人瞠目结舌，他却难得笑的宠溺：我家小姑娘迷迷糊糊丢三落四，只好我多操点心。
			</br></br>
			……
			</br></br>
			生父不养，生母嫌弃，数年后孤女云茴被生母接回，等来的却是让她代替姐姐嫁给秦家那个克死三任未婚妻的病秧子为妻！
			</br></br>
			姐姐说：云茴，你乖乖嫁过去，你若当真被克死了，我和子安哥哥四时八节都不会忘记给你上柱香的。
			</br></br>
			母亲说：你生来不祥，正该替你姐姐嫁过去受罪，这也是你的福气——若不然，凭你的模样怎么能嫁到秦家去？
			</br></br>
			秦湛：你既嫁给我为妻，我自然会将这世上最好的都给你——我的妻子，绝不可以比其他女人过的差一分一毫。
			</br></br>
			云茴：我既嫁给你为妻，那么就不允许这世上任何人看轻你，嘲笑你，从此以后，我来罩着你！
			</br></br>
			秦湛：这世上无数人都对我俯首称臣，但我只为茴宝折腰。
			</br></br>
			……
			</br></br>
			（男主后期双腿会痊愈哒！）
		</p>
		<div class="catalog container">
			<h2>目录</h2>
			<p>8小时前<span>&nbsp;.&nbsp;</span>连载至046 茴宝……别管我。</p>
		</div>
		<div class="diveder"></div>
		<!--广告栏-->
		<div class="advert">
			<router-link to="/details">
				<img v-lazy="detailsList[0].advert" class="advert"/>
			</router-link>
		</div>
		<div class="diveder"></div>
		<ul class="btn-group container">
			<li>
				<i class="icon-month details-icon"></i>
				<p>月票</p>
				<p>0票</p>
			</li>
			<li>
				<i class="icon-intro details-icon"></i>
				<p>推荐票</p>
				<p>261推荐票<span>&nbsp;·&nbsp;</span>第6位</p>
			</li>
			<li>
				<i class="icon-gift details-icon"></i>
				<p>礼物</p>
				<p>本周56人次</p>
			</li>
			<li>
				<i class="icon-fans details-icon"></i>
				<p>迷妹</p>
				<p>3357迷妹</p>
			</li>
		</ul>
		<div class="diveder dh"></div>
		<div class="review container">
			<h2>书评区</h2>
			<p>发表书评</p>
			<div class="null">
				<img src="../../assets/img/null.svg"/>
				<p>暂无书评</p>
			</div>
			<p>更多书评</p>
		</div>
		<div class="diveder"></div>
		<div class="booksList container">
			<h2>相关书单</h2>
			<ul class="related">
				<li v-for="(item,index) in detailsList[1].booksList">
					<div class="picBox">
						<img v-lazy="item.src1"/>
						<img v-lazy="item.src2"/>
						<img v-lazy="item.src3"/>
					</div>
					<div class="textbox">
						<h3>{{item.title}}</h3>
						<p>{{item.des}}</p>
						<p><span>{{item.num}}</span>本<span>&nbsp;.&nbsp;</span><span>{{item.mount}}</span>收藏</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="diveder"></div>
		<div id="others" class="horizontal-scroll container">
			<h2>作家的其他作品</h2>
			<ul class="list">
				<li v-for="(item,index) in detailsList[2].others">
					<img v-lazy="item.src"/>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
		<div class="diveder"></div>
		<div id="same" class="horizontal-scroll container">
			<h2>同类推荐</h2>
			<ul class="list">
				<li v-for="(item,index) in detailsList[3].same">
					<img v-lazy="item.src"/>
					<p>{{item.title}}</p>
					<p>{{item.author}}</p>
				</li>
			</ul>
		</div>
		<div class="diveder"></div>
		<div class="copyright container">
			<h2>版权信息</h2>
			<p>上架时间：2019-06-12</p>
			<p>版权：红袖添香网</p>
			<p>本书由红袖添香网电子版制作与发行</p>
			<p>版权所有&nbsp;·&nbsp;侵权必究</p>
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
	.container{
		width: 100%;
		padding: 5%;
		box-sizing: border-box;
	}
	.contentBox{
		background: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0) 8rem) no-repeat center bottom;
	}
	.contentBox>img{
		width: 28%;
		margin-right: .7rem;
		vertical-align: top;
	}
	.textBox{
		width: 68%;
		display: inline-block;
		color: #33373D;
	}
	.textBox>h2{
		font-size: 1.5rem;
	}
	.textBox>p{
		font-size: 1.3rem;
		margin-top: .6rem;
	}
	.btnList{
		width: 100%;
		overflow: hidden;
		margin-top: 1.8rem;
		position: relative;
	}
	.btnList>li{
		float: left;
		width: 22%;
		color: #F01742;
		border: 1px solid #F01742;
		box-sizing: border-box;
		text-align: center;
		padding: 2% 0;
		border-radius: 99px;
		margin-right: 3%;
		font-size: 1.1rem;
	}
	.btnList>li:last-child{
		width: 50%;
		margin-right: 0;
		color: white;
		background: #F01742;
	}
	.introBox{
		padding: 3% 5%;
		height: 8.92rem;
		overflow: hidden;
		position: relative;
	}
	.introBox>img{
		float: right;
		margin-top: 4.5rem;
		transition: transform .5s;
	}
	.introBox{
		font-size: 1.55rem;
		color: #33373D;
		line-height: 2.25rem;
	}
	.introBox:after{
		content: '';
		display: block;
		width: 100%;
		border-bottom: 1px solid #f0f1f2;
		position: absolute;
		bottom: 0;
	}
	.introBox:before{
		content: '';
		display: block;
		width: 95%;
		border-top: 1px solid #f0f1f2;
		position: absolute;
		top: 0;
	}
	.catalog{
		width: 100%;
		overflow: hidden;
		padding-top: 3%;
		padding-bottom: 2%;
	}
	.catalog>h2{
		float: left;
		font-size: 1.8rem;
	}
	.catalog>p{
		display: inline-block;
		float: right;
		font-size: 1.2rem;
		color: #808080;
		line-height: 2.5rem;
	}
	.diveder{
		width: 100%;
		height: 13px;
		background: #f6f7f9;
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
    .btn-group{
    	width: 100%;
    	overflow: hidden;
    	padding: 4% 0%;
    }
    .btn-group>li{
    	float: left;
    	text-align: center;
    	width: calc(100%/4);
    }
    .btn-group>li>p:nth-of-type(1){
    	font-size: 1.3rem;
    }
    .btn-group>li>p:nth-of-type(2){
    	color: #808080;
    }
    .details-icon{
    	background-image: url(../../assets/img/icon.png);
    	display: block;
    	width: 28px;
    	height: 28px;
    	margin: 0 auto;
    	margin-bottom: .5rem;
    }
    .icon-month{
    	background-position: -206px -96px;
    }
    .icon-intro{
    	background-position: -206px -64px;
    }
    .icon-gift{
    	background-position: -206px 0px;
    }
    .icon-fans{
    	background-position: -206px -128px;
    	height: 27px;
    }
    .dh{
    	height: 20px;
    }
    .review{
    	width: 100%;
    	overflow: hidden;
    	padding-bottom: 2.5%;
    }
    .review>h2{
    	float: left;
    	font-size: 1.8rem;
    }
    .review>p:nth-of-type(1){
    	float: right;
    	color: #F01742;
    	font-size: 1.3rem;
    }
    .null{
    	float: left;
    	width: 100%;
    	text-align: center;
    	padding: 75px 0;
    	margin: 15px 0;
    	position: relative;
    }
    .null:after{
		content: '';
		display: block;
		width: 106%;
		border-bottom: 1px solid #f0f1f2;
		position: absolute;
		bottom: 0;
	}
	.null:before{
		content: '';
		display: block;
		width: 106%;
		border-top: 1px solid #f0f1f2;
		position: absolute;
		top: 0;
	}
    .null>img{
    	margin: 0 auto;
    	margin-bottom: 1rem;
    }
    .null>p{
    	font-size: 1.4rem;
    	color: #808080;
    }
    .review>p:nth-of-type(2){
    	float: right;
    	color: #F01742;
    	font-size: 1.3rem;
    	text-align: center;
    	width: 100%;
    }
    .booksList{
    	width: 100%;
    }
    .booksList>h2{
    	font-size: 1.8rem;
    	margin-bottom: 1.2rem;
    }
    .related{
    	width: 100%;
    }
    .related>li{
    	width: 100%;
    	overflow: hidden;
    	padding: 6% 0;
    	border-top: 1px solid #F0F1F2;
    }
    .related>li:last-child{
    	padding-bottom: 2%;
    }
    .picBox{
    	width: 10rem;
    	box-shadow: none;
    	position: relative;
    }
    .related img{
    	width: 50%;
    	position: absolute;
    	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    .related img:nth-of-type(2){
    	width: 55%;
    	top: -.3rem;
    	left: 2rem;
    }
    .related img:nth-of-type(3){
    	z-index: -1;
    	left: 5rem;
    }
    .textbox{
    	margin-left: 12rem;
    	vertical-align: top;
    	display: inline-block;
    	width: 60%;
    }
    .textbox>p{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	color: #808080;
    	font-size: 1.3rem;
    }
    .textbox>p:nth-of-type(2){
    	margin-top: 2rem;
    	opacity: .5;
    }
    .textbox>h3{
    	font-size: 1.5rem;
    }
    .horizontal-scroll{
    	width: 100%;
    	overflow: hidden;
    	padding-right: 0;
    }
    .horizontal-scroll>h2{
    	font-size: 1.8rem;
    	margin-bottom: 1.2rem;
    }
    /*横向滚动*/
    .list{
    	border-top: 1px solid #F0F1F2;
    	width: 100%;
    	float: left;
    	overflow-x: scroll;
    	overflow-y: hidden;
    	white-space: nowrap;
    }
    /*去除滚动条*/
    .list::-webkit-scrollbar { 
    	display: none;
    }
    .list>li{
    	display: inline-block;
    	width: 25%;
    	box-sizing: border-box;
    	white-space: normal;
    	padding: 2%;
    	padding-top: 4%;
    	vertical-align: top;
    }
    .list>li>img{
    	width: 100%;
    	box-shadow: 0 4px 8px 0 rgba(51, 55, 61, 0.1);
    	border-radius: 2px;
    }
    .list>li>p{
    	font-size: 1.3rem;
    	font-weight: bold;
    	color: #33373D;
    	width: 100%;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    }
    .list>li>p:nth-of-type(2){
    	color: #808080;
    	font-size: 1.3rem;
    	font-weight: 500;
    	margin-top: .5rem;
    	white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
    }
    .copyright>h2{
    	font-size: 1.8rem;
    	position: relative;
    	padding-bottom: 1.2rem;
    	margin-bottom: 1.2rem;
    }
    .copyright>h2:after{
		content: '';
		display: block;
		width: 105.5%;
		border-bottom: 1px solid #f0f1f2;
		position: absolute;
		bottom: 0;
	}
	.copyright>p{
		color: #808080;
		font-size: 1.55rem;
		margin-bottom: .2rem;
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
</style>

<script>
	import {down} from '../../assets/js/commonJS.js'
	export default {
    data() {
        return {
            show:false,
            hide:false,
            flag:0,
            num:0,
            iconfont:'iconfont',
            icon:'icon-caidan',
            guide:'',
            detailsList:[],
            close:true
        }
    },
    
    mounted(){
    	window.addEventListener('scroll',this.top)
    	this.$http.get('./data/details.json')
    	.then((res)=>{
    		this.detailsList = res.data.detailsList
    	})
    	.catch(()=>{
    		console.log("请求失败！")
    	})
    	.finally(()=>{
    		console.log("请求结束！")
    	})
    },
    
   	methods:{
   		//简介展开
   		open(a){
   			this.num++
   			if(this.num%2==0){
   				this.close = true
   				a.target.style.height = '8.92rem'
   			}else{
   				this.close = false
   				a.target.style.height = 'auto'
   			}
   		},
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
        		a.target.parentNode.previousElementSibling.style.paddingLeft = '25vw'
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

