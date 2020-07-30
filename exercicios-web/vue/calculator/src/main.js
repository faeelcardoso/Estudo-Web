import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    /* é o mesmo que isso, só que refatorado 
      render(createElemment) {
        return createElemment(App)
    }*/ 
}).$mount('#app') // é o msm que el: '#app' porém refatorado