import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
  },
  {
    path: '/bycategory/:id',
    name: 'byCategory',
    component: () => import('@/views/ByCategory.vue'),
    props: true,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('@/views/Details.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category.vue'),
  },
  {
    path: '/category/details/:id',
    name: 'CategoryDetails',
    component: () => import('@/views/category/Details.vue'),
    props: true,
  },
  {
    path: '/category/add',
    name: 'AddCategory',
    component: () => import('@/views/category/Add.vue'),
  },
  {
    path: '/category/edit/:id',
    name: 'EditCategory',
    component: () => import('@/views/category/Edit.vue'),
    props: true,
  },
  {
    path: '/post',
    name: 'Post',
    compnent: () => import('@/views/Post.vue'),
  },
  {
    path: '/post/details/:id',
    name: 'PostDetails',
    component: () => import('@/views/post/Details.vue'),
  },
  {
    path: '/post/add',
    name: 'AddPost',
    component: () => import('@/views/post/Add.vue'),
  },
  {
    path: '/post/edit/:id',
    name: 'EditPost',
    component: () => import('@/views/post/Edit.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
