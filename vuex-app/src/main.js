import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
