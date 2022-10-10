<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Поиск:" linkname="сброс" linkurl="#"></CenterTitle>
      <SearchField v-on:getresult="getResult"></SearchField>
      <FriendBox
        v-for="user in queryData"
        :username="user.name + ' ' + user.lastname"
        :img="user.user_photo"
        :id="user.id"
        v-on:writemessage="writeMessage"
      ></FriendBox>

      <!-- <GroupBox groupname="Stream inside"></GroupBox>
      <DocumentBox namedoc="Музыка.mp4" sizedoc="23"></DocumentBox> -->
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
import SearchField from "../components/search/SearchField.vue";
import FriendBox from "@/components/friend/FriendBox.vue";
import GroupBox from "@/components/group/GroupBox.vue";
import DocumentBox from "@/components/docs/DocumentBox.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "SearchView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    SearchField,
    FriendBox,
    GroupBox,
    DocumentBox,
  },
  data() {
    return {
      queryData: "",
    };
  },
  methods: {
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
    getResult(val) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("query_string", val);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/search/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          console.log(response.data);
          this.queryData = response.data;
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
    }
  },
};
</script>
<style lang="scss"></style>
