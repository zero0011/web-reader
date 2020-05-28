<template>
  <div class="container">
    <div class="page__hd">
      <div class="page__hd-tp">编辑</div>
      <div class="page__hd-md center">
        <img :src="avatarUrl" alt @click="GetAvatar" />
      </div>
      <div class="page-username center">文君</div>
      <div class="page__hd-bt page-flex">
        <div class="page-bt-lt">
          <div class="page-lt-readingtimes">5小时52分钟</div>
          <div class="page-lt-readingtime">读书时长</div>
        </div>
        <div class="cline">|</div>
        <div class="page-bt-rt">
          <div class="page-rt-lt">
            <div class="page-rt-numbers">5</div>
            <div class="page-rt-items">蜗牛壳</div>
          </div>
        </div>
        <div class="page-rg">></div>
      </div>
    </div>
    <div class="page__bd">
      <div class="page__bd-items page-flex" @click="tomyNews">
        <div class="page-items-lt">
          <img :src="newsUrl" alt />
        </div>
        <div class="page-items-md">我的消息</div>
        <div class="page-items-others"></div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="booklistUrl" alt />
        </div>
        <div class="page-items-md">我的书单.书评</div>
        <div class="page-items-others">写书评</div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="noteUrl" />
        </div>
        <div class="page-items-md">我的笔记</div>
        <div class="page-items-others">8</div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="fansUrl" />
        </div>
        <div class="page-items-md">关注.粉丝</div>
        <div class="page-items-others"></div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="timesUrl" />
        </div>
        <div class="page-items-md">购买时长</div>
        <div class="page-items-others"></div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="updateUrl" />
        </div>
        <div class="page-items-md">更新续订</div>
        <div class="page-items-others">点我找回阅读时长</div>
        <div class="page-items-ft">></div>
      </div>
      <div class="page__bd-items page-flex">
        <div class="page-items-lt">
          <img :src="setsUrl" alt />
        </div>
        <div class="page-items-md">设置</div>
        <div class="page-items-others"></div>
        <div class="page-items-ft">></div>
      </div>
    </div>
  </div>
</template>

<script>
import { downloadFile } from '../../utils/index'
export default {
  data() {
    return {
      avatarUrl : '',// 用户头像
      newsUrl : '',
      booklistUrl : '',
      noteUrl : '',
      fansUrl : '',
      timesUlr : '',
      updateUrl : '',
      setsUrl : ''
    }
  },
  methods: {
    // 跳转到我的消息页面
    tomyNews() {
      mpvue.navigateTo({
        url: "/pages/mine/news/main"
      });
    },
    // 获得头像
    GetAvatar() {
      wx.cloud.downloadFile({
        fileID : 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/reader/book.jpg',
      }).then(res => {
        this.AvatarUrl = res.tempFilePath;
        
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    // 设置用户头像
    wx.cloud.downloadFile({
      fileID : 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/headImage.JPG'
    }).then(res => {
      this.avatarUrl = res.tempFilePath;
    })

    // 设置其他图片
    let baseUrl = 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/mines/';
    let imgs = ['news','booklist','note','fans','times','update','sets']; // 图片名

    downloadFile(baseUrl, imgs , (img , res) => {
      this.$data[img + 'Url'] = res.tempFilePath;
    })
  },
};
</script>

<style>
.page__hd {
  height: 516rpx;
}
.page__hd-tp {
  text-align: right;
  margin-right: 32rpx;
  font-size: 34rpx;
  color: #c2b282;
}
.page__hd-md img {
  width: 164rpx;
  height: 164rpx;
  margin-bottom: 40rpx;
  border-radius: 50%;
}
.page-username {
  font-size: 36rpx;
  color: #444;
  margin-bottom: 72rpx;
}
.page-bt-lt,
.page-bt-rt {
  width: 375rpx;
}
.cline {
  margin-left: 80rpx;
  color: #999;
}
.page-lt-readingtimes,
.page-rt-numbers {
  font-size: 34rpx;
  color: #444;
  text-align: center;
  margin-left: 60rpx;
}
.page-lt-readingtime,
.page-rt-items {
  font-size: 24rpx;
  color: #b3b3b3;
  text-align: center;
  margin-left: 60rpx;
}

.page-rg {
  font-size: 34rpx;
  color: #b3b3b3;
  margin-right: 28rpx;
}

.page__hd::after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  top: 516rpx;
  border-top: 18rpx solid #f6f6f6;
}

.page__bd {
  margin-bottom: 40rpx;
}

.page__bd-items {
  margin-bottom: 64rpx;
}
.page__bd img {
  width: 40rpx;
  height: 40rpx;
}
.page-items-lt,
.page-items-md {
  margin-left: 34rpx;
}
.page-items-lt {
  margin-top: 8rpx;
}
.page-items-md {
  width: 222rpx;
  font-size: 34rpx;
  color: #444;
}
.page-items-others {
  text-align: right;
  width: 351rpx;
  font-size: 34rpx;
  color: #b3b3b3;
}
.page-items-ft {
  width: 41rpx;
  text-align: right;
  color: #b3b3b3;
  font-size: 34rpx;
  /* margin-left: 450rpx;   */
}
</style>