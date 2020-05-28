<template>
  <div class="container">
      <div class="page-line"></div>
      <div v-for="(item , index) in news" :key="index">
          <div class="page-items page-flex">
              <div class="page__lt">
                  <img :src="item.userImg" alt="">
              </div>
              <div class="page__md">
                  <div class="page__md-users">{{item.user}}
                      <div class="page__md-time">{{item.time}}</div>
                  </div>
                  <div class="page__md-news">{{item.news}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import utils from '../../../utils/index'
export default {
    data() {
        return {
            news : []
        }
    },
    mounted() {
        const request = utils.request_interface;
        request.get().then(res => {
            console.log(res.data.data.news)
            this.news = res.data.data.news;
        })
    },
}
</script>

<style>
.page-line {
    width: 750rpx;
    border-bottom: 1rpx solid #F0F0F0;
    
}
.page-items {
    margin: auto;
    width: 750rpx;
    height: 154rpx;
    border-bottom: 1rpx solid #F0F0F0;
}
.page__lt img {
    width: 108rpx;
    height: 108rpx;
    margin: 44rpx 22rpx;
    border-radius: 50%;
}
.page__md-users {
    font-size: 32rpx;
    color: #444;
    font-weight: bold;
}
.page__md-time, .page__md-news {
    font-size: 28rpx;
    color:#C0C0C0;
}
.page__md-time {
    text-align: right;
    margin-top: -50rpx;
    margin-right: 12rpx;
}
.page__md-news {
    margin-top:22rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
}
</style>