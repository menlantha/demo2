<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="(item) in menuTab" :key="item.id" :class="{'active':item.isActive}" @click="btn(item)">{{item.text}}</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity'
export default {
    name:'Login',
    components:{

    },
    methods:{
        btn(item){
            //初始化isactive值
            this.menuTab.forEach(element => {
                element.isActive =false
            });
            //改变isactive值
            item.isActive = true
            //跳转页面
            console.log(item.path)
            this.$router.push(item.path)
            // 显示隐藏接收验证码按钮
            // console.log(item.type)
        }
    },
    setup() {
        let menuTab = reactive([
            {text:'登录',isActive:true,path:'/login'},
            {text:'注册',isActive:false,path:'/register'}
        ])
        return{menuTab}
    }
}
</script>

<style scoped>
#login{
    height: 100vh;
    width: 100%;
    background-color: #344a5f;
}
.login-wrap{
    width: 330px;
    margin: auto;
    text-align: center;
}
.login-wrap ul li{
    display: inline-block;
    width: 70px;
    height: 36px;
    line-height: 36px;
    color: white;
    border-radius: 10px;
}
.login-wrap ul{
    text-align: center;
    padding-left: 0px;
}
.menu-tab{
    text-align: center;
}
.active{
    background-color: rgba(0, 0, 0, .1);
    color: blue;
}
</style>