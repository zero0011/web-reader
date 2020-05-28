# reader

> 基于 mpvue 的 跨平台的小程序 读书商城

# 打开项目

git clone https://github.com/zero0011/web-reader.git

## 安装依赖
npm i

## 开发时构建
npm run  dev

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

## 小程序端

1. leader(领读)
    - authors(作者)
    - stories(故事)

2. stack(分类)
    - booklist(图书列表)

3. bookdesk(书桌)
    - reader(阅读器)

4. mine(我的)
    - news(通知)

5. app.json

```js
"tabBar" : {
    "list" : [
        {
            "pagePath":"pages/leader/main",
        },
        {
            "pagePath":"pages/stack/main"
        },
        {
            "pagePath":"pages/bookdesk/main"
        },
        {
            "pagePath":"pages/mine/main"
        }
    ]
}
```


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
1. mpvue 最大的优点的 , 我觉得应该就是其跨平台开发的框架 , 一次编写 , 可以在 微信 , 支付宝等 平台使用 
2. mpvue 的缺点也是很明显的 , 就是没有很好的开发文档 , 出了什么不知名的错误都不知道 怎么处理 , 比如 在 mpvue 中 使用 epubjs 解析 , 就会出现 bug 。 导致我曾经 使用 vue 写的 web 移动端阅读器 无法迁移到 mpvue 中 , 项目没有全部完成。
3. 写项目最关键是得有耐心 , 写这个项目 , 学习到了 小程序云开发的 基本过程。 但是 , 下面如果写 跨平台的小程序 , 应该会 使用 uni-app 其他框架了吧。 