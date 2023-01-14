<template>
    <!--  仿bilibili标头-->
    <div class="video" v-if="resultData != null">
        <Header color="white"></Header>
        <div class="video-main">
            <div class="video-title">{{ resultData.data.data.name }}</div>
            <video  controls="" playsinline="" width="100%" height="80%">
                <source :src="resultData.data.data.url" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<style>
.video {
}

.video-title{
    text-align: left;
    font-family: "Microsoft YaHei";
    font-size: 25px;
    margin-top: 80px;
    margin-bottom: 20px;
}

.video-main{
    width: 70%;
    height: 50%;
    margin-left: 7%;
    margin-top: 100px;
}
</style>

<script>
import { videoDetail } from '../../api/video'
import HeaderStandard from '../header/HeaderStandard.vue'
import Header from '../index/Header.vue'
export default {
    name: 'VideoVue',
    props: {
        id: String
    },
    components: {
        HeaderStandard: HeaderStandard,
        Header: Header
    },
    data() {
        return {
            resultData: null
        }
    },
    mounted: function () {
        videoDetail({ videoId: this.id }).then(res => {
            this.resultData = res;
            console.log(res);
        })
    }
}
</script>