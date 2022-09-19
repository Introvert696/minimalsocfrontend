<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn class="center-column">
      <MyProfileMenu></MyProfileMenu>
      <SettingContent></SettingContent>
    </CenterColumn>
    <RightColumn></RightColumn>
  </div>
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import LeftColumn from "@/components/LeftColumn.vue";
import CenterColumn from "@/components/CenterColumn.vue";
import RightColumn from "@/components/RightColumn.vue";
import MyProfileMenu from "@/components/MyProfileMenu.vue";
import SettingContent from "@/components/SettingContent.vue";
export default {
  name: "SettingView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    MyProfileMenu,
    SettingContent,
  },
  mounted() {
    if (typeof localStorage.token === "undefined") {
      router.push("/");
    } else {
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
  .center-column {
    text-align: center;
  }
}
</style>
