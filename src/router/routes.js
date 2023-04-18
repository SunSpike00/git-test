
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // 한 줄 추가
      { path: '/vue', component: () => import('pages/VueEx.vue')},

      { path: '/blog', component: () => import('pages/BlogPost.vue')},
    
      { path: '/shop', component: () => import('pages/ShoppingList.vue') },
      
      { path: '/todo', component: () => import('pages/Todo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  
]

export default routes
