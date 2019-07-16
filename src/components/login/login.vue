<template>
	<main>
		<!--头部图片-->
		<header class="topImg">
			<img src="../../assets/img/logintop-img.jpg"/>
		</header>
		<!--登录界面-->
		<section class="login-container">
			<div class="logo">
				<img src="../../assets/img/hongxiu_icon.png"/>
			</div>
			<div class="login-tag">
				<span :class="{active:show}" @click="change1()">阅文账号</span>
				<span :class="{active:hide}" @click="change2()">红袖登录</span>
			</div>
			<ul class="form-list">
				<li>
					<span><i class="icon-user"></i></span>
					<input type="text" id="username" placeholder="请输入邮箱/个性账号"  v-model="value1"/>
					<p v-show="block1">*请输入正确的邮箱！</p>
				</li>
				<li>
					<span><i class="icon-lock"></i></span>
					<input type="password" id="pwd" placeholder="请输入密码"  v-model="value2"/>
					<p v-show="block2">*密码不能为空！</p>
				</li>
			</ul>
			<p>
				<span>忘记密码</span>
				<router-link to="/register">用户注册</router-link>
			</p>
			<button class="login" @click="skip()">登录
				<!--<router-link to="/index"></router-link>-->
			</button>
			<ul class="login-pic">
				<li>
					<img src="../../assets/img/qq.svg"/>
					<p>QQ</p>
				</li>
				<li>
					<img src="../../assets/img/phone.svg"/>
					<p>短信登录</p>
				</li>
				<li>
					<img src="../../assets/img/more.svg"/>
					<p>更多</p>
				</li>
			</ul>
		</section>
	</main>	
</template>

<style scoped>
	.topImg{
		width: 100%;
	}
	.topImg img{
		width: 100%;
	}
	.login-container{
		width: 100%;
		box-sizing: border-box;
		padding: 0 8%;
	}
	.logo{
		padding: 5% 0;
	}
	.logo img{
		display: block;
		width: 8vh;
		height: 8vh;
		margin: 0 auto;
	}
	.login-tag{
		text-align: center;
		font-size: 2.5vh;
		color: #33373D;
	}
	.login-tag span{
		padding: 2% 4%;
		position: relative;
		font-size: 2.5vh;
	}
	.active:after{
		content: '';
		display: inline-block;
		background: #F01742;
		width: 1.36rem;
		height: 0.1rem;
		position: absolute;
		left: 40%;
		top: 5.5vh;
	}
	.form-list{
		width: 100%;
		margin-top: 10%;
	}
	.form-list>li{
		width: 100%;
		overflow: hidden;
		margin-bottom: 7%;
	}
	.form-list>li span{
		display: inline-block;
		width: 9%;
		height: 100%;
		background-color: white;
		vertical-align: bottom;
   		margin-right: -4px;
    	padding-top: 11px;
    	padding: 10px 2.5px;
      padding-bottom:11px;
    	padding-left: 0;
    	padding-bottom: 11px;
    	position: relative;
    	top: -3px;
	}
	.form-list>li i{
		width: 2.8vh;
	    height: 2.7vh;
	    background-color: white;
	    float: left;
	    margin-top: 4%;
	    /*margin-right: 1%;*/
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	.form-list>li>p{
		color: #F01742;
		margin-top: 1vh;
		font-size: 1.3rem;
		margin-left: 7vw;
	}
	.icon-user{
		background-image: url(../../assets/img/user.svg);
	}
	.icon-lock{
		background-image: url(../../assets/img/lock.svg);
	}
	input{
		width: 90%;
		border: 0;
		padding: 2.5vh 0;
		padding-bottom: 0.5vh;
		color: #61708F;
		outline: none;
		font-size: 1.5rem;
		border-bottom: 1px solid #EEE;
	}
	input::-webkit-input-placeholder{
        color: #cdcdcd;
        font-size: 1.5rem;
        padding-left: 2%;
    }
    .login-container>p{
    	color: #0091DE;
    }
    .login-container>p>span{
    	font-size: 2vh;
    }
    .login-container a{
    	color: #0091DE;
    	display: inline-block;
    	float: right;
    	font-size: 2vh;
    }
    .login{
    	border: 0;
    	width: 100%;
    	margin-top: 7%;
    	outline: none;
    	text-align: center;
    	background: linear-gradient(to right, #FF6188, #FF9BC2);
    	border-radius: 99px;
    	opacity: .8;
    	color: white;
    	width: 100%;
    	padding: 4% 0;
    	font-size: 2.5vh;
    }
    .login-pic{
    	width: 100%;
    	overflow: hidden;
    	margin-top: 10%;
    }
    .login-pic>li{
    	width: 33%;
    	float: left;
    	text-align: center;
    }
    .login-pic>li>p{
    	margin-top: 5%;
    	font-size: 2vh;
    }
    .login-pic>li>img{
    	width: 40%;
    }
</style>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				show:true,
				hide:false,
				block1:false,
				block2:false,
				value1:'',
				value2:'',
				checkName: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
			}
		},
		watch:{
			value1:function(){
				if(!this.checkName.test(this.value1)){
					this.block1 = true
				}else{
					this.block1 = false
				}
			},
			value2:function(){
				if(this.value2 == ""){
					this.block2 = true
				}else{
					this.block2 = false
				}
			}
		},
		methods:{
			change1(){
				this.show = true;
				this.hide = false;
			},
			change2(){
				this.show = false;
				this.hide = true;
			},
			skip(){
				if(this.checkName.test(this.value1) && this.value2 != ''){
					Toast({message:'登录成功！',duration:1000});
					this.$router.replace('/index')
				}else{
					Toast({message:'请输入正确的邮箱和密码',duration:1000});
				}
			}
		}
	}
</script>
