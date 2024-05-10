import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/Login/Login.vue')
const Sign = () => import('@/views/Sign/Sign.vue')
const Home = () => import('@/views/Home/Home.vue')
const Exception = () => import('@/views/Exception/Exception.vue')
const Check = () => import('@/views/Check/Check.vue')
const Apply = () => import('@/views/Apply/Apply.vue')

declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean
    title?: string
    icon?: string
    auth?: boolean
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/sign',
      meta: {
        menu: true,
        title: '考勤管理',
        icon: 'document-copy',
        auth: true
      },
      children: [
        {
          path: '/sign',
          name: 'sign',
          component: Sign,
          meta: {
            menu: true,
            title: '在线打卡签到',
            icon: 'calendar',
            auth: true
          }
        },
        {
          path: '/exception',
          name: 'exception',
          component: Exception,
          meta: {
            menu: true,
            title: '异常考勤查询',
            icon: 'warning',
            auth: true
          }
        },
        {
          path: '/check',
          name: 'check',
          component: Check,
          meta: {
            menu: true,
            title: '我的考勤审批',
            icon: 'finished',
            auth: true
          }
        },
        {
          path: '/apply',
          name: 'apply',
          component: Apply,
          meta: {
            menu: true,
            title: '添加考勤审批',
            icon: 'document-add',
            auth: true
          }
        }
      ]
    }
  ]
})

export default router
