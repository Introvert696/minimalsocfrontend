<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <groupInfo @creategroup="createGroup"> </groupInfo>
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
import GroupBox from "../components/group/GroupBox.vue";
import groupInfo from "@/components/createGroup/groupInfo.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "GroupView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    GroupBox,
    groupInfo,
  },
  data() {
    return {
      groupInfo: {},
    };
  },
  methods: {
    createGroup(title, desk) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("title", title);
      bodyFormData.append("desk", desk);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/creategroup",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          router.push("/group/" + response.data["id"]);
          //console.log(response);
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
<style lang="scss">
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
