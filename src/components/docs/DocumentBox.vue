<template>
  <div class="doc-box">
    <div class="title-docs">
      <p>Название документа: {{ namedoc }}</p>
      <span>Размер: {{ sizedoc }}</span>
    </div>
    <div class="delete">
      <p>X</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentBox",
  props: {
    namedoc: String,
    sizedoc: String,
  },
};
</script>
<style lang="scss">
.doc-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: auto;
  width: 90%;
  height: 70px;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #353535;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    width: 91%;
    height: 72px;
  }
}
.title-docs {
  margin-left: 25px;

  p {
    margin-bottom: 2px;
    margin-top: 15px;
  }
  span {
    color: #575757;
  }
}
.delete {
  margin-right: 15px;
}
</style>
