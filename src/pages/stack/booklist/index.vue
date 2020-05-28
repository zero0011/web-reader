<template>
  <div>
    <div v-for="(item , index) in bookList" :key="index">
      <div class="book-list-root" @click="bindViewTap">
        <img :src="item.bookCover" class="book-list-image">
        <div class="book-list-child">
          
            <span class="book-list-name">{{item.bookName}}</span>
          
          
            <span class="book-list-autor">{{item.authorName}}</span>
          
          <div class="book-list-des">
            <span>{{item.bookDes}}</span>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import utils from '../../../utils/index'
export default {
  data() {
    return {
      bookList : [],
      stack : []
    }
  },
  mounted() {
    let ID = this.$root.$mp.query.id;
    const request =  utils.request_interface;
    request.get().then(res => {
      // console.log(res.data.data.stack)
      let bTypes = res.data.data.stack[ID].bookTypes;
      // 设置 title
      wx.setNavigationBarTitle({
        title: bTypes
      })
      // 设置数据
      this.bookList = res.data.data.stack[ID].List.bookList
    })
  },
  methods: {
    bindViewTap() {
      mpvue.navigateTo({
        url : '/pages/logs/main'
      })
    }
  },
}
</script>

<style>
.book-list-root {
  display: flex;
  flex-direction: row;
  padding: 10rpx 20rpx;
}
.book-list-image {
  width : 248rpx;
  height: 224rpx;
  flex: 1;
  border-radius: 5%;
}
.book-list-child {
  flex: 3;
  margin-left: 5rpx;
}
.book-list-name {
  font-size: 32rpx;
  color: #444;
  margin-left: 18rpx;
}
.book-list-autor {
  font-size: 26rpx;
  color: #222;
  margin-left: 8rpx;
}
.book-list-des {
  font-size: 24rpx;
  color: #9c9a9c;
  margin-left: 12rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.line {
  border-bottom: 1rpx solid #f0f0f0;
}
</style>