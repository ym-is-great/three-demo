import VueRouter from 'vue-router'
import Index from '@/views/Index'
import HelloWorld from '@/views/HelloWorld'
import Compatibility from '@/views/Compatibility'
import Lines from '@/views/Lines'

const routes = [
  { path: '/', component: Index },
  { path: '/hello-world', component: HelloWorld },
  { path: '/compatibility', component: Compatibility },
  { path: '/lines', component: Lines }
]

const router = new VueRouter({
  routes
})

export default router