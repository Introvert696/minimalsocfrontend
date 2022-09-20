<template>
  <div class="mailsbox">
    <slot></slot>
  </div>
</template>
<script>
import MessageBox from "./MessageBox.vue";
export default {
  name: "FormWithMessages",
  components: { MessageBox },
  props: {
    messages: [],
  },
};
</script>
<style lang="scss">
.mailsbox {
  width: 90%;
  border: 1px solid #bcbcbc;
  border-radius: 20px;
  margin: auto;
  height: 450px;
  overflow-y: scroll;
  padding-bottom: 20px;
}
</style>
