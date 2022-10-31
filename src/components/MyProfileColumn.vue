<template>
  <MyProfileMenu :userimage="userimage" :fio="fio"></MyProfileMenu>
  <FormCreatePost></FormCreatePost>
</template>
<script>
import MyProfileMenu from "./MyProfileMenu.vue";
import FormCreatePost from "./FormCreatePost.vue";
export default {
  name: "MyProfileColumn",
  components: { MyProfileMenu, FormCreatePost },
  props: ["userimage", "fio", "posts"],
};
</script>
<style lang="scss"></style>
