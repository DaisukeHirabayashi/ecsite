import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
  finditem: "hello vuex",
  account: {}
};
export const mutations = {
  [types.ITEM_FIND](state, payload) {
    state.finditem = payload;
  },
  [types.ACCOUNT_UPDATE](state, payload) {
    state.account = payload;
  }
};
