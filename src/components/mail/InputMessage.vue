<template>
  <form method="post" @submit.prevent class="inputmes">
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      placeholder="Введите текст сообщения..."
      v-model="messagecontent"
    ></textarea>
    <div class="btn-send">
      <button type="submit" @click="emmitInputValue">отправить</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "InputMessage",
  data() {
    return {
      messagecontent: "",
    };
  },
  methods: {
    emmitInputValue() {
      if (this.messagecontent != "") {
        this.$emit("sendmessage", this.messagecontent);
      }
    },
  },
};
</script>
<style lang="scss">
.inputmes {
  widows: 90%;
  margin-top: 20px;
  textarea {
    padding: 0;
    border: 1px solid #bcbcbc;
    border-radius: 20px;
    width: 80%;
    height: 100px;
    resize: none;
    outline: none;
    padding-left: 23px;
    padding-right: 23px;
    padding-top: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #656565;
  }
}
.btn-send {
  margin: auto;
  margin-top: 10px;
  button {
    width: 80%;
    height: 50px;
    background: #353535;
    border: 1px solid #bcbcbc;
    border-radius: 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #ffffff;
  }
}
</style>
