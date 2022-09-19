<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Иван Филатов" linkname="Удалить диалог"></CenterTitle>
      <FormWitchMessages></FormWitchMessages>
      <InputMessage></InputMessage>
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
export default {
  name: "SelectedMessage",
  components: {
    MainHeader,
    CenterColumn,
    LeftColumn,
    RightColumn,
    CenterTitle,
    FormWitchMessages,
    InputMessage,
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
