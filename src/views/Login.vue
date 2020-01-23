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
import { ACCOUNT_UPDATE } from "../store/mutation-types";
import { mapMutations } from "vuex";
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
      loginStatus: {}
    };
  },
  methods: {
    ...mapMutations({
      ACCOUNT_UPDATE
    }),
    async login() {
      this.error = null;
      //const axios = require("axios");
      if (!(this.password == "") && !(this.username == "")) {
        console.log("aaaa");
        //axiosの通信
        // axios({
        //   method: "POST",
        //   url: "https://localhost",
        //   data: { username: this.username, password: this.password }
        // }).then(response => (this.loginStatus = response.status));
        this.loginStatus.uid = "akkfhkahak";
        this.loginStatus.username = this.username;
        if (this.loginStatus.uid) {
          this.ACCOUNT_UPDATE(this.loginStatus);
          document.location.href = "./";
        }
      }
    }
  }
};
</script>
