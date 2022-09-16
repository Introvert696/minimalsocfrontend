<template>
  <input
    :type="type"
    :placeholder="plchld"
    v-model="inputData"
    v-on:input="setDatas"
  />
</template>

<script>
export default {
  name: "InputField",
  props: {
    plchld: String,
    type: String,
  },
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    setDatas() {
      this.$emit("setdatatoform", this.inputData);
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  width: 251px;
  height: 35px;
  border: 1px solid #bebebe;
  border-radius: 50px;
  padding-left: 23px;
  color: #9c9c9c;
  margin-bottom: 15px;
  font-size: 12px;
  &:focus {
    outline: 0 !important;
  }
}
</style>
