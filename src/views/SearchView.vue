<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle title="Поиск:" linkname="сброс" linkurl="#"></CenterTitle>
      <SearchField></SearchField>
      <FriendBox username="Иван Филатов"></FriendBox>
      <GroupBox groupname="Stream inside"></GroupBox>
      <DocumentBox namedoc="Музыка.mp4" sizedoc="23"></DocumentBox>
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
import SearchField from "../components/search/SearchField.vue";
import FriendBox from "@/components/friend/FriendBox.vue";
import GroupBox from "@/components/group/GroupBox.vue";
import DocumentBox from "@/components/docs/DocumentBox.vue";
export default {
  name: "SearchView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    SearchField,
    FriendBox,
    GroupBox,
    DocumentBox,
  },
};
</script>
<style lang="scss"></style>
