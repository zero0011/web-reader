<template>
  <div class="container">
    <div class="page__hd">
      <div class="page__hd-pagetitle center">领读</div>
    </div>
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
  </div>
</template>

<script>
import utils from "@/utils/index";
export default {
  data() {
    return {
      authors: [],
      id: "",
      pointer_url : ''
    };
  },
  mounted() {
    // 网络请求 , 使用小程序云开发
    // 1.获取数据库引用
    const request = utils.request_interface;
    request.get().then(res => {
      this.authors = res.data.data.index;
      // 隐藏toast
      mpvue.hideToast();
    });

    // 云开发 存储请求
     wx.cloud.downloadFile({
      fileID : 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/pointer.png',
    }).then(res => {
      this.pointer_url = res.tempFilePath;
    }).catch(error => {
      console.log(error)
    })

  },
  methods: {
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
  }
};
</script>

<style>
.page__hd {
  width: 100%;
  height: 100rpx;
  background: #fff;
}
.page__hd::before {
  content: "";
  position: absolute;
  top: 80rpx;
  left: 0;
  right: 0;
  border-top: 1rpx solid #f6f6f6;
}
.page__hd-pagetitle {
  font-size: 36rpx;
  font-weight: bold;
  color: #444;
}
.page__bd {
  width: 100%;
}
.page__bd-head {
  height: 128rpx;
  margin-left: 30rpx;
  display: flex;
  flex-direction: row;
}
.head-img {
  flex:  0 0 10rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-flex {
  flex: 1;
}
.page__bd-head img {
  width: 66rpx;
  height: 66rpx;
  line-height: 66rpx;
  border-radius: 50%;
}
.artic-author {
  display: inline-block;
  margin-top: 8rpx;
  /* margin-bottom: 40rpx; */
  /* line-height: 28rpx; */
  margin-left: 28rpx;
  font-size: 28rpx;
  color: #444;
}
.page__bd-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page__bd-banner image {
  width: 688rpx;
  height: 350rpx;
  border-radius: 15rpx;
}
.page__bd-middle {
  width: 688rpx;
}
.page__bd-middle .artic-title,
.page__bd-middle .artic-content {
  margin-left: 34rpx;
}
.page__bd-middle .artic-title,
.page__bd-middle .artic-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.page__bd-middle .artic-title {
  margin-top: 32rpx;
  margin-bottom: 32rpx;
  font-size: 44rpx;
  color: #444;
  font-weight: bold;
}
.page__bd-middle .artic-content {
  font-size: 32rpx;
  color: #7f7f7f;
  margin-bottom: 28rpx;
}
.page__bd-foot {
  height: 92rpx;
}
.page__bd-foot .foot-lt,
.page__bd-foot .foot-rt {
  color: #c6c6c6;
  font-size: 28rpx;
}
.page__bd-foot .foot-lt {
  margin-left: 34rpx;
}
.page__bd-foot .foot-rt {
  text-align: right;
  margin-right: 72rpx;
}
.foot-rt .finger {
}
.finger image {
  width: 28rpx;
  height: 28rpx;
  transform: translate(44rpx, -42rpx);
}
.page__bd-foot:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  bottom: 18rpx;
  border-top: 16rpx solid #f6f6f6;
}
</style>