<template>
  <div class="left-column">
    <p>Диалоги:</p>
    <div class="dialogs">
      <a href="#">Иван Филатов</a><br />
      <a href="#">Иван Филатов</a><br />
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftColumn",
};
</script>
<style lang="scss">
.left-column {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  width: 15%;
  height: 158px;
  p {
    font-weight: 400;
    font-size: 12px;
    color: #8f8f8f;
    margin-left: 20px;
    margin-top: 20px;
  }
  .dialogs {
    a {
      text-decoration: none;
      font-weight: 400;
      font-size: 12px;
      color: #8f8f8f;
      margin-left: 20px;
      &:hover {
        color: #343434;
        font-weight: 600;
      }
    }
  }
}
</style>
