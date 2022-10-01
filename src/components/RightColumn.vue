<template>
  <div class="right-column">
    <p><a href="/myprofile">Мой профиль</a></p>
    <p><a href="/feed">Новости</a></p>
    <p><a href="/mail">Сообщения</a></p>
    <p><a href="/friend">Друзья</a></p>
    <p><a href="/groups">Группы</a></p>
    <p><a href="/docs">Документы</a></p>
    <p><a href="/search">Поиск</a></p>
  </div>
</template>
<script>
export default {
  name: "RightColumn",
};
</script>
<style lang="scss">
.right-column {
  width: 15%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  font-size: 12px;

  p {
    a {
      text-decoration: none;
      color: #8f8f8f;
      margin-left: 30px;
      &:hover {
        color: #343434;
        font-weight: 600;
      }
    }
  }
}
</style>
