<template>
	<main>
		<header>
			<router-link to="/login">
				<i class="iconfont icon-zuo"></i>
			</router-link>
			<h1>手机注册</h1>
		</header>
		<div class="container">
			<ul class="form-list">
				<li>
					<input type="text" id="area" value="中国大陆" />
				</li>
				<li>
					<!--<span>+86</span>-->
					<input type="tel" value="+86" id="tel" placeholder="请输入手机号码"/>
				</li>
			</ul>
			<button class="login">
				<router-link to="/login">获取手机验证码</router-link>
			</button>
			<p>
				我同意<span>用户服务协议</span>
			</p>
		</div>
	</main>
</template>

<style scoped>
	header{
		width: 100%;
		padding-bottom: 3%;
		border-bottom: 1px solid #EEE;
		background-image: none;
	}
	header>h1{
		color: black;
		display: inline-block;
		font-weight: 500;
		font-size: 2vh;
		padding-top: 2.5%;
	}
	header>a{
		display: inline-block;
		margin-top: 2%;
		margin-left: 2%;
		margin-right: 1%;
		float: left;
	}
	.icon-zuo{
		font-size: 3vh;
		color: black;
		font-weight: bold;
	}
	.container{
		padding: 4% 5%;
		box-sizing: border-box;
	}
	.form-list{
		width: 100%;
		margin-top: 10%;
	}
	.form-list>li{
		width: 100%;
		margin-top: 4%;
		position: relative;
		overflow: hidden;
	}
	.form-list>li>input{
		width: 100%;
		float: right;
		padding: 3.5% 4%;
		padding-right: 0;
		box-sizing: border-box;
		background: #f6f7f9;
		outline: none;
		border: 0;
		font-size: 2vh;
	}
	#tel{
		width: 100%;
		/*padding-left: 15%;*/
	}
	.form-list>li>span{
		float: left;
	    display: inline-block;
	    width: 10%;
	    padding: 3.2% 0;
	    text-align: right;
	    font-size: 2vh;
	    background: #f6f7f9;
	}
	input::-webkit-input-placeholder{
        color: #cdcdcd;
        font-size: 2vh;
    }
    .login{
    	border: 0;
    	width: 100%;
    	margin-top: 7%;
    	outline: none;
    	text-align: center;
    	background: #2581FA;
    	border-radius: 99px;
    	opacity: .8;
    	padding: 3% 5%;
    }
    .login>a{
    	color: white;
    	width: 100%;
    	font-size: 2vh;
    }
    .container>p{
    	text-align: center;
    	margin-top: 3%;
    	font-size: 2vh;
    }
    .container>p>span{
    	color: #2581FA;
    	font-size: 2vh;
    }
</style>

<script>
</script>