<template>
    <div id="lolineet-header" class="lolineet-header">
        <div class="lolineet-header-button">
            <a><i class="el-icon-s-home"></i>首页</a>
            <a v-for="title in titles">{{ title.text }}</a>
        </div>

        <div class="lolineet-header-search">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <div class="lolineet-header-mine">
            <a>
                <el-popover placement="top-start" title="标题" width="200" trigger="hover"
                ref="userPopover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" v-popover:userPopover></el-avatar>

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
            input3: ''
        }
    }
}
</script>
<style>
.lolineet-header {
    position: absolute;
    background-image: linear-gradient(#00000094, #ffffff00);
    height: 64px;
    width: 100%;
    color: black;
    display: flex;
    align-items: center;
}

.lolineet-header-button {
    text-align: left;
    width: 33%;
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
</style>