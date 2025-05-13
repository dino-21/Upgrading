// ① import './assets/main.css'  main.css 임포트 부분을 삭제

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 마운트 시점 변경(라우터의 초기 탐색 후)
router.isReady().then(() => { // ② 마운트 시점 변경 
    app.mount('#app'); // ③ app 요소의 마운트 연결
});


