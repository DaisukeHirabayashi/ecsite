<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm4>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>ログイン</v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-alert v-if="error" :value="true" type="error" outline>
                    {{ error }}
                  </v-alert>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-text-field
                  type="text"
                  v-model="username"
                  label="ログイン名"
                  required
                ></v-text-field>
              </v-layout>

              <v-layout row wrap>
                <v-text-field
                  type="password"
                  v-model="password"
                  label="パスワード"
                  required
                ></v-text-field>
              </v-layout>

              <v-layout row wrap justify-end>
                <v-btn color="success" :disabled="!valid" @click="login"
                  >ログイン</v-btn
                >
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: "blank", // layouts/blank.vueを使用
  middleware: ["auth"],
  head() {
    return {
      title: "ログイン"
    };
  },
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      error: null,
      loginStatus: false
    };
  },
  methods: {
    async login() {
      this.error = null;
      const axios = require("axios");
      if (this.$refs.form.validate()) {
        console.log("aaaa");
        axios({
          method: "POST",
          url: "https://localhost",
          data: { username: this.username, password: this.password }
        }).then(response => (this.loginStatus = response.status));
      }
    }
  }
};
</script>
