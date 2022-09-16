<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <MyProfileColumn> </MyProfileColumn>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import RightColumn from "@/components/RightColumn.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import MyProfileColumn from "@/components/MyProfileColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
export default {
  name: "MyProfileView",
  components: {
    MainHeader,
    LeftColumn,
    RightColumn,
    MyProfileColumn,
    CenterColumn,
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
