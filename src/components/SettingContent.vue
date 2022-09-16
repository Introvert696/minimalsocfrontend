<template>
  <form class="user-settings">
    <p>Настройки:</p>
    <div class="setting-field">
      <div class="setting-row">
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Фамилия" />
      </div>

      <div class="setting-row">
        <input type="text" placeholder="Логин" />
        <input type="text" placeholder="Пароль" />
      </div>
      <div class="date-input">
        <input type="date" placeholder="Дата рождения" />
      </div>
    </div>
    <div class="btn-accept">
      <button type="submit">Подтвердить</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "SettingContent",
};
</script>
<style lang="scss">
.user-settings {
  padding-left: 40px;
  padding-right: 40px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #343434;
  p {
    margin-top: 15px;
  }
}
.setting-row {
  display: flex;
  justify-content: space-between;
  input {
    width: 45%;
    height: 35px;
    border: 1px solid #c9c9c9;
    border-radius: 20px;
    color: #878787;
    font-size: 12px;
    outline-style: none;
    text-align: center;
    margin-top: 25px;
  }
}
.date-input {
  input {
    width: 45%;
    height: 35px;
    border: 1px solid #c9c9c9;
    border-radius: 20px;
    color: #878787;
    font-size: 12px;
    outline-style: none;
    text-align: center;
    margin-top: 25px;
  }
}
.btn-accept {
  button {
    margin-top: 25px;
    width: 100%;
    height: 35px;
    background: #808080;
    border: 1px solid #808080;
    border-radius: 20px;
    color: white;
    border: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    &:hover {
      background-color: #343434;
    }
  }
}
</style>
