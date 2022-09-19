<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Диалоги:" linkname="cоздать диалог"></CenterTitle>
      <MessageBox
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        userfio="Глад валакас"
        mesdesc="Даб даб я"
      ></MessageBox>
      <MessageBox
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        userfio="Глад валакас"
        mesdesc="Даб даб я"
      ></MessageBox>
      <MessageBox
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        userfio="Глад валакас"
        mesdesc="Даб даб я"
      ></MessageBox>
      <MessageBox
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        userfio="Глад валакас"
        mesdesc="Даб даб я"
      ></MessageBox>
      <MessageBox
        userphoto="https://twitchpedia.ru/wp-content/uploads/2021/05/glad-valakas-2.jpg"
        userfio="Глад валакас"
        mesdesc="Даб даб я"
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
