<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Диалоги:" linkname="cоздать диалог"></CenterTitle>
      <MessageBox
        v-for="mes in mesGroup"
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        :userfio="'Диалог: ' + mes.first_user + ' и ' + mes.twelf_user"
        :mesgrid="mes.mgr_id"
        v-on:delete="delteMes"
      ></MessageBox>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import MessageBox from "@/components/MessageBox.vue";
import CenterTitle from "@/components/CenterTitle.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "MailView",
  components: {
    MainHeader,
    LeftColumn,
    RightColumn,
    CenterColumn,
    MessageBox,
    CenterTitle,
  },
  data() {
    return {
      mesGroup: [],
    };
  },
  methods: {
    delteMes(val) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("mesGroupId", val);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/deletemessagegroup",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          console.log(response);
          router.go("/mail");
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
    getUserMesGroup() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/messages",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.mesGroup = response.data;
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
      this.getUserMesGroup();
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
