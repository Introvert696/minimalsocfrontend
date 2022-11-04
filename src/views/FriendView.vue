<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Друзья:"></CenterTitle>
      <FriendBox
        v-for="friend in friends"
        :username="friend.fio"
        :img="friend.user_photo"
        :id="friend.id"
        v-on:writemessage="writeMessage"
        v-on:delfriend="deleteFriend"
      ></FriendBox>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import CenterTitle from "@/components/CenterTitle.vue";
import FriendBox from "../components/friend/FriendBox.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "FriendView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    FriendBox,
  },
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    deleteFriend(id) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("friend_id", id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/deletefriend",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          router.go("/friend");

          console.log(response.data);

          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    writeMessage(id) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("user_id", id);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/createdialog",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          if (response.data) {
            router.push("/mail/" + response.data["mgr_id"]);
          }
          console.log(response.data);

          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    getUserFriends() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/friends",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.friends = response.data;

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
      this.getUserFriends();
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
