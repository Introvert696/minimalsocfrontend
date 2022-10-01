<template>
  <LoginForm class="forms"></LoginForm>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import router from "@/router";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "LoginView",
  components: { LoginForm },
  mounted() {
    if (typeof localStorage.token === "undefined") {
    } else {
      router.push("/feed");
    }
  },
};
</script>
<style>
body {
  background-color: #c9c9c9;
}
.forms {
  margin-top: 20%;
  margin-bottom: auto;
}
</style>
