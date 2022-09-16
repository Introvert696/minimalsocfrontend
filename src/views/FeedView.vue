<template>
  <MainHeader> </MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn><PostList></PostList></CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import CenterColumn from "@/components/CenterColumn";
import RightColumn from "@/components/RightColumn.vue";
import PostList from "@/components/PostList.vue";
export default {
  name: "FeedView",
  title: "Новости",
  components: { MainHeader, LeftColumn, RightColumn, CenterColumn, PostList },
};
</script>
<style lang="scss">
body {
  background: #e7e7e7;
}
.main-content {
  display: flex;
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
}
</style>
