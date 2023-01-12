<template>
    <!--  仿bilibili标头-->
    <div v-if="resultData != null">
        <span id="test">{{ resultData.data.data.name }}</span>

        <video autoplay="" controls="" playsinline="" width="100%" height="80%">
            <source :src="resultData.data.data.url" type="video/mp4" />
        </video>
    </div>
</template>

<script>
import { videoDetail } from '../../api/video'
export default {
    name: 'VideoVue',
    props: {
        id: String
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