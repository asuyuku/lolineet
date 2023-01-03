<template>
    <div id="header">
        <HeaderVue />
        <HeaderBannerVue />
        <div id="main">
            <CarouselVue />
            <FeedFloorVue v-for="feedFloor in feedFloors" :feedFloor="feedFloor" :key="feedFloor.id"></FeedFloorVue>
        </div>
    </div>
</template>


<script>
import HeaderVue from './Header.vue';
import HeaderBannerVue from './HeaderBanner.vue';
import CarouselVue from './Carousel.vue';
import FeedFloorVue from './FeedFloor.vue';
export default {
    name: 'Index',
    components: {
        HeaderVue, HeaderBannerVue, CarouselVue, FeedFloorVue
    },
    data() {
        return {
            feedFloors: [
                {
                    title: "最新",
                    cards: [
                        { id: 0, title: "ddddddddddd", userName: "用户名1", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F598434265e908.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=772e507a5195481d5808b40e56901ebc" },
                        { id: 1, title: "ddddddddddd", userName: "用户名2", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fc2%2F27%2F5abec886c9ba2690714fd3f951df2a77.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=40782fe48900fbfe58b8c6091cf6051d" },
                        { id: 2, title: "ddddddddddd", userName: "用户名3", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F72%2F6e%2F0a195a901054be2ccc455559d99c19dc.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=d31d6711533657b1914d6eb93d55ba3c" },
                        { id: 3, title: "ddddddddddd", userName: "用户名4", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-02-19%2F5c6b7cacd3c94.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=f33aa86dd3f982cfd9c9fad07d79f12e" },
                        { id: 4, title: "ddddddddddd", userName: "用户名5", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fd3%2Fbb%2F51ff84752f4cdf186261be00bc07447d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=93d8c5c54de9ba1488d51768d7452aea" },
                        { id: 5, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" },
                        { id: 6, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" },
                        { id: 7, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" },
                        { id: 8, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" },
                        { id: 9, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" }
                    ]
                },
                {
                    title: "生活区",
                    cards: [
                        { id: 0, title: "ddddddddddd", userName: "用户名1", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F598434265e908.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=772e507a5195481d5808b40e56901ebc" },
                        { id: 1, title: "ddddddddddd", userName: "用户名2", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fc2%2F27%2F5abec886c9ba2690714fd3f951df2a77.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=40782fe48900fbfe58b8c6091cf6051d" },
                        { id: 2, title: "ddddddddddd", userName: "用户名3", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F72%2F6e%2F0a195a901054be2ccc455559d99c19dc.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=d31d6711533657b1914d6eb93d55ba3c" },
                        { id: 3, title: "ddddddddddd", userName: "用户名4", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-02-19%2F5c6b7cacd3c94.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=f33aa86dd3f982cfd9c9fad07d79f12e" },
                        { id: 4, title: "ddddddddddd", userName: "用户名5", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fd3%2Fbb%2F51ff84752f4cdf186261be00bc07447d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=93d8c5c54de9ba1488d51768d7452aea" },
                        { id: 5, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" }
                    ]
                },
                {
                    title: "动画区",
                    cards: [
                        { id: 0, title: "ddddddddddd", userName: "用户名1", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F598434265e908.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=772e507a5195481d5808b40e56901ebc" },
                        { id: 1, title: "ddddddddddd", userName: "用户名2", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fc2%2F27%2F5abec886c9ba2690714fd3f951df2a77.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=40782fe48900fbfe58b8c6091cf6051d" },
                        { id: 2, title: "ddddddddddd", userName: "用户名3", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F72%2F6e%2F0a195a901054be2ccc455559d99c19dc.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=d31d6711533657b1914d6eb93d55ba3c" },
                        { id: 3, title: "ddddddddddd", userName: "用户名4", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-02-19%2F5c6b7cacd3c94.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=f33aa86dd3f982cfd9c9fad07d79f12e" },
                        { id: 4, title: "ddddddddddd", userName: "用户名5", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fd3%2Fbb%2F51ff84752f4cdf186261be00bc07447d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=93d8c5c54de9ba1488d51768d7452aea" },
                        { id: 5, title: "ddddddddddd", userName: "用户名16", img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2F5b%2F63%2Fad749accb509eee7bb96313b0b7581d1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673546094&t=457200a89c50f8a16332b95b85f814b3" }
                    ]
                },
            ]

        }
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