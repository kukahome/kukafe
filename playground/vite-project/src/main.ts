import { createApp } from 'vue'
import { getKukaEnvByDomain } from '@kuka/fe-utils'

import './style.css'
import App from './App.vue'

getKukaEnvByDomain()
createApp(App).mount('#app')
