import Vue from 'vue';
import App from './App';


Vue.config.productionTip = false
App.mpType = 'app'

// 数据库初始化
wx.cloud.init({
    traceUser : true
})


const app = new Vue(App)
app.$mount()
