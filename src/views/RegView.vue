<template>
  <RegForm class="reg-form" clickreg="setValue"></RegForm>
</template>

<script>
import RegForm from "@/components/RegForm.vue";
export default {
  name: "RegView",
  components: { RegForm },
  data() {
    return {
      name: "",
      lastname: "",
      date: "",
      login: "",
      password: "",
    };
  },
  methods: {},
};
</script>
<style>
.reg-form {
  margin-top: 10%;
}
</style>
