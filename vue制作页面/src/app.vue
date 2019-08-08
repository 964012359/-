<template>
    <div class="app_container">
        <!--header-->
        <mt-header fixed title="高级相机"></mt-header>


        <!--router-view-->
        <transition>
            <router-view>

            </router-view>

        </transition>




        <!--tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
    .app_container{
        padding-top:40px;
        padding-bottom: 50px;
        overflow-x:hidden
    }
    .v-enter{
        opacity:0;
        transform:translateX(100%);
    }
    .v-leave-to{
        position: absolute;
        opacity:0;
        transform:translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active{
        transition:all 1s linear;
    }
</style>