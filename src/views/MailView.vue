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
        mesdesc="-"
        :mesgrid="mes.mgr_id"
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
    getUserMesGroup() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://minimalsoc.eurodir.ru/messages",
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
