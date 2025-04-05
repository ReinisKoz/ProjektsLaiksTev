import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// For exact date in calendar
const daysInMonth = new Date(2025, 1, 0).getDate();
const firstDayOfMonth = new Date(2025, 1, 1).getDay();

