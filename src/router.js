import VueRouter from 'vue-router'
import Index from '@/views/Index'
import HelloWorld from '@/views/HelloWorld'
import Compatibility from '@/views/Compatibility'

const routes = [
  { path: '/', component: Index },
  { path: '/hello-world', component: HelloWorld },
  { path: '/compatibility', component: Compatibility }
]

const router = new VueRouter({
  routes
})

export default router