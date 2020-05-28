<template>
  <div>
    <div class="page-search">
      <scroll-view v-for="(item , index) in stack" :key="index" scroll-y="true">
        <div class="stack-view" @click="GotoBooklist(index)">
          <img :src="item.typeCover" class="stack-image">
          <span class="stack-name">{{item.bookTypes}}</span>
          <span class="stack-numb">{{item.bookNumb}}</span>
        </div>
        <div class="line"></div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/index'
export default {
  data() {
    return {
      stack : [],
      id : ''
    }
  },
  mounted() {
    // 请求数据库
    const request = utils.request_interface;
    request.get()
      .then(res => {
        this.stack = res.data.data.stack;
    })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    GotoBooklist(index) {
      mpvue.navigateTo({
        url : `/pages/stack/booklist/main?id=${index}`
      })
    }
  },
}
</script>

<style>
.page-search{

}
.stack-view{
  height: 160rpx;
  padding: 10rpx 20rpx;
  display: block;
}
.stack-image {
  width: 156rpx;
  height: 116rpx;
  position: relative;
  float: left;
  margin-top: 20rpx;
  border-radius: 5%;
}
.stack-name {
  color: #222;
  font-size: 40rpx;
  vertical-align: true;
  margin-left: 46rpx;
  position: relative;
  float: left;
  height: 160rpx;
  line-height: 160rpx;
}
.stack-numb {
  color: #9c9a9c;
  font-size: 24rpx;
  margin-right: 20rpx;
  position: relative;
  float: right;
  height: 160rpx;
  line-height: 160rpx;
}
.line {
  border-bottom: 1 rpx solid #f0f0f0;
}
</style>