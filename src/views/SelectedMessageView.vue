<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Иван Филатов" linkname="Удалить диалог"></CenterTitle>
      <FormWitchMessages>
        <MessageBox
          v-for="im in message"
          :username="im.from_fio"
          :message="im.content"
          :send_date="im.send_at"
        ></MessageBox>
      </FormWitchMessages>
      <InputMessage v-on:sendmessage="sendMessage"></InputMessage>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import CenterTitle from "@/components/CenterTitle.vue";
import FormWitchMessages from "../components/mail/FormWitchMessages.vue";
import InputMessage from "@/components/mail/InputMessage.vue";
import axios from "axios";
import MessageBox from "@/components/mail/MessageBox.vue";
import router from "@/router";

export default {
  name: "SelectedMessageView",
  components: {
    MainHeader,
    CenterColumn,
    LeftColumn,
    RightColumn,
    CenterTitle,
    FormWitchMessages,
    InputMessage,
    MessageBox,
  },
  data() {
    return {
      message: [],
      responseData: [],
    };
  },
  methods: {
    sendMessage(message) {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("selected_mail_group", this.$route.params.id);
      bodyFormData.append("content", message);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/sendmessage/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.responseData = response.data;
          console.log(response);
          this.$router.go();
          return response.data;
        })
        .catch((response) => {
          console.log(response);

          return false;
        });
    },
    getMessages() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("selected_mail_group", this.$route.params.id);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/messages/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.message = response.data;
          return response.data;
        })
        .catch((response) => {
          console.log(response.response.status);

          return false;
        });
    },
  },
  mounted() {
    if (typeof localStorage.token === "undefined") {
      router.push("/");
    } else {
      this.getMessages();
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
