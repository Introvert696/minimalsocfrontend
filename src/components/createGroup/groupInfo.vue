<template>
  <div class="group-info">
    <img
      src="@/assets/testImage.jpg"
      alt=""
      width="150"
      height="150"
      style="border-radius: 100px"
    />
    <p>Создание группы</p>
  </div>

  <form action="" class="create-group" method="post" @submit.prevent>
    <input
      type="text"
      name="title"
      placeholder="Введите название группы"
      v-model="title"
    />
    <br />
    <textarea
      name="desk"
      id="desk"
      cols="30"
      rows="10"
      placeholder="Введите описание группы"
      v-model="desk"
    ></textarea>
    <br />
    <button type="submit" @click="createGroup">Создать</button>
  </form>
</template>
<script>
export default {
  name: "groupInfo",
  data() {
    return {
      title: "",
      desk: "",
    };
  },
  methods: {
    createGroup() {
      this.$emit("creategroup", this.title, this.desk);
    },
  },
};
</script>
<style lang="scss">
.group-info {
  display: block;
  margin-top: 40px;
}
.create-group {
  * {
    width: 65%;
    border-radius: 20px;
    outline-style: none;
    outline: none;
    text-decoration: none;
    vertical-align: middle;
    border: #c0c0c0 1px solid;
    color: #8c8c8c;
    font-size: 12px;
  }
  input {
    margin-top: 40px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
  textarea {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
  }
  button {
    width: 68%;
    height: 30px;
    background-color: #353535;
    color: #fff;
    font-size: 10px;
    margin-top: 20px;
  }
}
</style>
