<template>
    <div id="carousel">
        <div id="carousel-img">
            <el-carousel :interval="4000" height="450px">
                <el-carousel-item v-for="item in carousels" :key="item">
                    <img :src="item" width="100%" height="100%" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="carousel-cards">
            <!-- <div class="carousel-card" v-for="card in cards">
                <img :src="card.img" width="100%" height="150px" />
                <div class="carousel-card-title">{{card.title}}</div>
                <div class="carousel-card-user"><i class="el-icon-user"></i>{{card.userName}}</div>
            </div> -->
            <CardItemVue v-for="card in cards" :key="card.id" :card="card"/>
        </div>
    </div>
</template>

<style>
#carousel {
    margin: 30px 30px 30px 0;
    width: 100%;
    height: 450px;
    display: flex;
}

#carousel-img {
    border-radius: 25px;
    width: 40%;
}

#carousel-cards {
    width: 60%;
    text-align: left;
    overflow: hidden;
    margin-left: 20px;
}



.el-carousel__item h3 {
    border-radius: 10px;
    padding: 20px;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    border-radius: 10px;
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    border-radius: 10px;
    background-color: #d3dce6;
}

.el-carousel{
    border-radius: 10px;

}

</style>

<script>
import CarouselCardItemVue from './CarouselCardItem.vue';
export default {
    name: 'CarouselVue',
    components: {
        'CardItemVue':CarouselCardItemVue
    },
    data(){
        return{
            carousels:[
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.deskcity.org%2Fpic_source%2F202010%2Fdt%2Frrivsce4vow2629.jpg&refer=http%3A%2F%2Fup.deskcity.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=d88396641a754cc6b7a00114d62e552d",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Feb%2Fef%2Ffaa0b3f4e9f2788f4be3874b6439e682.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=45b432b00b3f8f516a1b61259be30789",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnetdisk.moyublog.com%2Ffree_wallpapers_files%2F13k3wxcst5m.jpg&refer=http%3A%2F%2Fnetdisk.moyublog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=2061ffcfb9e9b82271f0c437cbc5cc08"
            ],
            cards:[
                {id:0,title:"ddddddddddd",userName:"用户名1",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F598434265e908.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=772e507a5195481d5808b40e56901ebc"},
                {id:1,title:"ddddddddddd",userName:"用户名2",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fc2%2F27%2F5abec886c9ba2690714fd3f951df2a77.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=40782fe48900fbfe58b8c6091cf6051d"},
                {id:2,title:"ddddddddddd",userName:"用户名3",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F72%2F6e%2F0a195a901054be2ccc455559d99c19dc.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=d31d6711533657b1914d6eb93d55ba3c"},
                {id:3,title:"ddddddddddd",userName:"用户名4",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-02-19%2F5c6b7cacd3c94.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=f33aa86dd3f982cfd9c9fad07d79f12e"},
                {id:4,title:"ddddddddddd",userName:"用户名5",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fd3%2Fbb%2F51ff84752f4cdf186261be00bc07447d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=93d8c5c54de9ba1488d51768d7452aea"},
                {id:5,title:"ddddddddddd",userName:"用户名16",img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3"}
            ]
        }
    }
}
</script>