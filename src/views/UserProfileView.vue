<template>
  <MainHeader> </MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <UserProfileInfo
        :id="userinfo.id"
        :img="userinfo.user_photo"
        :username="userinfo.fio"
        v-on:addtofriend="addToFriend"
      ></UserProfileInfo>
      <PostBox
        v-for="post in posts"
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
import CenterColumn from "@/components/CenterColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import UserProfileInfo from "../components/userprofile/UserProfileInfo.vue";
import PostBox from "@/components/PostBox.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "UserProfileView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    UserProfileInfo,
    PostBox,
  },
  data() {
    return {
      userinfo: {},
      posts: [],
    };
  },
  methods: {
    addToFriend(friend_id) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("friend_id", friend_id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/addfriend",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          console.log(response.data);
          if (response.data == "") {
            router.push("/404");
          }
          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    getUserInfo() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("user_id", this.$route.params.id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/userprofile",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.userinfo = response.data;
          console.log(response.data);
          if (response.data == "") {
            router.push("/404");
          }
          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    getUserPosts() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("user_id", this.$route.params.id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/myposts",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.posts = response.data;
          console.log(response.data);

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
      this.getUserInfo();
      this.getUserPosts();
    }
  },
};
</script>
<style lang="scss">
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
