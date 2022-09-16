<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <GroupProfileInfo groupname="Stream Inside"></GroupProfileInfo>
      <FormCreatePost></FormCreatePost>
      <PostBox
        creater="Stream inside"
        datecreate="22:23 12.04.2012"
        postcontent="Hello test"
        bt="1"
        wt="23"
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
import GroupProfileInfo from "@/components/groupProfile/GroupProfileInfo.vue";
import FormCreatePost from "@/components/FormCreatePost.vue";
import PostBox from "@/components/PostBox.vue";
export default {
  name: "GroupProfileView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    GroupProfileInfo,
    FormCreatePost,
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
