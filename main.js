import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import basics from './pages/basics/home.vue'
Vue.component('basics', basics)

import components from './pages/component/index.vue'
Vue.component('components', components)

import plugin from './pages/login/login.vue'
Vue.component('plugin', plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import cuLoading from './colorui/components/cu-loading.vue'
Vue.component('cu-loading', cuLoading)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
