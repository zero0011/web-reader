<template>
  <div class="container">
    <div v-for="(item, index) in authorInfo" :key="index">
      <div class="page__hd">
        <div class="page__hd-title">
          {{item.articTitle}}
        </div>
        <div class="page__hd-wrp">
          <div class="author-info page-flex">
            <img :src="item.headImg" alt="">
            <div class="author-name">{{item.userName}}
              <div class="author-des">{{item.authorDes}}</div>
            </div>
            <div class="follow">
              关注
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(item ,index) in article" :key="index">
      <div class="page__bd">
        <div class="article-content">
          <span>{{item.text1}}</span>
          <img :src="item.imgae1" alt="">
          <span>{{item.text2}}</span>
          <img :src="item.image2" alt="">
        </div>
      </div>

      <div class="tuijian">书籍推荐</div>
      <div class="page-items page-flex">
        <div class="bookImg">
          <img :src="item.bookCover" alt="">
        </div>
        <div class="info">{{item.bookName}}
          <div class="author">{{item.bookAuthor}}
            <div class="readers">{{item.readerNum}}人在读</div>
          </div>
        </div>
        <div class="readbtn">开始阅读</div>
      </div>

      <div class="log page-flex">
        <div class="updateTime">更新于{{item.updateTime}}</div>
        <span>举报</span>
      </div>

      <div class="btnThumb">
        <img :src="thumbUrl" alt="">用生命点赞
      </div>
    </div>

    <div class="page_bt page-flex">
      <div class="bottpm-items">
        <img src="../../../../static/images/share.png" alt="">
      </div>
      <div class="bottom-items">
        <img src="../../../../static/images/like.png" alt="">
      </div>
      <div class="bottom-items">
        <img src="../../../../static/images/news.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../../../utils/index'
export default {
  data() {
    return {
      authorInfo : [],
      article : [],
      index : [],
      thumbUrl : ''
    }
  },
  mounted() {
    // 参数列表
    let query = this.$root.$mp.query;
    const request = utils.request_interface;
    request.get().then(res => {
      this.authorInfo = res.data.data.index[query.id].articleInfo;
      this.article = res.data.data.index[query.id].articleInfo;
    })

    // 主题图片
    wx.cloud.downloadFile({
      fileID : 'cloud://zero0011-b6bed.7a65-zero0011-b6bed-1302196729/imgaes/thumb.png'
    }).then(res => {
      this.thumbUrl = res.tempFilePath;
    }).catch(error => {
      console.log(error)
    })
  },
}
</script>

<style>
/* pages/stories/stories.wxss */
.page__hd {
    width: 750rpx; 
}
.page__hd-title {
    font-size: 44rpx;
    color:#444;
    margin-left: 36rpx;
    margin-top: 46rpx;
    margin-bottom: 42rpx;
    font-weight: bold;
}
.author-info image {
    width: 72rpx;
    height: 72rpx;
    margin-left: 36rpx;
    margin-right: 26rpx;
    border-radius: 50%;
}
.author-name {
    margin-bottom: 16rpx;
    width: 446rpx;
    font-size: 28rpx;
    color: #575757;
    margin-right: 20rpx;
}
.author-des {
    font-size: 28rpx;
    color: #C8C8C8;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
}
.follow {
    font-size: 28rpx;
    display: inline-block;
    padding: 12rpx 26rpx;
    color: #7d7d7d;
    border: solid 1rpx #F0F0F0;
    /* margin-right: rpx; */
    border-radius: 45rpx;
}
.article-content{
    padding: 30rpx 40rpx;
    background: #ffffff;
}
.article-content span{
    font-size: 32rpx;
    color: #454545;
    line-height: 44rpx;
}
.article-content img{
    width: 100%;
    margin: 20rpx 0;
}
.page__bt {
    position: fixed;
    bottom: 0;
    height: 70rpx;
    border-top: solid 1px #ebebeb;
    background: #ffffff;
    width: 670rpx;
    padding: 20rpx 40rpx;    
}

.page-items .bookImg img {
    width: 174rpx;
    height: 232rpx;
    margin: 110rpx 32rpx 24rpx 32rpx;
    border-radius: 8rpx;
}
.tuijian {
    font-size: 34rpx;
    color: #444;
    padding-bottom: 12  rpx;
    font-weight: bold;
}
.page-items .info {
    width: 276rpx;
    font-size: 34rpx;
    color: #444;
    font-weight: bold;
    margin-top: 24rpx;
}
.info .author {
    font-size: 24rpx;
    color: #959595;
    margin-top: 28rpx;
    /* margin-bottom: 36rpx; */
}
.author .readers {
    margin-top: 36rpx;    
    font-size: 20rpx;
    color: #bcbcbc;
}
.readbtn {
    /* margin-top: -220rpx;     */
    font-size: 32rpx;
    display: inline-block;
    padding: 20rpx 24rpx;
    color: #d5caa8;
    border: solid 1rpx #d5caa8;
    margin-right: -18rpx;
    border-radius: 45rpx;
    margin-top: 20rpx;
}
.tuijian, .page-items {
    width: 680rpx;
    margin-left: 35rpx;
    margin-top: 36rpx;
    border-bottom: 1rpx solid #F0F0F0;
}
.log {
    margin-top: 20rpx;
    font-size: 26rpx;
    color: #ccc;
}
.updateTime {
    margin-left: 40rpx;
    padding-right: 412rpx;
}

.btnThumb {
    /* margin: auto; */
    position: relative;
    font-size: 32rpx;
    display: inline-block;
    padding: 40rpx 72rpx 40rpx 128rpx;
    color: #fee8e5;
    background: #f66350;
    border: solid 1rpx #F66350;
    margin-left: 200rpx;
    margin-right: -18rpx;
    border-radius: 80rpx;
    margin-top: 70rpx;
    margin-bottom: 120rpx;
}
.btnThumb img {
    position: absolute;
    width: 48rpx;
    height: 48rpx;
    margin-top: 1rpx;
    margin-left: -60rpx;
    /* margin-right: 20rpx; */
}

.bottom-items {
    
}
.bottom-items img {
    margin: 28rpx 72rpx 28rpx 72rpx;
    width: 86rpx;
    height: 86rpx;
    display: block;
}
.page__bd{
  padding-top: 108rpx;
}
.page_bt{
  display: none;
}
</style>