import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import Home2 from '@/pages/Home2.vue'
import Home3 from '@/pages/Home3.vue'
import Home4 from '@/pages/Home4.vue'
import Home5 from '@/pages/Home5.vue'
import Home6 from '@/pages/Home6.vue'
import Home7 from '@/pages/Home7.vue'
import Home8 from '@/pages/Home8.vue'
import Home9 from '@/pages/Home9.vue'
import Home10 from '@/pages/Home10.vue'
import HomeLight from '@/pages/HomeLight.vue'
import Home2Light from '@/pages/Home2Light.vue'
import Home3Light from '@/pages/Home3Light.vue'
import Home4Light from '@/pages/Home4Light.vue'
import Home5Light from '@/pages/Home5Light.vue'
import Home6Light from '@/pages/Home6Light.vue'
import Home7Light from '@/pages/Home7Light.vue'
import Home8Light from '@/pages/Home8Light.vue'
import Home9Light from '@/pages/Home9Light.vue'
import Home10Light from '@/pages/Home10Light.vue'

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

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/home-2',
            name: 'Home Two',
            component: Home2,
        },
        {
            path: '/home-3',
            name: 'Home Three',
            component: Home3,
        },
        {
            path: '/home-4',
            name: 'Home Four',
            component: Home4,
        },
        {
            path: '/home-5',
            name: 'Home Five',
            component: Home5,
        },
        {
            path: '/home-6',
            name: 'Home Six',
            component: Home6,
        },
        {
            path: '/home-7',
            name: 'Home Seven',
            component: Home7,
        },
        {
            path: '/home-8',
            name: 'Home Eight',
            component: Home8,
        },
        {
            path: '/home-9',
            name: 'Home Nine',
            component: Home9,
        },
        {
            path: '/home-10',
            name: 'Home Ten',
            component: Home10,
        },
        {
            path: '/home-light',
            name: 'Home Light',
            component: HomeLight,
        },
        {
            path: '/home-2-light',
            name: 'Home Two Light',
            component: Home2Light,
        },
        {
            path: '/home-3-light',
            name: 'Home Three Light',
            component: Home3Light,
        },
        {
            path: '/home-4-light',
            name: 'Home Four Light',
            component: Home4Light,
        },
        {
            path: '/home-5-light',
            name: 'Home Five Light',
            component: Home5Light,
        },
        {
            path: '/home-6-light',
            name: 'Home Six Light',
            component: Home6Light,
        },
        {
            path: '/home-7-light',
            name: 'Home Seven Light',
            component: Home7Light,
        },
        {
            path: '/home-8-light',
            name: 'Home Eight Light',
            component: Home8Light,
        },
        {
            path: '/home-9-light',
            name: 'Home Nine Light',
            component: Home9Light,
        },
        {
            path: '/home-10-light',
            name: 'Home Ten Light',
            component: Home10Light,
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
    ],
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
