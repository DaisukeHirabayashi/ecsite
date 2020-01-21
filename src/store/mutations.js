import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
  findcompany: ""
};
export const mutations = {
  [types.ITEM_FIND](state, payload) {
    state.findcompany = payload;
  }
};
