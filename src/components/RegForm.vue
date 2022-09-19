<template>
  <form action="">
    <div class="text"><p>Регистрация</p></div>
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
    <InputField
      plchld="Введите имя"
      type="text"
      v-on:setdatatoform="setName"
    ></InputField>
    <InputField
      plchld="Введите фамилию"
      type="text"
      v-on:setdatatoform="setLastname"
    ></InputField>
    <InputField
      plchld="Введите дату рождения"
      type="date"
      v-on:setdatatoform="setDate"
    ></InputField>
    <BtnAccept msg="Отправить" @click="regUser()"></BtnAccept>
  </form>
</template>

<script>
import InputField from "./InputField.vue";
import BtnAccept from "./BtnAccept.vue";
import axios from "axios";
export default {
  name: "RegForm",
  props: {
    msg: String,
  },
  data() {
    return {
      login: "",
      password: "",
      name: "",
      lastname: "",
      date: "",
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
    setName(name) {
      this.name = name;
    },
    setLastname(lastname) {
      this.lastname = lastname;
    },
    setDate(date) {
      this.date = date;
    },
    regUser() {
      var bodyFormData = new FormData();
      bodyFormData.append("name", this.name);
      bodyFormData.append("lastname", this.lastname);
      bodyFormData.append("date", this.date);
      bodyFormData.append("login", this.login);
      bodyFormData.append("password", this.password);
      axios({
        method: "post",
        url: "http://localhost/register/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          //handle success

          console.log(response.data);
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
<style lang="scss" scoped>
form {
  font-weight: 400;
  font-size: 16px;
  width: 304px;
  height: 429px;
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
</style>
