<template>
  <div class="postbox">
    <div class="title-postbox">
      <img :src="photo" alt="" width="50" height="50" />
      <div class="text-title">
        <p>{{ creater }}</p>
        <span>{{ datecreate }}</span>
      </div>
    </div>
    <div class="content-postbox">
      <p>{{ postcontent }}</p>
    </div>
    <div class="likes">
      <div class="dot">
        <div class="figure"></div>
        <p>{{ wt }} БТ</p>
      </div>
      <div class="dot">
        <div class="figure bw"></div>
        <p>{{ bt }} ЧТ</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostBox",
  props: {
    creater: String,
    datecreate: String,
    photo: String,
    postcontent: String,
    bt: String,
    wt: String,
  },
};
</script>
<style lang="scss">
.postbox {
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  width: 90%;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.title-postbox {
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  font-size: 12px;
  color: #353535;
  text-align: left;

  p {
    margin-bottom: 0;
  }
  img {
    border-radius: 100px;
  }
  .text-title {
    margin-left: 10px;
    span {
      font-weight: 400;
      font-size: 12px;
      color: #9c9c9c;
    }
  }
}
.content-postbox {
  margin: 25px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #4d4d4d;
  text-align: justify;
}
.likes {
  display: flex;
  display: none;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  * {
    display: flex;
  }
  .dot {
    p {
      margin-top: 5px;
      margin-left: 5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: #9a9a9a;
    }
  }
}
.bw {
  background: #d9d9d9;
}
.figure {
  width: 25px;
  height: 25px;
  border: #d9d9d9 1px solid;
  border-radius: 100px;
}
</style>
