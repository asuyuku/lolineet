<template>
    <div id="header">
        <HeaderVue :isIndex = "true" />
        <HeaderBannerVue />
        <div id="main">
            <CarouselVue />
            <FeedFloorVue v-if="feedFloors != null" v-for="feedFloor in feedFloors" :feedFloor="feedFloor"
                :key="feedFloor.id"></FeedFloorVue>
        </div>
    </div>
</template>


<script>
import HeaderVue from './Header.vue';
import HeaderBannerVue from './HeaderBanner.vue';
import CarouselVue from './Carousel.vue';
import FeedFloorVue from './FeedFloor.vue';
import { recommend } from '../../api/video';

export default {
    name: 'Index',
    components: {
        HeaderVue, HeaderBannerVue, CarouselVue, FeedFloorVue
    },
    data() {
        return {
            feedFloors: null
        }
    },
    mounted: function () {
        recommend({}).then(res => {
            console.log(res);
            this.feedFloors = res.data.data;
        })
    }
}
</script>
<style>
body {
    --layout-padding: 140px;
    margin: 0, 0, 0, 0;
}
a {
    /* 去掉下划线 */
    text-decoration: none;
    /* 默认字体灰色 */
    color: #475669;
}

#main {
    padding: 0 var(--layout-padding);

}

.goTop {
    height: 100vh;
    overflow-x: hidden;
}
</style>