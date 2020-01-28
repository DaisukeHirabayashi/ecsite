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
                  v-model="mailaddress"
                  label="メールアドレス"
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
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      valid: true,
      mailaddress: "",
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
      const axios = require("axios");
      if (!(this.password == "") && !(this.mailaddress == "")) {
        //axiosの通信;
        (async () => {
          await axios({
            method: "POST",
            url: "http://104.198.57.17:5000/login",
            data: { mailaddress: this.mailaddress, password: this.password }
          })
            .then(response => (this.loginStatus = response.data))
            .catch(error => console.log(error.response));
          console.log(this.loginStatus);
          if (this.loginStatus.uid) {
            this.ACCOUNT_UPDATE(this.loginStatus);
            document.location.href = "./";
          }
        })();
      }
    }
  }
};
</script>
