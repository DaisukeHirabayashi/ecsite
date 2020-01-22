import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
  finditem: "hello vuex",
  message: "aaaaa"
};
export const mutations = {
  [types.ITEM_FIND](state, payload) {
    state.finditem = payload;
  },
  [types.MESSAGE_UPDATE](state, payload) {
    state.message = payload;
  }
};
