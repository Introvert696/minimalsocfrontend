<template>
  <form action="#">
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
      v-on:setdatatoform="setPass"
    ></InputField>
    <InputField
      plchld="Введите фамилию"
      type="text"
      v-on:setdatatoform="setPass"
    ></InputField>
    <InputField
      plchld="Введите дату рождения"
      type="date"
      v-on:setdatatoform="setPass"
    ></InputField>
    <BtnAccept msg="Отправить"></BtnAccept>
  </form>
</template>

<script>
import InputField from "./InputField.vue";
import BtnAccept from "./BtnAccept.vue";
export default {
  name: "RegForm",
  props: {
    msg: String,
  },
  data() {
    return {
      login: "",
      password: "",
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
