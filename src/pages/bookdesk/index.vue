<template>
  <div class="container">
    <!-- 头部 时间显示 -->
    <div class="page__hd center">
      <div class="page__hd-mm">60</div>
      <span class="page_hd-dd">分钟</span>
      <div class="page__hd-xiala">
        <img :src="xialaUrl" class="xiala" />
      </div>
      <div class="page__hd-desk">
        <img :src="deskUrl" alt />
      </div>
    </div>

    <!-- 书籍轮播 -->
    <swiper class="swiper" 
    indicator-dots="true" 
    autoplay="true" 
    interval="5000" 
    duration="1000" 
    @click="StartRead"
    >
      <swiper-item >
        <div class="page__bd">
          <div class="page__bd-books center">
            <img :src="book1Url" alt />
          </div>
          <div class="page__bt">
            <div class="page__bt-readings">南风知我意</div>
            <div class="page__bt-items center">
              <span>1186人在读</span>
              <img :src="rgUrl" alt />
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item >
        <div class="page__bd">
          <div class="page__bd-books center">
            <img :src="book2Url" alt />
          </div>
          <div class="page__bt">
            <div class="page__bt-readings">人工智能</div>
            <div class="page__bt-items center">
              <span>1193人在读</span>
              <img :src="rgUrl" alt />
            </div>
          </div>
        </div>
      </swiper-item>
      <swiper-item >
        <div class="page__bd">
          <div class="page__bd-books center">
            <img :src="book3Url" alt />
          </div>
          <div class="page__bt">
            <div class="page__bt-readings">编写高质量代码:改善JavaScript程序的</div>
            <div class="page__bt-items center">
              <span>86人在读</span>
              <img :src="rgUrl" alt />
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { downloadFile } from '../../utils/index'
export default {
  data() {
    return {
      xialaUrl: "",
      deskUrl: "",
      book1Url: "",
      book2Url: "",
      book3Url: "",
      rgUrl: "",
      name: "",
    };
  },
  mounted() {

    let baseUrl = "cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/"; //根路径
    let imgs = ["xiala", "desk", "book1", "book2", "book3", "rg"]; // 图片名

    downloadFile(baseUrl, imgs, (img,res) => {
        // 同时设置 data 属性
        (this.$data)[img + 'Url'] = res.tempFilePath;
    })

    
  },
  methods: {
    StartRead() {
     wx.navigateTo({
       url : '/pages/bookdesk/reader/main',
       fail : function(error) {
         console.log(error)
       }
     })
    }
  },
};
</script>

<style lang="css" scoped>
.page__hd {
  position: relative;
}
.page__hd-mm {
  font-size: 38rpx;
  color: #444;
  line-height: 38rpx;
  font-family: bold;
}
.page__hd-dd {
  font-size: 24rpx;
  color: #b3b3b3;
  margin-left: 14rpx;
}
.page__hd .page__hd-xiala img {
  width: 18rpx;
  height: 18rpx;
  margin-left: 16rpx;
  margin-bottom: 6rpx;
}
.page__hd .page__hd-desk img {
  position: absolute;
  width: 60rpx;
  height: 60rpx;
  margin-top: -32rpx;
  margin-left: 232rpx;
}
.swiper {
  margin-left: 168rpx;
  width: 416rpx;
  height: 960rpx;
}
.page__bd-books img {
  margin-top: 116rpx;
  width: 416rpx;
  height: 582rpx;
  border-radius: 8rpx;
}
.page__bt-readings {
  margin-top: 80rpx;
  font-size: 38rpx;
  color: #444;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.page__bt-items {
  margin-top: 42rpx;
}
.page__bt-items > span {
  font-size: 26rpx;
  color: #b3b3b3;
}
.page__bt-items img {
  width: 24rpx;
  height: 24rpx;
  margin-left: 16rpx;
}
</style>