<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Друзья:"></CenterTitle>
      <FriendBox username="Иван Филатов"></FriendBox>
      <FriendBox username="Иван Филатов"></FriendBox>
      <FriendBox username="Иван Филатов"></FriendBox>
      <FriendBox username="Иван Филатов"></FriendBox>
      <FriendBox username="Иван Филатов"></FriendBox>
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
import FriendBox from "../components/friend/FriendBox.vue";
export default {
  name: "FriendView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    FriendBox,
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
<style lang="scss">
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
