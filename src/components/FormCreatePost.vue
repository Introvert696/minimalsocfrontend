<template>
  <form action="#/myprofile" methods="POST" class="postcreater">
    <p>Новый пост:</p>
    <textarea
      name="postcontent"
      id="postcontent"
      cols="30"
      rows="10"
      noframes
      v-model="post_content"
    ></textarea>
    <div class="bottom-post">
      <button @click="createPost">Создать</button>
    </div>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "FormCreatePost",
  data() {
    return {
      post_content: "",
    };
  },
  methods: {
    inputfield(inp) {
      this.post_content = inp;
    },
    createPost() {
      var bodyFormData = new FormData();
      bodyFormData.append("token", localStorage.token);
      bodyFormData.append("post_text", this.post_content);

      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/createpost/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          this.userinfo = response.data[0];

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
<style lang="scss">
.postcreater {
  margin: auto;
  margin-top: 20px;
  width: 90%;
  min-height: 300px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #828282;
  p {
    text-align: left;
    margin-left: 5%;
    margin-top: 15px;
  }
  textarea {
    resize: none;
    width: 90%;
    height: 187px;
    margin-left: auto;
    border: 1px solid #c9c9c9;
    border-radius: 20px;
    padding: 10px;
    outline-style: none;
    font-size: 12px;
    line-height: 16px;

    color: #949494;
  }
}
.bottom-post {
  text-align: right;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
  button {
    width: 95px;
    height: 25px;
    left: 1112px;
    top: 630px;
    border: none;
    background: #353535;
    border-radius: 20px;
    color: white;
    font-size: 10px;
  }
}
</style>
