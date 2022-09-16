<template>
  <MainHeader> </MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <UserProfileInfo></UserProfileInfo>
      <PostBox
        creater="Name lastname"
        datecreate="23.12.2012"
        postcontent="Мой тестовый пост"
        bt="1"
        wt="2"
      ></PostBox>
      <PostBox
        creater="Name lastname"
        datecreate="23.12.2012"
        postcontent="Мой тестовый пост"
        bt="1"
        wt="2"
      ></PostBox>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import UserProfileInfo from "../components/userprofile/UserProfileInfo.vue";
import PostBox from "@/components/PostBox.vue";
export default {
  name: "UserProfileView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    UserProfileInfo,
    PostBox,
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
