<template>
    <div>
        <div class="feed-floor-header">
            <span>
                <h1><i class="el-icon-star-on"></i>{{ feedFloor.name }}</h1>
            </span>
        </div>
        <div class="feed-floor-items">
            <FeedFloorCardItemVue v-if="feedFloor!=null" v-for="card in feedFloor.videoList" :card="card" :key="card.id"></FeedFloorCardItemVue>
        </div>
    </div>
</template>

<style>
.feed-floor-items {
    overflow: hidden;
    margin-left: 20px;
}

.feed-floor-header {
    width: 100%;
    position: relative;
    text-align: left;
}
</style>

<script>
import FeedFloorCardItemVue from './FeedFloorCardItem.vue';
export default {
    name: 'FeedFloorVue',
    components: {
        FeedFloorCardItemVue
    },
    props: {
        feedFloor: Object
    },mounted: function () {
        console.log(this.feedFloor)
    }

}
</script>