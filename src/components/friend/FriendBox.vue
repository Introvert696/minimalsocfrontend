<template>
  <div class="friendbox">
    <div class="left-fr">
      <img :src="img" alt="" width="50" height="50" />
    </div>
    <div class="right-fr">
      <p @click="goToUserProfile">{{ username }}</p>
      <span @click="senmes">Написать сообщение</span>
    </div>
    <div class="delete" @click="deletefriend">
      <p>Удалить</p>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "FriendBox",
  props: {
    username: String,
    img: String,
    id: Number,
  },
  methods: {
    deletefriend() {
      this.$emit("delfriend", this.id);
    },
    goToUserProfile(val) {
      router.push("/user/" + this.id);
    },
    senmes() {
      this.$emit("writemessage", this.id);
    },
  },
};
</script>
<style lang="scss">
.delete {
  text-align: right;
  margin-left: auto;
  margin-right: 25px;
  color: #737373;
}
.friendbox {
  display: flex;

  text-align: left;
  margin: auto;
  min-height: 80px;
  width: 90%;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 15px;
  color: #353535;
  cursor: pointer;
  &:hover {
    width: 91%;
    height: 82px;
  }

  .left-fr {
    img {
      border-radius: 100px;
      margin-top: 15px;
      margin-left: 20px;
    }
  }
  .right-fr {
    text-align: left;
    margin-left: 15px;
    p {
      margin-top: 20px;
      margin-bottom: 5px;
    }
    span {
      color: #737373;
      &:hover {
        font-weight: 600;
      }
    }
  }
}
</style>
