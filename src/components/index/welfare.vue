<template>
	<main>
		<!--头部-->
		<header>
			<div class="headerInfo">
				<router-link to="/index">
					<i class="iconfont icon-zuo"></i>
				</router-link>
				<h1>福利</h1>
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
		<!--轮播-->
		<mt-swipe :auto="0">
		  <mt-swipe-item>
		  	<img src="../../assets/img/welfare01.jpg"/>
		  </mt-swipe-item>
		</mt-swipe>
		<!--菜单-->
		<ul id="nav">
	      <li>
	          <router-link to="">
	          	<i class="h_icon icon-sign"></i>
	          	<h4>签到有礼</h4>
	          </router-link>
	      </li>
	      <li>
	      	<router-link to="">
	      		<i class="h_icon icon-novice"></i>
	      		<h4>新手礼包</h4>
	      	</router-link>
	      </li>
	      <li>
	      	<router-link to="">
	      		<i class="h_icon icon-task">
	      			<i class="h_icon icon-money"></i>
	      		</i>
	      		<h4>每日任务</h4>
	      	</router-link>
	      </li>
	      <li>
	      	<router-link to="">
	      		<i class="h_icon icon-charge"></i>
	      		<h4>首充福利</h4>
	      	</router-link>
	      </li>
	    </ul>
		<!--精品热销限免-->
		<div id="limited" class="container">
			<h3>精品热销限免
				<i></i>
				<span id="time_seconds"></span>
				<span id="time_minutes"></span>
				<span id="time_hour"></span>
				<span id="time_day">00</span>
			</h3>
			<ul class="BookList">
				<li v-for="(item,index) in limitedList">
					<router-link to="/details">
						<span>
							<i>限免</i>
						</span>
						<img v-lazy="item.src"/>
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!--人气免费-->
		<div id="popular" class="container">
			<h3>人气免费
				<i></i>
				<router-link to="/newBook">
					<span>更多
						<img src="../../assets/img/right.png"/>
					</span>
				</router-link>
			</h3>
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
		</div>
		<!--新书免费-->
		<div id="newFree" class="container">
			<h3>新书免费
				<i></i>
				<router-link to="/newBook">
					<span>更多
						<img src="../../assets/img/right.png"/>
					</span>
				</router-link>
			</h3>
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
	
	>>>.mint-swipe-items-wrap{
		width: 100%;
		padding-bottom: 37.5%;
	}
	.mint-swipe-items-wrap img{
		width: 100%;
	}
	>>>.mint-swipe-indicator {
	    width: 10px;
	    height: 3px;
	    opacity: 1;
	    background: white;
    }
    >>>.mint-swipe-indicators{
		bottom: 2px;
	}
	.h_icon{
    	display: block;
    	width: 46px;
    	height: 46px;
    	margin: 0 auto;
    	margin-top: 2vh;
    	margin-bottom: .5rem;
    	background-image: url(../../assets/img/icon.png);
    }
    .icon-sign{
    	background-position: -156px -50px;
    }
    .icon-novice{
    	background-position: -102px -104px;
    }
    .icon-task{
    	background-position: -52px -104px;
    }
    .icon-money{
    	margin-bottom: 0;
    	width: 30px;
    	height: 18px;
    	background-position: 0 -188px;
    	float: right;
    	margin-right: -17px;
    	margin-top: -10px;
    }
    .icon-charge{
    	background-position: -156px 0px;
    }
    #nav{
    	width: 100%;
    	overflow: hidden;
    	margin-top: 1rem;
    }
    #nav>li{
    	float: left;
    	width: 25%;
    	box-sizing: border-box;
    	padding: 0.75em 0.625rem 0em 0.625rem;
    	margin-bottom: 1.5rem;
    }
    #nav h4{
    	text-align: center;
    	color: black;
    	font-size: 1.3rem;
    }
    #limited{
    	padding-top: 2%;
    }
    .container{
    	width: 100%;
    	box-sizing: border-box;
    	padding: 4% 5%;
    }
    .container>h3{
    	width: 100%;
    	font-size: 1.8rem;
    	color: #33373D;
    	overflow: hidden;
    }
    .container>h3>a{
    	overflow: hidden;
	    display: inline-block;
	    float: right;
    }
    .container>h3>span{
    	display: inline-block;
    	float: right;
    	font-size: 1.6vh;
    	font-weight: normal;
    	color: white;
    	background-color: #33373D;
    	text-align: center;
    	margin-right: 5px;
    	border-radius: 2px;
    	margin-top: 1%;
    	position: relative;
    	padding: 0 1px;
    }
    .container>h3>#time_day{
    	background: #F01742;
    }
    .container>h3>i{
    	display: inline-block;
    	background-image: url(../../assets/img/welfare02.png);
    	background-size: 100% 100%;
    	width: .8rem;
    	height: .8rem;
    	margin-bottom: 1rem;
    }
    .container>h3>#time_hour:after,
    .container>h3>#time_minutes:after,
    .container>h3>#time_seconds:after{
    	content: '';
		position: absolute;
		width: 1px;
		height: 2px;
		border-radius: 1px;
		background-color: #808080;
		top: 0;
		bottom: 0;
		margin: auto;
		left: -3px;
		box-shadow: 0 5px #808080;
    }

    .BookList>li>a{
    	overflow: hidden;
    }
    .BookList>li>a>span{
    	position: absolute;
    	left: 9%;
		width: 4.5vh;
		height: 4.5vh;
		text-align: center;
		overflow: hidden;
    }
    .BookList>li>a>span>i{
    	display: block;
	    position: absolute;
		left: 0;
		right: -12px;
		bottom: 0;
		padding-top: 1px;
		font-size: 1.2vh;
		color: white;
		background-color: #65B1F5;
		transform-origin: left bottom;
		transform: rotate(-45deg);
		font-style: normal;
    }
    h3 span{
    	color: #808080;
    	font-size: 1.5rem;
    	font-weight: normal;
    	display: inline-block;
    	margin-top: 1%;
    	float: right;
    }
    h3 span>img{
    	width: 1.1rem;
    	margin-left: -0.5%;
    } 
    .essayBookList>li:last-child{
    	border: none;
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
            hide:false,
            limitedList:[],
            popularList:[],
            freeList:[]
        }
    },
    
    mounted(){
    	this.times()
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
   		//倒计时
   		times(){
   			var nowDate = new Date();
			var oYear = nowDate.getFullYear();
			var oMoth = nowDate.getMonth();
			var oDate = nowDate.getDate();
			var oHour = nowDate.getHours();
			var oMinutes = nowDate.getMinutes();
			var oSeconds = nowDate.getSeconds();
			oSeconds--;
			var endDate = new Date(oYear,oMoth,oDate+1,0,0,0);
			var totalSeconds = parseInt((endDate-nowDate)/1000);
			var days = Math.floor(totalSeconds/(60*60*24));
			var modulo = totalSeconds%(60*60*24);
			var hours = Math.floor(modulo/(60*60));
			if(hours<10){
				hours = '0'+hours;
			}
			//再取余
			var modulo2 = modulo%(60*60);
			//相差的分钟
			var minutes = Math.floor(modulo2/60);
			if(minutes<10){
				minutes = '0'+minutes;
			}
			//相差的秒数
			var seconds = modulo2%60;
			if(seconds<10){
				seconds = '0'+seconds;
			}
			time_hour.innerHTML = hours;
			time_minutes.innerHTML = minutes;
			time_seconds.innerHTML = seconds;
			console.log(time_hour.innerHTML)
			setTimeout(this.times, 1000);
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