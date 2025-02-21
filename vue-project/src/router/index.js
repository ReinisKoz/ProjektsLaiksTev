import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import BookAnAppointmentView from '@/views/BookAnAppointmentView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: AboutView,
    },

    {
      path: '/bookAppointment',
      name: 'home',
      component: BookAnAppointmentView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/aboutUs',
      name: 'aboutus',
      component: AboutUsView,
    },

    {
      path: '/contactUs',
      name: 'contactus',
      component: ContactUsView,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
