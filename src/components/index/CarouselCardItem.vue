<template>
    <!-- 跳转到video -->
    <!-- <div class="carousel-card" v-on:click="redirectToVideo(card.id)"> -->
    <div class="carousel-card">
        <router-link :to="'/video/' + card.id">
            <img :src="card.img" width="100%" height="150px" />
        </router-link>
        <div class="carousel-card-title"><router-link :to="'/video/' + card.id">{{ card.title }}</router-link></div>
        <div class="carousel-card-user"><i class="el-icon-user"></i><router-link :to="'/video/' + card.id">{{
            card.userName
        }}</router-link></div>

    </div>
</template>

<script>
export default {
    name: 'CardItemVue',
    props: {
        card: Object
    }
}
</script>

<style>

/* a标签hover后变为蓝色 */
.carousel-card a:hover {
    color: #2e0053;
    /* 延迟1s */
    transition: all 1s;
}

.carousel-card {
    width: 30%;
    float: left;
    margin: 0 0 20px 20px;
}

.carousel-card img {
    border-radius: 10px;
}

.carousel-card-title {
    line-height: 30px;
    font-size: 18px;
    color: #000000;
    opacity: 0.75;
    margin: 0;
}

.carousel-card-user {
    line-height: 30px;
    font-size: 14px;
    color: #475669;
    opacity: 0.75;
    margin: 0;
}
</style>