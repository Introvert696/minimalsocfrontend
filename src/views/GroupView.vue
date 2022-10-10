<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Группы:"> </CenterTitle>
      <GroupBox
        v-for="group in groups"
        :groupname="group.groupname"
        :photo="group.gr_photo"
        quantitymember="200"
      ></GroupBox>
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
import axios from "axios";
export default {
  name: "GroupView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    GroupBox,
  },
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    getUsersGroup() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/getusergroup",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.groups = response.data;
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
      this.getUsersGroup();
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
