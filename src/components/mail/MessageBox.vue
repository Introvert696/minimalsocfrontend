<template>
  <div class="message-box">
    <div class="title-mes">
      <p>{{ username }}</p>
      <p class="mes-date">{{ date }}</p>
    </div>
    <span
      ><p>{{ message }}</p></span
    >
  </div>
</template>
<script>
export default {
  name: "default",
  props: {
    username: String,
    message: String,
    date: String,
  },
};
</script>
<style lang="scss">
.message-box {
  width: 95%;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  min-height: 158px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: left;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin-left: 25px;
    margin-right: 25px;
    color: #353535;
    margin-bottom: 0;
  }
  span {
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: justify;
      color: #656565;
      margin-top: 5px;
      margin-left: 25px;
      margin-right: 25px;
      margin-bottom: 25px;
    }
  }
}
.title-mes {
  display: flex;
  justify-content: space-between;
  .mes-date {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    margin-top: 20px;
    /* identical to box height */
    color: #848484;
  }
}
</style>
