<template>
  <div class="title">
    <p>{{ title }}</p>
    <p class="link">{{ linkname }}</p>
  </div>
  <hr class="divider" />
</template>
<script>
export default {
  name: "CenterTitle",
  props: {
    title: String,
    linkname: String,
    linkurl: String,
  },
};
</script>
<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  text-align: left;
  width: 90%;
  margin: auto;
  font-weight: 400;
  font-size: 12px;
  color: #646464;
  p {
    margin-top: 25px;
    margin-bottom: 8px;
  }
  .link {
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
}
.divider {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
