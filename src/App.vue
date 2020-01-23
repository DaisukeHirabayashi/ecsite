<template>
  <v-app>
    <div id="app">
      <v-app-bar app clipped-left color="amber">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <!-- 検索機能を今後つけたようにおいてあります -->
        <span class="title ml-3 mr-5"
          ><div class="linkbox">
            <a href="/"></a>
            <p>Fashion&nbsp;<span class="font-weight-light">Search</span></p>
          </div></span
        >
        <v-text-field
          solo-inverted
          flat
          hide-details
          @keydown.enter="searchCompany"
          label="Search"
          v-model="keyword"
        />
        <v-btn
          class="ml-3 mr-5"
          outlined
          color="green"
          @click="searchItemsOnbutton"
          >検索</v-btn
        >

        <v-spacer />
        <v-btn class="mr-3"
          ><v-icon>{{ "mdi-cart" }}</v-icon
          >カート</v-btn
        >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon>{{ "mdi-account-circle" }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in accountNavs"
              :key="index"
              @click="moveUrl(item.link)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
        <v-list dense class="grey lighten-4">
          <template v-for="(item, i) in items">
            <v-row v-if="item.heading" :key="i" align="center">
              <v-col cols="6">
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-btn small text>edit</v-btn>
              </v-col>
            </v-row>
            <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />
            <v-list-item v-else :key="i" link :href="item.link">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="grey--text">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <div id="nav"></div>
      <v-app>
        <router-view />
      </v-app>
    </div>
    <v-footer class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Fashion Serch</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#keep .v-navigation-drawer__border {
  display: none;
}
.btn-square-so-pop {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #fff;
  background: #fd9535; /*色*/
  border-radius: 4px; /*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  font-weight: bold;
  border: solid 2px #d27d00; /*線色*/
}
.btn-square-so-pop:active {
  /*押したとき*/
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
.linkbox {
  position: relative;
}
.linkbox a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.linkbox p {
  margin-bottom: 0;
}

/* 以下見た目をわかりやすくするための設定*/
.linkbox a:hover {
  /* マウスオーバー時に色変更*/
  opacity: 0.1;
  background-color: #000000;
}
</style>
<script>
import { ITEM_FIND } from "./store/mutation-types";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      keyword: "",
      items: [
        { icon: "home", text: "Home", link: "/" },
        { icon: "add", text: "買い物かご", link: "/cart" },
        { icon: "add_box", text: "お気に入り", link: "/favorite" },
        {
          icon: "add_box",
          text: "配達と返品について",
          link: "/deliver_return"
        },
        { divider: true },
        { heading: "検索" },
        { icon: "edit", text: "カテゴリ別", link: "/selectserch" },
        { divider: true },
        { heading: "その他" },
        { icon: "edit", text: "About Us", link: "/aboutus" },
        { icon: "delete", text: "Contact Us", link: "/contactus" }
      ]
    };
  },
  created() {},
  computed: {
    user() {
      return this.$store.state.account;
    },
    accountNavs() {
      if (!this.user.uid) {
        return [
          { title: "ログイン", link: "/login" },
          { title: "新規登録", link: "/register" }
        ];
      } else {
        return [
          { title: "ログアウト", link: "/logout" },
          { title: "新規登録", link: "/register" }
        ];
      }
    }
  },
  methods: {
    ...mapMutations({
      ITEM_FIND
    }),
    searchCompany() {
      if (event.keyCode != 13) {
        // empty
      } else if (this.keyword == "") {
        // empty
      } else {
        console.log(this.keyword);
        this.ITEM_FIND(this.keyword);
        document.location.href = "./serchitems";
      }
    },
    searchItemsOnbutton() {
      if (this.keyword == "") {
        // empty
      } else {
        console.log(this.keyword);
        this.ITEM_FIND(this.keyword);
        document.location.href = "./serchitems";
      }
    },
    moveUrl(url) {
      document.location.href = url;
    }
  }
};
</script>
