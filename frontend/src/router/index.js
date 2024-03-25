import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import ComingSoon from '@/pages/ComingSoon.vue'
import About from '@/pages/About.vue'
import UseCase from '@/pages/UseCase.vue'
import UseCaseSingle from '@/pages/UseCaseSingle.vue'
import Error from '@/pages/Error.vue'
import Register from '@/pages/Register.vue'
import Signin from '@/pages/Signin.vue'
import Teams from '@/pages/Teams.vue'
import Blog from '@/pages/Blog.vue'
import BlogTwo from '@/pages/BlogTwo.vue'
import BlogSingle from '@/pages/BlogSingle.vue'
import Contact from '@/pages/Contact.vue'
import Chat from '@/pages/Chat.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/comingsoon',
            name: 'ComingSoon',
            component: ComingSoon,
        },

        {
            path: '/about',
            name: 'About Us',
            component: About,
        },
        {
            path: '/use-case',
            name: 'Use Case',
            component: UseCase,
        },
        {
            path: '/use-case-details',
            name: 'Use Case Details',
            component: UseCaseSingle,
        },
        {
            path: '/404',
            name: '404 Not Found',
            component: Error,
        },
        {
            path: '/sign-up',
            name: 'Sign Up',
            component: Register,
        },
        {
            path: '/sign-in',
            name: 'Sign In',
            component: Signin,
        },
        {
            path: '/teams',
            name: 'Teams',
            component: Teams,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
        },
        {
            path: '/blog-two',
            name: 'Blog Two',
            component: BlogTwo,
        },
        {
            path: '/blog-details',
            name: 'Blog Details',
            component: BlogSingle,
        },
        {
            path: '/contact-us',
            name: 'Contact Us',
            component: Contact,
        },
        {
          path: '/chat',
          name: 'Chat',
          component: Chat,
      },
    ],
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
