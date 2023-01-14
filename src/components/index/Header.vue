<template>
    <div id="lolineet-header" :class="color == 'black' ? 'lolineet-header' : 'lolineet-header-white'" v-bind:onScroll="handleScroll">
        <div class="lolineet-header-button">
            <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
            <a v-for="title in titles">{{ title.text }}</a>
        </div>

        <div class="lolineet-header-search">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <div class="lolineet-header-mine">
            <a>
                <el-popover placement="top-start" title="标题" width="200" trigger="hover" ref="userPopover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>

                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    v-popover:userPopover></el-avatar>

                <!-- <el-popover 
                    placement="bottom" 
                    width="100" 
                    trigger="hover" 
                    title="登录" 
                    content="登录后才能使用更多功能哦~">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </el-popover> -->

                <!--  -->
            </a>

        </div>
    </div>
</template>


<script>
export default {
    name: 'Header',
    data() {
        return {
            titles: [
                { text: '测试1' },
                { text: '测试2' },
                { text: '测试3' }
            ],
            input3: '',
            scrollTop: 0
        }
    },
    props: {
        color: String
    }, mounted: function () {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>20){
                this.color = 'white'
            }else{
                this.color = 'black'
            }
        })


    },methods: {
        handleScroll() {
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(this.scrollTop)
        }
    }
}
</script>
<style>
.lolineet-header {
    top: 0;
    position: fixed;
    background-image: linear-gradient(#131313, #ffffff00);
    height: 64px;
    width: 100%;
    color: black;
    display: flex;
    align-items: center;
    z-index: 999;
}

.lolineet-header-white {
    position: fixed;
    top: 0;
    background-color: #ffffff;
    height: 64px;
    width: 100%;
    color: black;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px #00000014;
    z-index: 999;
}

.lolineet-header-button {
    text-align: left;
    width: 28%;
    margin-left: 5%;
}

.lolineet-header-search {
    text-align: center;
    width: 33%;
}

.lolineet-header-mine {
    text-align: right;
    width: 33%;
}

.lolineet-header a {
    color: antiquewhite;
    margin-left: 15px;
    text-align: -webkit-match-parent;
}

.lolineet-header-white a {
    color: gray;
    margin-left: 15px;
    text-align: -webkit-match-parent;
}
</style>