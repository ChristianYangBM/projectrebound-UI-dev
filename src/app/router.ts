import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomePage },
    { path: '/product', component: () => import('../pages/ProductPage.vue') },
    { path: '/features', component: () => import('../pages/FeaturesPage.vue') },
    { path: '/how-it-works', component: () => import('../pages/HowItWorksPage.vue') },
    { path: '/early-access', component: () => import('../pages/EarlyAccessPage.vue') },
    { path: '/login', component: () => import('../pages/LoginPage.vue') },
    { path: '/privacy', component: () => import('../pages/PrivacyPage.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFoundPage.vue') },
  ],
})

router.afterEach((to) => {
  const pages: Record<string, { title: string; description: string }> = {
    '/': { title: 'Rebound | The operating platform for book resellers', description: 'Rebound connects book sourcing, inventory, listings, repricing, and reporting around every physical copy.' },
    '/product': { title: 'Product | Rebound', description: 'See how Rebound follows each book from its first scan through inventory, listing, sale, and fulfillment.' },
    '/features': { title: 'Features | Rebound', description: 'Explore Rebound’s planned tools for sourcing, inventory, marketplace listings, repricing, orders, and reporting.' },
    '/how-it-works': { title: 'How Rebound Works', description: 'Follow the connected Rebound workflow from barcode scan and buying decision through fulfillment and reporting.' },
    '/early-access': { title: 'Get Early Access | Rebound', description: 'Join the Rebound early-access list for product previews, launch announcements, and development updates.' },
    '/login': { title: 'Log In | Rebound', description: 'Rebound product accounts are not yet available. Join early access for launch updates.' },
    '/privacy': { title: 'Privacy | Rebound', description: 'Read information about how Rebound handles waitlist and website data.' },
  }
  const page = pages[to.path] ?? { title: 'Page not found | Rebound', description: 'The requested Rebound page could not be found.' }
  document.title = page.title
  let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!description) {
    description = document.createElement('meta')
    description.name = 'description'
    document.head.appendChild(description)
  }
  description.content = page.description
})

export default router
