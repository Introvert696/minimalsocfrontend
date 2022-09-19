<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <MyProfileColumn
        :userimage="userinfo.user_photo"
        :fio="userinfo.fio"
        :posts="posts"
      >
      </MyProfileColumn>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import RightColumn from "@/components/RightColumn.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import MyProfileColumn from "@/components/MyProfileColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import axios from "axios";
export default {
  name: "MyProfileView",
  components: {
    MainHeader,
    LeftColumn,
    RightColumn,
    MyProfileColumn,
    CenterColumn,
  },
  data() {
    return {
      userinfo: {},
      posts: [],
    };
  },
  methods: {
    getUserInfo() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://localhost/profileinfo/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.userinfo = response.data[0];

          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    setPosts() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);

      axios({
        method: "post",
        url: "http://localhost/myposts/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          console.log(response.data);

          response.data.forEach((element) => {
            console.log(element);
            this.posts.push(element);
          });
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
      this.setPosts();
    }
  },
};
</script>
<style>
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
