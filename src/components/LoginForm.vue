<template>
  <form @submit.prevent>
    <h6 class="notcorrect">{{ info }}</h6>
    <div class="text"><p>Вход в аккаунт</p></div>
    <InputField
      plchld="Введите логин"
      type="text"
      v-on:setdatatoform="setLog"
    ></InputField>
    <InputField
      plchld="Введите пароль"
      type="password"
      v-on:setdatatoform="setPass"
    ></InputField>
    <BtnAccept msg="Войти" @click="loginForm"></BtnAccept>
    <div class="reg-text">
      <a href="#/reg"><p>или зарегестрируйтесь</p></a>
    </div>
  </form>
</template>

<script>
import InputField from "./InputField.vue";
import BtnAccept from "./BtnAccept.vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
  data() {
    return {
      login: "",
      password: "",
      userData: "",
      info: "",
    };
  },
  components: { InputField, BtnAccept },
  methods: {
    setLog(log) {
      this.login = log;
    },
    setPass(pass) {
      this.password = pass;
    },
    loginForm() {
      var bodyFormData = new FormData();
      bodyFormData.append("login", this.login);
      bodyFormData.append("password", this.password);
      axios({
        method: "post",
        url: "http://apiminimalsoctest.com/authorize/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success
          console.log(response);
          if (response.data != "") {
            localStorage.token = response.data.token;
          } else {
            this.info = "Неправильный логин или пароль";
          }
          router.push("/feed");
        })

        .catch((response) => {
          //handle error
          console.log(response);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  font-weight: 400;
  font-size: 16px;
  width: 304px;
  min-height: 301px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.text {
  font-weight: 400;
  margin-top: 31px;
  margin-bottom: 31px;
}
.reg-text {
  font-weight: 400;
  font-size: 12px;
  a {
    text-decoration: none;
    color: #8f8f8f;
  }
}
</style>
