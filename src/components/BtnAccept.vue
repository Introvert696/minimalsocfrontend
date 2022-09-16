<template>
  <button type="submit" class="subBtn">{{ msg }}</button>
</template>
<script>
export default {
  name: "BtnAccept",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
.subBtn {
  width: 142px;
  height: 52px;
  background: #353535;
  border: 1px solid #bebebe;
  border-radius: 20px;
  color: white;
  font-weight: 400;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
}
</style>
