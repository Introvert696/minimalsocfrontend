<template>
  <div class="center-column">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CenterColumn",
  components: {},
};
</script>
<style>
.center-column {
  width: 60%;
  min-height: 315px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding-bottom: 50px;
}
</style>
