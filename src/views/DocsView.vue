<template>
  <MainHeader></MainHeader>
  <div class="main-content">
    <LeftColumn></LeftColumn>
    <CenterColumn>
      <CenterTitle
        title="Документы:"
        linkname="Загрузить документ"
        linkurl="#"
      ></CenterTitle>
      <DocumentBox namedoc="Прикол.png" sizedoc="23 МБ"></DocumentBox>
      <DocumentBox namedoc="Прикол.png" sizedoc="23 МБ"></DocumentBox>
      <DocumentBox namedoc="Прикол.png" sizedoc="23 МБ"></DocumentBox>
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
import DocumentBox from "../components/docs/DocumentBox.vue";
export default {
  name: "DocsView",
  components: {
    MainHeader,
    LeftColumn,
    CenterColumn,
    RightColumn,
    CenterTitle,
    DocumentBox,
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
