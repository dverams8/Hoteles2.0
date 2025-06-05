import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Dark } from 'quasar'

const app = createApp(App)

app.use(Quasar,{
    config: {
        dark: true,
    },
})

Dark.set(true)
app.use(router)
app.mount('#app')