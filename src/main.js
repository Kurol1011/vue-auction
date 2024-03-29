import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router";
import store from "@/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
    //глобальная регистрация компонента
})


app
    .use(store)
    .use(router)
    .mount('#app')
