<template>
  <MyProfileMenu :userimage="userimage" :fio="fio"></MyProfileMenu>
  <FormCreatePost></FormCreatePost>
  <PostBox
    v-for="post in posts"
    :creater="post.creater_user"
    :datecreate="post.create_at"
    :photo="post.user_photo"
    :postcontent="post.post_text"
  ></PostBox>
</template>
<script>
import MyProfileMenu from "./MyProfileMenu.vue";
import FormCreatePost from "./FormCreatePost.vue";
import PostBox from "./PostBox.vue";
export default {
  name: "MyProfileColumn",
  components: { MyProfileMenu, FormCreatePost, PostBox },
  props: ["userimage", "fio", "posts"],
};
</script>
<style lang="scss"></style>
