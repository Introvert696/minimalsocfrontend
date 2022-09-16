<template>
  <div class="mes-box" @click="goToMess">
    <div class="leftbox">
      <img :src="userphoto" alt="" width="50" height="50" />
    </div>
    <div class="centerbox">
      <p>{{ userfio }}</p>
      <span>{{ mesdesc }}</span>
    </div>
    <div class="rightbox">X</div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "MessageBox",
  props: {
    userfio: String,
    mesdesc: String,
    userphoto: String,
  },
  methods: {
    goToMess() {
      router.push("/mail/34");
    },
  },
};
</script>
<style lang="scss">
.mes-box {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 70px;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    width: 91%;
  }

  .leftbox {
    width: 15%;
    img {
      border-radius: 100px;
      margin-top: 10px;
      margin-left: 20px;
    }
  }
  .centerbox {
    width: 80%;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    color: #353535;
    p {
      margin-top: 20px;
      margin-bottom: 0;
      font-weight: 400;
    }
    span {
      color: #575757;
    }
  }
  .rightbox {
    width: 5%;
    line-height: 14px;
    color: #999999;
    margin-top: 10px;
  }
}
</style>
