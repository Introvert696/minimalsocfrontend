<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Группы:"> </CenterTitle>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
      <GroupBox groupname="Stream inside" quantitymember="200"></GroupBox>
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
import GroupBox from "../components/group/GroupBox.vue";
export default {
  name: "GroupView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    GroupBox,
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
}
</style>
