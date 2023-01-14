<template>
    <div>
        <HeaderVue color="white" :isIndex="false" />
        <div class="navi">
            <el-row>
                <el-col :span="4">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                        style="min-height: calc(100vh - 64px );">
                        <router-link to="/mine/upload">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">上传视频</span>
                            </el-menu-item>
                        </router-link>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">番剧管理</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="6" :offset="6">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<style>
.navi {
    /* width: 20%; */
    background-color: #ffffff;
    margin-top: 64px;
    /* left: 0; */
    z-index: 999;
}


a {
    /* 去掉下划线 */
    text-decoration: none;
    /* 默认字体灰色 */
    color: #475669;
}
</style>

<script>
import HeaderVue from '../index/Header.vue';
export default {
    name: 'MineVue',
    components: {
        HeaderVue: HeaderVue
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>