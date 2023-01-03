<template>

    <div class="carousel-card">
        <img :src="card.img" width="100%" height="150px" />
        <div class="carousel-card-title">{{ card.title }}</div>
        <div class="carousel-card-user"><i class="el-icon-user"></i>{{ card.userName }}</div>
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