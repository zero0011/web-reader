<template>
<div class="container">
    <img class="img" src="../../../static/images/start.jpg" alt />
</div>
</template>

<script>
import url from "../leader/index";
export default {
    mounted() {
      setTimeout(() => {
        mpvue.reLaunch({
          url: "../leader/main"
        });
      }, 0);
    }
};
</script>

<style  scoped>
.container > .img {
    width: 100%;
    height: 750rpx;
}
</style>

