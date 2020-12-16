<template>
  <div class="container log-list">
    <div v-for="(log , index) in logs" :key="index">
        <span class="log-item">{{index + 1}}. {{log}}</span>
    </div>
  </div>
</template>

<script>
import util from "../../utils/index";
export default {
  data() {
    return {
      logs: [],
      nums: [],
    };
  },
  mounted() {
      this.logs = (wx.getStorageSync('logs') || []).map(log => {
          return util.formatTime(new Date(log));
      })
  },
};
</script>

<style>
.log-list {
    display: flex;
    flex-direction: column;
    padding: 40rpx
}
.log-item {
    margin: 10 rpx;
}
</style>