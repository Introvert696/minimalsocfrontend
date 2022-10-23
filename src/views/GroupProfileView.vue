<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <GroupProfileInfo
        :groupname="groupInfo.title"
        :image="groupInfo.gr_photo"
      ></GroupProfileInfo>
      <!-- <FormCreatePost></FormCreatePost> -->
      <!-- <PostBox
        creater="Stream inside"
        datecreate="22:23 12.04.2012"
        postcontent="Hello test"
        bt="1"
        wt="23"
      ></PostBox> -->
      <PostBox
        v-for="post in groupPosts"
        :id="post.post_id"
        :creater="groupInfo.title"
        :datecreate="post.create_at"
        :photo="groupInfo.gr_photo"
        :postcontent="post.post_text"
        :userchange="deletepost"
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
import GroupProfileInfo from "@/components/groupProfile/GroupProfileInfo.vue";
import FormCreatePost from "@/components/FormCreatePost.vue";
import PostBox from "@/components/PostBox.vue";

import axios from "axios";
import router from "@/router";
export default {
  name: "GroupProfileView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    GroupProfileInfo,
    FormCreatePost,
    PostBox,
  },
  data() {
    return {
      groupInfo: {},
      groupPosts: [],
    };
  },
  methods: {
    deletepost() {
      console.log(111);
      alert(0);
    },
    getGroupInfo() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("groupId", this.$route.params.id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/getgroup/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.groupInfo = response.data[0];
          console.log(response.data);
          if (response.data == "") {
          }
          this.groupPosts = response.data[1];
          return response.data;
        })
        .catch((response) => {
          //handle error
          router.push("/404");
          return false;
        });
    },
  },
  mounted() {
    if (typeof localStorage.token === "undefined") {
      router.push("/");
    } else {
      this.getGroupInfo();
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
