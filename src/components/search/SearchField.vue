<template>
  <form class="inputField">
    <input type="text" name="" id="" />
    <button type="submit">Поиск</button>
  </form>
</template>
<script>
export default {
  name: "SearchField",
};
</script>
<style lang="scss">
.inputField {
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  input {
    margin-left: 31px;
    border: 1px solid #353535;
    border-radius: 20px;
    outline: none;
    width: 60%;
    height: 25px;
    font-size: 12px;
    line-height: 16px;
    padding: 5px;
    padding-left: 25px;
    color: #7c7c7c;
  }
  button {
    background: #353535;
    border: 1px solid #353535;
    border-radius: 30px;
    height: 35px;
    width: 25%;
    margin-right: 35px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    color: #ffffff;
  }
}
</style>
