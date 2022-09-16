<template>
  <div class="header">
    <div class="logo" @click="openMainPages">
      <p>MinimalSoc</p>
    </div>
    <div class="time">
      <p>{{ time }}</p>
    </div>
    <div class="menu">
      <p>Выход</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
  computed: {
    time: function () {
      let Data = new Date();
      let hour =
        Data.getHours() + ":" + Data.getMinutes() + ":" + Data.getSeconds();
      return hour;
    },
  },
  methods: {
    openMainPages() {
      this.$router.push("/feed");
    },
  },
};
</script>
<style lang="scss">
.header {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  .logo {
    font-size: 24px;
    color: #353535;
    margin-top: -15px;
  }
  .time {
    font-size: 12px;
    color: #676767;
    margin-top: 0.2%;
  }
  .menu {
    font-size: 12px;
    color: #c0c0c0;
    margin-top: 0.2%;
  }
}
</style>
