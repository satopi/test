<template>
	<main>
		<div class="search">
			<div class="s-box">
				<i class="iconfont icon-chazhao"></i>
				<input type="text" id="search" v-model="value"/>
				<div class="del" v-show="out" @click="del()">×</div>
			</div>
			<span @click="back()">取消</span>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				out:false,
				value:""
			}
		},
		methods:{
			del(){
				this.value = ""
			},
			back(){
				this.$router.go(-1)
			}
		},
		watch:{
			value:function(){
				if(this.value != ""){
					this.out = true
				}else{
					this.out = false
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.search{
		width: 100%;
		background-image: url(../../assets/img/navbar.png);
		background-size: 100% 100%;
		padding: 1rem 0;
		vertical-align: middle;
	}
	#search{
		text-decoration: none;
		outline: none;
		border: 0;
		height: 27px;
		width: 80%;
		display: inline-block;
		background: #de1e49;
		color: white;
		font-size: 1.5rem;
	}
	.s-box{
		width: 70%;
		margin-left: 8%;
		height: 27px;
		border-radius: 99px;
		background: #de1e49;
		border: 1px solid transparent;
		display: inline-block;
		margin-right: 5px;
	}
	.icon-chazhao{
		color: white;
		vertical-align: middle;
		margin-left: 5px;
	}
	.search>span{
		color: white;
		font-size: 1.5rem;
	}
	.del{
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		background: white;
		color: #F01742;
		display: inline-block;
		text-align: center;
		font-size: 1.5rem;
		line-height: 1.3rem;
		font-weight: 500;
		vertical-align: middle;
	}
</style>