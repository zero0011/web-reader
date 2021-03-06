# reader

> 基于 mpvue 的 跨平台的小程序云开发 读书商城(仿网易蜗牛读书)

# 打开项目

git clone https://github.com/zero0011/web-reader.git

## 安装依赖
npm i

## 打包构建
npm run build

## 指定平台的开发时构建(微信、百度、头条、支付宝)
```html
npm  run dev:wx

npm  run dev:swan

npm  run dev:tt

npm  run dev:my

```
## 指定平台的打包构建
```html
npm run build:wx

npm run build:swan

npm run build:tt

npm run build:my
```



## 打开方式
1. npm run dev 之后 , 会出现 dist/wx 目录
2. 打开微信开发工具 , 导入目录 , dist/wx 的文件 便可以了


# 项目介绍
这个一款 仿网易蜗牛读书的 云开发小程序

## 小程序端

### leader(领读)

```html
<div class="page__bd" v-for="(author , index) in authors" :key="index">
      <div class="page__bd-head" @click="GoToAuthors">
        <div class="head-img">
          <img class="pic" :src="author.headImg" />
        </div>
        <div class="artic-author page-flex">{{author.userName}}</div>
      </div>
      <div class="page__bd-banner center" @click="GoToStories(index)">
        <img class="bannerImg" :src="author.bannerImg"/>
      </div>
      <div class="page__bd-middle" @click="GoToStories(index)">
        <div class="artic-title">{{author.articTitle}}</div>
        <div class="artic-content">{{author.articContent}}</div>
      </div>
      <div class="page__bd-foot">
        <div class="foot-lt fl page-flex">{{author.clickTimes}}次点击</div>
        <div class="foot-rt thumbUp">{{author.thumbUp}}
           <div class="finger">
             <img :src="pointer_url" />
           </div>
        </div>
      </div>
    </div>
```

```js
// 路由跳转
GoToAuthors() {
    mpvue.navigateTo({
    url: "/pages/leader/authors/main"
    });
},
GoToStories(index) {
    mpvue.navigateTo({
    url: `/pages/leader/stories/main?id=${index}`
    });
}
```

1. stories(具体文章)
```js
// 获取路由跳转参数
let query = this.$root.$mp.query;
```
2. authors(作者详细)

**note:微信pages 获取页面路由跳转参数 this.$root.$mp.query,由此便可以获取**

### stack(分类)

可滚动视图区域。 使用竖向滚动时,需要给scroll-view 一个固定高度,通过 wxss 设置 height。组件属性的长度单位默认为px , 2.4.0支持传入单位(rpx)

```html
<scroll-view v-for="(item , index) in stack" :key="index" scroll-y="true"></scroll-view>
```

1. booklist(图书列表)

### bookdesk(书桌)
**书籍展示使用轮播图**
```html
    <swiper class="swiper"
    indicator-dots="true" 
    autoplay="true" 
    interval="5000" 
    duration="1000" 
    @click="StartRead">
        <swiper-item v-for="(book ,index) in books" :key="index">
        </swiper-item>
    </swiper>
```

1. reader(阅读器)
使用 web-view 连接外部的 h5阅读器
```html
<web-view :src="reader-url"></web-view>
```

### mine(我的)
1. news(消息通知)

```js
// 设置图片的url
let baseUrl = 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/mines/';
let imgs = ['news','booklist','note','fans','times','update','sets']; // 图片名

downloadFile(baseUrl, imgs , (img , res) => {
    this.$data[img + 'Url'] = res.tempFilePath;
})
```

### app.json
```js
"tabBar" : {
    "color":"#999",
    "selectedColor":"#444",
    "borderStyle":"black",
    "list":[
      {
        "pagePath":"pages/leader/main",
        "iconPath":"/static/icons/lingdu.png",
        "selectedIconPath":"/static/icons/lingdu_sel.png",
        "text":"领读"
      },
      {
        "pagePath":"pages/stack/main",
        "iconPath":"/static/icons/stack.png",
        "selectedIconPath":"/static/icons/stack_sel.png",
        "text":"分类"
      },
      {
        "pagePath":"pages/bookdesk/main",
        "iconPath":"/static/icons/bookdesk.png",
        "selectedIconPath":"/static/icons/bookdesk_sel.png",
        "text":"书桌"
      },
      {
        "pagePath":"pages/mine/main",
        "iconPath":"/static/icons/mine.png",
        "selectedIconPath":"/static/icons/mine_sel.png",
        "text":"我的"
      }
    ]
  }
```

### 微信小程序 移动端适配 WXSS

为了适应前端开发者 , WXSS 具有 CSS 大部分特性。 同时为了更适合开发微信小程序 , WXSS 对 CSS 进行了 扩充和修改
- 尺寸单位

#### 尺寸单位
- rpx : 可以根据屏幕宽度进行自适应 。规定屏幕宽为  750rpx 


## 服务端
服务器使用 小程序 云开发

1. 数据库
```js
// 数据库初始化
wx.cloud.init({
    traceUser : true
})
```

```js
// 数据库请求接口 , 写在 utils文件中 , 方便调用
const db = wx.cloud.database();
const request_interface = db.collection('test').doc('tableID');
export default {
    request_interface
}
```


2. 存储
```js
wx.cloud.downloadFile({
    fileID : 'fileID'
}).then(res => {
    this.imgUrl = res.tempFilePath;
})

// 批量下载图片 API
export function downloadFile(baseUrl, imgs, callback) {
  imgs.forEach(img => {
    wx.cloud.downloadFile({
      fileID: baseUrl + img + '.png'
    }).then(res => {
        // 下载成功的回调
        callback(img,res)
    })
  });
}
```

# 总结

- mpvue 最大的优点的 , 我觉得应该就是其跨平台开发的框架 , 一次编写 , 可以在 微信 , 支付宝等 平台使用 



- mpvue 的缺点也是很明显的 , 就是没有很好的开发文档 , 出了什么不知名的错误都不知道 怎么处理 , 比如 在 mpvue 中 使用 epubjs 解析 , 就会出现 bug 。 导致我曾经 使用 vue 写的 web 移动端阅读器 无法迁移到 mpvue 中 , 项目没有全部完成。



- 写项目最关键是得有耐心 , 写这个项目 , 学习到了 小程序云开发的 基本过程。 但是 , 下面如果写 跨平台的小程序 , 应该会 使用 uni-app 其他框架了吧。 



- 话说 , 如果做 web 项目时 , 也可以使用 云技术就好了 , 比如像 severless 技术等 , 就不需要使用 后端 , 也能开发这个完整的 全栈项目

