<template>
    <div id="header">
        <HeaderVue />
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

#main {
    padding: 0 var(--layout-padding);

}
</style>