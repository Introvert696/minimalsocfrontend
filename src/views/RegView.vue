<template>
  <RegForm class="reg-form"></RegForm>
</template>

<script>
import RegForm from "@/components/RegForm.vue";
export default {
  name: "RegView",
  components: { RegForm },
  methods: {
    setPosts() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      axios({
        method: "post",
        url: "http://localhost/feedpost/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          console.log(response.data);

          response.data.forEach((element) => {
            console.log(element);
            this.posts.push(element);
          });
          return response.data;
        })
        .catch((response) => {
          //handle error
          console.log(response);
          return false;
        });
    },
  },
};
</script>
<style>
.reg-form {
  margin-top: 10%;
}
</style>
