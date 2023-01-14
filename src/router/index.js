import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import Video from '@/components/video/Video'
import Mine from '@/components/mine/Mine'
import Upload from '@/components/mine/Upload'
import ElementUI from 'element-ui'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/video/:id',
      name: 'Video',
      component: Video,
      props: true,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      children: [
        {
          path: '/mine/upload',
          name: 'Upload',
          component: Upload,
        }
      ]
    }
  ]
})
