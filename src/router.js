import VueRouter from 'vue-router'
import Index from '@/views/Index'
import HelloWorld from '@/views/HelloWorld'
import Compatibility from '@/views/Compatibility'
import Lines from '@/views/Lines'
import BasicText from '@/views/BasicText'
import Test from '@/views/Test'

const routes = [
  { path: '/', component: Index },
  { path: '/hello-world', component: HelloWorld },
  { path: '/compatibility', component: Compatibility },
  { path: '/lines', component: Lines },
  { path: '/basic-text', component: BasicText },
  { path: '/test', component: Test }
]

const router = new VueRouter({
  routes
})

export default router