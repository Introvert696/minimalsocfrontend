<template>
  <MyProfileMenu></MyProfileMenu>
  <FormCreatePost></FormCreatePost>
  <PostList></PostList>
</template>
<script>
import MyProfileMenu from "./MyProfileMenu.vue";
import FormCreatePost from "./FormCreatePost.vue";
import PostList from "./PostList.vue";
export default {
  name: "MyProfileColumn",
  components: { MyProfileMenu, FormCreatePost, PostList },
};
</script>
<style lang="scss"></style>
