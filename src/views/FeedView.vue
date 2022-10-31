<template>
  <MainHeader> </MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <PostBox
        v-for="post in posts"
        :id="post.post_id"
        :creater="post.creater_user"
        :datecreate="post.create_at"
        :photo="post.user_photo"
        :postcontent="post.post_text"
      ></PostBox>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import CenterColumn from "@/components/CenterColumn";
import RightColumn from "@/components/RightColumn.vue";
import PostList from "@/components/PostList.vue";
import router from "@/router";
import axios from "axios";
import PostBox from "@/components/PostBox.vue";
export default {
  name: "FeedView",
  title: "Новости",
  components: {
    MainHeader,
    LeftColumn,
    RightColumn,
    CenterColumn,
    PostList,
    PostBox,
  },

  data: () => ({
    posts: [],
  }),
  methods: {
    setPosts() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/feedpost/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          console.log(response.data);
          this.posts = response.data;
          // response.data.forEach((element) => {
          //   console.log(element);
          //   this.posts.push(element);
          // });
          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
  },
  mounted() {
    if (typeof localStorage.token === "undefined") {
      router.push("/");
    } else {
      this.setPosts();
    }
  },
};
</script>
<style lang="scss">
body {
  background: #e7e7e7;
}
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
