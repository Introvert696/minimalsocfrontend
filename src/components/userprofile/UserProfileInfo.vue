<template>
  <img
    src="@/assets/testImage.jpg"
    alt="profileImage"
    width="150"
    height="150"
    class="userprofile"
  />
  <div class="username">
    <p>Name Lastname</p>
  </div>
  <div class="profile-menu">
    <a href="">Написать сообщение</a>
    <a href="">Добавить в друзья</a>
    <a href="">Друзья:12</a>
    <a href="">Группы: 1</a>
  </div>
  <hr />
</template>
<script>
export default {
  name: "UserProfileInfo",
};
</script>
<style lang="scss">
.userprofile {
  border-radius: 100px;
  margin-top: 40px;
}
.username {
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #353535;
}
.profile-menu {
  margin: auto;
  margin-top: 30px;
  width: 70%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #646464;
    &:hover {
      font-weight: 600;

      color: #353535;
    }
  }
}
hr {
  width: 90%;
}
</style>
