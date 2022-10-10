<template>
  <div class="groupbox">
    <div class="image-side">
      <img :src="photo" alt="Фото группы" width="50" height="50" />
    </div>
    <div class="text-side">
      <p @click="goToProfileView(23)">{{ groupname }}</p>
      <span>{{ quantitymember }} Подписчиков</span>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "GroupBox",
  props: {
    groupname: String,
    quantitymember: String,
    photo: String,
  },
  methods: {
    goToProfileView(val) {
      router.push("/group/" + val);
    },
  },
};
</script>
<style lang="scss">
.groupbox {
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 90%;
  height: 80px;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  margin-bottom: 20px;
  &:hover {
    width: 92%;
    height: 85px;
  }
}
.image-side {
  img {
    border-radius: 100px;
    margin-top: 15px;
    margin-left: 20px;
  }
}
.text-side {
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  color: #353535;
  margin-left: 15px;
  font-weight: 400;
  cursor: pointer;
  p {
    margin-top: 20px;
    margin-bottom: 5px;
  }
  span {
    color: #737373;
  }
}
</style>
