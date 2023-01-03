<template>

    <div class="feed-floor-card">
        <img :src="card.img" width="100%" height="150px" />
        <div class="feed-floor-title">{{ card.title }}</div>
        <div class="feed-floor-user"><i class="el-icon-user"></i>{{ card.userName }}</div>
    </div>
</template>

<script>
    export default{
        name: 'CardItemVue',
        props: {
            card: Object
        }
    }
</script>

<style>

.feed-floor-card {
    text-align: left;
    width: 17%;
    float: left;
    margin: 0 0 20px 20px;
}
.feed-floor-card img {
    border-radius: 10px;
}

.feed-floor-title {
    line-height: 30px;
    font-size: 18px;
    color: #000000;
    opacity: 0.75;
    margin: 0;
}

.feed-floor-user {
    line-height: 30px;
    font-size: 14px;
    color: #475669;
    opacity: 0.75;
    margin: 0;
}
</style>