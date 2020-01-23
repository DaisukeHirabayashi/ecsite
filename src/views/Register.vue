<template>
  <div class="register">
    <v-container class="mx-auto text-left p-3">
      <v-divider></v-divider>
      <h2>アカウント登録ページ</h2>
      <RegisterForm :formData="formData[0]" />
      <RegisterForm :formData="formData[1]" />
      <RegisterForm :formData="formData[2]" />
      <RegisterForm :formData="formData[3]" />
      <v-btn type="button" name="button" @click="doSend">登録</v-btn>
    </v-container>
  </div>
</template>
<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  components: {
    RegisterForm
  },
  data() {
    return {
      formData: [
        {
          displayname: "メールアドレス",
          formText: "",
          placeholder: "mailaddress",
          rules: [v => !!v || "mailaddress is required"]
        },
        {
          displayname: "パスワード",
          formText: "",
          placeholder: "password",
          rules: [v => !!v || "password is required"]
        },
        {
          displayname: "ユーザーネーム",
          formText: "",
          placeholder: "user name",
          rules: [v => !!v || "user name is required"]
        },
        {
          displayname: "電話番号",
          formText: "",
          placeholder: "phone number",
          rules: [v => !!v || "Phone Number is required"]
        }
      ]
    };
  },
  methods: {
    doSend() {
      if (
        this.formData[0].formText.length &&
        this.formData[1].formText.length &&
        this.formData[2].formText.length &&
        this.formData[3].formText.length
      ) {
        //empty
      } else if (!this.formData[0].formText.length) {
        alert("会社名を入力してください");
      } else if (!this.formData[1].formText.length) {
        alert("住所を入力してください");
      } else if (!this.formData[2].formText.length) {
        alert("URLを入力してください");
      } else {
        alert("電話番号を入力してください");
      }
    }
  }
};
</script>
